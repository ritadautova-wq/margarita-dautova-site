import Container from '@/components/Container'
import Section from '@/components/Section'
import { outcomes } from '@/lib/bookPageContent'

export default function OutcomesGrid() {
  return (
    <Section background="light">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 mb-4">
            What you'll leave with
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Concrete outcomes, not vague promises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
                {outcome.headline}
              </h3>
              <p className="text-stone-600">{outcome.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

