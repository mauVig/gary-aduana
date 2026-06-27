'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const faqs = [
  {
    q: '¿Puedo importar si no estoy registrado como importador?',
    a: 'Sí, es posible. Si aún no estás inscrito en el Registro de Importadores y Exportadores de la AFIP, podemos asistirte en ese proceso o brindarte nuestro Servicio de Firma de Importador, que te permite operar de manera legal y ágil mientras tramitás tu propia habilitación. Te asesoramos en cada paso.',
  },
  {
    q: '¿Cuánto cuesta importar un producto?',
    a: 'El costo de importación depende de múltiples variables: el valor de la mercadería (FOB), el origen, los aranceles de importación (que varían según la posición arancelaria), el IVA, las tasas estadísticas, los gastos de flete y seguro internacional, el almacenaje y los honorarios del despachante. Realizamos una liquidación estimada personalizada para cada operación.',
  },
  {
    q: '¿Cuáles son los plazos de arribo de la mercadería?',
    a: 'Los plazos dependen del modo de transporte y el origen. En términos generales: transporte marítimo desde Asia puede demorar entre 25 y 45 días; desde Europa, 20 a 35 días; desde América del Norte o Sur, 10 a 25 días. El transporte aéreo reduce esos plazos significativamente. Una vez en Argentina, el despacho aduanero puede resolverse en 24 a 72 horas según el canal asignado.',
  },
  {
    q: '¿Qué documentación se requiere para importar?',
    a: 'La documentación básica incluye: Factura Comercial (Commercial Invoice), Lista de Empaque (Packing List), Conocimiento de Embarque (Bill of Lading o Airway Bill) y Certificado de Origen cuando aplica. Según el tipo de mercadería pueden requerirse también certificados sanitarios, habilitaciones del SENASA, ANMAT, INAL u otros organismos regulatorios. Los gestionamos por vos.',
  },
  {
    q: '¿En qué consiste el servicio integral que brindan?',
    a: 'Nuestro servicio integral cubre todo el ciclo de la operación: desde el análisis de viabilidad y la clasificación arancelaria, pasando por la gestión de toda la documentación y habilitaciones, la coordinación con el agente de cargas, el seguimiento de la mercadería en tránsito, la presentación del despacho ante aduana y el seguimiento hasta la liberación y entrega final. Receptás tu mercadería sin tener que ocuparte de ningún trámite.',
  },
]

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
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
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

                <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
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
          <a href="#contacto" className="btn-navy text-sm px-6 py-3 inline-flex items-center gap-2">
            Hablá con nuestro equipo
          </a>
        </div>
      </div>
    </section>
  )
}
