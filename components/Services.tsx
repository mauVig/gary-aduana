'use client'
import {
  ClipboardList, FileText, Truck, Package,
  Globe, Archive, PenLine, Layers, MapPin, PackageSearch,
  Search, FileCheck, Container, Flag
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Análisis y Asesoría Inicial',
    desc: 'Evaluamos la viabilidad de tu operación: tipo de mercadería, restricciones, aranceles y documentación necesaria. Definimos la estrategia antes de avanzar.',
  },
  {
    num: '02',
    icon: FileCheck,
    title: 'Gestión Documental y Normativa',
    desc: 'Clasificación arancelaria, liquidación de costos, cumplimiento de todos los requisitos legales y habilitaciones previas al despacho.',
  },
  {
    num: '03',
    icon: Container,
    title: 'Coordinación Logística',
    desc: 'Organización del transporte internacional, coordinación con agentes de carga, seguimiento de la mercadería en tránsito y monitoreo de plazos.',
  },
  {
    num: '04',
    icon: Flag,
    title: 'Despacho y Liberación',
    desc: 'Presentación del despacho ante la aduana, seguimiento del canal de selectividad y gestión hasta la nacionalización y entrega de la mercadería.',
  },
]

export default function Services() {
  const headerRef = useScrollReveal()
  const stepsRef = useScrollReveal()
  const servicesRef = useScrollReveal()

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fc7114' }}>
            Nuestros servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Una gestión integral, paso a paso
          </h2>
          <p className="text-slate-500 text-lg">
            Cubrimos todas las etapas de tu operación de comercio exterior con precisión,
            cumplimiento normativo y comunicación en tiempo real.
          </p>
        </div>

        {/* 4 process steps */}
        <div ref={stepsRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <div
              key={num}
              className={`reveal-delay-${i + 1} relative bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div
                className="absolute top-6 right-6 text-5xl font-black opacity-5 select-none"
                style={{ color: '#15355c' }}
              >
                {num}
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200"
                style={{ background: 'rgba(252,113,20,0.1)' }}
              >
                <Icon size={22} style={{ color: '#fc7114' }} />
              </div>
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"
                style={{ background: 'rgba(21,53,92,0.08)', color: '#15355c' }}
              >
                Etapa {num}
              </span>
              <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              <div
                className="absolute bottom-0 inset-x-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: '#fc7114' }}
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-slate-200" />
          <p className="text-sm font-semibold tracking-widest uppercase text-slate-400">
            Soluciones especializadas
          </p>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* ── 10 service cards · each with a unique design ── */}
        <div ref={servicesRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* ─── 1. Importación · HERO: full-bleed image + gradient overlay ─── */}
          <div className="reveal-delay-1 md:col-span-2 relative rounded-2xl overflow-hidden group cursor-default"
               style={{ minHeight: 320 }}>
            <img
              src="https://images.pexels.com/photos/93106/pexels-photo-93106.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Puerto con contenedores de importación"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2340] via-[#0d2340]/50 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-7">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                   style={{ background: 'rgba(252,113,20,0.9)' }}>
                <Globe size={20} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Importación</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Gestionamos el ingreso de mercadería al territorio aduanero con control total del proceso.
              </p>
            </div>
          </div>

          {/* ─── 2. Exportación · HERO: full-bleed image + gradient (same weight as Importación) ─── */}
          <div className="reveal-delay-2 md:col-span-2 relative rounded-2xl overflow-hidden group cursor-default"
               style={{ minHeight: 320 }}>
            <img
              src="https://images.pexels.com/photos/6585817/pexels-photo-6585817.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Terminal portuaria de exportación"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2340] via-[#0d2340]/50 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-7">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                   style={{ background: 'rgba(252,113,20,0.9)' }}>
                <Package size={20} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Exportación</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Acompañamos cada operación de salida con documentación precisa y tiempos óptimos.
              </p>
            </div>
          </div>

          {/* ─── 3. Clasificación Arancelaria · DARK: navy background ─── */}
          <div className="reveal-delay-3 rounded-2xl overflow-hidden p-6 flex flex-col hover:shadow-xl transition-all duration-300 group cursor-default"
               style={{ background: '#15355c' }}>
            <div className="flex-1">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                   style={{ background: 'rgba(252,113,20,0.2)' }}>
                <ClipboardList size={18} style={{ color: '#fc7114' }} />
              </div>
              <h3 className="font-bold text-white text-lg mb-1.5">Clasificación Arancelaria</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Determinamos la posición arancelaria correcta para optimizar costos y evitar sanciones.
              </p>
            </div>
            <div className="relative h-28 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4440788/pexels-photo-4440788.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Documentos de clasificación aduanera"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* ─── 4. Despacho Aduanero · LEFT ACCENT: orange left border ─── */}
          <div className="reveal-delay-4 rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col cursor-default"
               style={{ borderLeftWidth: 4, borderLeftColor: '#fc7114' }}>
            <div className="p-6 flex-1 flex flex-col">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                   style={{ background: 'rgba(21,53,92,0.08)' }}>
                <Archive size={18} style={{ color: '#15355c' }} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1.5">Despacho Aduanero</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Presentamos y seguimos tu despacho ante la aduana hasta la liberación de la mercadería.
              </p>
              <div className="relative h-28 rounded-xl overflow-hidden mt-auto">
                <img
                  src="https://images.pexels.com/photos/12378286/pexels-photo-12378286.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Contenedores en zona de despacho aduanero"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ─── 5. Logística Internacional · GLASS: frosted panel over image ─── */}
          <div className="reveal-delay-1 rounded-2xl overflow-hidden relative group cursor-default hover:shadow-xl transition-all duration-300"
               style={{ minHeight: 300 }}>
            <img
              src="https://images.pexels.com/photos/27490332/pexels-photo-27490332.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Carga aérea de logística internacional"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="inset-x-0 p-4">
              <div className="backdrop-blur-md rounded-xl p-4 border border-white/25"
                   style={{ background: 'rgba(255,255,255,0.15)' }}>
                <div className="flex flex-col  gap-3 mb-2">
                  <Truck size={25}  className="text-white" />
                  <h3 className="font-bold text-white text-lg">Logística Internacional</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Coordinamos fletes marítimos, aéreos y terrestres con agentes en todo el mundo.
                </p>
              </div>
            </div>
          </div>

          {/* ─── 6. Gestión de Certificados · INVERTED: text top, image bottom, orange top accent ─── */}
          <div className="reveal-delay-2 rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col cursor-default">
            <div className="h-1 w-full" style={{ background: '#fc7114' }} />
            <div className="p-5 flex-1 flex flex-col">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                   style={{ background: 'rgba(252,113,20,0.1)' }}>
                <FileText size={18} style={{ color: '#fc7114' }} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1.5">Gestión de Certificados</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Tramitamos certificados de origen, fitosanitarios, INAL y toda documentación requerida.
              </p>
              <div className="relative h-24 rounded-xl overflow-hidden mt-auto">
                <img
                  src="https://images.pexels.com/photos/7876054/pexels-photo-7876054.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Gestión de certificados comerciales"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ─── 7. Firma de Importador · WARM GRADIENT: orange card ─── */}
          <div className="reveal-delay-3 rounded-2xl overflow-hidden relative group cursor-default hover:shadow-xl transition-all duration-300"
               style={{ background: 'linear-gradient(135deg, #fc7114 0%, #d95e0a 100%)' }}>
            <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-[2.5rem] overflow-hidden opacity-25">
              <img
                src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Firma de documentos"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative p-6 flex flex-col h-full">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                   style={{ background: 'rgba(255,255,255,0.2)' }}>
                <PenLine size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-white text-lg mb-1.5">Firma de Importador</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Brindamos firma habilitada para quienes necesitan operar sin inscripción propia.
              </p>
            </div>
          </div>

          {/* ─── 8. Gestión Integral de Comex · IMAGE TOP with navy bottom accent ─── */}
          <div className="reveal-delay-4 rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col cursor-default">
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3806756/pexels-photo-3806756.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gestión integral de comercio exterior global"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15355c]/20 to-transparent" />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                   style={{ background: 'rgba(21,53,92,0.08)' }}>
                <Layers size={18} style={{ color: '#15355c' }} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1.5">Gestión Integral de Comex</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Solución completa que cubre desde la negociación hasta la entrega en destino.
              </p>
            </div>
          </div>

          {/* ─── 9. Transporte Interno · CIRCULAR: centered round image, dashed border ─── */}
          <div className="reveal-delay-1 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 hover:border-[#15355c] hover:shadow-xl transition-all duration-300 group p-6 flex flex-col items-center text-center cursor-default">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-slate-100 group-hover:ring-orange-200 transition-all duration-300 flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/6940962/pexels-photo-6940962.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Camión de transporte de mercadería"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                 style={{ background: 'rgba(252,113,20,0.1)' }}>
              <MapPin size={18} style={{ color: '#fc7114' }} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1.5">Transporte Interno</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Organizamos la distribución terrestre desde puerto o aeropuerto hasta tu depósito.
            </p>
          </div>

          {/* ─── 10. Servicio de Courrier · BADGE: image top with floating icon badge ─── */}
          <div className="reveal-delay-2 rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col cursor-default">
            <div className="relative h-36 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4440774/pexels-photo-4440774.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Servicio de courrier y envíos internacionales"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#15355c]/30 to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                   style={{ background: '#15355c' }}>
                <PackageSearch size={18} className="text-white" />
              </div>
            </div>
            <div className="pt-8 pb-5 px-5 text-center flex-1 flex flex-col">
              <h3 className="font-bold text-slate-900 text-lg mb-1.5">Servicio de Courrier</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Envíos puerta a puerta internacionales con seguimiento y despacho simplificado.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
