'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const clients = [
  { name: 'Pinturerías Rex', industry: 'Pinturas' },
  { name: 'Liefrink & Marx', industry: 'Distribución' },
  { name: 'Tektronik', industry: 'Tecnología' },
  { name: 'Biscayne Servicios', industry: 'Servicios' },
  { name: 'Promin', industry: 'Industria' },
  { name: 'Horcrisa', industry: 'Comercio' },
  { name: 'Dacomac', industry: 'Manufactura' },
  { name: 'Octawind', industry: 'Energía' },
]

const doubled = [...clients, ...clients]

export default function Clients() {
  const ref = useScrollReveal()

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-slate-400">
          Empresas que confían en nosotros
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-8 py-4 rounded-xl border border-slate-100 bg-white shrink-0 min-w-[180px] group hover:border-slate-200 hover:shadow-md transition-all duration-200"
            >
              {/* Monogram/initial block */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 text-white font-bold text-sm transition-transform duration-200 group-hover:scale-110"
                style={{ background: '#15355c' }}
              >
                {c.name.charAt(0)}
              </div>
              <span className="text-slate-800 font-semibold text-sm whitespace-nowrap">{c.name}</span>
              <span className="text-slate-400 text-xs mt-0.5">{c.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
