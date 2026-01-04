import Container from '@/components/Container'
import Section from '@/components/Section'
import { processSteps } from '@/lib/bookPageContent'

export default function ProcessSteps() {
  return (
    <Section background="white">
      <Container size="narrow">
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 mb-4">
            How the call works
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Simple, focused, and designed to give you clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-serif mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-heading text-stone-900 mb-2">
                {step.title}
              </h3>
              <p className="text-stone-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

