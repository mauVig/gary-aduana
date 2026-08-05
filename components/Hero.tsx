'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-port.jpg')" }}
      />

      {/* Dark overlay — navy tinted, heavier at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,35,64,0.45) 0%, rgba(13,35,64,0.7) 40%, rgba(13,35,64,0.95) 85%, rgba(13,35,64,1) 100%)',
        }}
      />

      {/* Orange accent line top */}
      <div
        className="absolute top-0 inset-x-0 h-1 z-10"
        style={{ background: 'linear-gradient(to right, #fc7114, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-44 md:pt-52 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#fc7114' }}
            />
            Despachantes de Aduana · Buenos Aires · Desde 1994
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Importá con la tranquilidad de tener{' '}
            <span style={{ color: '#fc7114' }}>una familia de expertos</span>{' '}
            detrás de cada operación
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            Estudio familiar de despachantes de aduana desde 1994. Nos encargamos de todo
            el proceso: documentación, logística y despacho, con comunicación directa en cada paso.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contacto" className="btn-orange text-base px-8 py-4">
              Consultá tu operación
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 text-base px-8 py-4 rounded-xl border border-white/30 text-white font-semibold backdrop-blur-sm bg-white/5 hover:bg-white/15 transition-all duration-300"
            >
              Ver servicios
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom edge — clean transition into next navy section */}
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, transparent, rgba(252,113,20,0.3), transparent)' }}
      />
    </section>
  )
}
