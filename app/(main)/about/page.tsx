import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Margarita Dautova — Career & Transition Coach',
  description:
    'Meet Margarita Dautova, a PCC career and transition coach based in Munich, working with thoughtful international professionals through career change, growth and transition.',
  alternates: { canonical: '/about' },
}

const credentialCards = [
  {
    title: 'ICF Credential',
    value: 'Professional Certified Coach (PCC)',
    note: 'International Coaching Federation',
  },
  {
    title: 'Coaching Hours',
    value: '700+ coaching hours with 110+ professionals',
    note: 'Individual and group coaching',
  },
  {
    title: 'Reach',
    value: '20+ countries',
    note: 'Clients across 3 continents',
  },
]

const trainings = [
  {
    title: 'ICF Level 2 Training Program "Coaching in Organization and Business"',
    note: 'International Coaching Academy — 2024',
  },
  {
    title: 'Team Coach (ICF Continuing Coaching Education)',
    note: 'Academy of Coaching Professions "Human Capital" — 2023',
  },
  {
    title: 'The 5 Prism Method in Coaching',
    note: 'Academy of Professional Coaching "5 Prism" — 2021',
  },
  {
    title: 'Erickson Professional Coach',
    note: 'Erickson Coaching International — 2021',
  },
]

const approaches = [
  'Adult development and learning theory',
  'Reflective and systemic coaching',
  'Decision-making and sense-making in times of transition',
  'Narrative and strengths-based practices',
]

