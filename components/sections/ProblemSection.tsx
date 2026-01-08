import Container from '@/components/Container'
import Button from '@/components/Button'

export default function ProblemSection() {
  const painPoints = [
    "You're successful on paper but feel stuck or unfulfilled",
    "You're burned out but can't afford to step back",
    "You know you need a change but don't know what's next",
    "You're considering a career pivot but fear starting over",
    "You've lost confidence in your abilities or direction",
    "You're in a new leadership role and feel like an imposter",
    "You're torn between security and pursuing something meaningful",
  ]

  return (
    <section className="section-padding bg-white">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              You're Not Alone
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-6">
              If you're feeling any of this, you're at a decision point—not broken
            </h2>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {painPoints.map((point, index) => (
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
              <strong>You're not broken.</strong> You're at a crossroads—and that's exactly where meaningful change begins.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The confusion, the exhaustion, the "what's next?" feeling? That's your system telling you something needs to shift. 
              Not because you're failing, but because you're ready for what's next.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-stone-600 mb-6">
              Here's how we turn this moment into momentum:
            </p>
            <Button href="/book" variant="primary" size="lg">
              Book Your Discovery Call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

