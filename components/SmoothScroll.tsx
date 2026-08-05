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
