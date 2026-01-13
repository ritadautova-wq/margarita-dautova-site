import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coaching Services',
  description:
    'Explore coaching formats: ongoing programs, single sessions, and corporate solutions. Find the right approach for your career transition or development.',
}

const coachingFormats = [
  {
    id: 'ongoing',
    title: '90-Day Clarity & Direction Program',
    duration: '3 months',
    description:
      'Deep, sustained work for meaningful transformation. Perfect for professional transitions, burnout recovery, or major leadership shifts.',
    longDescription: `This program is for people who want more than a quick fix. It's for those ready to invest in themselves — not just to solve an immediate problem, but to fundamentally shift how they approach their career.

Over 12 weeks, we work through a structured approach: first clarifying where you are, then defining where you want to go, and finally moving forward with confidence. Between sessions, you'll have space to reflect, experiment, and integrate what you're learning. I'm available by email for support when you need it.

The work is tailored entirely to you. We start by understanding your values, strengths, and the real reasons you're feeling stuck. Then we map out potential paths and identify which direction aligns with who you are now.`,
    includes: [
      '6 coaching sessions (60 minutes each)',
      'Session summary & notes after each session',
      'Personalized development plan',
      'Email support between sessions',
      'Mid-point and final reviews',
    ],
    outcomes: [
      'Knowing your values and strengths',
      'Clear direction on your next move',
      'Confidence to take action',
      'Sustainable boundaries',
      'A concrete action plan',
    ],
    idealFor: [
      'Professional transitions and career pivots',
      'Burnout recovery',
      'Leadership development',
      'Finding meaning and purpose at work',
    ],
    investment: '€499',
    investmentNote: 'Payment plans available',
  },
  {
    id: 'single',
    title: 'Single Session',
    duration: '60 minutes',
    description:
      'A focused session for when you need clarity on something specific. Come with a question, leave with perspective and next steps.',
    longDescription: `Not everyone needs a full program. Sometimes you just need a dedicated space to think through a specific challenge — a decision you're facing, a situation that's weighing on you, or a problem you can't seem to solve on your own.

A single session gives you that space. Before we meet, you'll complete a brief questionnaire so I understand your situation. During our 60 minutes together, we dive deep into what's really going on and work toward clarity.

This is also a great way to experience coaching if you're curious about what it's like before committing to a longer engagement.`,
    includes: [
      'Pre-session questionnaire',
      '60-minute coaching session',
      'Session summary & notes',
      '7 days email support after session',
      'Optional follow-up session',
    ],
    outcomes: [
      'Clarity on your specific challenge',
      'New perspective on your situation',
      'Concrete next steps',
      'Experience of the coaching process',
    ],
    idealFor: [
      'Specific decisions or crossroads',
      'Exploring if coaching is right for you',
      'Getting unstuck on a particular issue',
      'Preparing for important conversations',
    ],
    investment: '€90',
    investmentNote: 'Follow-up session available at reduced rate',
  },
  {
    id: 'corporate',
    title: 'Team & Corporate Programs',
    duration: 'Custom',
    description:
      'Coaching and workshop solutions for organizations investing in their people. Tailored programs for teams, leaders, and companies.',
    longDescription: `Organizations that invest in coaching see real returns — in retention, engagement, and leadership capability. I work with companies to design programs that fit their specific needs and culture.

This might look like 1:1 coaching for key leaders, group coaching for a leadership cohort, or facilitated workshops on topics like career development, burnout prevention, or navigating change.

Every engagement starts with understanding your organization's context and goals. From there, we design something that works for your people and your budget.`,
    includes: [
      'Discovery conversation with stakeholders',
      'Customized program design',
      '1:1 coaching, group coaching, or workshops',
      'Progress reporting (confidentiality maintained)',
      'Program evaluation and recommendations',
    ],
    outcomes: [
      'Improved retention and engagement',
      'Better team dynamics',
      'Culture of development and growth',
    ],
    idealFor: [
      'HR and People leaders',
      'Team managers and executives',
      'Organizations going through change',
      'Companies investing in leadership development',
    ],
    investment: 'Contact for custom proposal',
    investmentNote: 'Flexible engagement structures',
  },
]

