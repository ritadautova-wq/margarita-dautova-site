import { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/Container'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Mentoring — Thrive with Mentoring, Munich',
  description:
    "Why mentoring matters to Margarita Dautova, and her volunteer work as a Cohort Leader for Thrive with Mentoring's Munich community.",
  alternates: { canonical: '/mentoring' },
}

const differentiators = [
  {
    title: 'A real mentoring relationship',
    description:
      'You are matched with an experienced mentor based on your goals, needs and experience. The relationship then develops around what matters to you.',
  },
  {
    title: 'Six months of intentional growth',
    description:
      'The core programme provides a structured six-month mentoring journey, with regular one-to-one sessions and support throughout the cohort.',
  },
  {
    title: 'More than the one-to-one relationship',
    description:
      'The mentoring relationship sits within a wider community, with learning and networking opportunities that allow participants to connect beyond their mentor or mentee.',
  },
  {
    title: 'A community built on generosity',
    description:
      'Thrive is grounded in the principle of radical generosity: sharing experience, knowledge, connections and support without keeping score.',
  },
]

const fitPoints = [
  {
    title: "You're at a point of growth.",
    description: "You know you want to develop, but you're not sure what your next level looks like yet.",
  },
  {
    title: "You're navigating a transition.",
    description: 'A new role, a new country, a career change, entrepreneurship or a completely new chapter.',
  },
  {
    title: "You want perspective from someone who's been there.",
    description: 'Not another course. Not another framework. A real person who can share what they have learned from experience.',
  },
  {
    title: 'You want to be challenged.',
    description:
      "You're looking for someone who will ask difficult questions, offer an honest perspective and help you stretch beyond what feels familiar.",
  },
  {
    title: 'You also want to give back.',
    description:
      "Mentoring isn't only about what you receive. Many mentors join because they want to share what they've learned and contribute to someone else's growth. Thrive's programme is designed to create value for both mentees and mentors.",
  },
]

const involvementOptions = [
  {
    label: 'Join',
    title: '2027 Munich cohort',
    description:
      "We're preparing for the next Munich cohort. Registration will open soon — join the pre-registration list and we'll contact you in November 2026 with the next steps.",
    microcopy: 'No commitment — just an early place in the conversation.',
    ctaText: 'Join the pre-registration list',
    ctaHref:
      'https://docs.google.com/forms/d/e/1FAIpQLScebtR84oEEeAQ90QpKluftO-vzlwYsL0K3SHOmlPqzEScNNg/viewform',
  },
  {
    label: 'Lead',
    title: 'Become a Cohort Leader',
    description:
      "As the Munich community grows, we're looking for an additional person to join the Cohort Leadership Team and help us shape the next launch — a chance to build community, develop your leadership through practice, and work with a global organization.",
    ctaText: 'Learn more about the role',
    ctaHref: 'https://www.thrivewithmentoring.com/cohort-leader',
  },
  {
    label: 'Create',
    title: 'Photographer collaboration',
    description:
      "We're also looking for a photographer who would enjoy collaborating with us and being part of our in-person events in Munich — someone who likes capturing people, connection and real moments.",
    ctaText: 'Get in touch',
    ctaHref: '/contact',
  },
]

