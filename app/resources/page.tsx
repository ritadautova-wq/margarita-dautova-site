import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import BlogCard from '@/components/BlogCard'
import NewsletterForm from '@/components/NewsletterForm'
import Button from '@/components/Button'
import { fetchMediumArticles } from '@/lib/medium'

export const metadata: Metadata = {
  title: 'Resources & Insights',
  description:
    'Articles, guides, and insights on leadership, career development, and professional growth from executive coach Margarita Dautova.',
}


export default async function ResourcesPage() {
  // Fetch articles from Medium
  const blogPosts = await fetchMediumArticles('rita.dautova')
  
  // Extract unique categories from articles
  const allCategories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]
  
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

      {/* Lead Magnet Section */}
      <Section background="cream" size="sm">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-sm md:text-heading text-neutral-900">
              Free Guide: 7 Questions to Ask Yourself Before Changing Careers
            </h2>
            <p className="mt-3 text-neutral-600">
              {/* TODO: Create actual lead magnet PDF and update */}
              A practical workbook to help you gain clarity on your next career move. 
              Get it free when you join the newsletter.
            </p>
            <div className="mt-6 max-w-md mx-auto">
              <NewsletterForm variant="inline" />
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              No spam, unsubscribe anytime. Your privacy matters.
            </p>
          </div>
        </Container>
      </Section>

      {/* Blog Posts */}
      <Section background="white">
        <Container size="wide">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {allCategories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200
                  ${
                    category === 'All'
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

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

      {/* Newsletter Section */}
      <Section background="light">
        <Container size="narrow">
          <div className="text-center">
            <SectionHeader
              eyebrow="Stay in touch"
              title="Get insights delivered"
              description="Join professionals who receive my occasional newsletter — thoughtful insights on leadership, career growth, and navigating your professional journey."
            />
            <div className="mt-8 max-w-md mx-auto">
              <NewsletterForm variant="stacked" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

