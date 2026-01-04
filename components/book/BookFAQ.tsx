'use client'

import { useState } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { faqs } from '@/lib/bookPageContent'
import { trackEvent, AnalyticsEvents } from '@/lib/analytics'

export default function BookFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    const isOpening = openIndex !== index
    setOpenIndex(isOpening ? index : null)
    if (isOpening) {
      trackEvent(AnalyticsEvents.FAQ_EXPAND, { question: faqs[index].question })
    }
  }

  return (
    <Section background="light">
      <Container size="narrow">
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 mb-4">
            Common questions
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Everything you need to know before booking.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white border border-stone-200 rounded-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="font-medium text-stone-900 pr-8">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-stone-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