const glimpses = [
  {
    title: 'Munich is home.',
    description:
      'I moved here in 2013 and have built much of my adult and professional life here. I still enjoy discovering new corners of the city — and, occasionally, escaping it.',
  },
  {
    title: "I'm a mother of three.",
    description:
      'Parenthood has taught me a lot about identity, priorities, ambition and the impossibility of planning everything.',
  },
  {
    title: 'Languages',
    description:
      'I speak four languages in my everyday life: Russian, English, German and French. English and Russian are the languages I work in professionally. German and French are part of my life with family. I know the strange experience of thinking and expressing yourself differently in different languages — and how much more than language can get translated when you build a life across cultures.',
  },
  {
    title: "I'm naturally curious.",
    description:
      'I like reading, writing, exploring ideas and learning new things. I also tend to have several creative projects going at once.',
  },
  {
    title: 'I love bringing people together.',
    description:
      'Some of my favourite work happens around a table — creating spaces where people who might not otherwise meet can have a meaningful conversation.',
  },
  {
    title: 'I like making sense of complexity.',
    description:
      "Give me a lot of scattered pieces and I'll probably start looking for the pattern connecting them. Perhaps that's one reason coaching feels so natural to me.",
  },
]

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.margarita-dautova.com/' },
    { name: 'About', url: 'https://www.margarita-dautova.com/about' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <Container size="default">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm">
                <Image
                  src="/images/IMG_5681.JPG"
                  alt="Portrait of Margarita Dautova"
                  fill
                  className="object-cover object-bottom"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                About Me
              </p>
              <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
                I&apos;m Margarita.
              </h1>
              <p className="mt-3 text-stone-500">
                Career &amp; Transition Coach · Thinking Partner · Facilitator
              </p>
              <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-pretty">
                <p>
                  I work with thoughtful international professionals who are navigating
                  change — in their careers, their identities, their working lives or
                  the direction they want to take next.
                </p>
                <p>
                  Many of the people I work with don&apos;t need someone to tell them
                  what to do. They need a space where they can think clearly, without
                  having to perform, impress or already know the answer.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/book" variant="primary" size="lg">
                  Book a free discovery call
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. My Story */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              I used to sit on the other side of the table.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>
                I spent more than 10 years on the other side of the table — in Talent
                &amp; Leadership Development in global travel tech and luxury fashion
                tech.
              </p>
              <p>
                I loved being close to questions that matter to people: How do I grow?
                What am I capable of? Where do I belong? What happens when my role
                changes? What happens when the organization changes around me?
              </p>
              <p>
                Over time, I became increasingly interested not only in helping people
                develop, but in the space where they have to figure out what
                development actually means for them.
              </p>
              <p className="text-stone-900 font-medium">
                That&apos;s what eventually brought me to coaching.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. I've Been in Transition Myself */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              I&apos;ve been in transition myself.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>More than once, and in different forms.</p>
              <p>
                I&apos;ve relocated across countries and had to rebuild my professional
                identity in a new language and culture. I&apos;ve navigated periods
                where outward success no longer matched how I felt on the inside.
                I&apos;ve returned to work after becoming a parent, more than once, and
                renegotiated my ambition, energy and priorities along the way.
              </p>
              <p>
                Some of these transitions weren&apos;t really about &ldquo;What should I
                do next?&rdquo; They were about something quieter: what do I actually
                want my work and life to support right now?
              </p>
            </div>
            <p className="mt-8 inline-block text-stone-900 font-serif text-xl italic border-t border-b border-stone-300 py-4 px-2 text-pretty">
              These experiences don&apos;t make me an expert on someone else&apos;s
              life. But they have taught me to stay curious when answers aren&apos;t
              clear yet — and to trust that clarity can emerge without rushing the
              process.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. Who I Work With */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              I tend to work well with thoughtful people.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>
                People who are curious about themselves. Who don&apos;t necessarily
                want someone to give them the answer. Who value depth over quick fixes.
              </p>
              <p>
                They&apos;re often navigating the complexity of work across cultures,
                languages or changing identities — international professionals living
                and working somewhere other than where they started.
              </p>
              <p>
                They may be at very different points in their careers and work in very
                different industries. What they tend to have in common is a desire to
                understand what is really going on — and to make choices that feel like
                their own.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Thinking Partnership */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What is a thinking partnership?
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>
                Many of my clients don&apos;t need advice. They need a space to think
                out loud — without performing, impressing or already knowing the
                answer.
              </p>
              <p>
                I bring a calm presence, precise questions, reflection, structure and
                perspective. You bring the experience, the context and the direction.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-2xl mx-auto bg-white border border-stone-200 rounded-sm p-6 md:p-10">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-primary-600 uppercase tracking-wider">
                  I bring
                </h3>
                <p className="mt-2 text-stone-600 leading-relaxed">
                  The structure, the questions and the perspective.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-primary-600 uppercase tracking-wider">
                  You bring
                </h3>
                <p className="mt-2 text-stone-600 leading-relaxed">
                  The experience, the context and the direction.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-2xl mx-auto text-center space-y-4 text-stone-600 leading-relaxed text-pretty">
            <p>
              We work as partners to make sense of what&apos;s happening, clarify what
              matters and move towards the goals that are meaningful to you.
            </p>
            <p>
              Sometimes that means looking beyond the immediate career question — at
              identity, values, confidence, relationships, professional identity, or
              what it means to build a life and career across cultures and languages.
            </p>
          </div>

          <p className="mt-10 text-center inline-block w-full text-stone-900 font-serif text-xl italic text-pretty">
            The process has structure. The direction comes from you.
          </p>
        </Container>
      </section>

      {/* 6. The Organizational Side */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              I also understand change from the organizational side.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>
                My Talent &amp; Leadership Development background also means I
                understand change from the organizational side.
              </p>
              <p>
                I&apos;ve seen restructurings, changing roles, internal mobility and
                development initiatives from inside organizations — and today I bring
                that perspective into my work with teams and organizations.
              </p>
              <p>
                When change happens, the business reality matters. So does what that
                change means to the people experiencing it. I work at that
                intersection.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/team-workshops"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
              >
                Explore Team Workshops
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. A Little More About Me */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              A little more about me
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-10">
            {glimpses.map((glimpse) => (
              <div key={glimpse.title}>
                <h3 className="font-serif text-xl text-stone-900">{glimpse.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{glimpse.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Coaching Education & Credentials */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Background
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
            Coaching Education &amp; Credentials
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            I&apos;m committed to professional standards and ongoing development in my
            coaching practice.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {credentialCards.map((card) => (
              <div key={card.title} className="bg-stone-50 p-6 border border-stone-200 rounded-sm">
                <h3 className="font-medium text-stone-900 mb-3">{card.title}</h3>
                <p className="text-stone-700">{card.value}</p>
                <p className="text-sm text-stone-500 mt-1">{card.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-medium text-stone-900 mb-4">Training &amp; Certifications</h3>
            <ul className="space-y-3">
              {trainings.map((training) => (
                <li key={training.title} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="text-stone-600">
                    <span className="text-stone-800">{training.title}</span>
                    <span className="block text-sm text-stone-500">{training.note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="font-medium text-stone-900 mb-4">Professional Background</h3>
            <p className="text-stone-600">
              10 years in Talent &amp; Leadership Development, working with
              professionals across industries and career stages. Based in Munich,
              working with clients worldwide.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-medium text-stone-900 mb-4">Current Professional Practice</h3>
            <p className="text-stone-600">
              I work as a career and transition coach and thinking partner, supporting
              thoughtful international professionals navigating change.
            </p>
            <p className="text-stone-600 mt-3">
              My work includes 1:1 and group coaching with clients from sectors such as
              technology, creative industries, and hospitality — often in complex,
              fast-moving, and multicultural environments.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-medium text-stone-900 mb-4">
              Professional Standards &amp; Evidence-Based Practice
            </h3>
            <p className="text-stone-600">
              My work is grounded in evidence-based coaching practices and aligned with
              the ethical standards and core competencies of the International Coaching
              Federation (ICF).
            </p>
            <p className="text-stone-600 mt-3">I draw on approaches from:</p>
            <ul className="mt-2 space-y-2">
              {approaches.map((approach) => (
                <li key={approach} className="flex items-start gap-3">
                  <span className="text-primary-600 font-serif text-lg">•</span>
                  <span className="text-stone-600">{approach}</span>
                </li>
              ))}
            </ul>
            <p className="text-stone-600 mt-4">
              I use these frameworks thoughtfully and flexibly as support for clarity,
              integration, and sustainable change.
            </p>
            <p className="text-stone-600 mt-3">
              I regularly engage in supervision and continuing education to support the
              quality and integrity of my work.
            </p>
          </div>
        </Container>
      </section>

      {/* 9. Mentoring / Thrive */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              I believe people grow through people.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>
                I&apos;ve always been drawn to mentoring — to the idea of having
                someone a few steps ahead whose shoulders you can stand on to see a
                little further.
              </p>
              <p>
                That&apos;s one of the reasons I joined Thrive with Mentoring as a
                volunteer Cohort Leader for the Munich community.
              </p>
              <p>
                I&apos;m not a mentor in the program. My role is to help build the
                local cohort: bringing women together, creating the conditions for
                meaningful mentor relationships, and building a community around the
                idea of radical generosity.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/mentoring"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
              >
                Explore Mentoring in Munich
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Final CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            You don&apos;t have to know the answer yet.
          </h2>
          <div className="mt-6 space-y-4 text-primary-100 text-lg text-pretty max-w-xl mx-auto">
            <p>Bring the question. Bring the uncertainty. Bring the part of you that doesn&apos;t quite know yet.</p>
            <p>We&apos;ll start there.</p>
          </div>
          <div className="mt-10">
            <Link
              href="https://cal.com/margarita-dautova-odapxj/30min"
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
    </>
  )
}
