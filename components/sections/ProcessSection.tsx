import Container from '@/components/Container'
import Button from '@/components/Button'

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      name: 'CLARIFY',
      title: 'Understand Where You Are',
      description: 'We start by getting honest about what\'s working and what isn\'t. Through structured reflection, we identify your core values, hidden strengths, and the real reasons you\'re feeling stuck.',
      duration: 'Weeks 1-3',
    },
    {
      number: '02',
      name: 'POSITION',
      title: 'Define Where You Want to Go',
      description: 'With clarity on your starting point, we explore your options. We map out potential paths—whether that\'s a pivot, a promotion, or a complete reset—and identify which direction aligns with who you are now.',
      duration: 'Weeks 4-6',
    },
    {
      number: '03',
      name: 'ACT',
      title: 'Move Forward with Confidence',
      description: 'Insights are useless without action. We create a concrete plan with milestones, build your confidence through small wins, and navigate obstacles as they arise. You leave ready to execute.',
      duration: 'Weeks 7-12',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            The Method
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            The 90-Day Clarity Sprint
          </h2>
          <p className="text-stone-600 text-lg">
            A structured, practical approach to career transitions that actually works. 
            No fluff, no vague advice—just clear steps forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (not on last item) */}
              {index < steps.length - 1 && (
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
            Ready to start your clarity sprint?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" size="lg">
              Book Your Discovery Call
            </Button>
            <Button href="/free" variant="secondary" size="lg">
              Get the Free Playbook
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

