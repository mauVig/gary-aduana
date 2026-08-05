'use client'
import { Car, Wheat, FlaskConical, Cpu, Container, HardHat } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const sectors = [
  {
    num: '01',
    icon: Car,
    name: 'Automotriz',
    desc: 'Repuestos, insumos técnicos y equipos para el sector automotriz e industria pesada.',
    photo: 'https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=800',
    pattern: 'repeating-linear-gradient(135deg, rgba(252,113,20,0.04) 0px, rgba(252,113,20,0.04) 1px, transparent 1px, transparent 18px)',
  },
  {
    num: '02',
    icon: Wheat,
    name: 'Agro y energías',
    desc: 'Maquinaria agrícola, insumos para el campo y equipamiento para energías renovables.',
    photo: 'https://images.pexels.com/photos/7626143/pexels-photo-7626143.jpeg?auto=compress&cs=tinysrgb&w=800',
    pattern: 'radial-gradient(circle, rgba(252,113,20,0.07) 1px, transparent 1px)',
  },
  {
    num: '03',
    icon: FlaskConical,
    name: 'Químico y farmacéutico',
    desc: 'Mercadería regulada por SENASA, ANMAT o INAL. Precisión arancelaria garantizada.',
    photo: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=800',
    pattern: 'repeating-linear-gradient(0deg, rgba(252,113,20,0.04) 0px, rgba(252,113,20,0.04) 1px, transparent 1px, transparent 22px), repeating-linear-gradient(90deg, rgba(252,113,20,0.04) 0px, rgba(252,113,20,0.04) 1px, transparent 1px, transparent 22px)',
  },
  {
    num: '04',
    icon: Cpu,
    name: 'Tecnología',
    desc: 'Equipos electrónicos, componentes e insumos tecnológicos con clasificación NCM específica.',
    photo: 'https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=800',
    pattern: 'repeating-linear-gradient(0deg, rgba(252,113,20,0.05) 0px, rgba(252,113,20,0.05) 1px, transparent 1px, transparent 14px), repeating-linear-gradient(90deg, rgba(252,113,20,0.05) 0px, rgba(252,113,20,0.05) 1px, transparent 1px, transparent 14px)',
  },
  {
    num: '05',
    icon: Container,
    name: 'Logística industrial',
    desc: 'Operaciones frecuentes de alto volumen para distribuidoras y operadores logísticos.',
    photo: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
    pattern: 'repeating-linear-gradient(0deg, rgba(252,113,20,0.05) 0px, rgba(252,113,20,0.05) 1px, transparent 1px, transparent 20px)',
  },
  {
    num: '06',
    icon: HardHat,
    name: 'Obras y minería',
    desc: 'Maquinaria pesada, equipos e insumos para proyectos de construcción y minería.',
    photo: 'https://images.pexels.com/photos/2101140/pexels-photo-2101140.jpeg?auto=compress&cs=tinysrgb&w=800',
    pattern: 'repeating-linear-gradient(45deg, rgba(252,113,20,0.04) 0px, rgba(252,113,20,0.04) 1px, transparent 1px, transparent 16px), repeating-linear-gradient(-45deg, rgba(252,113,20,0.04) 0px, rgba(252,113,20,0.04) 1px, transparent 1px, transparent 16px)',
  },
]

export default function Sectors() {
  const ref = useScrollReveal()
  const ref2 = useScrollReveal()

  return (
    <section className="pt-28 pb-0 bg-slate-50">

      {/* Header — centrado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div ref={ref} className="reveal text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: '#fc7114' }} />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              Sectores
            </p>
            <div className="h-px w-8" style={{ background: '#fc7114' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Operamos en<br />
            <span style={{ color: '#fc7114' }}>todos los rubros</span><br />
            del comercio exterior
          </h2>
        </div>
      </div>

      {/* Cards grid — full bleed */}
      <div ref={ref2} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map(({ num, icon: Icon, name, desc, photo, pattern }, i) => (
          <div
            key={num}
            className={`reveal-delay-${(i % 3) + 1} group relative overflow-hidden cursor-default`}
          >
            {/* Foto de fondo */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${photo})` }}
            />

            {/* Overlay navy — desaparece completamente en hover */}
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
              style={{
                background: 'linear-gradient(160deg, rgba(8,24,41,0.88) 0%, rgba(13,35,64,0.78) 50%, rgba(21,53,92,0.65) 100%)',
              }}
            />

            {/* Patrón geométrico — desaparece en hover */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
              style={{ backgroundImage: pattern, backgroundSize: pattern.includes('radial') ? '20px 20px' : 'auto' }}
            />

            {/* Bottom gradient for text legibility — siempre visible */}
            <div
              className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(4,12,24,0.92), transparent)' }}
            />

            <div className="relative p-8 flex flex-col gap-5 min-h-[380px]">
              {/* Icon — desaparece en hover */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center self-start transition-opacity duration-500 group-hover:opacity-0"
                style={{ background: 'rgba(252,113,20,0.18)', backdropFilter: 'blur(4px)' }}
              >
                <Icon size={20} style={{ color: '#fc7114' }} />
              </div>

              {/* Name + desc — siempre visible */}
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                  {name}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
