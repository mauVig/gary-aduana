interface PageBannerProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function PageBanner({ eyebrow, title, subtitle }: PageBannerProps) {
  return (
    <section
      className="relative pt-36 pb-16"
      style={{ background: 'linear-gradient(135deg, #0d2340 0%, #15355c 100%)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-1"
        style={{ background: 'linear-gradient(to right, #fc7114, transparent)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fc7114' }}>
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
