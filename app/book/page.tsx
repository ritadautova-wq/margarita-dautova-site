import { Metadata } from 'next'
import BookHero from '@/components/book/BookHero'
import FitSection from '@/components/book/FitSection'
import OutcomesGrid from '@/components/book/OutcomesGrid'
import ProcessSteps from '@/components/book/ProcessSteps'
// TODO: Uncomment when testimonials are ready
// import BookTestimonials from '@/components/book/BookTestimonials'
import LazyCalendarEmbed from '@/components/book/LazyCalendarEmbed'
import BookFAQ from '@/components/book/BookFAQ'
import BookFinalCTA from '@/components/book/BookFinalCTA'
import BookLeadMagnet from '@/components/book/BookLeadMagnet'
import BookStickyMobileCTA from '@/components/book/BookStickyMobileCTA'
import { faqs } from '@/lib/bookPageContent'
import { generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Book Your Free Discovery Call',
  description:
    'Get clear next steps in 30 minutes. A free discovery call for professionals stuck between staying and leaving. No pitch, no pressure—just clarity.',
}

export default function BookPage() {
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      {/* FAQ JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Skip to calendar link for accessibility */}
      <a
        href="#book-calendar"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Skip to calendar
      </a>

      {/* Conversion Funnel Sections */}
      <BookHero />
      <FitSection />
      <OutcomesGrid />
      <ProcessSteps />
      {/* TODO: Uncomment when testimonials are ready */}
      {/* <BookTestimonials /> */}
      <LazyCalendarEmbed calLink="margarita-dautova" eventType="discovery-call" />
      <BookFAQ />
      <BookFinalCTA />
      <BookLeadMagnet />
      <BookStickyMobileCTA />
    </>
  )
}
