'use client'
import { ShieldCheck, Award, Clock } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function TrustBar() {
  const ref = useScrollReveal()

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Layered gradient background with depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 75% 15%, rgba(252,113,20,0.055) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 10% 90%, rgba(26,63,110,0.5) 0%, transparent 55%),
            radial-gradient(ellipse 90% 80% at 50% 50%, rgba(21,53,92,0.35) 0%, transparent 70%),
            linear-gradient(170deg, #081829 0%, #0d2340 20%, #15355c 50%, #1c4573 75%, #0f2a4a 100%)
          `,
        }}
      />

      {/* SVG grain overlay to eliminate banding */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.028]" aria-hidden="true">
        <filter id="trustbar-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#trustbar-grain)" />
      </svg>

      <div ref={ref} className="reveal relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <div className="mb-20 max-w-xl">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#fc7114' }}
          >
            Por qué elegirnos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Respaldo que se{' '}
            <span className="italic font-normal text-white/50">demuestra</span>
          </h2>
        </div>

        {/* Credentials grid — 3 panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Panel 1: +30 años */}
          <div className="reveal-delay-1 group relative border-t border-white/10 md:border-t-0 md:border-l md:border-l-white/10 md:first:border-l-0 px-6 md:px-10 py-12 md:py-16">
            {/* Large background number */}
            <span
              className="absolute top-6 right-6 text-[8rem] md:text-[10rem] font-black leading-none select-none pointer-events-none"
              style={{ color: 'rgba(252,113,20,0.06)' }}
            >
              30
            </span>

            <div className="relative">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                style={{ background: 'rgba(252,113,20,0.12)' }}
              >
                <Clock size={24} style={{ color: '#fc7114' }} />
              </div>

              <div className="mb-6">
                <span
                  className="block text-6xl sm:text-7xl font-black tracking-tight"
                  style={{ color: '#fc7114' }}
                >
                  +30
                </span>
                <span className="block text-xl font-semibold text-white mt-1">
                  años de experiencia
                </span>
              </div>

              <p className="text-white/50 leading-relaxed text-sm max-w-xs">
                Desde 1994 operando en todos los rubros del comercio exterior argentino. Cada operación suma conocimiento que ponemos al servicio de tu empresa.
              </p>

              {/* Timeline marker */}
              <div className="mt-8 flex items-center gap-3">
                <span className="text-xs font-mono text-white/30 tracking-wider">1994</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <span className="text-xs font-mono tracking-wider" style={{ color: '#fc7114' }}>
                  2026
                </span>
              </div>
            </div>
          </div>

          {/* Panel 2: CDA */}
          <div className="reveal-delay-2 group relative border-t border-white/10 md:border-t-0 md:border-l md:border-l-white/10 px-6 md:px-10 py-12 md:py-16">
            <span
              className="absolute top-6 right-6 text-[8rem] md:text-[10rem] font-black leading-none select-none pointer-events-none"
              style={{ color: 'rgba(252,113,20,0.06)' }}
            >
              CDA
            </span>

            <div className="relative">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                style={{ background: 'rgba(252,113,20,0.12)' }}
              >
                <Award size={24} style={{ color: '#fc7114' }} />
              </div>

              <div className="mb-6">
                <span className="block text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Socios
                </span>
                <span
                  className="block text-3xl sm:text-4xl font-black tracking-tight"
                  style={{ color: '#fc7114' }}
                >
                  Vitalicios
                </span>
                <span className="block text-xl font-semibold text-white mt-1">
                  del CDA
                </span>
              </div>

              <p className="text-white/50 leading-relaxed text-sm max-w-xs">
                Miembros vitalicios del Centro de Despachantes de Aduana de la República Argentina, la institución referente del sector aduanero.
              </p>

              {/* Institution badge */}
              <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-white/40 font-medium">Membresía activa</span>
              </div>
            </div>
          </div>

          {/* Panel 3: Matrícula */}
          <div className="reveal-delay-3 group relative border-t border-white/10 md:border-t-0 md:border-l md:border-l-white/10 px-6 md:px-10 py-12 md:py-16">
            <span
              className="absolute top-6 right-6 text-[8rem] md:text-[10rem] font-black leading-none select-none pointer-events-none"
              style={{ color: 'rgba(252,113,20,0.06)' }}
            >
              AFIP
            </span>

            <div className="relative">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                style={{ background: 'rgba(252,113,20,0.12)' }}
              >
                <ShieldCheck size={24} style={{ color: '#fc7114' }} />
              </div>

              <div className="mb-6">
                <span className="block text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Matrícula
                </span>
                <span
                  className="block text-3xl sm:text-4xl font-black tracking-tight"
                  style={{ color: '#fc7114' }}
                >
                  Habilitante
                </span>
                <span className="block text-xl font-semibold text-white mt-1">
                  oficial
                </span>
              </div>

              <p className="text-white/50 leading-relaxed text-sm max-w-xs">
                Despachante de Aduana con matrícula otorgada por la AFIP. Garantía de operaciones legales, seguras y dentro del marco normativo vigente.
              </p>

              {/* Verification badge */}
              <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <ShieldCheck size={12} style={{ color: '#fc7114' }} />
                <span className="text-xs text-white/40 font-medium">Habilitación verificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
