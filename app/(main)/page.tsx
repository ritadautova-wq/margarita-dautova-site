import { Metadata } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import {
  generatePersonSchema,
  generateProfessionalServiceSchema,
  generateWebSiteSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'Margarita Dautova | Career & Transition Coach, Team Facilitator' },
  description:
    'I work with people and organizations navigating change, growth and transition — career coaching, team workshops and mentoring. ICF PCC-certified, based in Munich, working worldwide.',
  alternates: { canonical: '/' },
}

const progressionStages = [
  {
    number: '01',
    name: 'Pause',
    question: 'What is actually happening?',
    items: 'A new role · A crossroads · Restructuring · A team that has changed',
  },
  {
    number: '02',
    name: 'Reflect',
    question: 'What does it mean for you?',
    items: 'Perspective · Honest reflection · Naming what matters',
  },
  {
    number: '03',
    name: 'Clarify',
    question: 'What becomes clearer?',
    items: 'Strengths · Direction · What you actually want',
  },
  {
    number: '04',
    name: 'Move',
    question: 'What can happen next?',
    items: 'Grounded next steps · Practical movement forward',
  },
]

const pillars = [
  {
    label: 'Career Coaching',
    title: 'For people navigating a professional transition.',
    description:
      "A space to think clearly about what comes next — whether your role has changed, something no longer fits, you're considering a new direction, or you're simply not sure yet.",
    tags: 'Career decisions · New roles · Career transitions · International careers',
    ctaText: 'Explore Career Coaching',
    ctaHref: '/career-coaching',
  },
  {
    label: 'Team Workshops',
    title: 'For organizations navigating change.',
    description:
      'When organizations change, people experience it personally. I design tailored workshops, facilitation and coaching programs that connect the organizational reality with the human experience of change.',
    tags: 'Restructuring · Internal mobility · Role changes · Team transitions',
    ctaText: 'Explore Team Workshops',
    ctaHref: '/team-workshops',
  },
  {
    label: 'Mentoring',
    title: "Because growth doesn't have to happen alone.",
    description:
      "I've always believed in the power of having someone a few steps ahead — someone whose shoulders you can stand on to see a little further. Through my volunteer work with Thrive with Mentoring, I help create spaces where people grow through each other.",
    tags: 'Mentoring · Community · Thrive with Mentoring',
    ctaText: 'Explore Mentoring',
    ctaHref: '/mentoring',
  },
]

const testimonials = [
  {
    quote:
      "Working together brought real clarity to my short-term goals and helped me improve my focus. I discovered strengths I didn't fully recognize before and learned how to apply them — bringing more order into my life. Rather than being told what to do, the process was highly interactive: it helped me find my own answers and create a real path toward my goals.",
    attribution: 'F.M., Software Engineer, Freelancer, UAE',
  },
  {
    quote:
      "In just three sessions, we managed to work through such complex topics and questions, process a lot of emotions, and outline clear actions. It's an amazing result — with real moments of insight along the way. Thank you for your support, understanding, and your caring, gentle approach — while still going deep.",
    attribution: 'M.B., Product Manager, EdTech, Spain',
  },
  {
    quote:
      'The topics we wanted to discuss were perfectly transformed into team tasks. I felt that the workshop was crafted specifically for our needs. It helped us see the existing issues from a different angle and start working on practical solutions.',
    attribution: 'Senior Manager, Marketing Team, E-commerce',
  },
]

