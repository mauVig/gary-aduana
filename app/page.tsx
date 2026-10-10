import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Clients from '@/components/Clients'
import HowItWorks from '@/components/HowItWorks'
import Sectors from '@/components/Sectors'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FooterParallax from '@/components/FooterParallax'
import JsonLd from '@/components/JsonLd'
import { faqs } from '@/lib/faqs'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      {/* El acordeón de preguntas frecuentes se publica también como FAQPage */}
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <main id="contenido">
      {/* Contenido — por encima del footer en parallax */}
      <div className="relative z-10 bg-white">
        <div style={{ background: 'linear-gradient(to bottom, #06111f 0%, #0d2340 100%)' }}>
          <Hero />
        </div>
        <TrustBar />
        <Clients />
        <HowItWorks />
        <Sectors />
        <Testimonials />
        <FAQ />
      </div>
      </main>
      <FooterParallax />
    </>
  )
}
