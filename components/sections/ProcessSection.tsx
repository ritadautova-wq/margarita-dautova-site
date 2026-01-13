import Container from '@/components/Container'
import Button from '@/components/Button'
import { processSection } from '@/lib/homePageContent'

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            {processSection.eyebrow}
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            {processSection.headline}
          </h2>
          <p className="text-stone-600 text-lg">
            {processSection.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {processSection.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (not on last item) */}
              {index < processSection.steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-stone-200 -translate-x-1/2 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-600 rounded-full"></div>
                </div>
              )}

              <div className="relative bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8 h-full">
                {/* Step Number */}
                <div className="text-primary-600 font-serif text-4xl md:text-5xl font-bold mb-2">
                  {step.number}
                </div>
                
                {/* Step Name */}
                <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                  {step.name}
                </p>

                {/* Title */}
                <h3 className="font-serif text-heading text-stone-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Duration */}
                <p className="text-sm text-stone-500 font-medium">
                  {step.duration}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-stone-600 mb-6">
            {processSection.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" size="lg">
              {processSection.primaryCTALabel}
            </Button>
            <Button href="/free" variant="secondary" size="lg">
              {processSection.secondaryCTALabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

