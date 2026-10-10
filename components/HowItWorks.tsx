'use client'
import { Search, FileText, Truck, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Análisis inicial',
    tag: 'Viabilidad · NCM · Aranceles',
    desc: 'Antes de mover un dólar, chequeamos que la operación sea viable: clasificamos tu mercadería, calculamos aranceles y levantamos todos los requisitos legales. Sin sorpresas después.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Gestión documental',
    tag: 'Factura · Packing List · Certificados',
    desc: 'Preparamos y tramitamos toda la documentación requerida: desde la factura comercial hasta los certificados de organismos como SENASA o ANMAT. Vos no tocás un papel.',
  },
  {
    num: '03',
    icon: Truck,
    title: 'Coordinación logística',
    tag: 'Tránsito · Seguimiento · Alertas',
    desc: 'Coordinamos con el agente de cargas y te avisamos en cada momento dónde está tu mercadería. Si hay un imprevisto en tránsito, lo resolvemos antes de que llegue a tus oídos.',
  },
  {
    num: '04',
    icon: CheckCircle2,
    title: 'Despacho y liberación',
    tag: 'Aduana · Canal · Retiro',
    desc: 'Presentamos el despacho ante la Aduana argentina, gestionamos los controles de rigor y acompañamos el proceso hasta que tu mercadería queda liberada y lista para retirar.',
  },
]

type Step = (typeof steps)[number]

function StepRow({ num, icon: Icon, title, tag, desc }: Step) {
  // Se pinta cuando la fila cruza el 55% de la altura de pantalla
  const ref = useScrollReveal({ threshold: 0, rootMargin: '0px 0px -45% 0px' })

  return (
    <div
      ref={ref}
      className="step-row group grid grid-cols-[auto_1fr] md:grid-cols-[6rem_1fr_auto] items-start gap-6 md:gap-10 py-10 border-b border-white/[0.08] hover:bg-white/[0.02] transition-colors duration-300 px-2"
    >
      {/* Number */}
      <div className="flex flex-col items-start pt-1">
        <span className="step-num text-5xl md:text-6xl font-black tracking-tighter leading-none">
          {num}
        </span>
        {/* Orange bar — crece junto con el número */}
        <div className="step-bar h-[2px] mt-2" style={{ background: '#fc7114' }} />
      </div>

      {/* Content */}
      <div>
        {/* Tag */}
        <p className="text-xs font-mono tracking-widest text-white/25 mb-3 uppercase">
          {tag}
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed max-w-2xl">
          {desc}
        </p>
      </div>

      {/* Icon — hidden on mobile, shown on desktop */}
      <div className="hidden md:flex items-center justify-center self-center">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:scale-110"
          style={{ background: 'rgba(252,113,20,0.08)' }}
        >
          <Icon size={22} style={{ color: '#fc7114' }} />
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #081829 0%, #0d2340 25%, #15355c 60%, #1b4470 100%)' }}
    >
      {/* Grain */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" aria-hidden="true">
        <filter id="hiw-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hiw-grain)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">

        {/* Header */}
        <div ref={ref} className="reveal mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: '#fc7114' }} />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                Nuestro proceso
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Así gestionamos tu operación,{' '}
              <br className="hidden sm:block" />
              <span style={{ color: '#fc7114' }}>paso a paso</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed md:text-right">
            Cada operación sigue el mismo protocolo de cuatro etapas. Sin sorpresas, sin baches, con comunicación directa en cada paso.
          </p>
        </div>

        {/* Steps — full-width rows */}
        <div className="border-t border-white/[0.08]">
          {steps.map((step) => (
            <StepRow key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
