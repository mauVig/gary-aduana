'use client'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menú mobile: cerrar con Escape y devolver el foco al botón, para no
  // dejar al usuario de teclado perdido al final del documento.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    // El primer enlace recibe el foco al abrir
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Cierra el panel al cambiar de ruta
  useEffect(() => {
    setOpen(false)
  }, [pathname])

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
          <nav aria-label="Menú principal" className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative inline-flex items-center transition-all duration-200"
                  style={{
                    fontSize: scrolled ? '13px' : '14px',
                    fontWeight: active ? 800 : 600,
                    color: active ? '#0f1923' : scrolled ? '#0f1923' : '#475569',
                  }}
                >
                  {l.label}
                  <span
                    className="absolute rounded-full transition-all duration-200"
                    style={{
                      left: '50%',
                      bottom: '-10px',
                      transform: 'translateX(-50%)',
                      width: active ? '4px' : '0px',
                      height: '4px',
                      background: '#fc7114',
                      opacity: active ? 1 : 0,
                    }}
                  />
                </Link>
              )
            })}
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
              Contacto
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={toggleRef}
            type="button"
            className="md:hidden p-2"
            style={{ color: '#15355c' }}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="menu-mobile"
          ref={panelRef}
          aria-label="Menú principal"
          className="md:hidden border-t border-slate-100"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.55)' : '#ffffff',
            borderBottomLeftRadius: scrolled ? '14px' : '0px',
            borderBottomRightRadius: scrolled ? '14px' : '0px',
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2 text-base font-semibold transition-colors"
                  style={{ color: active ? '#fc7114' : '#475569' }}
                >
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#fc7114' }} />
                  )}
                  {l.label}
                </Link>
              )
            })}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white mt-2 transition-all duration-200"
              style={{ background: '#15355c' }}
            >
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
