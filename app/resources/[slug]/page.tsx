import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import CTABanner from '@/components/CTABanner'
import NewsletterForm from '@/components/NewsletterForm'
import { getMediumArticleBySlug, getAllMediumArticleSlugs } from '@/lib/medium'
import type { MediumArticle } from '@/lib/medium'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getMediumArticleBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  const slugs = await getAllMediumArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getMediumArticleBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>

          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="text-primary-600 font-medium">{post.category}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <h1 className="font-serif text-display md:text-display-lg text-neutral-900 text-balance">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-medium">MD</span>
            </div>
            <div>
              <p className="font-medium text-neutral-900">{post.author}</p>
              <p className="text-sm text-neutral-500">Executive Coach</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      {post.imageUrl && (
        <section className="relative w-full -mt-8 mb-12">
          <div className="container-default">
            <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                unoptimized // Medium images may be external
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <Section background="white" size="sm">
        <Container size="narrow">
          <article className="max-w-3xl mx-auto">
            {/* Render markdown content */}
            <div className="space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle images
                if (paragraph.match(/^!\[.*?\]\(.*?\)$/)) {
                  const imageMatch = paragraph.match(/!\[(.*?)\]\((.*?)\)/)
                  if (imageMatch) {
                    const [, alt, src] = imageMatch
                    return (
                      <div key={index} className="my-12 -mx-4 md:-mx-8">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={src}
                            alt={alt || 'Article image'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
                            unoptimized
                          />
                        </div>
                        {alt && alt !== 'Image' && (
                          <p className="mt-3 text-sm text-neutral-500 text-center italic">{alt}</p>
                        )}
                      </div>
                    )
                  }
                }
                
                // Handle headings
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="mt-12 mb-6 font-serif text-3xl md:text-4xl text-neutral-900 font-bold leading-tight">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="mt-10 mb-4 font-serif text-2xl md:text-3xl text-neutral-900 font-semibold leading-tight">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                
                // Handle bold paragraphs
                if (paragraph.startsWith('**') && paragraph.endsWith('**') && paragraph.length > 4) {
                  return (
                    <p key={index} className="text-lg font-semibold text-neutral-900 leading-relaxed">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  )
                }
                
                // Handle lists
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter((line) => line.startsWith('- '))
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-3 my-6">
                      {items.map((item, i) => {
                        const itemText = item.replace('- ', '').trim()
                        // Handle bold in list items
                        const formattedItem = itemText.split(/(\*\*.*?\*\*)/).map((part, pi) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={pi} className="font-semibold text-neutral-900">{part.replace(/\*\*/g, '')}</strong>
                          }
                          return part
                        })
                        return (
                          <li key={i} className="text-neutral-700 leading-relaxed text-base">
                            {formattedItem}
                          </li>
                        )
                      })}
                    </ul>
                  )
                }
                
                // Handle horizontal rules
                if (paragraph.startsWith('---')) {
                  return <hr key={index} className="my-12 border-neutral-200" />
                }
                
                // Handle regular paragraphs
                if (paragraph.trim()) {
                  // Handle inline bold text, links, and italic
                  const parts: (string | JSX.Element)[] = []
                  let currentIndex = 0
                  const text = paragraph
                  
                  // Match bold, italic, and links
                  const regex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g
                  let match
                  
                  while ((match = regex.exec(text)) !== null) {
                    // Add text before match
                    if (match.index > currentIndex) {
                      parts.push(text.substring(currentIndex, match.index))
                    }
                    
                    // Process match
                    if (match[0].startsWith('**')) {
                      // Bold text
                      parts.push(
                        <strong key={`bold-${index}-${currentIndex}`} className="font-semibold text-neutral-900">
                          {match[0].replace(/\*\*/g, '')}
                        </strong>
                      )
                    } else if (match[0].startsWith('*') && !match[0].startsWith('**')) {
                      // Italic text
                      parts.push(
                        <em key={`italic-${index}-${currentIndex}`} className="italic text-neutral-800">
                          {match[0].replace(/\*/g, '')}
                        </em>
                      )
                    } else if (match[0].startsWith('[')) {
                      // Link
                      const linkMatch = match[0].match(/\[(.*?)\]\((.*?)\)/)
                      if (linkMatch) {
                        parts.push(
                          <a
                            key={`link-${index}-${currentIndex}`}
                            href={linkMatch[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                          >
                            {linkMatch[1]}
                          </a>
                        )
                      }
                    }
                    
                    currentIndex = match.index + match[0].length
                  }
                  
                  // Add remaining text
                  if (currentIndex < text.length) {
                    parts.push(text.substring(currentIndex))
                  }
                  
                  return (
                    <p key={index} className="text-neutral-700 leading-relaxed text-base md:text-lg">
                      {parts.length > 0 ? parts : paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </article>

          {/* Original Medium Link */}
          {post.link && (
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                This article was originally published on{' '}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Medium
                </a>
                .
              </p>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-primary-600 font-medium text-lg">MD</span>
              </div>
              <div>
                <p className="font-serif text-xl text-neutral-900">About the author</p>
                <p className="mt-2 text-neutral-600">
                  Margarita Dautova is an executive coach helping ambitious professionals navigate 
                  career transitions and leadership challenges. She works with clients globally, 
                  combining evidence-based methods with deep human insight.
                </p>
                <Button href="/about" variant="ghost" className="mt-3 -ml-4">
                  Learn more about Margarita →
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 p-8 bg-primary-50 rounded-sm">
            <h3 className="font-serif text-xl text-neutral-900">
              Enjoyed this article?
            </h3>
            <p className="mt-2 text-neutral-600">
              Get more insights on leadership, career development, and professional growth 
              delivered to your inbox.
            </p>
            <div className="mt-4">
              <NewsletterForm variant="inline" />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to take action?"
        description="If this article resonated with you, let's explore how coaching can help you move forward."
        primaryCTA={{ text: 'Book a discovery call', href: '/book' }}
        variant="dark"
      />
    </>
  )
}
