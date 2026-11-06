'use client'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Mail, MapPin, Phone, Send, Paperclip, Loader2, AlertCircle } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { esServicioValido } from '@/lib/servicios'

type FormData = {
  nombre: string
  email: string
  telefono: string
  mercaderia: string
  estado: string
  origen: string
  procedencia: string
  comentarios: string
  catalogo: File | null
}

// Vercel rechaza con 413 toda petición de más de 4,5 MB, así que el tope real
// del adjunto es 4 MB. Se valida acá para avisar antes de intentar el envío.
const MAX_ADJUNTO_MB = 4
const MAX_ADJUNTO_BYTES = MAX_ADJUNTO_MB * 1024 * 1024

type Estado = 'escribiendo' | 'enviando' | 'enviado' | 'error'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 transition-all duration-150'

const labelClass = 'block text-xs font-semibold text-slate-600 mb-1.5'

/** Marca el campo como obligatorio también para lectores de pantalla. */
function Obligatorio() {
  return (
    <>
      <span aria-hidden="true" className="text-red-500">
        *
      </span>
      <span className="sr-only"> (obligatorio)</span>
    </>
  )
}

export default function Contact() {
  const ref = useScrollReveal()
  const searchParams = useSearchParams()
  const servicioParam = searchParams.get('servicio')
  // Solo se muestra si coincide con un servicio real
  const servicio = esServicioValido(servicioParam) ? servicioParam : null

  const [form, setForm] = useState<FormData>({
    nombre: '', email: '', telefono: '', mercaderia: '',
    estado: '', origen: '', procedencia: '', comentarios: '', catalogo: null,
  })
  const [estado, setEstado] = useState<Estado>('escribiendo')
  const [mensajeError, setMensajeError] = useState('')
  const [errorArchivo, setErrorArchivo] = useState('')

  const inicioRef = useRef<number>(0)
  const resultadoRef = useRef<HTMLDivElement>(null)

  // Marca de tiempo de apertura: el servidor descarta los envíos instantáneos,
  // que son de bots.
  useEffect(() => {
    inicioRef.current = Date.now()
  }, [])

  // Al terminar, el foco va al mensaje: si no, queda huérfano en <body> porque
  // el formulario se desmonta.
  useEffect(() => {
    if (estado === 'enviado') resultadoRef.current?.focus()
  }, [estado])

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0] ?? null
    if (archivo && archivo.size > MAX_ADJUNTO_BYTES) {
      setErrorArchivo(
        `El archivo pesa ${(archivo.size / 1024 / 1024).toFixed(1)} MB y el máximo es ${MAX_ADJUNTO_MB} MB.`
      )
      setForm((prev) => ({ ...prev, catalogo: null }))
      e.target.value = ''
      return
    }
    setErrorArchivo('')
    setForm((prev) => ({ ...prev, catalogo: archivo }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (estado === 'enviando') return

    setEstado('enviando')
    setMensajeError('')

    const datos = new FormData(e.currentTarget)
    datos.set('iniciado_en', String(inicioRef.current))
    if (servicio) datos.set('servicio', servicio)

    try {
      const res = await fetch('/api/contacto', { method: 'POST', body: datos })
      const cuerpo = await res.json().catch(() => ({}))

      if (!res.ok) {
        setMensajeError(cuerpo?.error ?? 'No pudimos enviar la consulta.')
        setEstado('error')
        return
      }
      setEstado('enviado')
    } catch {
      setMensajeError(
        'No pudimos conectar con el servidor. Revisá tu conexión e intentá de nuevo.'
      )
      setEstado('error')
    }
  }

  const enviando = estado === 'enviando'

  return (
    <section
      id="contacto"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #0d2340 0%, #15355c 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fc7114' }}>
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contanos tu operación
          </h2>
          <p className="text-white/60 text-lg">
            Completá el formulario y uno de nuestros especialistas te contactará dentro de las 24 horas hábiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact sidebar */}
          <div className="lg:col-span-1 space-y-5">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold text-lg mb-5">Datos de contacto</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Teléfono', value: '+54 9 11 3438-5230', href: 'tel:+5491134385230' },
                  { icon: Mail, label: 'Email', value: 'despachantegary@gmail.com', href: 'mailto:despachantegary@gmail.com' },
                  { icon: MapPin, label: 'Ubicación', value: 'Buenos Aires, Argentina', href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(252,113,20,0.15)' }}
                      aria-hidden="true"
                    >
                      <Icon size={18} style={{ color: '#fc7114' }} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-white/70 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6 border"
              style={{ background: 'rgba(252,113,20,0.1)', borderColor: 'rgba(252,113,20,0.2)' }}
            >
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="font-semibold text-white block mb-1">Horario de atención</span>
                Lunes a Viernes de 9:00 a 18:00 hs.<br />
                Respondemos consultas urgentes fuera de horario.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {estado === 'enviado' ? (
                <div
                  ref={resultadoRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center h-full py-12 text-center gap-4 focus:outline-none"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(21,53,92,0.08)' }}
                    aria-hidden="true"
                  >
                    <Send size={28} style={{ color: '#15355c' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">¡Consulta recibida!</h3>
                  <p className="text-slate-500 max-w-sm">
                    Nuestro equipo analizará tu operación y te contactará dentro de las próximas 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Campo señuelo: oculto para personas, los bots lo completan */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="apellido_2">No completar este campo</label>
                    <input
                      id="apellido_2"
                      name="apellido_2"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Banner servicio seleccionado */}
                  {servicio && (
                    <div
                      className="flex items-center gap-3 px-5 py-4 rounded-xl"
                      style={{ background: 'rgba(252,113,20,0.08)', border: '1.5px solid rgba(252,113,20,0.35)' }}
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: '#fc7114' }}
                        aria-hidden="true"
                      />
                      <p className="text-sm text-slate-700">
                        Consultando sobre:{' '}
                        <span className="font-black" style={{ color: '#fc7114' }}>
                          {servicio}
                        </span>
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className={labelClass}>
                        Nombre completo <Obligatorio />
                      </label>
                      <input
                        id="nombre" required name="nombre" value={form.nombre} onChange={handle}
                        autoComplete="name" maxLength={120} disabled={enviando}
                        placeholder="Ej: Juan Pérez"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email corporativo <Obligatorio />
                      </label>
                      <input
                        id="email" required type="email" name="email" value={form.email} onChange={handle}
                        autoComplete="email" inputMode="email" maxLength={160} disabled={enviando}
                        placeholder="nombre@empresa.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className={labelClass}>
                        Teléfono <Obligatorio />
                      </label>
                      <input
                        id="telefono" required type="tel" name="telefono" value={form.telefono} onChange={handle}
                        autoComplete="tel" inputMode="tel" maxLength={40} disabled={enviando}
                        placeholder="+54 11 0000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="mercaderia" className={labelClass}>
                        Mercadería <Obligatorio />
                      </label>
                      <input
                        id="mercaderia" required name="mercaderia" value={form.mercaderia} onChange={handle}
                        maxLength={200} disabled={enviando}
                        placeholder="Descripción breve del producto"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="estado" className={labelClass}>
                        Estado de la mercadería <Obligatorio />
                      </label>
                      <select
                        id="estado" required name="estado" value={form.estado} onChange={handle}
                        disabled={enviando}
                        className={inputClass}
                      >
                        <option value="">Seleccioná una opción</option>
                        <option value="nueva">Nueva</option>
                        <option value="usada">Usada</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="origen" className={labelClass}>
                        Origen (país de fabricación) <Obligatorio />
                      </label>
                      <input
                        id="origen" required name="origen" value={form.origen} onChange={handle}
                        autoComplete="country-name" maxLength={120} disabled={enviando}
                        placeholder="Ej: China, Alemania, Brasil"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="procedencia" className={labelClass}>
                      Procedencia (país desde donde sale) <Obligatorio />
                    </label>
                    <input
                      id="procedencia" required name="procedencia" value={form.procedencia} onChange={handle}
                      maxLength={120} disabled={enviando}
                      placeholder="País desde el que parte la mercadería"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="comentarios" className={labelClass}>
                      Comentarios (opcional)
                    </label>
                    <textarea
                      id="comentarios" name="comentarios" value={form.comentarios} onChange={handle}
                      rows={4} maxLength={2000} disabled={enviando}
                      placeholder="Contanos cualquier detalle de la operación que nos ayude a asesorarte mejor."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {/* File upload */}
                  <div>
                    <label htmlFor="catalogo" className={labelClass}>
                      Adjuntar catálogo o folleto (opcional)
                    </label>
                    <label
                      htmlFor="catalogo"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 cursor-pointer hover:border-slate-300 hover:bg-slate-100 transition-colors duration-150"
                    >
                      <Paperclip size={16} className="text-slate-400 shrink-0" aria-hidden="true" />
                      <span className="text-sm text-slate-500 truncate">
                        {form.catalogo
                          ? form.catalogo.name
                          : `Hacer clic para adjuntar PDF, JPG o PNG (máx. ${MAX_ADJUNTO_MB} MB)`}
                      </span>
                      <input
                        id="catalogo" name="catalogo" type="file" className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png" onChange={handleFile} disabled={enviando}
                        aria-describedby={errorArchivo ? 'error-archivo' : undefined}
                      />
                    </label>
                    {errorArchivo && (
                      <p id="error-archivo" role="alert" className="mt-2 text-xs font-semibold text-red-600">
                        {errorArchivo}
                      </p>
                    )}
                  </div>

                  {/* Consentimiento — base legal del tratamiento (Ley 25.326) */}
                  <label className="flex items-start gap-3 text-xs text-slate-500 leading-relaxed cursor-pointer">
                    <input
                      type="checkbox" name="consentimiento" value="si" required
                      disabled={enviando} className="mt-0.5 shrink-0"
                    />
                    <span>
                      Acepto que mis datos sean tratados conforme a la{' '}
                      <Link href="/privacidad" className="underline font-semibold text-slate-700">
                        Política de Privacidad
                      </Link>
                      . <Obligatorio />
                    </span>
                  </label>

                  {estado === 'error' && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 px-4 py-3 rounded-xl border"
                      style={{ background: '#fdf2f2', borderColor: '#f3c9c9' }}
                    >
                      <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="text-sm text-red-700">
                        <p className="font-semibold">No pudimos enviar tu consulta.</p>
                        <p className="text-red-600/90">{mensajeError}</p>
                        <p className="mt-1 text-red-600/90">
                          También podés escribirnos a{' '}
                          <a href="mailto:despachantegary@gmail.com" className="underline font-semibold">
                            despachantegary@gmail.com
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    style={{ background: 'linear-gradient(135deg, #fc7114, #d95e0a)' }}
                  >
                    {enviando ? (
                      <>
                        <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        <Send size={18} aria-hidden="true" />
                        Enviar consulta
                      </>
                    )}
                  </button>

                  {/* Anuncia el estado de envío a lectores de pantalla */}
                  <p className="sr-only" role="status" aria-live="polite">
                    {enviando ? 'Enviando tu consulta, aguardá un momento.' : ''}
                  </p>

                  <p className="text-center text-xs text-slate-400">
                    Tu información es confidencial y no será compartida con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
