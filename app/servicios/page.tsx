import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageBanner from '@/components/PageBanner'
import Services from '@/components/Services'
import FooterParallax from '@/components/FooterParallax'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Importación, exportación, despacho aduanero, logística internacional y más. Conocé todos nuestros servicios de comercio exterior.',
  alternates: { canonical: '/servicios' },
  openGraph: {
    title: 'Servicios | Estudio Aduanero Gary',
    description:
      'Importación, exportación, despacho aduanero, logística internacional y más. Conocé todos nuestros servicios de comercio exterior.',
    url: '/servicios',
    images: ['/opengraph-image.png'],
  },
}

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/servicios' },
        ])}
      />
      <Navbar />
      <main id="contenido">
      {/* Contenido — por encima del footer en parallax */}
      <div className="relative z-10 bg-white">
        <PageBanner
          eyebrow="Estudio Aduanero Gary"
          title="Servicios"
        />
        <Services />
      </div>
      </main>
      <FooterParallax />
    </>
  )
}
