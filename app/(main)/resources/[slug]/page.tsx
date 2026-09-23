import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Container from '@/components/Container'
import Button from '@/components/Button'
import LeadMagnetSection from '@/components/sections/LeadMagnetSection'
import { getMediumArticleBySlug, getAllMediumArticleSlugs } from '@/lib/medium'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getMediumArticleBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      ...(post.imageUrl && { images: [post.imageUrl] }),
    },
  }
}

export async function generateStaticParams() {
  const slugs = await getAllMediumArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// The featured image is already shown as the page hero — drop its first
// occurrence from the body so it isn't rendered a second time inline.
function stripDuplicateFeaturedImage(content: string, imageUrl?: string): string {
  if (!imageUrl) return content
  const escaped = imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`!\\[[^\\]]*\\]\\(${escaped}\\)\\n*`)
  return content.replace(regex, '')
}

// Medium articles often repeat the title as the first heading in the body —
// the title is already shown in the page hero, so drop that leading heading.
function stripDuplicateTitle(content: string, title: string): string {
  // Medium sometimes uses non-breaking spaces inside headings while the RSS
  // <title> uses regular spaces — collapse whitespace runs to \s+ so the two
  // still match.
  const escaped = title
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/ +/g, '\\s+')
  const regex = new RegExp(`^#{1,6}\\s*${escaped}\\s*\\n+`, 'i')
  return content.replace(regex, '')
}

// Medium doesn't link between posts in the same series, so the "part one" /
// "part two" mentions in these two articles are plain text. Turn them into
// internal links so readers can actually navigate between the two parts.
const SERIES_CROSS_LINKS: Record<string, { find: RegExp; slug: string }> = {
  'burnout-or-outgrowing-the-question-that-could-save-you-years': {
    find: /Part one/,
    slug: 'when-its-not-you-and-its-not-them-its-the-interaction',
  },
  'when-its-not-you-and-its-not-them-its-the-interaction': {
    find: /a series of posts exploring person-system mismatch/,
    slug: 'burnout-or-outgrowing-the-question-that-could-save-you-years',
  },
}

function addSeriesCrossLink(content: string, slug: string): string {
  const link = SERIES_CROSS_LINKS[slug]
  if (!link) return content
  return content.replace(link.find, (match) => `[${match}](/resources/${link.slug})`)
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getMediumArticleBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    excerpt: post.excerpt,
    imageUrl: post.imageUrl,
    date: post.date,
    author: post.author,
    slug: post.slug,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.margarita-dautova.com/' },
    { name: 'Resources', url: 'https://www.margarita-dautova.com/resources' },
    { name: post.title, url: `https://www.margarita-dautova.com/resources/${post.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-600 mb-4">
            {post.category}
          </p>
          <h1 className="font-serif text-display md:text-display-lg text-neutral-900 text-balance mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <span>{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </Container>
      </section>

      {/* Featured image */}
      {post.imageUrl && (
        <Container size="narrow" className="mb-4">
          <div className="bg-neutral-100 rounded-sm overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 768px"
              unoptimized
              priority
            />
          </div>
        </Container>
      )}

      {/* Article body */}
      <section className="py-12 md:py-16 bg-white">
        <Container size="narrow">
          <div className="space-y-6 text-stone-600 leading-relaxed">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="font-serif text-heading-lg text-stone-900 mt-10 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-serif text-heading text-stone-900 mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-stone-600 leading-relaxed">{children}</p>
                ),
                a: ({ href, children }) => {
                  const isInternal = href?.startsWith('/')
                  return (
                    <a
                      href={href}
                      {...(!isInternal && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="text-primary-600 hover:text-primary-700 underline underline-offset-2"
                    >
                      {children}
                    </a>
                  )
                },
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 space-y-2">{children}</ul>
                ),
                li: ({ children }) => <li className="text-stone-600">{children}</li>,
                strong: ({ children }) => (
                  <strong className="text-stone-900 font-semibold">{children}</strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary-200 pl-6 italic text-stone-700">
                    {children}
                  </blockquote>
                ),
                img: ({ src, alt }) =>
                  typeof src === 'string' ? (
                    <span className="block my-6 rounded-sm overflow-hidden">
                      <Image
                        src={src}
                        alt={alt || ''}
                        width={768}
                        height={432}
                        className="w-full h-auto"
                        unoptimized
                      />
                    </span>
                  ) : null,
              }}
            >
              {addSeriesCrossLink(
                stripDuplicateFeaturedImage(
                  stripDuplicateTitle(post.content, post.title),
                  post.imageUrl
                ),
                post.slug
              )}
            </ReactMarkdown>
          </div>

          {/* Attribution + CTA */}
          <div className="mt-10 pt-6 border-t border-stone-200">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
            >
              Originally published on Medium →
            </a>
          </div>

          <div className="mt-10 p-6 md:p-8 bg-stone-100/50 border border-stone-200 rounded-sm text-center">
            <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
              Ready to talk through your own transition?
            </h3>
            <p className="text-stone-600 mb-6">
              Book a free 30-minute discovery call and let&apos;s explore what&apos;s next.
            </p>
            <Button href="/book">Book a Free Discovery Call</Button>
          </div>
        </Container>
      </section>

      <LeadMagnetSection />
    </>
  )
}
