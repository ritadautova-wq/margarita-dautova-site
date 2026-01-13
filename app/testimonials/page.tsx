import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Stories',
  description:
    'Read what clients say about working with Margarita. Real stories of career transitions, burnout recovery, and professional growth.',
}

// TODO: Replace ALL testimonials with real client testimonials
const testimonials = [
  {
    quote: "Working with Margarita helped me finally understand what was holding me back. Her calm, structured approach gave me the clarity I needed to make a significant career change — and the confidence to actually do it.",
    name: 'Anna K.',
    role: 'Senior Product Manager',
    context: 'Career transition',
    featured: true,
  },
  {
    quote: "I was burned out and lost. Margarita created a safe space where I could be honest about what wasn't working. Six months later, I have a new role, better boundaries, and I actually enjoy my work again.",
    name: 'Michael S.',
    role: 'Director of Operations',
    context: 'Burnout recovery',
  },
  {
    quote: "Margarita's coaching is practical, grounded, and genuinely helpful. No fluff, no vague advice — just honest conversations that led to real change. I can't recommend her highly enough.",
    name: 'Elena R.',
    role: 'Tech Lead',
    context: 'Leadership development',
  },
  {
    quote: "Before coaching, I felt stuck in a role that no longer fit me. Margarita helped me reconnect with what actually matters to me and gave me the tools to make a thoughtful transition. It changed my life.",
    name: 'Thomas B.',
    role: 'Finance Manager',
    context: 'Career pivot',
  },
  {
    quote: "What I appreciated most was how Margarita held space for the messy, uncertain parts of the process. She never rushed me to 'fix' things — she helped me understand them first. That made all the difference.",
    name: 'Sarah L.',
    role: 'HR Director',
    context: 'Leadership presence',
  },
  {
    quote: "I came to coaching feeling completely overwhelmed by a new leadership role. Margarita helped me find my footing, set better boundaries, and lead with more confidence. My team noticed the change.",
    name: 'David M.',
    role: 'Engineering Manager',
    context: 'New role transition',
  },
]

// TODO: Replace with real case studies
const caseStudies = [
  {
    title: 'From Burnout to Balance',
    client: 'Senior manager in tech',
    situation: 'After years of high performance, Clara was exhausted and considering leaving her field entirely. She loved her work but hated what it had become.',
    approach: 'We explored what was driving the burnout — not just the workload, but deeper patterns around perfectionism and people-pleasing. We worked on boundary-setting skills and reconnecting with what originally drew her to the field.',
    outcome: 'Clara negotiated a reduced schedule with her employer, implemented new boundaries, and rediscovered her passion for the work. She\'s now mentoring others on sustainable high performance.',
  },
  {
    title: 'Making the Leap',
    client: 'Mid-career professional considering a pivot',
    situation: 'After 12 years in finance, Marco felt trapped. He knew he wanted something different but couldn\'t articulate what — and the fear of starting over was paralyzing.',
    approach: 'We spent time exploring values, interests, and transferable skills. Rather than rushing to a decision, we focused on experimentation — informational interviews, small projects, and reflection.',
    outcome: 'Marco transitioned to a sustainability-focused role that combines his analytical skills with his values. The move felt natural rather than terrifying because he\'d done the inner work first.',
  },
  {
    title: 'Leading Authentically',
    client: 'Newly promoted executive',
    situation: 'Lisa had been promoted to VP but felt like an imposter. She was trying to lead the way her predecessor had, which didn\'t fit her personality at all.',
    approach: 'We worked on developing Lisa\'s own leadership identity — one that played to her natural strengths rather than mimicking others. We also addressed limiting beliefs about what leaders "should" look like.',
    outcome: 'Lisa developed a leadership style that felt authentic to her. Her team engagement scores improved significantly, and she reported feeling "like herself again" at work.',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Client Stories
          </p>
          <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
            Real results from real people
          </h1>
          <p className="mt-6 text-body-lg text-stone-600 max-w-2xl mx-auto">
            Every coaching journey is unique. Here's what some clients have shared 
            about their experience.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TODO: Replace with real testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 border transition-colors duration-300 ${
                  testimonial.featured
                    ? 'bg-primary-50/50 border-primary-200 lg:col-span-2 lg:row-span-1'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <p className="text-sm text-primary-600 font-medium mb-4">
                  {testimonial.context}
                </p>
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
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-stone-100/50">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Case Studies
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              A closer look at client journeys
            </h2>
            <p className="mt-4 text-stone-600">
              Names and identifying details have been changed to protect confidentiality.
            </p>
          </div>

          <div className="space-y-8">
            {/* TODO: Replace with real case studies */}
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-stone-200 overflow-hidden">
                <div className="p-6 md:p-8 border-b border-stone-100 bg-stone-50">
                  <p className="text-sm text-primary-600 font-medium mb-2">
                    {study.client}
                  </p>
                  <h3 className="font-serif text-heading text-stone-900">
                    {study.title}
                  </h3>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                        The Situation
                      </h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {study.situation}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                        The Approach
                      </h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {study.approach}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                        The Outcome
                      </h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            Ready to start your own story?
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-xl mx-auto">
            Book a free discovery call and let's talk about where you are 
            and where you want to go.
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
