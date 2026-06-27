import Navbar from '@/components/Navbar'
import PageBanner from '@/components/PageBanner'
import FAQ from '@/components/FAQ'
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
      <PageBanner
        eyebrow="Contacto"
        title="Contanos tu operación"
        subtitle="Completá el formulario y uno de nuestros especialistas te contactará dentro de las 24 horas hábiles."
      />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
