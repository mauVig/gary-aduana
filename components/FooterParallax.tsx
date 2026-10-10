'use client'

import { useEffect, useRef, useState } from 'react'
import Footer from './Footer'

/**
 * Footer en parallax (efecto "reveal"):
 * el footer queda fijo al fondo de la pantalla y por detrás de todo el
 * contenido, y un espaciador del mismo alto lo va descubriendo al scrollear.
 *
 * Si el footer no entra en la pantalla (mobile, ventanas bajas) se degrada
 * a un footer normal en el flujo, porque un `fixed` más alto que el viewport
 * quedaría recortado por arriba.
 */
export default function FooterParallax() {
  const footerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return

    const measure = () => {
      const h = el.offsetHeight
      setHeight(h)
      setEnabled(h > 0 && h <= window.innerHeight)
    }

    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(el)
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <>
      {/* Footer — fijo al bottom y detrás del contenido */}
      <div
        ref={footerRef}
        className={enabled ? 'fixed bottom-0 left-0 w-full z-0' : 'relative w-full z-0'}
      >
        <Footer />
      </div>

      {/* Espaciador — mismo alto y ancho que el footer, lo deja asomar */}
      {enabled && (
        <div
          aria-hidden="true"
          className="w-full"
          style={{ height }}
        />
      )}
    </>
  )
}
