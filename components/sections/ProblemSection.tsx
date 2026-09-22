import Container from '@/components/Container'
import Button from '@/components/Button'
import { problemSection } from '@/lib/homePageContent'

export default function ProblemSection() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-10 lg:pb-12 bg-white">
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

          {/* Pain Points — two columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {problemSection.painPointColumns.map((column, colIndex) => (
              <div key={colIndex}>
                <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-4">
                  {column.label}
                </p>
                <div className="space-y-4">
                  {column.points.map((point, index) => (
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
                      <p className="font-medium text-stone-900">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Transition Message */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-stone-900 font-medium leading-relaxed mb-3">
              {problemSection.transitionMessage.bold}
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

