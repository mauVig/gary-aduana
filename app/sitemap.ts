import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/schema'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/servicios`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/nosotros`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/contacto`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE_URL}/privacidad`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
