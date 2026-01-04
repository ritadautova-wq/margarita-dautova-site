import { MetadataRoute } from 'next'

// Dynamically determine base URL based on environment
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
  'https://margaritadautova.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

