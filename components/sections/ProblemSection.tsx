import Container from '@/components/Container'
import Button from '@/components/Button'
import { problemSection } from '@/lib/homePageContent'

export default function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              {problemSection.eyebrow}
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-6">
              {problemSection.headline}
            </h2>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {problemSection.painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-stone-50 border border-stone-200 rounded-sm"
              >
                <svg
                  className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-stone-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Transition Message */}
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 md:p-8 mb-8">
            <p className="text-stone-800 text-lg md:text-xl leading-relaxed mb-4">
              <strong>{problemSection.transitionMessage.bold}</strong> {problemSection.transitionMessage.text}
            </p>
            <p className="text-stone-600 leading-relaxed">
              {problemSection.transitionMessage.description}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-stone-600 mb-6">
              {problemSection.ctaText}
            </p>
            <Button href="/book" variant="primary" size="lg">
              {problemSection.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