const faqs = [
  {
    question: "What if I'm not sure which format is right for me?",
    answer:
      "That's completely normal. Book a free discovery call and we'll talk it through. I'll help you figure out what makes sense based on your situation, goals, and budget. There's no pressure to decide on the call.",
  },
  {
    question: "How much does coaching cost?",
    answer:
      "The 90-Day Clarity & Direction Program is €499 (payment plans available). Single sessions are €90 for 60 minutes. Corporate programs are customized based on your organization's needs.",
  },
  {
    question: "How do online sessions work?",
    answer:
      "We meet via video call (usually Zoom). All you need is a quiet space and a stable internet connection. Online coaching is just as effective as in-person — many clients actually prefer the convenience.",
  },
  {
    question: "Can I switch from one format to another?",
    answer:
      "Yes. Many people start with a single session to test the waters, then move into the 90-Day program. Or they complete the program and occasionally book single sessions afterward. We can always adjust.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Life happens. You can reschedule sessions with 48 hours' notice at no charge. For the 90-Day program, we can discuss pausing if circumstances change significantly.",
  },
  {
    question: "Is everything I share confidential?",
    answer:
      "Absolutely. Everything we discuss stays between us. For corporate engagements, I may provide general progress updates to sponsors, but never specific content from sessions — and always with your agreement.",
  },
]

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Coaching Services
          </p>
          <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
            Ways we can work together
          </h1>
          <p className="mt-6 text-body-lg text-stone-600 max-w-2xl mx-auto">
            Different situations call for different approaches. Here's how I typically work 
            with clients — though everything can be adapted to fit your specific needs.
          </p>
        </div>
      </section>

      {/* Formats Detail */}
      {coachingFormats.map((format, index) => (
        <section
          key={format.id}
          id={format.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-stone-100/50'}`}
        >
          <div className="container-default">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Main content */}
              <div>
                <span className="text-sm font-medium text-primary-600">
                  {format.duration}
                </span>
                <h2 className="font-serif text-heading-lg md:text-display text-stone-900 mt-2 mb-6">
                  {format.title}
                </h2>
                
                <div className="prose-custom whitespace-pre-line">
                  {format.longDescription}
                </div>

                <div className="mt-8 p-6 bg-primary-50 border border-primary-100">
                  <p className="text-sm text-stone-500 mb-1">Investment</p>
                  {/* TODO: Replace with real pricing */}
                  <p className="text-xl font-medium text-stone-900">{format.investment}</p>
                  <p className="text-sm text-stone-500 mt-1">{format.investmentNote}</p>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/contact?type=${format.id}`}
                    className="inline-flex items-center justify-center px-6 py-3 font-medium 
                      bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
                  >
                    {format.id === 'corporate' ? 'Get in touch' : 'Apply for this program'}
                  </Link>
                </div>
              </div>

              {/* Details columns */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-stone-900 mb-4 pb-2 border-b border-stone-200">
                    What's included
                  </h3>
                  <ul className="space-y-3">
                    {format.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" 
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-stone-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-stone-900 mb-4 pb-2 border-b border-stone-200">
                    Typical outcomes
                  </h3>
                  <ul className="space-y-3">
                    {format.outcomes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" 
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-stone-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-stone-900 mb-4 pb-2 border-b border-stone-200">
                    Ideal for
                  </h3>
                  <ul className="space-y-2">
                    {format.idealFor.map((item, i) => (
                      <li key={i} className="text-stone-600 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Questions
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900">
              Frequently asked
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 border border-stone-200">
                <h3 className="font-medium text-stone-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-stone-600 mb-4">Have another question?</p>
            <Link
              href="/contact"
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-xl mx-auto">
            Book a free discovery call. We'll talk about your situation and figure out 
            what approach makes sense — or whether coaching is even the right fit.
          </p>
          
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium 
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Book Free Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
