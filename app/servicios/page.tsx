import Navbar from '@/components/Navbar'
import PageBanner from '@/components/PageBanner'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Servicios | Estudio Aduanero Gary',
  description: 'Importación, exportación, despacho aduanero, logística internacional y más. Conocé todos nuestros servicios de comercio exterior.',
}

export default function ServiciosPage() {
  return (
    <main>
      <Navbar />
      <PageBanner
        eyebrow="Estudio Aduanero Gary"
        title="Servicios"
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=600&fit=crop&auto=format"
      />
      <Services />
      <Footer />
    </main>
  )
}
