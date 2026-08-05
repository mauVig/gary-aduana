import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Clients from '@/components/Clients'
import HowItWorks from '@/components/HowItWorks'
import Sectors from '@/components/Sectors'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{ background: 'linear-gradient(to bottom, #06111f 0%, #0d2340 100%)' }}>
        <Hero />
      </div>
      <TrustBar />
      <Clients />
      <HowItWorks />
      <Sectors />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
