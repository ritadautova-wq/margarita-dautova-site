// Utility to fetch and parse Medium articles from RSS feed

export interface MediumArticle {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  readingTime: string
  date: string
  author: string
  link: string
  imageUrl?: string
  images: string[] // All images found in the article
}

// Convert Medium article title to slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Extract reading time from content (approximate)
function estimateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

// Extract excerpt from content
function extractExcerpt(content: string, maxLength: number = 200): string {
  // Remove HTML tags and get plain text
  const text = content
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim()
  
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

// Categorize article based on title/content
function categorizeArticle(title: string, content: string): string {
  const lowerTitle = title.toLowerCase()
  const lowerContent = content.toLowerCase()
  
  if (lowerTitle.includes('leadership') || lowerContent.includes('leadership') || lowerTitle.includes('leader')) {
    return 'Leadership'
  }
  if (lowerTitle.includes('career') || lowerContent.includes('career') || lowerTitle.includes('transition')) {
    return 'Career Transitions'
  }
  if (lowerTitle.includes('imposter') || lowerTitle.includes('mindset') || lowerContent.includes('mindset')) {
    return 'Mindset'
  }
  if (lowerTitle.includes('coach') || lowerContent.includes('coaching')) {
    return 'Professional Growth'
  }
  
  return 'Professional Growth'
}

// Extract all images from HTML content
function extractImages(html: string): string[] {
  const images: string[] = []
  const imgRegex = /<img[^>]*src=["']([^"']*)["'][^>]*>/gi
  let match
  
  while ((match = imgRegex.exec(html)) !== null) {
    const imgUrl = match[1]
    // Filter out data URIs and very small images (likely icons)
    if (imgUrl && !imgUrl.startsWith('data:') && !imgUrl.includes('icon') && imgUrl.length > 10) {
      images.push(imgUrl)
    }
  }
  
  // Also check for figure tags with images
  const figureRegex = /<figure[^>]*>[\s\S]*?<img[^>]*src=["']([^"']*)["'][^>]*>[\s\S]*?<\/figure>/gi
  while ((match = figureRegex.exec(html)) !== null) {
    const imgUrl = match[1]
    if (imgUrl && !imgUrl.startsWith('data:') && !imgUrl.includes('icon') && imgUrl.length > 10) {
      images.push(imgUrl)
    }
  }
  
  return Array.from(new Set(images)) // Remove duplicates
}

// Parse HTML content and convert to markdown-like format with image placeholders
function parseContent(html: string): { content: string; images: string[] } {
  // Remove script and style tags
  let content = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  
  // Extract images first
  const images = extractImages(content)
  
  // Replace images with markdown-style image tags
  content = content.replace(/<img[^>]*src=["']([^"']*)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*>/gi, (match, src, alt) => {
    return `\n\n![${alt || 'Image'}](${src})\n\n`
  })
  
  // Replace figure tags (which often contain images)
  content = content.replace(/<figure[^>]*>[\s\S]*?<img[^>]*src=["']([^"']*)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*>[\s\S]*?<\/figure>/gi, (match, src, alt) => {
    return `\n\n![${alt || 'Image'}](${src})\n\n`
  })
  
  // Convert common HTML to markdown-like format
  content = content
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '## $1\n\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '### $1\n\n')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    .replace(/<ul[^>]*>/gi, '')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
  
  // Clean up extra whitespace
  content = content
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  
  return { content, images }
}

// Fetch and parse Medium RSS feed
export async function fetchMediumArticles(username: string = 'rita.dautova'): Promise<MediumArticle[]> {
  try {
    const rssUrl = `https://medium.com/feed/@${username}`
    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
    })
    
    if (!response.ok) {
      console.error(`Failed to fetch Medium RSS: ${response.status} ${response.statusText}`)
      return []
    }
    
    const xml = await response.text()
    
    // Parse RSS XML - handle both CDATA and regular content
    const items: MediumArticle[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi
    let match
    
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemXml = match[1]
      
      // Extract title - handle CDATA and regular
      const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i)
      const title = titleMatch ? titleMatch[1].trim().replace(/<!\[CDATA\[|\]\]>/g, '') : ''
      
      // Extract link
      const linkMatch = itemXml.match(/<link>(.*?)<\/link>/i)
      const link = linkMatch ? linkMatch[1].trim() : ''
      
      // Extract description/content - try multiple formats
      let rawContent = ''
      const contentEncodedMatch = itemXml.match(/<content:encoded>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/content:encoded>/i)
      const descriptionMatch = itemXml.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/i)
      
      if (contentEncodedMatch) {
        rawContent = contentEncodedMatch[1].replace(/<!\[CDATA\[|\]\]>/g, '')
      } else if (descriptionMatch) {
        rawContent = descriptionMatch[1].replace(/<!\[CDATA\[|\]\]>/g, '')
      }
      
      // Extract pubDate
      const dateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/i)
      const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString()
      
      // Extract author - try multiple formats
      let author = 'Margarita Dautova'
      const creatorMatch = itemXml.match(/<dc:creator>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/dc:creator>/i)
      const authorMatch = itemXml.match(/<author>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/author>/i)
      
      if (creatorMatch) {
        author = creatorMatch[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim()
      } else if (authorMatch) {
        author = authorMatch[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim()
      }
      
      // Extract featured image if available
      const imageMatch = itemXml.match(/<media:content[^>]*url=["']([^"']*)["'][^>]*>/i)
      const imageUrl = imageMatch ? imageMatch[1] : undefined
      
      if (title && link) {
        const { content, images } = parseContent(rawContent)
        const slug = slugify(title)
        
        // Use featured image or first image from content
        const featuredImage = imageUrl || images[0]
        
        items.push({
          slug,
          title,
          excerpt: extractExcerpt(rawContent),
          content,
          category: categorizeArticle(title, rawContent),
          readingTime: estimateReadingTime(content),
          date: new Date(pubDate).toISOString().split('T')[0],
          author,
          link,
          imageUrl: featuredImage,
          images,
        })
      }
    }
    
    // Sort by date (newest first)
    items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return items
  } catch (error) {
    console.error('Error fetching Medium articles:', error)
    return []
  }
}

// Get a single article by slug
export async function getMediumArticleBySlug(slug: string): Promise<MediumArticle | null> {
  const articles = await fetchMediumArticles()
  return articles.find(article => article.slug === slug) || null
}

// Get all article slugs for static generation
export async function getAllMediumArticleSlugs(): Promise<string[]> {
  const articles = await fetchMediumArticles()
  return articles.map(article => article.slug)
}
