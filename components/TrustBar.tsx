'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const stats = [
  {
    num: '+30',
    label: 'años de experiencia',
    body: <><span className="font-bold" style={{ color: '#fc7114' }}>Desde 1994</span> operando en todos los rubros del comercio exterior argentino. Cada operación suma conocimiento que ponemos al servicio de tu empresa.</>,
  },
  {
    num: '+200',
    label: 'empresas acompañadas',
    body: <><span className="font-bold" style={{ color: '#fc7114' }}>Más de 200 empresas</span> nos eligieron para gestionar sus operaciones de comercio exterior. Rubros como <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>automotriz, agro, química, logística y tecnología</span> confían en nosotros cada día.</>,
  },
  {
    num: 'ARCA',
    label: 'matrícula habilitante',
    body: <>
      <span style={{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(252,113,20,0.7)', marginBottom: '6px' }}>
        Matrícula Habilitante · ARCA
      </span>
      <span style={{ display: 'block', fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, marginBottom: '8px' }}>
        Operamos con habilitación oficial otorgada por el Estado.
      </span>
      <span style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
        Garantía de operaciones legales, seguras y dentro del marco normativo vigente.
      </span>
    </>,
  },
]


export default function TrustBar() {
  const refLeft = useScrollReveal()
  const refRight = useScrollReveal()

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">

      {/* ── Panel izquierdo — naranja ──────────────────────────── */}
      <div
        ref={refLeft}
        className="reveal lg:w-[42%] flex flex-col justify-center px-10 py-20 lg:px-16 lg:py-24 relative overflow-hidden"
        style={{ background: '#fc7114' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 18px, rgba(255,255,255,0.05) 18px, rgba(255,255,255,0.05) 19px)',
          }}
        />

        <div className="relative">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-12"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            Por qué elegirnos
          </p>

          <div className="flex flex-col gap-10">
            {stats.map((s, i) => (
              <div key={i}>
                <div
                  className="font-black leading-none tracking-tight"
                  style={{
                    fontSize: s.num === 'ARCA' ? 'clamp(40px,5vw,60px)' : 'clamp(64px,8vw,96px)',
                    color: '#fff',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {s.num}
                </div>
                <div className="text-sm font-bold mt-2 uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.9)', letterSpacing: '0.12em' }}>
                  {s.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="mt-8 h-px" style={{ background: 'rgba(255,255,255,0.2)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Panel derecho — navy ───────────────────────────────── */}
      <div
        ref={refRight}
        className="reveal reveal-delay-1 lg:flex-1 flex flex-col justify-center px-10 py-20 lg:px-16 lg:py-24"
        style={{ background: '#0c1f35' }}
      >
        <div className="mb-14">
          <h2
            className="font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(28px,4vw,48px)', color: '#fff' }}
          >
            Respaldo que se{' '}
            <em className="font-light not-italic" style={{ color: 'rgba(255,255,255,0.35)' }}>
              demuestra
            </em>
          </h2>
        </div>

        <div className="flex flex-col">
          {stats.map((s, i) => (
            <div
              key={i}
              className="py-8 flex flex-col gap-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {s.body && (
                <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {s.body}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
