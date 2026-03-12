import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coaching Services',
  description:
    'Explore coaching formats: 90-Day Clarity Through Transition, Strategic Sessions, and workshops for organisations. Find the right approach for your situation.',
}

const coachingFormats = [
  {
    id: 'ongoing',
    title: '90-Day Clarity Through Transition',
    duration: '3 months',
    description:
      'For people in a meaningful transition who want to think clearly, decide intentionally, and move forward in a grounded way.',
    longDescription: `This program is for you if you're at a crossroads — professionally or personally — and sense that something important is shifting, but the next direction isn't fully clear yet.

Over 90 days, we create space to slow the moment down, understand what's actually happening beneath the surface, and translate that insight into decisions that hold in real life — not just on paper.

This is not about fixing yourself or rushing into change. It's about clarity, integration, and choosing what comes next in a way that supports your mental wellbeing and overall life fulfillment.`,
    includes: [
      '6 coaching sessions (60 min)',
      'Session summary & notes',
      'Personalized development plan',
      'Email support between sessions',
      'Mid-point and final reviews',
    ],
    outcomes: [
      'Making sense of a transition or uncertainty',
      'Clarifying what matters now',
      'Rebuilding trust in your thinking',
      'Grounded, sustainable next steps',
      'Decisions you can stand behind',
    ],
    idealFor: [
      'Career or identity transitions',
      'Living abroad or working in a non-native language',
      'Successful on paper but internally misaligned',
      'Ready for depth, not quick answers',
    ],
    investment: '€499',
    investmentNote: 'Limited number of places. Best suited for people ready to engage thoughtfully over time.',
  },
  {
    id: 'single',
    title: 'Strategic Session',
    duration: 'Focused thinking session',
    description:
      'For people who need to untangle one specific question, decision, or situation — and leave with clearer thinking.',
    longDescription: `The Strategic Session is a one-time, contained coaching conversation designed for moments when you don't need a long process — but you do need space to think well.

It's ideal if you're facing a concrete decision, feeling stuck in mental loops, or struggling to articulate what's actually going on — especially in a complex or international context.

This is not a "trial" session. It's a focused thinking intervention.`,
    useFor: [
      'A career or role decision',
      'Clarifying "what\'s next" when everything feels blurry',
      'Preparing for an important conversation or interview',
      'Making sense of a situation that feels emotionally or mentally loaded',
    ],
    includes: [
      'Pre-session questionnaire',
      '90-minute focused session',
      'Session summary & notes',
      'Optional follow-up session',
    ],
    outcomes: [
      'Making sense of a specific situation or decision',
      'Reducing mental noise',
      'Identifying grounded next steps',
      'Finding language that fits your experience',
    ],
    idealFor: [
      'Career decisions or crossroads',
      'Preparing for important conversations',
      'Getting unstuck on a particular issue',
    ],
    investment: '€150',
    investmentNote: '',
  },
  {
    id: 'corporate',
    title: 'Workshops & Coaching for Organisations',
    duration: 'Custom programs',
    description:
      'Supporting clarity, psychological safety, and sustainable performance in complex professional environments.',
    longDescription: `With over 10 years in HR and Talent Development, I have facilitated internal workshops and learning sessions for international teams and leaders — both in-person and in interactive virtual formats.

My facilitation style is structured, calm, and highly collaborative. I create psychological safety quickly, engage participants through reflection and dialogue, and guide groups toward practical, actionable outcomes.

Many of these sessions are designed to support teams during change, growth, or new stages of collaboration.`,
    includes: [
      'Discovery conversations with key stakeholders',
      'Interactive workshops (in-person or virtual)',
      'Group coaching sessions',
      'Individual coaching for leaders',
      'Programs tailored to your organisational context and growth phase',
    ],
    workshopTopics: [
      'Team collaboration & improving ways of working',
      'Giving and receiving feedback',
      'Team development & role clarity',
      'Team vision, alignment & strategy',
      'Team presentations & knowledge-sharing sessions',
      'Well-being & sustainable performance',
      'Mentoring programs (onboarding, training & check-ins)',
    ],
    outcomes: [
      'Clearer communication and stronger collaboration',
      'Psychological safety that supports performance',
      'Practical tools teams can apply immediately',
      'Sustainable ways of working — without burnout',
    ],
    idealFor: [
      'International organisations',
      'Growing teams',
      'High-responsibility roles',
      'Teams navigating transition or change',
    ],
    investment: 'Contact for custom proposal',
    investmentNote: 'Flexible engagement structures',
  },
]

const faqs = [
  {
    question: "What if I'm not sure which format is right for me?",
    answer:
      "If you're at an early stage or have one specific question, a Strategic Session is often enough. If you're navigating a broader transition or need space to integrate change over time, the 90-day program offers deeper support. You're also welcome to start with a conversation and decide from there.",
  },
  {
    question: "How much does coaching cost?",
    answer:
      "Investment is shared after an initial conversation to ensure we are the right fit. I take a limited number of 1:1 clients at a time to ensure deep, thoughtful attention for everyone I work with.",
  },
  {
    question: "How do online sessions work?",
    answer:
      "We meet via video call (usually Zoom). All you need is a quiet space and a stable internet connection. Online coaching is just as effective as in-person — many clients actually prefer the convenience.",
  },
  {
    question: "Can I switch from one format to another?",
    answer:
      "Yes. Many people start with a Strategic Session to explore a specific question, then move into the 90-Day program for deeper work. Or they complete the program and occasionally book strategic sessions afterward. We can always adjust.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Life happens. You can reschedule sessions with 24 hours' notice at no charge. For the 90-Day program, we can discuss pausing if circumstances change significantly.",
  },
  {
    question: "Is everything I share confidential?",
    answer:
      "Absolutely. Everything we discuss — in sessions, emails, or calls — is strictly confidential. The only exception applies if you are part of a corporate-sponsored program. In that case, I may provide general progress updates to sponsors (never specific content), and only with your explicit agreement. If I use AI tools to support preparation, reflection summaries, or material development, all information is fully anonymised. Your name and any identifying details are removed. No personal data is shared. Your privacy, trust, and psychological safety are essential to this work.",
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
            I work as a thinking partner for reflective professionals navigating significant transitions — especially international professionals living abroad or working in a non-native language. Here's how we can work together.
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
                {format.id === 'single' && (
                  <div>
                    <h3 className="font-medium text-stone-900 mb-4 pb-2 border-b border-stone-200">
                      What you can use this for
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'A career or role decision',
                        'Clarifying "what\'s next" when everything feels blurry',
                        'Preparing for an important conversation or interview',
                        'Making sense of a situation that feels emotionally or mentally loaded',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-stone-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {format.id === 'corporate' && format.workshopTopics && (
                  <div>
                    <h3 className="font-medium text-stone-900 mb-4 pb-2 border-b border-stone-200">
                      Workshop topics
                    </h3>
                    <ul className="space-y-2">
                      {format.workshopTopics.map((item: string, i: number) => (
                        <li key={i} className="text-stone-600 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
            Not sure which option fits?
          </h2>
          <div className="mt-6 text-primary-100 text-lg max-w-2xl mx-auto space-y-4">
            <p>
              If you're at an early stage or have one specific question, a Strategic Session is often enough.
            </p>
            <p>
              If you're navigating a broader transition or need space to integrate change over time, the 90-day program offers deeper support.
            </p>
            <p className="text-white font-medium">
              You're also welcome to start with a conversation and decide from there.
            </p>
          </div>
          
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium 
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
