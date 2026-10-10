import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ZoomParallaxLazy from '@/components/ui/zoom-parallax-lazy'
import AboutStory from '@/components/AboutStory'
import FooterParallax from '@/components/FooterParallax'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

// Esta página no lleva 'use client': cada hijo interactivo (ZoomParallax,
// AboutStory, Navbar, FooterParallax) ya declara el suyo. Siendo server
// component puede exportar metadata propia, que es lo que antes le faltaba.
export const metadata: Metadata = {
  title: 'Quiénes somos',
  description:
    'Estudio familiar de despachantes de aduana fundado en 1994. Tres décadas acompañando operaciones de comercio exterior de PyMEs y nuevos importadores en Argentina.',
  alternates: { canonical: '/nosotros' },
  openGraph: {
    title: 'Quiénes somos | Estudio Aduanero Gary',
    description:
      'Estudio familiar de despachantes de aduana fundado en 1994. Tres décadas acompañando operaciones de comercio exterior en Argentina.',
    url: '/nosotros',
    images: ['/opengraph-image.png'],
  },
}

const images = [
  {
    src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Puerto de Buenos Aires — operaciones de comercio exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Contenedores de carga internacional',
  },
  {
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=800&fit=crop&auto=format&q=80',
    alt: 'Firma de documentos aduaneros',
  },
  {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Carga aérea internacional',
  },
  {
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=800&fit=crop&auto=format&q=80',
    alt: 'Documentación y clasificación arancelaria',
  },
  {
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Transporte interno de mercadería',
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Asesoría en comercio exterior',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Quiénes somos', path: '/nosotros' },
        ])}
      />
      <Navbar />
      <main id="contenido">
      {/* Contenido — por encima del footer en parallax */}
      <div className="relative z-10 bg-white">
        <ZoomParallaxLazy images={images} />
        <AboutStory />
      </div>
      </main>
      <FooterParallax />
    </>
  )
}
