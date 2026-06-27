import { Mail } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' },
]

const services = [
  'Importación', 'Exportación', 'Clasificación Arancelaria',
  'Despacho Aduanero', 'Logística Internacional',
  'Gestión de Certificados', 'Gestión Integral de Comex',
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a1a2e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + about */}
          <div className="lg:col-span-2">
            <img src="/logo.svg" alt="Estudio Gary" className="h-9 w-auto mb-5" />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Estudio Aduanero con más de 30 años de experiencia en comercio exterior.
              Socios Vitalicios del CDA. Buenos Aires, Argentina.
            </p>
            <a
              href="mailto:despachantegary@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Mail size={15} style={{ color: '#fc7114' }} />
              despachantegary@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Secciones</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Servicios</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/servicios"
                    className="text-white/50 text-sm hover:text-white transition-colors duration-150"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Estudio Aduanero Gary. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: '#fc7114' }}
            />
            <span className="text-white/30 text-xs">Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
