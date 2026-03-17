import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import BlogCard from '@/components/BlogCard'
import { fetchMediumArticles } from '@/lib/medium'

export const metadata: Metadata = {
  title: 'Resources & Insights',
  description:
    'Articles, guides, and insights on leadership, career development, and professional growth from executive coach Margarita Dautova.',
}


export default async function ResourcesPage() {
  // Fetch articles from Medium
  const blogPosts = await fetchMediumArticles('rita.dautova')
  
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary-600 mb-4">
              Resources
            </p>
            <h1 className="font-serif text-display md:text-display-lg text-neutral-900 text-balance">
              Insights for your journey
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Practical articles on leadership, career development, and navigating professional 
              transitions. No fluff — just actionable insights.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <Section background="white">
        <Container size="wide">
          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                readingTime={post.readingTime}
                date={post.date}
                imageUrl={post.imageUrl}
                link={post.link}
              />
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-neutral-500 text-sm mb-4">
                No articles available at the moment. Check back soon!
              </p>
            </div>
          )}
        </Container>
      </Section>

    </>
  )
}
