'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Trabajamos con el Estudio Gary hace más de diez años. Cada importación que hicimos —desde pinturas hasta maquinaria— llegó a tiempo y sin contratiempos. Es el tipo de respaldo que una empresa necesita para crecer.',
    company: 'Pinturerías Rex',
    industry: 'Distribución de pinturas',
    initial: 'R',
  },
  {
    quote: 'En Tektronik importamos equipos electrónicos con clasificaciones arancelarias muy específicas. El equipo de Gary domina cada detalle normativo y nos ahorra tiempo y problemas en cada operación.',
    company: 'Tektronik',
    industry: 'Tecnología',
    initial: 'T',
  },
  {
    quote: 'Lo que más valoramos es la comunicación directa. En cada despacho sabemos exactamente en qué etapa está nuestra mercadería y qué esperar. Eso en el comercio exterior no es fácil de encontrar.',
    company: 'Liefrink & Marx',
    industry: 'Distribución',
    initial: 'L',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal()
  const ref2 = useScrollReveal()

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #081829 0%, #0d2340 30%, #15355c 65%, #1b4470 100%)' }}
    >
      {/* Film grain */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" aria-hidden="true">
        <filter id="t-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#t-grain)" />
      </svg>

      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(252,113,20,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="reveal mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: '#fc7114' }} />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
              Testimonios
            </p>
            <div className="h-px w-8" style={{ background: '#fc7114' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Lo que dicen{' '}
            <span style={{ color: '#fc7114' }}>nuestros clientes</span>
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref2} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, company, industry, initial }, i) => (
            <div
              key={company}
              className={`reveal-delay-${i + 1} relative flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300`}
            >
              {/* Giant quote mark */}
              <span
                className="absolute top-4 right-6 text-[6rem] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(252,113,20,0.12)' }}
              >
                "
              </span>

              <p className="relative text-white/75 leading-relaxed text-sm mb-8 flex-1">
                "{quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: 'rgba(252,113,20,0.2)' }}
                >
                  {initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{company}</p>
                  <p className="text-white/40 text-xs">{industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
