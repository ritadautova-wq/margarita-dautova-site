import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'
import ProcessStep from '@/components/ProcessStep'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Team Workshops & Transition Programs',
  description:
    'Tailored workshops, facilitation and coaching programs that help teams and organisations navigate restructuring, role changes and internal mobility. Designed around your situation.',
  alternates: { canonical: '/team-workshops' },
}

const CONTACT_HREF = '/contact?type=corporate'

const businessOutcomes = [
  'Smoother transitions and clearer roles',
  'Stronger internal mobility and redeployment',
  'Teams reconnecting after organizational change',
  'Clearer communication of strengths and transferable skills',
  'Maintained engagement during uncertainty',
]

const recognitionCards = [
  {
    title: 'The structure has changed',
    description:
      'Roles, responsibilities or reporting lines have shifted — but people are still figuring out what the change means for them.',
  },
  {
    title: 'People are moving into new roles',
    description:
      'A new role can require more than new responsibilities. People may need to reconnect with their strengths, confidence and professional identity.',
  },
  {
    title: "You're supporting internal mobility",
    description:
      'People need to understand what they bring, where their experience could transfer, and how to communicate their value for what comes next.',
  },
  {
    title: 'Your team has changed',
    description:
      'New people, new responsibilities or organizational change have altered how the team works together.',
  },
  {
    title: 'People need space to process change',
    description:
      "The practical decisions may already be made. But the human side of the transition is still unfolding.",
  },
  {
    title: 'You want to support people beyond the announcement',
    description:
      'You are looking for something more meaningful than a one-off communication or information session.',
  },
]

const formatCards = [
  {
    title: 'Team workshops',
    description:
      'Interactive sessions that create space for reflection, conversation and practical work around a specific transition or team challenge.',
  },
  {
    title: 'Individual coaching',
    description:
      'One-to-one support for people who need dedicated space to explore what the change means for them and what they want to do next.',
  },
  {
    title: 'Customized transition programs',
    description:
      'A combination of workshops and individual coaching designed around your particular situation.',
  },
]

const topicCards = [
  {
    title: 'Navigating change',
    description: 'Creating space to understand what is changing, what it means, and what people can influence.',
  },
  {
    title: 'Strengths & professional identity',
    description:
      'Helping people reconnect with their strengths, values, experience and ways of working — particularly when their role or environment is changing.',
  },
  {
    title: 'Career transition & internal mobility',
    description:
      'Exploring transferable skills, possible directions and what could come next within or beyond the organization.',
  },
  {
    title: 'Professional positioning',
    description:
      'Helping people translate their experience into a clear professional story — through CVs, LinkedIn profiles, interviews or internal opportunities.',
  },
  {
    title: 'Reconnecting as a team',
    description:
      "Creating space for teams to reflect on what has changed, understand each other's perspectives and shape how they want to work together from here.",
  },
]

const flowSteps = [
  {
    number: 1,
    title: 'Team workshop',
    description: 'A shared space to reflect, understand strengths and explore the transition.',
  },
  {
    number: 2,
    title: 'Individual coaching',
    description: "A confidential conversation to explore each person's situation, questions and possible next steps.",
  },
  {
    number: 3,
    title: 'Practical next steps',
    description:
      "Turning reflection into something people can actually use — whether that's an internal move, a new professional direction, or a clearer way of communicating their experience.",
  },
]

const caseStudyComponents = [
  {
    title: 'Personality Map workshop',
    description: 'Exploring strengths, preferences, motivations and professional identity.',
  },
  {
    title: 'CV & LinkedIn workshop',
    description: 'Translating experience and transferable skills into a clear professional story.',
  },
  {
    title: 'Individual coaching',
    description: 'Giving each participant dedicated space to explore their own situation and next steps.',
  },
]

const stats = [
  '110+ professionals coached',
  '20+ countries',
  '700+ coaching hours',
  '10 years in Talent & Leadership Development',
]

