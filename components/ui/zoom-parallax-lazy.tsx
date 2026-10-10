'use client';

import dynamic from 'next/dynamic';

interface Image {
  src: string;
  alt?: string;
}

/**
 * Carga diferida del mosaico con zoom.
 *
 * `next/dynamic` con `ssr: false` solo puede usarse desde un componente de
 * cliente, y `app/nosotros/page.tsx` es de servidor — de ahí este envoltorio.
 *
 * El marcador de posición conserva los 200vh del contenedor real para que la
 * página no dé un salto cuando llega el chunk.
 */
const ZoomParallax = dynamic(
  () => import('./zoom-parallax').then((m) => m.ZoomParallax),
  {
    ssr: false,
    loading: () => (
      <div className="h-[200vh]" style={{ background: '#f0f2f5' }} aria-hidden="true" />
    ),
  }
);

export default function ZoomParallaxLazy({ images }: { images: Image[] }) {
  return <ZoomParallax images={images} />;
}
