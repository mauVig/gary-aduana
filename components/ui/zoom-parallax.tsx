'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  images: Image[];
}

/**
 * Mosaico de imágenes que se amplían con el scroll hasta que la central
 * ocupa la pantalla.
 *
 * Antes usaba framer-motion (useScroll + useTransform), que era su único
 * consumidor en todo el proyecto y costaba ~45 kB solo en esta página.
 * Ahora usa GSAP ScrollTrigger, que ya venía cargado para integrarse con el
 * scroll suave de Lenis, así que no agrega peso.
 */

// Factor de ampliación de cada imagen, por posición en el mosaico.
const ESCALAS = [4, 5, 6, 5, 6, 8, 9];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const capas = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // WCAG 2.3.3: una ampliación de hasta nueve veces atada al scroll es
    // justamente lo que esta preferencia pide evitar. El mosaico queda
    // estático y legible.
    const prefiereMenosMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefiereMenosMovimiento) return;

    const ctx = gsap.context(() => {
      capas.current.forEach((capa, i) => {
        if (!capa) return;

        gsap.fromTo(
          capa,
          { scale: 1 },
          {
            scale: ESCALAS[i % ESCALAS.length],
            ease: 'none',
            scrollTrigger: {
              trigger: container.current,
              // Equivale al offset ['start start', 'end end'] que usaba antes
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [images.length]);

  return (
    <div
      ref={container}
      className="relative h-[200vh]"
      style={{ background: '#f0f2f5', paddingTop: '48px' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: '#f0f2f5' }}>
        {/* Degradado inferior que funde con la sección siguiente */}
        <div
          className="absolute bottom-0 inset-x-0 h-12 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0a1a2e)' }}
        />
        {images.map(({ src, alt }, index) => (
          <div
            key={index}
            ref={(el) => {
              capas.current[index] = el;
            }}
            className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
          >
            <div className="relative h-[25vh] w-[25vw]">
              <img
                src={src || '/placeholder.svg'}
                alt={alt || ''}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
