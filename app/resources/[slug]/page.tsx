import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { getMediumArticleBySlug, getAllMediumArticleSlugs } from '@/lib/medium'

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

  // Redirect to Medium article
  redirect(post.link)
}
