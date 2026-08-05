interface PageBannerProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageBanner({ eyebrow, title, subtitle }: PageBannerProps) {
  return (
    <section
      className="relative overflow-hidden pt-36 pb-16"
      style={{ background: 'linear-gradient(135deg, #0d2340 0%, #15355c 100%)' }}
    >
      {/* Línea naranja superior */}
      <div
        className="absolute top-0 inset-x-0 h-[3px]"
        style={{ background: 'linear-gradient(to right, #fc7114 30%, transparent 80%)' }}
      />

      {/* Grilla de puntos — referencia a formularios aduaneros */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Fade radial que oscurece los bordes sobre la grilla */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 100% at 30% 50%, transparent 40%, rgba(13,35,64,0.7) 100%)',
        }}
      />

      {/* Sello aduanero ghost — derecha */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none" style={{ opacity: 0.10 }}>
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Anillo exterior */}
          <circle cx="240" cy="240" r="230" stroke="white" strokeWidth="3"/>
          <circle cx="240" cy="240" r="215" stroke="white" strokeWidth="1"/>
          {/* Anillo interior */}
          <circle cx="240" cy="240" r="160" stroke="white" strokeWidth="3"/>
          <circle cx="240" cy="240" r="145" stroke="white" strokeWidth="1"/>
          {/* Líneas radiales (como agujas de brújula) */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180
            const x1 = 240 + 145 * Math.cos(angle)
            const y1 = 240 + 145 * Math.sin(angle)
            const x2 = 240 + 215 * Math.cos(angle)
            const y2 = 240 + 215 * Math.sin(angle)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth={i % 3 === 0 ? '2' : '1'}/>
          })}
          {/* Cruz central */}
          <line x1="240" y1="80" x2="240" y2="400" stroke="white" strokeWidth="1.5"/>
          <line x1="80" y1="240" x2="400" y2="240" stroke="white" strokeWidth="1.5"/>
          {/* Círculo central pequeño */}
          <circle cx="240" cy="240" r="20" stroke="white" strokeWidth="2"/>
          <circle cx="240" cy="240" r="6" fill="white"/>
          {/* Texto en arco superior */}
          <defs>
            <path id="topArc" d="M 50,240 A 190,190 0 0,1 430,240"/>
            <path id="bottomArc" d="M 80,240 A 160,160 0 0,0 400,240"/>
          </defs>
          <text fill="white" fontSize="18" fontWeight="700" letterSpacing="10" fontFamily="sans-serif">
            <textPath href="#topArc" startOffset="5%">ESTUDIO ADUANERO · GUILLERMO GARY ·</textPath>
          </text>
          <text fill="white" fontSize="14" fontWeight="600" letterSpacing="8" fontFamily="sans-serif">
            <textPath href="#bottomArc" startOffset="10%">BUENOS AIRES · ARGENTINA · EST. 1994</textPath>
          </text>
        </svg>
      </div>

      {/* Acento naranja vertical izquierdo */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: 'linear-gradient(to bottom, #fc7114, transparent)' }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p
            className="mb-4 text-[11px] font-black tracking-[0.28em] uppercase"
            style={{ color: 'rgba(252,113,20,0.85)' }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="font-black text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}
        >
          {title}
        </h1>
        {/* Línea naranja bajo el título */}
        <div
          className="mt-5 h-[2px] w-16 rounded-full"
          style={{ background: '#fc7114' }}
        />
        {subtitle && (
          <p className="text-white/50 text-base mt-5 max-w-xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
