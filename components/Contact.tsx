'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Paperclip } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type FormData = {
  nombre: string
  email: string
  telefono: string
  mercaderia: string
  estado: string
  origen: string
  procedencia: string
  catalogo: File | null
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 transition-all duration-150'

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState<FormData>({
    nombre: '', email: '', telefono: '', mercaderia: '',
    estado: '', origen: '', procedencia: '', catalogo: null,
  })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, catalogo: e.target.files?.[0] ?? null }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

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
                  { icon: Mail, label: 'Email', value: 'despachantegary@gmail.com', href: 'mailto:despachantegary@gmail.com' },
                  { icon: MapPin, label: 'Ubicación', value: 'Buenos Aires, Argentina', href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(252,113,20,0.15)' }}
                    >
                      <Icon size={18} style={{ color: '#fc7114' }} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-brand-orange transition-colors">
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
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(21,53,92,0.08)' }}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        required name="nombre" value={form.nombre} onChange={handle}
                        placeholder="Ej: Juan Pérez"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Email corporativo <span className="text-red-500">*</span>
                      </label>
                      <input
                        required type="email" name="email" value={form.email} onChange={handle}
                        placeholder="nombre@empresa.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Teléfono <span className="text-red-500">*</span>
                      </label>
                      <input
                        required type="tel" name="telefono" value={form.telefono} onChange={handle}
                        placeholder="+54 11 0000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Mercadería <span className="text-red-500">*</span>
                      </label>
                      <input
                        required name="mercaderia" value={form.mercaderia} onChange={handle}
                        placeholder="Descripción breve del producto"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Estado de la mercadería <span className="text-red-500">*</span>
                      </label>
                      <select
                        required name="estado" value={form.estado} onChange={handle}
                        className={inputClass}
                      >
                        <option value="">Seleccioná una opción</option>
                        <option value="nueva">Nueva</option>
                        <option value="usada">Usada</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Origen (país de fabricación) <span className="text-red-500">*</span>
                      </label>
                      <input
                        required name="origen" value={form.origen} onChange={handle}
                        placeholder="Ej: China, Alemania, Brasil"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Procedencia (país desde donde sale) <span className="text-red-500">*</span>
                    </label>
                    <input
                      required name="procedencia" value={form.procedencia} onChange={handle}
                      placeholder="País desde el que parte la mercadería"
                      className={inputClass}
                    />
                  </div>

                  {/* File upload */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Adjuntar catálogo o folleto (opcional)
                    </label>
                    <label className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 cursor-pointer hover:border-slate-300 hover:bg-slate-100 transition-colors duration-150">
                      <Paperclip size={16} className="text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-500 truncate">
                        {form.catalogo ? form.catalogo.name : 'Hacer clic para adjuntar PDF, JPG o PNG (máx. 10 MB)'}
                      </span>
                      <input type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFile} />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #fc7114, #d95e0a)' }}
                  >
                    <Send size={18} />
                    Enviar consulta
                  </button>

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
