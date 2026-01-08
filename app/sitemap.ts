import { MetadataRoute } from 'next'
import { fetchMediumArticles } from '@/lib/medium'

// Dynamically determine base URL based on environment
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
  'https://margaritadautova.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/coaching',
    // TODO: Uncomment when testimonials are ready
    // '/testimonials',
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

  // Fetch articles from Medium
  const articles = await fetchMediumArticles('rita.dautova')
  const blogPosts = articles.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}

