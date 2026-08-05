import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contacto | Estudio Aduanero Gary',
  description: 'Consultá tu operación de importación o exportación. Respondemos en menos de 24 horas hábiles.',
}

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Footer />
    </main>
  )
}
