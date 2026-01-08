import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  readingTime: string
  date: string
  imageUrl?: string
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  readingTime,
  date,
  imageUrl,
}: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/resources/${slug}`} className="block">
        {/* Article Image */}
        <div className="aspect-video bg-neutral-100 rounded-sm overflow-hidden mb-5 relative">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-400">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
          <span className="text-primary-600 font-medium">{category}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>

        {/* Content */}
        <h3 className="font-serif text-xl text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600 leading-relaxed line-clamp-2">
          {excerpt}
        </p>

        {/* Read more link */}
        <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary-600 group-hover:gap-3 transition-all duration-200">
          Read article
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </article>
  )
}

