'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { faqs } from '@/lib/faqs'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useScrollReveal()

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fc7114' }}>
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Resolvemos tus dudas antes de empezar
          </h2>
          <p className="text-slate-500 text-lg">
            Las consultas más comunes de PyMEs y nuevos importadores, respondidas con claridad.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-slate-200 shadow-md' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                {/* La pregunta va dentro de un h3 para que se pueda navegar
                    el listado saltando por encabezados, que es como un lector
                    de pantalla recorre una página de preguntas frecuentes. */}
                <h3>
                <button
                  type="button"
                  id={`faq-boton-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-semibold text-slate-900 text-base leading-snug pr-2">
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center transition-colors duration-200"
                    style={{ background: isOpen ? '#fc7114' : 'rgba(21,53,92,0.07)' }}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      style={{ color: isOpen ? 'white' : '#15355c' }}
                    />
                  </div>
                </button>
                </h3>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-boton-${i}`}
                  className={`accordion-content ${isOpen ? 'open' : ''}`}
                >
                  <div className="px-7 pb-6">
                    <div className="w-8 h-px mb-4" style={{ background: '#fc7114' }} />
                    <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">¿Tenés otra consulta?</p>
          <Link href="/contacto" className="btn-navy text-sm px-6 py-3 inline-flex items-center gap-2">
            Hablá con nuestro equipo
          </Link>
        </div>
      </div>
    </section>
  )
}
