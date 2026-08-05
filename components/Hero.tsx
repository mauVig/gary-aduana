'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-port.jpg')" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(6,17,31,0.45) 0%, rgba(13,35,64,0.7) 40%, rgba(13,35,64,0.97) 80%, rgba(6,17,31,1) 100%)',
        }}
      />

      {/* Orange accent line top */}
      <div
        className="absolute top-0 inset-x-0 h-1 z-10"
        style={{ background: 'linear-gradient(to right, #fc7114, transparent 70%)' }}
      />

      {/* Watermark año */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 leading-none font-black text-white"
        style={{
          fontSize: 'clamp(160px, 22vw, 320px)',
          opacity: 0.04,
          letterSpacing: '-0.06em',
          lineHeight: 1,
          paddingRight: '2vw',
        }}
      >
        1994
      </div>

      {/* Contenido — centrado verticalmente */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-8">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#fc7114' }}
            />
            Despachantes de Aduana · Buenos Aires · Desde 1994
          </div>

          {/* Headline — contraste de peso */}
          <h1 className="text-white leading-[1.08] mb-8 tracking-tight">
            <span
              className="block font-light"
              style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
            >
              Importá con la tranquilidad de tener
            </span>
            <span
              className="block font-black"
              style={{ fontSize: 'clamp(40px, 7vw, 82px)', color: '#fc7114', letterSpacing: '-0.03em' }}
            >
              una familia de expertos
            </span>
            <span
              className="block font-black text-white"
              style={{ fontSize: 'clamp(40px, 7vw, 82px)', letterSpacing: '-0.03em' }}
            >
              detrás de cada operación.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.65)' }}
          >
            Estudio familiar de despachantes de aduana desde 1994. Nos encargamos de todo
            el proceso: documentación, logística y despacho, con comunicación directa en cada paso.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Stats strip — anclado al pie */}
      <div
        className="relative z-10 w-full"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(6,17,31,0.6)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10 py-5">
            {[
              { num: '+30', label: 'años de experiencia' },
              { num: '+200', label: 'empresas acompañadas' },
              { num: 'ARCA', label: 'matrícula habilitante' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col items-center gap-0.5 px-4">
                <span className="font-black text-white" style={{ fontSize: 'clamp(20px, 3vw, 32px)', letterSpacing: '-0.02em', color: '#fc7114' }}>
                  {num}
                </span>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-center" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
