/** @type {import('next').NextConfig} */

// Cabeceras de seguridad. HSTS no está acá: lo agrega Vercel por defecto.
const securityHeaders = [
  // Impide que el navegador adivine el tipo de contenido (MIME sniffing)
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Evita que el sitio se embeba en un iframe ajeno (clickjacking)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // No filtra la URL completa al navegar a otro dominio
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Desactiva APIs del navegador que este sitio no usa
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
]

const nextConfig = {
  // No anunciar el framework en cada respuesta
  poweredByHeader: false,

  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    // Declarados de antemano: hoy estas imágenes se sirven con <img> nativo,
    // pero sin esto migrarlas a next/image rompería el build.
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
}

module.exports = nextConfig