export default function MentoringPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.margarita-dautova.com/' },
    { name: 'Mentoring', url: 'https://www.margarita-dautova.com/mentoring' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-28 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <Container size="wide">
          <div className="text-center">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Mentoring
            </p>
            <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance md:whitespace-nowrap">
              You don&apos;t have to figure it all out alone.
            </h1>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
            <div className="relative lg:flex lg:items-center lg:justify-center">
              <Image
                src="/images/mentoring-hero-event.jpg"
                alt="Margarita Dautova presenting at a Thrive with Mentoring Structured Networking Event, with the quote &ldquo;We don&apos;t have to do all of it alone. We were never meant to.&rdquo;"
                width={1800}
                height={1572}
                className="w-full h-auto lg:w-auto lg:max-h-[366px] rounded-lg shadow-2xl"
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl -z-10" />
            </div>

            <div className="text-center lg:text-left">
              <div className="text-body-lg text-stone-600 max-w-xl mx-auto lg:mx-0 text-pretty">
                <p>Sometimes, we get lucky with a manager.</p>
                <div className="mt-4 space-y-1">
                  <p>Someone who sees our potential.</p>
                  <p>Who gives us honest, constructive feedback.</p>
                  <p>Who challenges us when we&apos;re playing too small.</p>
                  <p>Who cares about us as a person, not only as an employee.</p>
                </div>
                <p className="mt-6">But often, that&apos;s not the reality.</p>
                <p className="mt-4">
                  And if you&apos;re a business owner, freelancer or self-employed professional,
                  the role of a manager is vacant by default.
                </p>
                <p className="mt-6 font-serif text-xl text-stone-900 italic">
                  So how do you keep growing?
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Philosophy: shoulders to stand on */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Someone whose shoulders you can stand on.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>I&apos;ve always believed in mentoring.</p>
              <p>
                For me, a great mentor is someone who has already walked part of the path
                you&apos;re trying to find your way through.
              </p>
              <p>Someone whose shoulders you can stand on to see a little further.</p>
              <p>
                Someone who can share experience without telling you what to do. Who can
                challenge you and care about you at the same time. Who asks the question you
                hadn&apos;t thought of. Who helps you see possibilities that are difficult to see
                from where you currently stand.
              </p>
              <p>
                The best mentoring relationships I&apos;ve experienced have had both{' '}
                <strong className="text-stone-900 font-medium">generosity and challenge</strong>{' '}
                in them.
              </p>
            </div>
            <p className="mt-8 inline-block text-stone-900 font-serif text-xl italic border-t border-b border-stone-300 py-4 px-2 text-pretty">
              Sometimes, one good conversation with the right person can change the way you see
              what&apos;s possible.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Why I built mentoring into my work */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-3 lg:order-last">
              <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
                This is why I&apos;ve always built mentoring into my work.
              </h2>
              <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-pretty">
                <p>
                  Earlier in my career, I was fortunate to design and build internal mentoring
                  programmes in the organizations where I worked.
                </p>
                <p>
                  I loved creating the conditions for people to find the right person to learn
                  from — and then watching those relationships develop.
                </p>
                <p>Mentoring has always felt to me like one of the most human ways of supporting growth.</p>
                <p>
                  So when I became self-employed, I didn&apos;t want to leave that part of my
                  professional life behind.
                </p>
                <p className="text-stone-900 font-medium">I wanted to continue building it.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden bg-stone-100 rounded-sm">
                <Image
                  src="/images/mentoring-word-chocolates.jpg"
                  alt="A box of chocolates each labeled with a word like Confidence, Clarity, Courage and Growth, with a note reading 'Pick the word (chocolate) you need most right now'"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 60vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Thrive with Mentoring intro */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Thrive with Mentoring
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              A community where women grow through each other.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-pretty">
              <p>In 2025, I joined Thrive with Mentoring as a volunteer Cohort Leader in Munich.</p>
              <p>In 2026, we launched our first Munich cohort.</p>
            </div>
          </div>

          <div className="mt-14 relative aspect-[4/3] md:aspect-[21/9] max-w-4xl mx-auto overflow-hidden rounded-sm">
            <Image
              src="/images/mentoring-cohort-room.jpg"
              alt="Women from the Thrive with Mentoring Munich cohort gathered together at a networking event"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 900px, 90vw"
            />
          </div>

          <div className="mt-14 text-center">
            <p className="font-serif text-6xl md:text-7xl text-primary-700">34</p>
            <p className="mt-2 text-stone-700 text-lg">
              women in our first Munich cohort (2026) — mentors and mentees, different careers,
              industries, experiences and ambitions.
            </p>
          </div>

          <div className="mt-14 max-w-2xl mx-auto text-center space-y-4 text-stone-600 leading-relaxed text-pretty">
            <p>
              What connects them is a willingness to share what they know, ask for support, and
              help someone else move forward.
            </p>
            <p>
              Thrive is a global non-profit that connects women with experienced mentors through
              structured six-month mentoring programmes, alongside learning events, community and
              a network that continues beyond the individual mentoring relationship. Thrive
              currently has a presence in 20+ cities and has facilitated more than 1,700
              one-to-one mentoring relationships.
            </p>
            <p>
              <a
                href="https://www.thrivewithmentoring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Learn more about Thrive with Mentoring →
              </a>
            </p>
          </div>

          <p className="mt-14 text-center text-stone-900 font-serif text-xl italic text-pretty">
            Women don&apos;t have to grow alone.
          </p>
        </Container>
      </section>

      {/* 5. What makes Thrive different */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What makes Thrive different?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {differentiators.map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-xl text-stone-900">{item.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Thrive might be for you if... */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Thrive might be for you if&hellip;
            </h2>
          </div>
          <div className="space-y-8">
            {fitPoints.map((point) => (
              <div key={point.title} className="text-center md:text-left md:pl-6 md:border-l-2 md:border-primary-200">
                <h3 className="font-serif text-xl text-stone-900">{point.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. The Munich cohort */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden bg-stone-100 rounded-sm">
                <Image
                  src="/images/mentoring-portrait-badge.jpg"
                  alt="Margarita Dautova wearing a Cohort Lead / Mentee name badge at a Thrive with Mentoring event"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 60vw"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
                The Munich cohort
              </h2>
              <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-pretty">
                <p>There is something particularly special about meeting people in person.</p>
                <p>
                  The Munich cohort brings together women from different professional backgrounds
                  and stages of their careers, creating relationships that can extend well beyond
                  the six-month mentoring journey.
                </p>
                <p>
                  The launch, networking moments and closing event give the cohort opportunities
                  to meet not only their mentoring partner, but the wider community around them.
                </p>
                <p>
                  And as a Cohort Leader, I get to help create the conditions for those
                  connections to happen.
                </p>
                <p className="text-stone-900 font-medium">That&apos;s the part I love most.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Ways to get involved */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Get involved
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Three ways to be part of this.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {involvementOptions.map((option) => (
              <div key={option.label} className="pt-6 border-t-2 border-primary-600">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary-600 uppercase">
                  {option.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-stone-900">{option.title}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed text-sm">{option.description}</p>
                {option.microcopy && (
                  <p className="mt-3 text-xs text-stone-400 italic">{option.microcopy}</p>
                )}
                <a
                  href={option.ctaHref}
                  {...(option.ctaHref.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="mt-5 inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  {option.ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Closing */}
      <section className="section-padding bg-stone-950 text-white">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-50 text-balance">
            Growth was never meant to happen in isolation.
          </h2>
          <div className="mt-8 space-y-2 text-stone-300 text-lg text-pretty">
            <p>A manager can support you.</p>
            <p>A coach can give you space to think.</p>
            <p>A mentor can help you see further because they&apos;ve already walked some of the road ahead.</p>
            <p>And a community can remind you that you&apos;re not walking it alone.</p>
          </div>
          <p className="mt-8 font-serif text-xl md:text-2xl text-stone-50 italic">
            That&apos;s why mentoring matters to me.
          </p>
        </Container>
      </section>
    </>
  )
}
