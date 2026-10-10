import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import FooterParallax from '@/components/FooterParallax'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Consultá tu operación de importación o exportación. Respondemos en menos de 24 horas hábiles.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contacto | Estudio Aduanero Gary',
    description:
      'Consultá tu operación de importación o exportación. Respondemos en menos de 24 horas hábiles.',
    url: '/contacto',
    images: ['/opengraph-image.png'],
  },
}

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Contacto', path: '/contacto' },
        ])}
      />
      <Navbar />
      <main id="contenido">
      {/* Contenido — por encima del footer en parallax */}
      <div className="relative z-10 bg-white">
        {/* Encabezado principal de la página. Va oculto visualmente porque el
            título visible ("Contanos tu operación") vive dentro de Contact.tsx
            como h2; esto le da a la página el h1 que no tenía, sin alterar el
            diseño ni tocar ese componente. */}
        <h1 className="sr-only">Contacto — Estudio Aduanero Gary</h1>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </div>
      </main>
      <FooterParallax />
    </>
  )
}
