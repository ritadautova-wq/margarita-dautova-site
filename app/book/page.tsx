import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import LazyCalendarEmbed from '@/components/book/LazyCalendarEmbed'
import BookStickyMobileCTA from '@/components/book/BookStickyMobileCTA'
import { 
  hero, 
  exploratoryTopics, 
  whatThisIsNot, 
  mutualFitStatement, 
  finalCTA, 
  calendarSection,
  bookPageMetadata,
  faqs
} from '@/lib/bookPageContent'

export const metadata: Metadata = {
  title: bookPageMetadata.title,
  description: bookPageMetadata.description,
}

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <Container size="narrow">
          <div className="text-center">
            <h1 className="font-serif text-display md:text-display-lg text-stone-900 mb-6">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              {hero.subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section background="white">
        <Container size="narrow">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* What we'll talk about */}
            <div>
              <h2 className="font-serif text-heading text-stone-900 mb-6">
                What we’ll talk about
              </h2>
              <ul className="space-y-4">
                {exploratoryTopics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 font-serif text-xl leading-none">•</span>
                    <span className="text-stone-600 leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What this call is not */}
            <div>
              <h2 className="font-serif text-heading text-stone-900 mb-6">
                What this call is not
              </h2>
              <ul className="space-y-4">
                {whatThisIsNot.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-stone-400 font-serif text-xl leading-none">•</span>
                    <span className="text-stone-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-stone-100 text-center max-w-2xl mx-auto">
            <p className="text-stone-800 font-medium italic text-lg leading-relaxed">
              {mutualFitStatement}
            </p>
          </div>
        </Container>
      </Section>

      {/* Calendar Section */}
      <section id="book-calendar" className="py-16 md:py-24 bg-stone-50">
        <Container size="narrow">
          <div className="text-center mb-12">
            <h2 className="font-serif text-heading-lg text-stone-900 mb-4">
              {calendarSection.headline}
            </h2>
            <p className="text-stone-600">{calendarSection.subheadline}</p>
          </div>
          
          <LazyCalendarEmbed calLink="margarita-dautova" eventType="discovery-call" />
          
          <div className="mt-12 text-center">
            <p className="text-sm text-stone-500 italic">
              {calendarSection.reassuranceText}
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section (Optional, keeping it clean) */}
      <Section background="white">
        <Container size="narrow">
          <h2 className="font-serif text-heading text-stone-900 text-center mb-10">
            A few common questions
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-medium text-stone-900 mb-2">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gentle Final CTA */}
      <section className="py-20 bg-primary-700 text-white">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-white mb-6">
              {finalCTA.headline}
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
              {finalCTA.subheadline}
            </p>
            <div className="inline-flex flex-col items-center">
              <a
                href="#book-calendar"
                className="inline-flex items-center justify-center px-8 py-4 font-medium 
                  bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
              >
                {finalCTA.primaryCTA}
              </a>
              <p className="mt-4 text-sm text-primary-200 uppercase tracking-widest">
                {finalCTA.microcopy}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <BookStickyMobileCTA />
    </>
  )
}
