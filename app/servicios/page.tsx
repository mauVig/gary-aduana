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
        eyebrow="Nuestros servicios"
        title="Gestión integral de comercio exterior"
        subtitle="Cubrimos todas las etapas de tu operación con precisión, cumplimiento normativo y comunicación en tiempo real."
      />
      <Services />
      <Footer />
    </main>
  )
}
