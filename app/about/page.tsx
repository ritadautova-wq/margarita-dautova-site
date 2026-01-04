import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Margarita Dautova — PCC ICF certified career and transition coach with a corporate background in talent and leadership development.',
}

// TODO: Replace with Margarita's actual credentials and background
const timeline = [
  {
    period: 'Corporate Career',
    title: 'Talent & Leadership Development',
    description:
      'Spent years working in HR and Talent Development at companies like Mytheresa and Amadeus, designing programs to help people grow in their careers.',
  },
  {
    period: 'The Shift',
    title: 'From Developing Others to Deep Conversations',
    description:
      "Realized that the most impactful moments in my work weren't the programs I designed, but the one-on-one conversations where real change happened.",
  },
  {
    period: 'Training & Certification',
    title: 'Becoming a Professional Coach',
    description:
      'Pursued rigorous coaching training and earned my PCC (Professional Certified Coach) credential from the International Coaching Federation.',
  },
  {
    period: 'Now',
    title: 'Independent Coaching Practice',
    description:
      'Working with professionals worldwide who are navigating career transitions, recovering from burnout, or seeking more meaning in their work.',
  },
]

const credentials = [
  {
    category: 'Coaching Credentials',
    items: [
      'PCC (Professional Certified Coach) – ICF',
      // TODO: Add any additional certifications
    ],
  },
  {
    category: 'Education',
    items: [
      'Global Management – [University]', // TODO: Add actual university
      'Accounting, Analysis & Audit – [University]', // TODO: Add actual details
    ],
  },
  {
    category: 'Corporate Experience',
    items: [
      'Mytheresa – Talent & Leadership Development',
      'Amadeus – [Role]', // TODO: Add actual role
      // TODO: Add other relevant experience
    ],
  },
]

const values = [
  {
    title: 'Clarity Over Complexity',
    description:
      "Life and work are complicated enough. I believe in cutting through the noise to find what's actually important.",
  },
  {
    title: 'Honesty with Kindness',
    description:
      "Real growth requires honest reflection. I'll tell you what I see — always with care and respect.",
  },
  {
    title: 'Sustainable Change',
    description:
      "Quick fixes rarely last. I'm interested in change that actually sticks, even after our work together ends.",
  },
  {
    title: 'Whole-Person Perspective',
    description:
      "Your career doesn't exist in isolation. We consider all of you — your values, relationships, health, and life beyond work.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <div className="container-default">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-stone-100 
                flex items-center justify-center">
                {/* TODO: Add actual professional portrait */}
                <div className="text-center text-stone-400">
                  <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="mt-2 text-sm">Portrait</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                About Me
              </p>
              <h1 className="font-serif text-display md:text-display-lg text-stone-900">
                Hi, I'm Margarita
              </h1>
              
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  I'm a career and transition coach working with professionals who find 
                  themselves at a crossroads — people who've built successful careers but 
                  now feel stuck, exhausted, or uncertain about what comes next.
                </p>
                <p>
                  Before becoming a coach, I spent years in corporate environments working 
                  in Talent and Leadership Development. I've designed programs, facilitated 
                  workshops, and sat across from hundreds of people trying to figure out 
                  their careers. That experience taught me something important: the real 
                  breakthroughs don't happen in workshops. They happen in honest, 
                  one-on-one conversations.
                </p>
                <p>
                  That's why I became a coach. I wanted to create space for those conversations 
                  — the kind where you can actually say what you're thinking, explore what 
                  you're feeling, and figure out what you actually want.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-3 font-medium 
                    bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
                >
                  Book a discovery call
                </Link>
                <Link
                  href="/#approach"
                  className="inline-flex items-center justify-center px-6 py-3 font-medium 
                    border border-stone-300 text-stone-700 hover:border-stone-400 
                    hover:bg-stone-100 transition-all duration-300"
                >
                  See how I work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              My Journey
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              How I got here
            </h2>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-4 md:gap-8">
                <div className="md:text-right">
                  <span className="text-sm font-medium text-primary-600">
                    {item.period}
                  </span>
                </div>
                <div className="md:col-span-3 pb-12 border-b border-stone-200 last:border-0 last:pb-0">
                  <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-stone-100/50">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              What I Believe
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Values that guide my work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 border border-stone-200">
                <h3 className="font-serif text-heading-sm text-stone-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Background
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Training & experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((category, index) => (
              <div key={index}>
                <h3 className="font-medium text-stone-900 mb-4 pb-2 border-b border-stone-200">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-stone-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className="section-padding-sm bg-primary-50/30">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading text-stone-900 mb-6">
            Beyond the professional bio
          </h2>
          <div className="text-stone-600 leading-relaxed space-y-4 max-w-2xl mx-auto">
            {/* TODO: Add Margarita's personal details */}
            <p>
              When I'm not coaching, you'll find me [hobbies/interests]. I'm based in Munich, 
              Germany, though I work with clients from all over the world via video call.
            </p>
            <p>
              I believe that good work happens when there's genuine connection. If you're 
              curious about working together, I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            Let's see if we're a good fit
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-xl mx-auto">
            Book a free discovery call. We'll talk about what's going on for you 
            and whether coaching could help.
          </p>
          
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium 
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
