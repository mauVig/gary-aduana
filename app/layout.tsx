import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Estudio Aduanero Gary | Despachantes de Aduana · Buenos Aires',
  description:
    'Más de 30 años gestionando operaciones de comercio exterior para PyMEs y nuevos importadores en Argentina. Importación, exportación, despacho aduanero y logística internacional.',
  keywords: 'despachante de aduana, importacion argentina, exportacion, comex, logistica internacional, buenos aires',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
