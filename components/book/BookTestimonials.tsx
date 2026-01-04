import Container from '@/components/Container'
import Section from '@/components/Section'
import { testimonials } from '@/lib/bookPageContent'

export default function BookTestimonials() {
  // Show first 3 testimonials, highlight the first one
  const displayedTestimonials = testimonials.slice(0, 3)

  return (
    <Section background="light">
      <Container size="narrow">
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 mb-4">
            What others say about the call
          </h2>
        </div>

        <div className="space-y-6">
          {/* Highlighted first testimonial */}
          {displayedTestimonials[0] && (
            <div className="bg-white border-2 border-primary-200 rounded-sm p-8 md:p-10 shadow-sm">
              <p className="text-primary-600 font-medium text-sm mb-3">
                {displayedTestimonials[0].resultHeadline}
              </p>
              <blockquote className="text-lg md:text-xl text-stone-900 leading-relaxed mb-4">
                "{displayedTestimonials[0].quote}"
              </blockquote>
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <span className="font-medium">
                  {displayedTestimonials[0].name}
                </span>
                {displayedTestimonials[0].role && (
                  <>
                    <span>•</span>
                    <span>{displayedTestimonials[0].role}</span>
                  </>
                )}
                {displayedTestimonials[0].location && (
                  <>
                    <span>•</span>
                    <span>{displayedTestimonials[0].location}</span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Other testimonials in grid */}
          {displayedTestimonials.length > 1 && (
            <div className="grid md:grid-cols-2 gap-6">
              {displayedTestimonials.slice(1).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-stone-200 rounded-sm p-6"
                >
                  <p className="text-primary-600 font-medium text-sm mb-2">
                    {testimonial.resultHeadline}
                  </p>
                  <blockquote className="text-stone-700 leading-relaxed mb-3">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm text-stone-600">
                    <span className="font-medium">{testimonial.name}</span>
                    {testimonial.role && (
                      <>
                        {' • '}
                        <span>{testimonial.role}</span>
                      </>
                    )}
                    {testimonial.location && (
                      <>
                        {' • '}
                        <span>{testimonial.location}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TODO: Replace with real testimonials */}
      </Container>
    </Section>
  )
}

