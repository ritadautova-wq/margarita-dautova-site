import Container from '@/components/Container'
import { faqSection } from '@/lib/homePageContent'

export default function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            {faqSection.eyebrow}
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            {faqSection.headline}
          </h2>
          <p className="text-stone-600 text-lg">
            {faqSection.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqSection.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-stone-50 border border-stone-200 rounded-sm p-6"
            >
              <h3 className="font-medium text-stone-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-stone-600 mb-4">Have another question?</p>
          <a
            href="/contact"
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}

