import Container from '@/components/Container'
import Button from '@/components/Button'
import Link from 'next/link'

export default function OffersSection() {
  const offers = [
    {
      title: '90-Day Clarity Sprint',
      subtitle: '3-month intensive program',
      description: 'Deep, sustained work for meaningful transformation. Perfect for career transitions, burnout recovery, or major leadership shifts.',
      includes: [
        'Bi-weekly coaching sessions (60-75 min)',
        'Personalized development plan',
        'Email support between sessions',
        'The Clarity Sprint framework',
        'Mid-point and final reviews',
      ],
      outcomes: [
        'Clear direction on your next move',
        'Confidence to take action',
        'Sustainable boundaries and practices',
        'A concrete action plan',
      ],
      idealFor: 'Career transitions, burnout recovery, leadership development',
      price: 'Starting from €XXX/month',
      priceNote: 'Payment plans available',
      cta: 'Apply for the Sprint',
      href: '/contact?type=ongoing',
      featured: true,
    },
    {
      title: 'Single Strategy Session',
      subtitle: '90-minute deep dive',
      description: 'A focused session for when you need clarity on something specific. Come with a question, leave with perspective and next steps.',
      includes: [
        'Pre-session questionnaire',
        '90-minute intensive session',
        'Session summary & notes',
        'Optional 30-min follow-up call',
      ],
      outcomes: [
        'Clarity on your specific challenge',
        'New perspective on your situation',
        'Concrete next steps',
        'Experience of the coaching process',
      ],
      idealFor: 'Specific decisions, exploring fit, getting unstuck',
      price: 'From €XXX',
      priceNote: 'Follow-up session available at reduced rate',
      cta: 'Book a Session',
      href: '/contact?type=single',
      featured: false,
    },
    {
      title: 'Team & Corporate',
      subtitle: 'Custom programs',
      description: 'Coaching and workshop solutions for organizations investing in their people. Tailored programs for teams, leaders, and companies.',
      includes: [
        'Discovery conversation with stakeholders',
        'Customized program design',
        '1:1 coaching, group coaching, or workshops',
        'Progress reporting (confidentiality maintained)',
        'Program evaluation and recommendations',
      ],
      outcomes: [
        'Stronger leadership bench',
        'Improved retention and engagement',
        'Better team dynamics',
        'Culture of development and growth',
      ],
      idealFor: 'HR leaders, team managers, organizations',
      price: 'Contact for custom proposal',
      priceNote: 'Flexible engagement structures',
      cta: 'Get in Touch',
      href: '/contact?type=corporate',
      featured: false,
    },
  ]

  return (
    <section className="section-padding bg-white">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Ways to Work Together
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            Choose the format that fits your situation
          </h2>
          <p className="text-stone-600 text-lg">
            Different situations call for different approaches. Here's how I typically work with clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-stone-50 border rounded-sm p-6 md:p-8 flex flex-col transition-all duration-300 ${
                offer.featured
                  ? 'border-primary-400 ring-1 ring-primary-200'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              {offer.featured && (
                <span className="inline-block text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 mb-4 self-start">
                  Most Popular
                </span>
              )}
              
              <h3 className="font-serif text-heading text-stone-900 mb-1">
                {offer.title}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-4">
                {offer.subtitle}
              </p>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                {offer.description}
              </p>

              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="text-xs font-medium text-stone-900 uppercase tracking-wider mb-2">
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {offer.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-stone-900 uppercase tracking-wider mb-2">
                    What You'll Walk Away With
                  </h4>
                  <ul className="space-y-1">
                    {offer.outcomes.map((item, i) => (
                      <li key={i} className="text-sm text-stone-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-stone-200">
                <p className="text-xs text-stone-500 mb-1">Ideal for</p>
                <p className="text-sm text-stone-700 mb-4">{offer.idealFor}</p>
                
                <div className="mb-4">
                  <p className="font-medium text-stone-900">{offer.price}</p>
                  <p className="text-xs text-stone-500 mt-1">{offer.priceNote}</p>
                </div>
                
                <Link
                  href={offer.href}
                  className={`block text-center py-3 font-medium transition-all duration-300 ${
                    offer.featured
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'border border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-stone-100'
                  }`}
                >
                  {offer.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Not Sure Section */}
        <div className="text-center bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8">
          <p className="text-stone-600 mb-4">
            Not sure which format is right for you?
          </p>
          <p className="text-sm text-stone-500 mb-6">
            Book a free discovery call and we'll figure it out together. No pressure, just an honest conversation.
          </p>
          <Button href="/book" variant="primary" size="lg">
            Book Your Strategy Call
          </Button>
        </div>
      </Container>
    </section>
  )
}

