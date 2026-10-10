/**
 * Datos estructurados (schema.org) del sitio.
 *
 * Los campos marcados con TODO esperan datos reales del estudio. Están
 * comentados a propósito: un `LocalBusiness` con teléfono o dirección
 * inventados es peor que uno incompleto — Google penaliza la inconsistencia
 * entre el marcado y la información verificable del negocio.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.gary-global-trade.com.ar'

const NAME = 'Estudio Aduanero Gary'
const EMAIL = 'despachantegary@gmail.com'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.svg`,
  },
  email: EMAIL,
  foundingDate: '1994',
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  // TODO(datos del cliente): descomentar cuando estén confirmados
  // telephone: '+54 11 ...',
  // sameAs: ['https://www.linkedin.com/company/...'],
} as const

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: NAME,
  url: SITE_URL,
  email: EMAIL,
  image: `${SITE_URL}/opengraph-image.png`,
  description:
    'Estudio de despachantes de aduana en Buenos Aires. Importación, exportación, clasificación arancelaria, despacho aduanero y logística internacional.',
  foundingDate: '1994',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Buenos Aires',
    addressCountry: 'AR',
    // TODO(datos del cliente): streetAddress, postalCode, addressRegion
  },
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  // TODO(datos del cliente): estos tres son los que más pesan para búsqueda local
  // telephone: '+54 11 ...',
  // geo: { '@type': 'GeoCoordinates', latitude: ..., longitude: ... },
  // hasCredential: 'Matrícula de Despachante de Aduana ARCA N° ...',
} as const

export function faqSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  }
}
