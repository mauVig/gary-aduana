/**
 * Plantilla del email que recibe el estudio por cada consulta del formulario.
 *
 * Se arma como HTML plano en vez de con React Email para no sumar otra
 * dependencia: es una sola plantilla y no va a crecer.
 */

export type DatosConsulta = {
  nombre: string
  email: string
  telefono: string
  mercaderia: string
  estado: string
  origen: string
  procedencia: string
  servicio?: string
  comentarios?: string
  adjunto?: string
  consentimientoEn: string
}

const ETIQUETAS: Record<string, string> = {
  nombre: 'Nombre',
  email: 'Email',
  telefono: 'Teléfono',
  mercaderia: 'Mercadería',
  estado: 'Estado de la operación',
  origen: 'Origen',
  procedencia: 'Procedencia',
  servicio: 'Servicio de interés',
  comentarios: 'Comentarios',
}

/** Evita que un dato del formulario pueda inyectar HTML en el email. */
function escapar(valor: string): string {
  return valor
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function fila(etiqueta: string, valor: string): string {
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #e6ecf2;color:#5a6b7d;font-size:13px;white-space:nowrap;vertical-align:top">${escapar(
        etiqueta
      )}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #e6ecf2;color:#1d2733;font-size:14px;font-weight:600">${escapar(
        valor
      )}</td>
    </tr>`
}

export function asuntoConsulta(d: DatosConsulta): string {
  const detalle = d.servicio || d.mercaderia || 'Consulta general'
  return `Nueva consulta web — ${d.nombre} · ${detalle}`
}

export function htmlConsulta(d: DatosConsulta): string {
  const campos: Array<[string, string | undefined]> = [
    ['nombre', d.nombre],
    ['email', d.email],
    ['telefono', d.telefono],
    ['servicio', d.servicio],
    ['mercaderia', d.mercaderia],
    ['estado', d.estado],
    ['origen', d.origen],
    ['procedencia', d.procedencia],
    ['comentarios', d.comentarios],
  ]

  const filas = campos
    .filter(([, valor]) => valor && valor.trim() !== '')
    .map(([clave, valor]) => fila(ETIQUETAS[clave] ?? clave, valor as string))
    .join('')

  return `<!doctype html>
<html lang="es">
<body style="margin:0;padding:24px;background:#f4f7fa;font-family:'Segoe UI',Helvetica,Arial,sans-serif">
  <div style="max-width:620px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;border:1px solid #e6ecf2">

    <div style="background:#15355c;padding:22px 24px;border-top:4px solid #fc7114">
      <div style="color:#fc7114;font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase">
        Consulta desde el sitio web
      </div>
      <div style="color:#fff;font-size:19px;font-weight:700;margin-top:6px">
        ${escapar(d.nombre)}
      </div>
    </div>

    <table style="width:100%;border-collapse:collapse">${filas}</table>

    ${
      d.adjunto
        ? `<div style="padding:14px 16px;background:#fff6ef;border-top:1px solid #e6ecf2;color:#8a4a12;font-size:13px">
             📎 Se adjunta el archivo <strong>${escapar(d.adjunto)}</strong> a este correo.
           </div>`
        : ''
    }

    <div style="padding:16px;background:#f9fbfd;border-top:1px solid #e6ecf2;color:#7a8a9a;font-size:11px;line-height:1.6">
      Respondé directamente a este correo y tu respuesta le va a llegar a
      ${escapar(d.email)}.<br>
      Consentimiento de tratamiento de datos prestado el ${escapar(d.consentimientoEn)}.
    </div>

  </div>
</body>
</html>`
}

/** Versión en texto plano, para clientes de correo que no muestran HTML. */
export function textoConsulta(d: DatosConsulta): string {
  const lineas = [
    `Nueva consulta desde el sitio web`,
    ``,
    `Nombre:      ${d.nombre}`,
    `Email:       ${d.email}`,
    `Teléfono:    ${d.telefono}`,
    d.servicio ? `Servicio:    ${d.servicio}` : '',
    `Mercadería:  ${d.mercaderia}`,
    `Estado:      ${d.estado}`,
    `Origen:      ${d.origen}`,
    `Procedencia: ${d.procedencia}`,
    d.comentarios ? `\nComentarios:\n${d.comentarios}` : '',
    d.adjunto ? `\nArchivo adjunto: ${d.adjunto}` : '',
    ``,
    `Consentimiento prestado el ${d.consentimientoEn}.`,
  ]
  return lineas.filter((l) => l !== '').join('\n')
}
