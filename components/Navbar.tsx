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
      className="fixed z-50"
      style={{
        top: scrolled ? '12px' : '0px',
        left: scrolled ? '20px' : '0px',
        right: scrolled ? '20px' : '0px',
        borderRadius: scrolled ? '14px' : '0px',
        background: scrolled ? 'rgba(255,255,255,0.55)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
        boxShadow: scrolled
          ? '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)'
          : '0 1px 0 rgba(0,0,0,0.06)',
        borderBottom: scrolled ? 'none' : '1px solid rgba(0,0,0,0.06)',
        transition: 'top 0.5s cubic-bezier(0.4,0,0.2,1), left 0.5s cubic-bezier(0.4,0,0.2,1), right 0.5s cubic-bezier(0.4,0,0.2,1), border-radius 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), background 0.5s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between"
          style={{
            height: scrolled ? '42px' : '64px',
            transition: 'height 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.svg"
              alt="Estudio Aduanero Gary"
              loading="eager"
              style={{
                height: scrolled ? '28px' : '34px',
                width: 'auto',
                transition: 'height 0.5s cubic-bezier(0.4,0,0.2,1)',
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-semibold transition-colors duration-150"
                style={{
                  fontSize: scrolled ? '13px' : '14px',
                  color: scrolled ? '#0f1923' : '#475569',
                  textShadow: scrolled ? '0 1px 4px rgba(255,255,255,0.9)' : 'none',
                  transition: 'font-size 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1), text-shadow 0.5s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-lg font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:shadow-md"
              style={{
                background: '#15355c',
                fontSize: scrolled ? '13px' : '14px',
                padding: scrolled ? '7px 16px' : '10px 20px',
                transition: 'font-size 0.5s cubic-bezier(0.4,0,0.2,1), padding 0.5s cubic-bezier(0.4,0,0.2,1)',
              }}
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
        <div
          className="md:hidden border-t border-slate-100"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.55)' : '#ffffff',
            borderBottomLeftRadius: scrolled ? '14px' : '0px',
            borderBottomRightRadius: scrolled ? '14px' : '0px',
          }}
        >
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
