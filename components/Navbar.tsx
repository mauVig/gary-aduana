'use client'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white border-b border-slate-100"
      style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.svg"
              alt="Estudio Aduanero Gary"
              className="h-10 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:shadow-md"
              style={{ background: '#15355c' }}
            >
              Consultá gratis
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: '#15355c' }}
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-slate-900 py-2 text-base font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white mt-2 transition-all duration-200"
              style={{ background: '#15355c' }}
            >
              Consultá gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
