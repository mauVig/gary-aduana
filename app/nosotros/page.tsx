import Navbar from '@/components/Navbar'
import PageBanner from '@/components/PageBanner'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Quiénes Somos | Estudio Aduanero Gary',
  description: 'Más de 30 años de experiencia en comercio exterior. Socios vitalicios del CDA. Conocé nuestro equipo y trayectoria.',
}

export default function NosotrosPage() {
  return (
    <main>
      <Navbar />
      <PageBanner
        eyebrow="Quiénes somos"
        title="Tres décadas de respaldo en comercio exterior"
        subtitle="Un estudio familiar con trayectoria sólida, matrícula habilitante y el compromiso de acompañarte en cada operación de principio a fin."
      />
      <About />
      <Footer />
    </main>
  )
}
