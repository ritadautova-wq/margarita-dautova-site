import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import Enso from '@/components/zen/Enso'
import InkDivider from '@/components/zen/InkDivider'
import { rd, sd } from '@/components/zen/motion'
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

const stats = [
  { value: '700+', label: 'Hours of 1:1 Coaching' },
  { value: '110+', label: 'Professionals Coached' },
  { value: '20+', label: 'Countries' },
  { value: '10', label: 'Years in Talent & Leadership Development' },
]

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

const trustStrip = [
  'ICF PCC-certified',
  '700+ coaching hours with 110+ professionals',
  'Munich-based, working worldwide',
  '10 years in Talent & Leadership Development',
]

// Stepping stones: each stage sits at its own height, like stones across water.
const stoneOffsets = ['lg:mt-0', 'lg:mt-16', 'lg:mt-6', 'lg:mt-20'] // 0 / 64 / 24 / 80px, matched by the path above
const quoteOffsets = ['md:mt-0', 'md:mt-20', 'md:mt-8']

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 12h14m-5-5 5 5-5 5" />
  </svg>
)

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

      {/* 1. Hero: the gate. The ensō draws, then the words surface. */}
      <section className="relative pt-24 pb-24 md:pt-40 md:pb-32 lg:pt-36 lg:pb-28 lg:min-h-[100svh] lg:flex lg:items-center">
        <Container size="wide" className="w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="relative order-first lg:order-last lg:col-span-5 lg:col-start-8">
              <Enso
                id="hero-enso"
                delay={250}
                className="absolute left-[4%] -top-[10%] w-[74%] sm:-left-[10%] sm:w-[84%] lg:-left-[18%] lg:-top-[14%] lg:w-[92%] text-stone-900/80 pointer-events-none"
              />
              <div
                className="zen-surface relative aspect-[4/5] w-[62%] sm:w-[70%] lg:w-[82%] max-w-sm ml-auto lg:max-w-none overflow-hidden bg-stone-200 zen-frame"
                style={sd(500)}
              >
                <Image
                  src="/images/IMG_5842.JPG"
                  alt="Portrait of Margarita Dautova"
                  fill
                  className="zen-photo object-cover object-[55%_20%]"
                  priority
                  sizes="(min-width: 1024px) 33vw, 80vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-1">
              <p className="zen-surface zen-label !tracking-[0.2em] md:!tracking-zen flex items-center gap-3" style={sd(900)}>
                <span className="zen-seal" aria-hidden="true" />
                Career &amp; Transition Coach · Team Facilitator
              </p>
              <h1
                className="zen-surface mt-7 font-serif text-[2.35rem] leading-[1.3] md:text-display-lg lg:text-[3.5rem] lg:leading-[1.28] text-stone-900 text-balance"
                style={sd(1100)}
              >
                When things change, it helps to have space to think.
              </h1>
              <div className="mt-9 space-y-5 text-[1.05rem] leading-[1.9] text-stone-600 max-w-xl text-pretty">
                <p className="zen-surface" style={sd(1500)}>
                  I&apos;m Margarita — a Career &amp; Transition Coach and Team Facilitator
                  committed to helping international professionals make sense of change,
                  find clarity and move forward in a way that feels like their own.
                </p>
                <p className="zen-surface" style={sd(1700)}>
                  From individual career transitions to organizational change, my work
                  starts with the same belief: people don&apos;t always need someone to
                  tell them what to do. They need the space, perspective and support to
                  find their way forward.
                </p>
              </div>
              <div className="zen-surface mt-11" style={sd(1950)}>
                <Link href="/book" className="btn-primary px-9 py-4">
                  <span className="zen-seal" aria-hidden="true" />
                  Book a free discovery call
                </Link>
              </div>
              <ul className="zen-surface mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-stone-500 max-w-xl" style={sd(2200)}>
                {trustStrip.map((label) => (
                  <li key={label} className="flex items-baseline gap-3">
                    <span className="block w-3 h-px bg-stone-400 translate-y-[-3px]" aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>

        {/* A slow invitation to continue down the path */}
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 zen-surface" style={sd(2800)} aria-hidden="true">
          <span className="block w-px h-14 bg-gradient-to-b from-transparent via-stone-400 to-transparent animate-[zen-drift_4s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* 2. Stats: quiet numerals, no box */}
      <section className="py-20 md:py-28 border-y border-stone-300/50">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 md:divide-x md:divide-stone-300/60">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center px-4" data-reveal style={rd(i * 140)}>
                <p className="font-serif text-[2.6rem] md:text-5xl text-stone-900 leading-none">{stat.value}</p>
                <p className="mt-5 zen-label leading-relaxed max-w-[12rem] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-stone-500 max-w-xl mx-auto text-pretty" data-reveal style={rd(560)}>
            Supporting clients across 3 continents — from individual contributors to
            C&#8209;suite leaders.
          </p>
        </Container>
      </section>

      {/* 3. Three Ways I Work: three paths through the garden */}
      <section className="section-padding">
        <Container size="default">
          <div className="max-w-2xl mb-16 md:mb-24" data-reveal>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Three ways I work
            </h2>
          </div>
          <div>
            {pillars.map((pillar, i) => (
              <div
                key={pillar.label}
                className="grid md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-16 border-t border-stone-300/70 last:border-b"
                data-reveal
                style={rd(i * 120)}
              >
                <div className="md:col-span-5">
                  <p className="zen-label flex items-center gap-3">
                    <span className="font-serif text-stone-400 tracking-normal text-sm normal-case" aria-hidden="true">
                      {`0${i + 1}`}
                    </span>
                    {pillar.label}
                  </p>
                  <h3 className="mt-5 font-serif text-[1.6rem] md:text-[1.85rem] leading-[1.4] text-stone-900 text-balance">
                    {pillar.title}
                  </h3>
                </div>
                <div className="md:col-span-6 md:col-start-7 md:pt-9">
                  <p className="text-stone-600 leading-[1.95] text-pretty">
                    {pillar.description}
                  </p>
                  <p className="mt-5 text-sm text-stone-500">{pillar.tags}</p>
                  <Link href={pillar.ctaHref} className="zen-link mt-8">
                    {pillar.ctaText}
                    <Arrow />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. The Common Thread: stepping stones */}
      <section className="section-padding zen-mist">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28" data-reveal>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Change looks different. The need underneath it is often similar.
            </h2>
            <p className="mt-8 text-stone-600 text-lg text-pretty max-w-2xl mx-auto">
              A new role. A career crossroads. A restructuring. A team that has changed. A
              desire to grow. A question about what comes next.
            </p>
          </div>

          <div className="relative">
            {/* The water line the stones sit across */}
            <svg
              className="hidden lg:block absolute left-0 top-0 w-full h-24 text-stone-300 overflow-visible"
              viewBox="0 0 1000 96"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M125 8 C 230 8, 270 72, 375 72 S 520 32, 625 32 S 770 88, 875 88"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <span className="lg:hidden absolute left-[0.45rem] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-stone-300 to-transparent" aria-hidden="true" />
            <ol className="relative grid lg:grid-cols-4 gap-14 lg:gap-0">
              {progressionStages.map((stage, i) => (
                <li
                  key={stage.number}
                  className={`relative pl-10 lg:px-5 lg:text-center ${stoneOffsets[i]}`}
                  data-reveal
                  style={rd(i * 260)}
                >
                  <span
                    className="absolute left-0 top-[0.35rem] lg:static lg:mx-auto lg:mb-6 block w-[0.95rem] h-[0.95rem] lg:w-4 lg:h-4 rounded-full border border-stone-500 bg-stone-50"
                    aria-hidden="true"
                  />
                  <p className="text-xs tracking-zen text-stone-500">{stage.number}</p>
                  <h3 className="mt-3 font-serif text-3xl md:text-[2.4rem] text-stone-900">
                    {stage.name}
                  </h3>
                  <p className="mt-3 font-serif italic text-stone-600">{stage.question}</p>
                  <p className="mt-4 text-stone-500 text-sm leading-[1.9] lg:max-w-[220px] lg:mx-auto text-pretty">
                    {stage.items}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-24 md:mt-32 text-center text-stone-800 font-serif text-xl md:text-2xl leading-[1.7] max-w-2xl mx-auto text-pretty" data-reveal>
            Space to pause. Perspective to see things differently. Clarity about what
            matters. And a way to move forward.
          </p>
        </Container>
      </section>

      {/* 5. A Strong Visual Statement: the inner hall, with a single ensō */}
      <section className="relative overflow-hidden py-36 md:py-52">
        <div className="relative" data-reveal="fade">
          <Enso
            id="statement-enso"
            delay={300}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] md:w-[44rem] text-stone-900/[0.07] pointer-events-none"
          />
          <Container size="narrow" className="relative text-center">
            <h2 className="font-serif text-[2.1rem] leading-[1.35] md:text-display-lg text-stone-900 text-balance">
              You don&apos;t have to know the answer yet.
            </h2>
            <div className="mt-10 text-stone-600 text-lg text-pretty max-w-xl mx-auto">
              <p>
                Bring the question. Bring the uncertainty. Bring the part of you that
                doesn&apos;t quite know yet.
              </p>
            </div>
            <p className="mt-12 inline-block font-serif text-xl italic text-stone-800 text-pretty">
              Warmth, depth and structure — without rushing the process.
            </p>
          </Container>
        </div>
      </section>

      {/* 6. Why Me */}
      <section className="section-padding zen-mist">
        <Container size="default">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            <div className="lg:col-span-5" data-reveal>
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden bg-stone-200 zen-frame">
                <Image
                  src="/images/portrait-margarita.JPG"
                  alt="Portrait of Margarita Dautova"
                  fill
                  className="zen-photo zen-breathe object-cover"
                  sizes="(min-width: 1024px) 30vw, 70vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7" data-reveal style={rd(200)}>
              <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
                Someone who understands change from more than one perspective.
              </h2>
              <div className="mt-10 space-y-6 text-stone-600 text-lg leading-[1.95]">
                <p>
                  Before becoming a coach, I spent years in corporate environments —
                  working in Talent and Leadership Development at international
                  organizations from global travel tech, luxury fashion tech and
                  consultancy.
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
              <div className="mt-10">
                <Link href="/about" className="zen-link">
                  More about me
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Personal Philosophy: one line at a time, with room to breathe */}
      <section className="section-padding">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance" data-reveal>
              I don&apos;t believe in pushing people toward an answer.
            </h2>
            <InkDivider className="my-14" />
            <div className="space-y-7 font-serif text-stone-700 text-xl md:text-[1.4rem] leading-[1.7] max-w-2xl mx-auto text-pretty">
              <p data-reveal>Good coaching isn&apos;t about having the right answer ready.</p>
              <p data-reveal style={rd(220)}>Good facilitation isn&apos;t about filling every silence.</p>
              <p data-reveal style={rd(440)}>And good mentoring isn&apos;t about telling someone what to do.</p>
              <p data-reveal style={rd(660)} className="pt-6 font-sans text-lg leading-[1.9] text-stone-600">
                My role is to create enough structure for something to move — and enough
                space for people to think.
              </p>
            </div>
            <p className="mt-16 inline-block text-stone-900 font-serif text-xl md:text-2xl italic border-t border-b border-stone-300 py-6 px-4 text-pretty" data-reveal style={rd(200)}>
              The process has structure. The direction comes from you.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. Testimonials: voices, set like stones at different heights */}
      <section className="section-padding zen-mist">
        <Container size="wide">
          <div className="text-center max-w-3xl mx-auto mb-20" data-reveal>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What people say afterward.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16 md:gap-12 items-start">
            {testimonials.map((testimonial, i) => (
              <figure
                key={testimonial.attribution}
                className={`relative pt-10 border-t border-stone-300/80 ${quoteOffsets[i]}`}
                data-reveal
                style={rd(i * 220)}
              >
                <span className="absolute -top-[0.3rem] left-0 zen-seal" aria-hidden="true" />
                <blockquote className="font-serif text-stone-700 leading-[1.95] text-[1.05rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 text-xs tracking-[0.12em] uppercase text-stone-500 leading-relaxed">
                  — {testimonial.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-20 text-center" data-reveal>
            <Link href="/testimonials" className="zen-link">
              Read more client experiences →
            </Link>
          </div>
        </Container>
      </section>

      {/* 9. Where I Work */}
      <section className="section-padding-sm">
        <Container size="narrow" className="text-center">
          <div data-reveal>
            <h2 className="font-serif text-heading md:text-heading-lg text-stone-900">
              From Munich, across borders.
            </h2>
            <p className="mt-6 text-stone-600 text-lg text-pretty max-w-xl mx-auto">
              I work with international professionals and organizations across countries and
              cultures — online, and for selected engagements, in person.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 zen-label">
              <span>English · Russian</span>
              <span>Munich · Worldwide</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Final CTA: dusk. The path ends in a quiet, open door. */}
      <section className="relative overflow-hidden bg-stone-900 text-stone-100 py-36 md:py-48">
        <div data-reveal="fade">
          <Enso
            id="closing-enso"
            delay={200}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] md:w-[38rem] text-stone-50/[0.06] pointer-events-none"
          />
          <Container size="narrow" className="relative text-center">
            <h2 className="font-serif text-[2.2rem] md:text-display-lg text-stone-50 text-balance">
              What&apos;s changing?
            </h2>
            <div className="mt-10 space-y-3 text-stone-300 text-lg text-pretty max-w-xl mx-auto">
              <p>Maybe it&apos;s your career. Maybe it&apos;s your team. Maybe it&apos;s simply your sense of where you want to go next.</p>
              <p>You don&apos;t need to have the whole thing figured out before we talk.</p>
            </div>
            <div className="mt-14">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 tracking-wide
                  bg-stone-50 text-stone-900 hover:bg-primary-100 transition-colors duration-900 ease-zen"
              >
                <span className="zen-seal" aria-hidden="true" />
                Book a free discovery call
              </Link>
            </div>
            <p className="mt-7 text-xs tracking-[0.18em] uppercase text-stone-400">
              30 minutes · Online · No preparation required
            </p>
          </Container>
        </div>
      </section>

      <StickyMobileCTA />
    </>
  )
}
