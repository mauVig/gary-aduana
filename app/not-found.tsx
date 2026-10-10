import type { Metadata } from 'next'
import Link from 'next/link'

// El `robots` es necesario: sin él, esta página hereda el `index, follow` del
// layout y contradice el `noindex` que Next emite por su cuenta en las 404.
// Quedan dos etiquetas robots, pero ambas coinciden en no indexar.
export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: true },
}

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Quiénes Somos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contacto', label: 'Contacto' },
]

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{ background: 'linear-gradient(170deg, #081829 0%, #0d2340 45%, #15355c 100%)' }}
    >
      <div className="max-w-xl w-full text-center">
        {/* Logo en línea: el /logo.svg tiene partes navy que sobre este fondo
            oscuro quedan ilegibles, así que acá van en blanco */}
        <svg
          viewBox="0 0 906.88 313.96"
          role="img"
          aria-label="Estudio Aduanero Gary"
          className="h-10 w-auto mx-auto mb-12"
        >
          <polygon fill="#fff" points="246.86 0 246.86 20.89 52.94 20.89 0 72.75 0 262.83 52.45 313.96 256.98 313.96 371.23 215.78 307.1 215.78 307.1 138.79 183.5 138.79 183.5 116.73 123.01 167.72 183.64 217.97 183.64 196.21 241.06 196.21 241.06 243.54 228.5 256.11 80.06 256.11 66.77 242.81 66.77 92.18 79.7 79.26 246.9 79.26 246.9 101.97 307.24 51.13 246.86 0" />
          <polygon fill="#fc7114" points="552.87 .21 552.87 21.11 366.87 21.11 307.53 78.71 307.53 123.54 322.18 123.54 322.18 197.53 380.65 197.53 380.65 92.05 393.28 79.43 552.87 79.43 552.87 101.92 613.08 50.7 552.87 .21" />
          <polygon fill="#fc7114" points="424.79 167.77 486.48 116.51 486.48 138.74 622.6 138.74 622.6 263.55 572.19 313.96 366.92 313.96 330.44 280 380.8 236.91 380.8 243.34 393.54 256.07 535.35 256.07 543.52 256.07 555.38 244.04 555.38 196.15 486.98 196.15 486.98 218.82 424.79 167.77" />
          <path fill="#fff" d="M602.08,21.48l34.67,28.97-33.41,28.84h99.84s-26.79,31.59-24.62,93.99v140.68h57.87v-155.05c.31-6.07-2.11-30.76,14.37-54.13,16.9-23.96,44.88-30.9,57.87-31.49s98.22,0,98.22,0V21.48h-304.8Z" />
          <path fill="#fe6e17" d="M752.45,313.09v-162s-.2-61.43,60.26-62.41c60.46-.98,94.16,0,94.16,0v49.89h-87.81s-8.9.49-8.9,10.76v164.63h-57.72v-.87Z" />
        </svg>

        <p
          className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
          style={{ color: '#fc7114' }}
        >
          Error 404
        </p>

        <h1
          className="font-black text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(30px, 5vw, 52px)', letterSpacing: '-0.02em' }}
        >
          Esta página no existe
        </h1>

        <p className="text-white/50 leading-relaxed mb-10">
          Puede que el enlace esté mal escrito o que la página haya cambiado de dirección.
          Te dejamos los accesos principales del sitio.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold border transition-colors duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.85)' }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-white/40 text-sm mb-4">¿Necesitás resolver una operación?</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-colors duration-200"
            style={{ background: '#fc7114' }}
          >
            Consultá tu operación
          </Link>
        </div>
      </div>
    </main>
  )
}