const workshopTestimonials = [
  {
    quote:
      "It was fun and interactive, and at the same time we learned a lot about different working styles and how to improve our work. The day was very well structured and we got the chance to actually work on specific issues that exist in our team.",
    attribution: 'Manager, SEO Team, E-commerce',
  },
  {
    quote:
      'Moderators did a very good job guiding us through the day. The structure was clear and the overall organisation was great. The whole day was nicely paced and the exercises were engaging and thought-provoking.',
    attribution: 'Senior Manager, SEA Team, E-commerce',
  },
  {
    quote:
      'The topics we wanted to discuss were perfectly transformed into team tasks. I felt that the workshop was crafted specifically for our needs. It helped us see the existing issues from a different angle and start working on practical solutions.',
    attribution: 'Senior Manager, Marketing Team, E-commerce',
  },
  {
    quote:
      "I had the opportunity to join a two-day workshop with my team focused on exploring our next career steps with Margarita. For me, the experience was truly eye-opening. She took the time to understand where our team — and I personally — stand, and tailored her guidance accordingly. I walked away with deeper self-awareness, a clearer understanding of how to position my profile, and practical insights on building an ATS-ready CV. It was exactly what I needed as I navigate my next career move.",
    attribution: 'Erika, Communication Manager, Pharma',
  },
  {
    quote:
      "Margarita's workshop was one of the most practical career development sessions I've attended. She understands how recruiters, ATS and LinkedIn algorithms work, and turns that into clear, actionable advice. Her feedback helped me reframe my CV and LinkedIn profile around achievements and leadership rather than just responsibilities. I left with a much stronger personal brand and real confidence my profile will reach the right opportunities. I'd highly recommend her to anyone looking to strengthen their market positioning.",
    attribution: 'V.S., Head of Department, Pharma',
  },
]

const audienceCards = [
  {
    title: 'HR & People teams',
    description:
      'Supporting employees through organizational change, restructuring, internal mobility and career transition.',
  },
  {
    title: 'Talent & Learning teams',
    description: 'Creating meaningful development and reflection experiences during periods of change.',
  },
  {
    title: 'Leaders',
    description: 'Supporting teams whose roles, responsibilities, composition or direction are changing.',
  },
  {
    title: 'Organizations',
    description:
      'Designing tailored programs that combine team workshops, facilitation and individual coaching.',
  },
]

const faqs = [
  {
    question: 'Do you offer standard workshops?',
    answer:
      'Some themes can be adapted from existing workshop formats, but I prefer to understand your situation first. The content, format and level of customization depend on what your team actually needs.',
  },
  {
    question: 'Can you combine workshops with individual coaching?',
    answer:
      'Yes. This can be particularly useful during restructuring, internal mobility or other significant transitions where people need both a shared team experience and confidential individual space.',
  },
  {
    question: 'Can you work with a team outside Germany?',
    answer:
      'Yes. Workshops can be delivered online, and I am also available for selected in-person engagements depending on location and format.',
  },
  {
    question: 'Do you only work with teams going through restructuring?',
    answer:
      'No. Organizational restructuring is one example. I also work with teams experiencing role changes, internal mobility, new team dynamics, professional development needs or other periods of significant change.',
  },
  {
    question: 'How do we know what kind of workshop we need?',
    answer:
      "You don't have to know before we speak. Tell me what is happening, what your people are experiencing and what you would like to support. We can explore together what kind of format might make sense.",
  },
]

