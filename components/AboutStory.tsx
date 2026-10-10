'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const team = [
  {
    initials: 'GG',
    name: 'Guillermo Gary',
    role: 'Fundador · Despachante Oficial',
    bio: 'Matriculado ante ARCA desde 1994. Tres décadas gestionando operaciones de importación y exportación para empresas de todos los rubros del país.',
  },
  {
    initials: 'MG',
    name: 'Martín Gary',
    role: 'Operaciones y Logística',
    bio: 'Incorporado al estudio en 2010. Especializado en coordinación de fletes internacionales, despacho aduanero y seguimiento de operaciones en tiempo real.',
  },
  {
    initials: 'CB',
    name: 'Claudia Benítez',
    role: 'Administración y Seguimiento',
    bio: 'Quince años acompañando al estudio. Responsable del seguimiento de despachos, comunicación con clientes y gestión documental de cada operación.',
  },
]

export default function AboutStory() {
  const ref = useScrollReveal()
  const ref2 = useScrollReveal()

  return (
    <section style={{ background: 'linear-gradient(160deg, #0a1a2e 0%, #15355c 100%)' }}>

      {/* Historia */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-16 items-start">

          {/* Izquierda: texto */}
          <div>
            <p
              className="text-[11px] font-black tracking-[0.28em] uppercase mb-6"
              style={{ color: 'rgba(252,113,20,0.85)' }}
            >
              Nuestra historia
            </p>
            {/* h1 de /nosotros — misma apariencia que antes, pero es el
                encabezado principal de la página, que no tenía ninguno */}
            <h1
              className="font-black text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
            >
              Tres décadas construyendo confianza en cada operación.
            </h1>
            <div className="space-y-5" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.8 }}>
              <p>
                El Estudio Aduanero Gary nació en 1994 de la mano de Guillermo Gary, con una convicción clara: que el comercio exterior argentino necesitaba profesionales que acompañaran a las empresas de verdad, no solo que firmaran papeles.
              </p>
              <p>
                Lo que empezó como un estudio unipersonal en Buenos Aires se convirtió en un equipo de especialistas que hoy gestiona operaciones para más de 200 empresas de todo el país — desde PyMEs que importan por primera vez hasta compañías con operaciones regulares en mercados internacionales.
              </p>
              <p>
                Somos una firma familiar. Eso significa que cada cliente trata con las mismas personas, que el conocimiento no rota, y que el compromiso es personal.
              </p>
            </div>
          </div>

          {/* Derecha: cita */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              className="relative p-10 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: '4px solid #fc7114',
              }}
            >
              {/* Comilla decorativa */}
              <span
                className="absolute -top-6 left-8 font-black leading-none select-none"
                style={{ fontSize: '120px', color: 'rgba(252,113,20,0.15)', lineHeight: 1 }}
              >
                "
              </span>
              <blockquote
                className="relative z-10 font-semibold text-white leading-relaxed italic"
                style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
              >
                En aduana, cada día es distinto. Lo único que no cambia es la responsabilidad que tenemos con quienes nos confían su mercadería.
              </blockquote>
              <footer className="mt-6">
                <p className="font-black text-white text-sm">Guillermo Gary</p>
                <p className="text-[11px] tracking-widest uppercase mt-1" style={{ color: 'rgba(252,113,20,0.7)' }}>
                  Fundador · Est. 1994
                </p>
              </footer>
            </div>
          </div>

        </div>
      </div>

      {/* Separador */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Equipo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <div ref={ref2} className="reveal">
          <p
            className="text-[11px] font-black tracking-[0.28em] uppercase mb-3"
            style={{ color: 'rgba(252,113,20,0.85)' }}
          >
            El equipo
          </p>
          <h3
            className="font-black text-white mb-12"
            style={{ fontSize: 'clamp(22px, 3vw, 36px)', letterSpacing: '-0.02em' }}
          >
            Las personas detrás de cada operación.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(({ initials, name, role, bio }) => (
              <div
                key={name}
                className="group rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Avatar con iniciales */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #fc7114, #e85d04)',
                    color: '#ffffff',
                    letterSpacing: '0.05em',
                  }}
                >
                  {initials}
                </div>

                <div>
                  <p className="font-black text-white text-base leading-tight">{name}</p>
                  <p
                    className="text-[11px] font-bold tracking-widest uppercase mt-1"
                    style={{ color: 'rgba(252,113,20,0.75)' }}
                  >
                    {role}
                  </p>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
