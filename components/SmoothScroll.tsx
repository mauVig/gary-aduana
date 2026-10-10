'use client'
import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomScrollbar from './CustomScrollbar'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // WCAG 2.3.3: con movimiento reducido no se instancia Lenis. El scroll
    // vuelve a ser el nativo del navegador y la barra nativa reaparece
    // (globals.css solo la oculta cuando no hay esa preferencia).
    const prefiereMenosMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefiereMenosMovimiento) return

    const instance = new Lenis({
      lerp: 0.03,
      smoothWheel: true,
      wheelMultiplier: 0.6,
    })

    setLenis(instance)

    instance.on('scroll', ScrollTrigger.update)

    function raf(time: number) {
      instance.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
    }
  }, [])

  return (
    <>
      {children}
      {lenis && <CustomScrollbar lenis={lenis} />}
    </>
  )
}
