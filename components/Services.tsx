'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  {
    name: 'Importación',
    desc: 'Gestionamos el ingreso de mercadería al territorio aduanero con control total del proceso.',
    details: ['Gestión completa ante ARCA/Aduana', 'Seguimiento en tiempo real de la operación', 'Coordinación con agentes de carga internacionales'],
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Exportación',
    desc: 'Acompañamos cada operación de salida con documentación precisa y tiempos óptimos.',
    details: ['Tramitación de permisos de exportación', 'Gestión de reintegros y drawback', 'Documentación para todos los destinos'],
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Despacho Aduanero',
    desc: 'Presentamos y seguimos tu despacho ante la aduana hasta la liberación de la mercadería.',
    details: ['Presentación digital ante aduana', 'Seguimiento por canal rojo, naranja y verde', 'Liberación en el menor tiempo posible'],
    img: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Logística Internacional',
    desc: 'Coordinamos fletes marítimos, aéreos y terrestres con agentes en todo el mundo.',
    details: ['Fletes marítimos, aéreos y terrestres', 'Red de agentes en más de 50 países', 'Seguimiento puerta a puerta'],
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Clasificación Arancelaria',
    desc: 'Determinamos la posición NCM correcta para optimizar costos y evitar sanciones.',
    details: ['Análisis de posición NCM/SIM', 'Liquidación estimada de derechos', 'Asesoramiento en regímenes especiales'],
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Gestión de Certificados',
    desc: 'Tramitamos certificados de origen, fitosanitarios, INAL y toda documentación requerida.',
    details: ['Certificados de origen MERCOSUR y UE', 'Habilitaciones SENASA, ANMAT e INAL', 'Gestión ante organismos regulatorios'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Firma de Importador',
    desc: 'Brindamos firma habilitada para quienes necesitan operar sin inscripción propia.',
    details: ['Sin necesidad de inscripción en ARCA', 'Ideal para PyMEs y primeras importaciones', 'Operación legal y ágil desde el primer día'],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Transporte Interno',
    desc: 'Organizamos la distribución terrestre desde puerto o aeropuerto hasta tu depósito.',
    details: ['Retiro en puerto, aeropuerto y depósitos fiscales', 'Cobertura en todo el territorio nacional', 'Coordinación con tu depósito o almacén'],
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Asesoría en Comex',
    desc: 'Acompañamos a tu empresa en la toma de decisiones estratégicas de comercio exterior.',
    details: ['Análisis de viabilidad comercial y arancelaria', 'Planificación de operaciones de mediano plazo', 'Consultoría para nuevos importadores y exportadores'],
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=280&fit=crop&auto=format',
  },
  {
    name: 'Servicio de Courrier',
    desc: 'Envíos puerta a puerta internacionales con seguimiento y despacho simplificado.',
    details: ['Despacho simplificado para envíos hasta USD 3.000', 'Seguimiento en tiempo real del paquete', 'Entrega coordinada en domicilio o depósito'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=280&fit=crop&auto=format',
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado de sección: la página saltaba del h1 del banner
            directamente a los h3 de cada tarjeta. Va oculto visualmente
            porque el banner ya dice "Servicios". */}
        <h2 className="sr-only">Nuestros servicios de comercio exterior</h2>

        <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ name, desc, details, img }, i) => (
            <div
              key={name}
              className={`reveal-delay-${(i % 4) + 1} group flex flex-col overflow-hidden rounded-2xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-default`}
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderLeft: '4px solid #fc7114' }}
            >
              {/* Imagen con overlay y nombre */}
              <div className="relative h-44 overflow-hidden">
                {/* alt vacío a propósito: la imagen es ilustrativa y el h3 de
                    abajo ya dice el nombre del servicio. Con alt={name} el
                    lector de pantalla lo anunciaba dos veces seguidas. */}
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(13,35,64,0.92) 0%, rgba(13,35,64,0.25) 60%, transparent 100%)' }}
                />
                {/* Nombre sobre la imagen */}
                <h3
                  className="absolute bottom-4 left-5 right-5 font-black text-white leading-tight"
                  style={{ fontSize: '17px', letterSpacing: '-0.01em', textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
                >
                  {name}
                </h3>
              </div>

              {/* Descripción — franja destacada */}
              <div
                className="px-6 py-4"
                style={{
                  background: 'rgba(252,113,20,0.05)',
                  borderTop: '1px solid rgba(252,113,20,0.2)',
                  borderBottom: '1px solid rgba(252,113,20,0.1)',
                }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#1e3a5f', fontStyle: 'italic', fontWeight: 500 }}
                >
                  {desc}
                </p>
              </div>

              {/* Bullets — detalle */}
              <div className="flex flex-col gap-3 px-6 py-5 bg-white flex-1">
                <span
                  className="text-[10px] font-black tracking-widest uppercase"
                  style={{ color: '#fc7114', letterSpacing: '0.2em' }}
                >
                  Incluye ·
                </span>
                <ul className="flex flex-col gap-2">
                  {details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm" style={{ color: '#334155' }}>
                      <span
                        className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: '#fc7114' }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón Contactar */}
              <div className="px-6 pb-6 bg-white">
                <Link
                  href={`/contacto?servicio=${encodeURIComponent(name)}`}
                  /* Los 10 botones dicen solo "Contactar": al listar los
                     enlaces de la página eran indistinguibles entre sí. */
                  aria-label={`Contactar por ${name}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ background: 'linear-gradient(135deg, #15355c, #0d2340)' }}
                >
                  Contactar
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
