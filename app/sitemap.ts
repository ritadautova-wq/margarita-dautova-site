import { MetadataRoute } from 'next'

/* TODO: Replace with actual domain */
const baseUrl = 'https://margaritadautova.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/coaching',
    '/testimonials',
    '/resources',
    '/contact',
    '/book',
    '/privacy',
    '/imprint',
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  /* TODO: Add dynamic blog posts to sitemap */
  const blogPosts = [
    '/resources/signs-ready-for-career-change',
    '/resources/first-90-days-leadership-role',
    '/resources/overcoming-imposter-syndrome-executives',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}

