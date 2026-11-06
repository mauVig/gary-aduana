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
/** Formato E.164, que es el que esperan los buscadores. */
const TELEFONO = '+5491134385230'
const TITULAR = 'Guillermo Damián Gary'

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
  telephone: TELEFONO,
  founder: {
    '@type': 'Person',
    name: TITULAR,
  },
  foundingDate: '1994',
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  // TODO(datos del cliente): perfil de LinkedIn
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
  telephone: TELEFONO,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Venezuela 634, piso 6, departamento 27',
    postalCode: 'C1095',
    addressLocality: 'Ciudad Autónoma de Buenos Aires',
    addressRegion: 'CABA',
    addressCountry: 'AR',
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
  // TODO(datos del cliente): falta la matrícula, que es el eje de confianza
  // del sitio, y las coordenadas para el mapa.
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
