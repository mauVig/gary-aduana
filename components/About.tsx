'use client'
import { Award, Users, Shield, Star } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const credentials = [
  {
    icon: Shield,
    title: 'Matrícula Habilitante',
    desc: 'Despachante de Aduana con matrícula oficial otorgada por la AFIP, garantía de operaciones legales y seguras.',
  },
  {
    icon: Award,
    title: 'Socios Vitalicios CDA',
    desc: 'Miembros vitalicios del Centro de Despachantes de Aduana de la República Argentina, referente del sector.',
  },
  {
    icon: Star,
    title: '+30 Años de Trayectoria',
    desc: 'Desde 1994 acompañamos a empresas en sus operaciones de comercio exterior con experiencia y conocimiento normativo actualizado.',
  },
  {
    icon: Users,
    title: 'Estructura Familiar',
    desc: 'Un equipo familiar consolidado: Guillermo Gary junto a sus hijos brindan atención personalizada y compromiso real en cada operación.',
  },
]

export default function About() {
  const ref = useScrollReveal()
  const ref2 = useScrollReveal()

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-slate-500 text-lg leading-relaxed">
            Somos un estudio familiar con sólida trayectoria en despacho aduanero y logística
            internacional. Nos diferencia la atención directa, el seguimiento constante y el
            compromiso de entregar cada operación a tiempo y sin sorpresas.
          </p>
        </div>

        {/* Credential cards */}
        <div ref={ref2} className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {credentials.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`reveal-delay-${i + 1} flex gap-5 p-7 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(21,53,92,0.08)' }}
              >
                <Icon size={22} style={{ color: '#15355c' }} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1.5">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          style={{ background: 'linear-gradient(135deg, #0d2340, #15355c)' }}
        >
          {[
            { value: '+30', label: 'Años de experiencia' },
            { value: '+200', label: 'Empresas atendidas' },
            { value: '10', label: 'Servicios especializados' },
            { value: '100%', label: 'Cobertura nacional' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: '#fc7114' }}>
                {value}
              </div>
              <div className="text-white/60 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