export default function HomePage() {
  const personSchema = generatePersonSchema()
  const serviceSchema = generateProfessionalServiceSchema()
  const webSiteSchema = generateWebSiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-28 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <Container size="narrow" className="text-center">
          <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
            When things change, it helps to have space to think.
          </h1>
          <div className="mt-8 space-y-4 text-body-lg text-stone-600 max-w-2xl mx-auto text-pretty">
            <p>
              I&apos;m Margarita — a Career &amp; Transition Coach and Team Facilitator
              committed to helping people make sense of change, find clarity and move
              forward in a way that feels like their own.
            </p>
            <p>
              From individual career transitions to organizational change, my work starts
              with the same belief: people don&apos;t always need someone to tell them what
              to do. They need the space, perspective and support to find their way
              forward.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/book" variant="primary" size="lg">
              Book a free discovery call
            </Button>
          </div>
          <p className="mt-5 text-sm text-stone-500">
            ICF PCC · Career &amp; Transition Coach · Team Facilitator · Munich + worldwide
          </p>
        </Container>
      </section>

      {/* 2. The Common Thread */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Change looks different. The need underneath it is often similar.
            </h2>
            <p className="mt-4 text-stone-600 text-lg text-pretty">
              A new role. A career crossroads. A restructuring. A team that has changed. A
              desire to grow. A question about what comes next.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0">
            {progressionStages.map((stage, index) => (
              <Fragment key={stage.number}>
                <div className="lg:flex-1 text-center px-2">
                  <p className="text-xs font-medium tracking-[0.2em] text-stone-400">
                    {stage.number}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl md:text-4xl text-stone-900">
                    {stage.name}
                  </h3>
                  <p className="mt-3 text-stone-500 italic text-sm md:text-base">
                    {stage.question}
                  </p>
                  <p className="mt-4 text-stone-600 text-sm leading-relaxed max-w-[220px] mx-auto text-pretty">
                    {stage.items}
                  </p>
                </div>
                {index < progressionStages.length - 1 && (
                  <div className="flex items-center justify-center py-2 lg:py-0 lg:px-4">
                    <div className="hidden lg:flex items-center w-12 xl:w-16">
                      <span className="h-px flex-1 bg-stone-300" />
                      <span className="ml-1 text-stone-300">&rarr;</span>
                    </div>
                    <div className="lg:hidden flex flex-col items-center h-10">
                      <span className="w-px flex-1 bg-stone-300" />
                      <span className="text-stone-300 mt-1">&darr;</span>
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <p className="mt-16 md:mt-20 text-center text-stone-800 font-serif text-xl italic max-w-2xl mx-auto text-pretty">
            Space to pause. Perspective to see things differently. Clarity about what
            matters. And a way to move forward.
          </p>
        </Container>
      </section>

      {/* 3. Three Ways I Work */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Three ways I work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="pt-6 border-t-2 border-primary-600">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary-600 uppercase">
                  {pillar.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-stone-900">{pillar.title}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed text-sm">
                  {pillar.description}
                </p>
                <p className="mt-4 text-xs text-stone-400">{pillar.tags}</p>
                <Link
                  href={pillar.ctaHref}
                  className="mt-5 inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  {pillar.ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. A Strong Visual Statement */}
      <section className="section-padding bg-primary-700 text-white">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            You don&apos;t have to know the answer yet.
          </h2>
          <div className="mt-6 space-y-2 text-primary-100 text-lg text-pretty max-w-xl mx-auto">
            <p>
              Bring the question. Bring the uncertainty. Bring the part of you that
              doesn&apos;t quite know yet.
            </p>
          </div>
          <p className="mt-8 inline-block font-serif text-xl italic border-t border-b border-primary-400/50 py-4 px-2 text-pretty">
            Warmth, depth and structure — without rushing the process.
          </p>
        </Container>
      </section>

      {/* 5. Why Me */}
      <section className="section-padding bg-white">
        <Container size="default">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance text-center">
            Someone who understands change from more than one perspective.
          </h2>
          <div className="mt-12 grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-2 lg:order-last">
              <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden bg-stone-100 rounded-sm">
                <Image
                  src="/images/portrait-margarita.JPG"
                  alt="Portrait of Margarita Dautova"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 60vw"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
                <p>
                  Before becoming a coach, I spent 10 years in Talent &amp; Leadership
                  Development at international organizations including Mytheresa and
                  Amadeus, working with people and teams through development, career
                  decisions, role changes and organizational change.
                </p>
                <p>
                  Today, I combine that organizational perspective with my work as an ICF
                  PCC coach, facilitator and mentor.
                </p>
                <p>
                  It means I can hold both sides of change: what is happening in the
                  organization — and what it means for the person experiencing it.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                >
                  More about me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap gap-x-8 gap-y-2">
                <span className="text-sm text-stone-500">110+ professionals</span>
                <span className="text-sm text-stone-500">20+ countries</span>
                <span className="text-sm text-stone-500">700+ coaching hours</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Personal Philosophy */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              I don&apos;t believe in pushing people toward an answer.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>Good coaching isn&apos;t about having the right answer ready.</p>
              <p>Good facilitation isn&apos;t about filling every silence.</p>
              <p>And good mentoring isn&apos;t about telling someone what to do.</p>
              <p>
                My role is to create enough structure for something to move — and enough
                space for people to think.
              </p>
            </div>
            <p className="mt-8 inline-block text-stone-900 font-serif text-xl italic border-t border-b border-stone-300 py-4 px-2 text-pretty">
              The process has structure. The direction comes from you.
            </p>
          </div>
        </Container>
      </section>

      {/* 7. Testimonials */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What people say afterward.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.attribution}
                className="bg-stone-50 p-6 md:p-8 border border-stone-200 rounded-sm"
              >
                <p className="text-stone-600 leading-relaxed italic text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-6 pt-4 border-t border-stone-200 text-sm font-medium text-stone-500">
                  — {testimonial.attribution}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Read more client experiences →
            </Link>
          </div>
        </Container>
      </section>

      {/* 8. Where I Work */}
      <section className="section-padding-sm bg-stone-50">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-heading text-stone-900">
            From Munich, across borders.
          </h2>
          <p className="mt-4 text-stone-600 text-lg text-pretty max-w-xl mx-auto">
            I work with international professionals and organizations across countries and
            cultures — online, and for selected engagements, in person.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-stone-500">
            <span>English · Russian</span>
            <span>Munich · Worldwide</span>
          </div>
        </Container>
      </section>

      {/* 9. Final CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            What&apos;s changing?
          </h2>
          <div className="mt-6 space-y-2 text-primary-100 text-lg text-pretty max-w-xl mx-auto">
            <p>Maybe it&apos;s your career. Maybe it&apos;s your team. Maybe it&apos;s simply your sense of where you want to go next.</p>
            <p>You don&apos;t need to have the whole thing figured out before we talk.</p>
          </div>
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Book a free discovery call
            </Link>
          </div>
          <p className="mt-5 text-sm text-primary-200">
            30 minutes · Online · No preparation required
          </p>
        </Container>
      </section>

      <StickyMobileCTA />
    </>
  )
}
