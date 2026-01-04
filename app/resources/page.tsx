import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import BlogCard from '@/components/BlogCard'
import NewsletterForm from '@/components/NewsletterForm'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Resources & Insights',
  description:
    'Articles, guides, and insights on leadership, career development, and professional growth from executive coach Margarita Dautova.',
}

/* TODO: These would normally be fetched from a CMS or filesystem */
const blogPosts = [
  {
    slug: 'signs-ready-for-career-change',
    title: "7 Signs You're Ready for a Career Change (Even If It Scares You)",
    excerpt:
      "Feeling restless in your role? Wondering if there's something more? Here are seven signs that it might be time for a change — and why that's actually a good thing.",
    category: 'Career Transitions',
    readingTime: '6 min read',
    date: '2024-01-15',
  },
  {
    slug: 'first-90-days-leadership-role',
    title: 'The First 90 Days in a Leadership Role: A Strategic Playbook',
    excerpt:
      "The first three months in a new leadership position are critical. Here's a practical framework for making the right impression and building lasting success.",
    category: 'Leadership',
    readingTime: '8 min read',
    date: '2024-01-08',
  },
  {
    slug: 'overcoming-imposter-syndrome-executives',
    title: 'Overcoming Imposter Syndrome: A Guide for High-Achievers',
    excerpt:
      "That voice telling you you're not good enough? It affects even the most successful leaders. Here's how to recognize it, understand it, and move past it.",
    category: 'Mindset',
    readingTime: '7 min read',
    date: '2024-01-02',
  },
]

const categories = [
  'All',
  'Leadership',
  'Career Transitions',
  'Mindset',
  'Professional Growth',
]

export default function ResourcesPage() {
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
          {/* Category Filter (static for now) */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
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
              />
            ))}
          </div>

          {/* Load More (placeholder) */}
          <div className="mt-12 text-center">
            <p className="text-neutral-500 text-sm mb-4">
              More articles coming soon...
            </p>
            {/* TODO: Implement pagination when more posts exist */}
          </div>
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

