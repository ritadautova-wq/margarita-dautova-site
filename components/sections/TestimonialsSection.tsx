import Container from '@/components/Container'
import Link from 'next/link'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I came to Margarita feeling completely stuck after 12 years in finance. Within 90 days, I had clarity on my pivot path and the confidence to make it happen. I'm now in a sustainability role that actually aligns with my values—and I didn't have to start from zero.",
      name: 'Marco T.',
      role: 'Finance Manager → Sustainability Lead',
      result: 'Career pivot completed in 4 months',
      featured: true,
    },
    {
      quote: "The burnout was real. Margarita helped me rebuild boundaries and reconnect with why I love my work. Six months later, I have a new role, better balance, and I'm actually energized by my job again.",
      name: 'Clara S.',
      role: 'Senior Manager, Tech',
      result: 'Recovered from burnout, negotiated better role',
    },
    {
      quote: "I was promoted to VP but felt like an imposter trying to lead like my predecessor. Margarita helped me find my own leadership voice. My team engagement scores improved 40% in the first quarter.",
      name: 'Lisa M.',
      role: 'VP of Operations',
      result: 'Developed authentic leadership style',
    },
  ]

  const caseStudy = {
    title: 'From Stuck to Strategic: A Career Pivot Story',
    client: 'Senior professional, 15 years experience',
    situation: 'After over a decade in corporate finance, Sarah felt trapped. She knew she wanted something different but couldn\'t articulate what—and the fear of starting over was paralyzing.',
    approach: 'We spent 6 weeks exploring values, interests, and transferable skills. Rather than rushing to a decision, we focused on experimentation: informational interviews, small projects, and reflection exercises.',
    outcome: 'Sarah transitioned to a sustainability-focused role that combines her analytical skills with her values. The move felt natural rather than terrifying because she\'d done the inner work first. She\'s now mentoring others on purposeful career transitions.',
  }

  return (
    <section className="section-padding bg-primary-50/30">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Real Results
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            What clients say about working together
          </h2>
          <p className="text-stone-600 text-lg">
            These aren't generic testimonials—they're real transformations from real people.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 border rounded-sm ${
                testimonial.featured
                  ? 'border-primary-300 ring-1 ring-primary-100 md:col-span-3 lg:col-span-1'
                  : 'border-stone-200 hover:border-stone-300 transition-colors'
              }`}
            >
              {testimonial.result && (
                <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mb-3">
                  {testimonial.result}
                </p>
              )}
              <blockquote className={`text-stone-700 leading-relaxed mb-6 ${
                testimonial.featured ? 'text-lg' : ''
              }`}>
                "{testimonial.quote}"
              </blockquote>
              <div className="pt-4 border-t border-stone-100">
                <p className="font-medium text-stone-900">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-white border border-stone-200 rounded-sm overflow-hidden mb-10">
          <div className="p-6 md:p-8 border-b border-stone-100 bg-stone-50">
            <p className="text-sm text-primary-600 font-medium uppercase tracking-wider mb-2">
              Case Study
            </p>
            <h3 className="font-serif text-heading text-stone-900">
              {caseStudy.title}
            </h3>
            <p className="text-sm text-stone-500 mt-1">{caseStudy.client}</p>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                  The Situation
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {caseStudy.situation}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                  The Approach
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {caseStudy.approach}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                  The Outcome
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {caseStudy.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Link to More */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
          >
            Read more client stories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  )
}