export default function TeamWorkshopsPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.margarita-dautova.com/' },
    { name: 'Team Workshops', url: 'https://www.margarita-dautova.com/team-workshops' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-28 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Team Workshops &amp; Transition Programs
            </p>
            <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
              When organizations change, people experience it personally.
            </h1>
            <div className="mt-6 space-y-4 text-body-lg text-stone-600 text-pretty">
              <p>
                Restructuring. New roles. Shifting responsibilities. Internal mobility. A team
                coming together after significant change.
              </p>
              <p>
                From an organizational perspective, these may be business decisions. For the
                people experiencing them, they can mean uncertainty, loss, opportunity, questions
                about identity, and a need to rethink what comes next.
              </p>
              <p>
                I design tailored workshops, facilitation sessions and coaching programs that
                help people make sense of change, reconnect with their strengths, and find
                practical ways forward.
              </p>
            </div>
            <div className="mt-10">
              <Button href={CONTACT_HREF} variant="primary" size="lg">
                Let&apos;s talk about your situation
              </Button>
            </div>
            <p className="mt-5 text-sm text-stone-500">
              Workshops · Team facilitation · Individual coaching · Customized programs
            </p>
          </div>

          <div className="relative mt-16 aspect-[4/5] w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/workshop-facilitation-portrait.jpg"
              alt="Margarita Dautova facilitating a team workshop"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 24rem, 90vw"
            />
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl -z-10" />
          </div>
        </Container>
      </section>

      {/* 2. Recognition */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Where this can help.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitionCards.map((card) => (
              <div
                key={card.title}
                className="p-6 md:p-7 bg-stone-50 border border-stone-200 rounded-sm"
              >
                <h3 className="font-serif text-lg text-stone-900">{card.title}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8">
            <p className="text-stone-700">
              Across these situations, the work is designed to support outcomes that matter for
              the organization too:
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {businessOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 3. Personal Story */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Change may be organizational. The experience of it is personal.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>I know this from both sides.</p>
              <p>
                Earlier in my career, I worked in Talent &amp; Leadership Development and was part of
                many reorganizations and restructurings.
              </p>
              <p>
                At first, it was easy to see them as business decisions: organizational needs, new
                structures, roles, processes. Something that had to be done.
              </p>
              <p>
                But that perspective changed when I started speaking with managers who had to let
                people go — and later when restructuring affected me and my colleagues directly.
              </p>
              <p>
                That&apos;s when I understood how much human emotion can sit underneath something
                that, on paper, looks like a formal business process.
              </p>
              <p>Uncertainty. Loss. Relief. Anger. Fear. Hope. Questions about identity and what comes next.</p>
              <p>Today, I bring that understanding into my work with organizations.</p>
            </div>
            <p className="mt-8 inline-block text-stone-900 font-serif text-xl italic border-t border-b border-stone-300 py-4 px-2 text-pretty">
              I don&apos;t see the human side of change as something separate from the business
              context. It is part of it.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. Program Formats */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              A program shaped around what&apos;s actually happening.
            </h2>
            <p className="mt-4 text-stone-600 text-lg text-pretty">
              There isn&apos;t one workshop that fits every team or every transition. I start by
              understanding your context, what is changing, who is affected, and what you want to
              support. From there, we might design:
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {formatCards.map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <h3 className="font-serif text-lg text-stone-900">{item.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-pretty text-stone-700 text-lg max-w-2xl mx-auto">
            The format follows the need — not the other way around.
          </p>
        </Container>
      </section>

      {/* 5. What We Can Work On */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What we can work on
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCards.map((card) => (
              <div
                key={card.title}
                className="p-6 md:p-7 bg-white border border-stone-200 rounded-sm hover:border-stone-300 transition-colors duration-300"
              >
                <h3 className="font-serif text-lg text-stone-900">{card.title}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Workshop + Coaching Flow */}
      <section className="section-padding bg-white">
        <Container size="wide">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Sometimes a workshop is only part of the answer.
            </h2>
            <div className="mt-4 space-y-3 text-stone-600 text-lg text-pretty">
              <p>A group conversation can open something up.</p>
              <p>Individual coaching can give each person the space to explore it more deeply.</p>
              <p>That&apos;s why I often combine the two. For example:</p>
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-6">
            {flowSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === flowSteps.length - 1}
              />
            ))}
          </div>
          <div className="mt-16 max-w-2xl mx-auto text-center space-y-2">
            <p className="text-stone-700 text-lg text-pretty">
              The goal is not simply to get people through a workshop.
            </p>
            <p className="text-stone-900 font-serif text-xl italic text-pretty">
              It is to help them leave with greater clarity about what comes next.
            </p>
          </div>
        </Container>
      </section>

      {/* 7. Case Study */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              An example: supporting a team through restructuring
            </h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white border border-stone-200 rounded-sm p-6 md:p-10">
            <p className="text-stone-600 leading-relaxed">
              A team going through restructuring needed support with both the human and practical
              sides of career transition. Rather than creating a single workshop, we designed a
              combination of shared reflection and individual support.
            </p>

            <div className="mt-8">
              <figure>
                <div className="relative aspect-video rounded-sm overflow-hidden bg-stone-100">
                  <Image
                    src="/images/workshop-career-positioning-session.jpg"
                    alt="A live online workshop session on career positioning and visibility, facilitated by Margarita Dautova"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 700px, 90vw"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-stone-500">
                  A live session on career positioning &amp; visibility
                </figcaption>
              </figure>
            </div>

            <h3 className="mt-10 text-sm font-medium text-primary-600 uppercase tracking-wider">
              The program included
            </h3>
            <div className="mt-5 grid sm:grid-cols-3 gap-6">
              {caseStudyComponents.map((item) => (
                <div key={item.title}>
                  <h4 className="font-serif text-lg text-stone-900">{item.title}</h4>
                  <p className="mt-2 text-stone-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200">
              <h3 className="text-sm font-medium text-primary-600 uppercase tracking-wider">
                The intention
              </h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                To create a process where people could first pause and understand themselves, then
                work on practical ways to communicate what they bring and consider where they could
                go next. A combination of shared reflection, practical tools and individual support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Testimonials */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What teams say afterward.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-6">
              {workshopTestimonials.slice(0, 3).map((testimonial) => (
                <div
                  key={testimonial.attribution}
                  className="bg-white p-6 md:p-8 border border-stone-200 rounded-sm"
                >
                  <p className="text-stone-600 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-6 pt-4 border-t border-stone-100 text-sm font-medium text-stone-500">
                    — {testimonial.attribution}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {workshopTestimonials.slice(3).map((testimonial) => (
                <div
                  key={testimonial.attribution}
                  className="bg-white p-6 md:p-8 border border-stone-200 rounded-sm"
                >
                  <p className="text-stone-600 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-6 pt-4 border-t border-stone-100 text-sm font-medium text-stone-500">
                    — {testimonial.attribution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Philosophy */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Structured enough to move things forward. Spacious enough for people to think.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>My workshops are interactive, but not performative.</p>
              <p>
                I create enough structure for people to know where the conversation is going, while
                leaving enough space for reflection, honest conversation and perspectives that may not
                have been visible at the beginning.
              </p>
            </div>
            <p className="mt-8 inline-block text-stone-900 font-serif text-xl italic border-t border-b border-stone-300 py-4 px-2 text-pretty">
              People don&apos;t need to be pushed into a solution. They need the right questions, a
              thoughtful process and enough space to find their own way forward.
            </p>
          </div>
        </Container>
      </section>

      {/* 10. Bio */}
      <section className="section-padding bg-white">
        <Container size="default">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance text-center">
            Someone who understands both sides of change.
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
                  I spent 10 years in Talent &amp; Leadership Development at international
                  organizations including Mytheresa and Amadeus, working with people and teams
                  through development, career decisions, role changes and organizational change.
                </p>
                <p>
                  Today, I combine that organizational perspective with my work as an ICF PCC coach
                  and facilitator.
                </p>
                <p>
                  This means I can hold both perspectives: what the organization is trying to
                  achieve, and what the change may mean for the people experiencing it.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                >
                  Read my full story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap gap-x-8 gap-y-2">
                {stats.map((stat) => (
                  <span key={stat} className="text-sm text-stone-500">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. Who I Work With */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Who I work with
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white border border-stone-200 rounded-sm"
              >
                <h3 className="font-serif text-lg text-stone-900">{card.title}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 12. FAQ */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-stone-50 border border-stone-200 rounded-sm p-6">
                <h3 className="font-medium text-stone-900 mb-3">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-stone-600 mb-4">Have another question?</p>
            <Link
              href={CONTACT_HREF}
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </Container>
      </section>

      {/* 13. Final CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            Tell me what&apos;s changing.
          </h2>
          <div className="mt-6 space-y-4 text-primary-100 text-lg text-pretty max-w-xl mx-auto">
            <p>You don&apos;t need to have the program figured out before we talk.</p>
            <p>
              Tell me what&apos;s happening in your organization or team, what your people are
              experiencing, and what you&apos;d like to support. We&apos;ll start there.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href={CONTACT_HREF}
              className="inline-flex items-center justify-center px-8 py-4 font-medium
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Let&apos;s talk about your situation
            </Link>
          </div>
          <p className="mt-5 text-sm text-primary-200">
            30 minutes · Online · No obligation · No preparation required
          </p>
        </Container>
      </section>
    </>
  )
}
