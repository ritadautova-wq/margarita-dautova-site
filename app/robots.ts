import { MetadataRoute } from 'next'

/* TODO: Replace with actual domain */
const baseUrl = 'https://margaritadautova.com'

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

