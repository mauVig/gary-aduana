import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, organizationSchema, localBusinessSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Estudio Aduanero Gary | Despachantes de Aduana · Buenos Aires',
    template: '%s | Estudio Aduanero Gary',
  },
  description:
    'Despachantes de aduana en Buenos Aires con más de 30 años de experiencia. Importación, exportación, despacho aduanero y logística internacional.',
  applicationName: 'Estudio Aduanero Gary',
  authors: [{ name: 'Estudio Aduanero Gary' }],
  creator: 'Estudio Aduanero Gary',
  publisher: 'Estudio Aduanero Gary',
  category: 'business',
  alternates: {
    canonical: '/',
  },
  // Evita que Safari iOS autoenlace números y direcciones y rompa el layout
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'Estudio Aduanero Gary',
    title: 'Estudio Aduanero Gary | Despachantes de Aduana · Buenos Aires',
    description:
      'Despachantes de aduana en Buenos Aires con más de 30 años de experiencia. Nos encargamos de todo el proceso: documentación, logística y despacho.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Aduanero Gary | Despachantes de Aduana · Buenos Aires',
    description:
      'Despachantes de aduana en Buenos Aires con más de 30 años de experiencia. Nos encargamos de todo el proceso: documentación, logística y despacho.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#15355c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // `no-js` se quita por script apenas carga: si JS no corre, la clase
    // persiste y el CSS muestra el contenido que las animaciones dejarían
    // invisible. Ver el bloque de accesibilidad en globals.css.
    // suppressHydrationWarning: el script de abajo quita `no-js` antes de que
    // React hidrate, así que el className del servidor y el del cliente
    // difieren a propósito. Es el patrón estándar para esta técnica.
    <html
      lang="es-AR"
      className={`${inter.variable} no-js`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
      </head>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <JsonLd data={[organizationSchema, localBusinessSchema]} />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
