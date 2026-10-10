import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  asuntoConsulta,
  htmlConsulta,
  textoConsulta,
  type DatosConsulta,
} from '@/lib/email/consulta'

/**
 * Recibe el formulario de contacto y lo envía por email al estudio.
 *
 * El endpoint es público, así que toda validación que importe se hace acá:
 * la del navegador es solo experiencia de usuario y se puede saltear.
 */

// Vercel rechaza con 413 cualquier petición de más de 4,5 MB, así que el
// adjunto se corta antes para dar un mensaje claro en vez de un error opaco.
const MAX_ADJUNTO_BYTES = 4 * 1024 * 1024
const TIPOS_PERMITIDOS = ['application/pdf', 'image/jpeg', 'image/png']

const OBLIGATORIOS = [
  'nombre',
  'email',
  'telefono',
  'mercaderia',
  'estado',
  'origen',
  'procedencia',
] as const

const LIMITES: Record<string, number> = {
  nombre: 120,
  email: 160,
  telefono: 40,
  mercaderia: 200,
  estado: 60,
  origen: 120,
  procedencia: 120,
  servicio: 120,
  comentarios: 2000,
}

function error(mensaje: string, status: number) {
  return NextResponse.json({ ok: false, error: mensaje }, { status })
}

export async function POST(request: Request) {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return error('No pudimos leer el formulario.', 400)
  }

  const texto = (clave: string) => {
    const v = form.get(clave)
    return typeof v === 'string' ? v.trim() : ''
  }

  // ── Anti-spam ───────────────────────────────────────────────────────────
  // Campo señuelo: está oculto por CSS, una persona nunca lo completa.
  if (texto('apellido_2') !== '') {
    // Se responde 200 a propósito: si el bot supiera que lo detectamos,
    // probaría otra cosa.
    return NextResponse.json({ ok: true })
  }

  // Un formulario con 8 campos no se completa en menos de 3 segundos.
  const inicio = Number(texto('iniciado_en'))
  if (Number.isFinite(inicio) && inicio > 0 && Date.now() - inicio < 3000) {
    return NextResponse.json({ ok: true })
  }

  // ── Validación ──────────────────────────────────────────────────────────
  if (texto('consentimiento') !== 'si') {
    return error('Falta aceptar la política de privacidad.', 400)
  }

  for (const campo of OBLIGATORIOS) {
    if (texto(campo) === '') {
      return error('Faltan campos obligatorios.', 400)
    }
  }

  for (const [campo, maximo] of Object.entries(LIMITES)) {
    if (texto(campo).length > maximo) {
      return error('Alguno de los campos supera el largo permitido.', 400)
    }
  }

  const email = texto('email')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return error('El email no parece válido.', 400)
  }

  // ── Adjunto ─────────────────────────────────────────────────────────────
  const archivo = form.get('catalogo')
  let adjuntos: Array<{ filename: string; content: Buffer }> | undefined
  let nombreAdjunto: string | undefined

  if (archivo instanceof File && archivo.size > 0) {
    if (archivo.size > MAX_ADJUNTO_BYTES) {
      return error('El archivo supera los 4 MB permitidos.', 413)
    }
    if (!TIPOS_PERMITIDOS.includes(archivo.type)) {
      return error('El archivo debe ser PDF, JPG o PNG.', 400)
    }
    adjuntos = [
      {
        filename: archivo.name,
        content: Buffer.from(await archivo.arrayBuffer()),
      },
    ]
    nombreAdjunto = archivo.name
  }

  // ── Envío ───────────────────────────────────────────────────────────────
  // La configuración se comprueba recién acá, después de validar: así un bot
  // o una petición malformada reciben su error real y no uno que delate que
  // el servicio está mal configurado.
  const apiKey = process.env.RESEND_API_KEY
  const destino = process.env.CONTACTO_EMAIL_DESTINO
  const remitente = process.env.CONTACTO_EMAIL_REMITENTE

  if (!apiKey || !destino || !remitente) {
    console.error(
      '[contacto] Faltan variables de entorno:',
      [
        !apiKey && 'RESEND_API_KEY',
        !destino && 'CONTACTO_EMAIL_DESTINO',
        !remitente && 'CONTACTO_EMAIL_REMITENTE',
      ]
        .filter(Boolean)
        .join(', ')
    )
    return error('El formulario no está disponible en este momento.', 503)
  }

  const datos: DatosConsulta = {
    nombre: texto('nombre'),
    email,
    telefono: texto('telefono'),
    mercaderia: texto('mercaderia'),
    estado: texto('estado'),
    origen: texto('origen'),
    procedencia: texto('procedencia'),
    servicio: texto('servicio') || undefined,
    comentarios: texto('comentarios') || undefined,
    adjunto: nombreAdjunto,
    consentimientoEn: new Date().toLocaleString('es-AR', {
      timeZone: 'America/Argentina/Buenos_Aires',
    }),
  }

  try {
    const resend = new Resend(apiKey)
    const { error: fallo } = await resend.emails.send({
      from: remitente,
      to: destino,
      // Así el estudio responde con "Responder" y le llega al consultante
      replyTo: email,
      subject: asuntoConsulta(datos),
      html: htmlConsulta(datos),
      text: textoConsulta(datos),
      attachments: adjuntos,
    })

    if (fallo) {
      console.error('[contacto] Resend rechazó el envío:', fallo)
      return error('No pudimos enviar la consulta. Probá de nuevo en unos minutos.', 502)
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[contacto] Error inesperado al enviar:', e)
    return error('No pudimos enviar la consulta. Probá de nuevo en unos minutos.', 500)
  }
}
