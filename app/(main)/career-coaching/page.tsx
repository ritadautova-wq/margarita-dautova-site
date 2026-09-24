import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'
import ProcessStep from '@/components/ProcessStep'
import ServiceCard from '@/components/ServiceCard'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Career Coaching for Professionals in Transition',
  description:
    'Career coaching for thoughtful professionals navigating career change, uncertainty, new roles, relocation or a sense that something no longer fits. ICF PCC-certified, Munich-based and working internationally.',
  alternates: { canonical: '/career-coaching' },
}

const recognitionCards = [
  {
    title: 'Your role has changed',
    description:
      "A promotion, a restructuring, a shift in responsibilities — and the version of you that fit before doesn't quite fit anymore.",
  },
  {
    title: "You're questioning your direction",
    description:
      "From the outside, things look fine. Inside, you're not sure this is still the right path.",
  },
  {
    title: "You're starting something new",
    description:
      'A new job, a new team, a new country — and you\'re rebuilding your footing from scratch.',
  },
  {
    title: 'Something no longer fits',
    description:
      "What used to feel meaningful now feels like something you're just getting through.",
  },
  {
    title: "You're navigating a new country",
    description:
      "Different language, different norms, a career built somewhere else — and you're figuring out how to translate it here.",
  },
  {
    title: "You're ready for a change",
    description:
      "You don't know exactly what yet. But you know staying exactly as you are isn't the answer.",
  },
]

const helpCards = [
  {
    title: 'Understand yourself',
    description: 'What actually matters to you, separate from what you think should matter.',
  },
  {
    title: 'See the bigger picture',
    description: 'How the pieces of your situation connect, instead of reacting to them one at a time.',
  },
  {
    title: 'Clarify what you want',
    description: "Naming what you're actually working toward, not just what you're moving away from.",
  },
  {
    title: 'Find your direction',
    description: "A next step that makes sense — even if the full path isn't visible yet.",
  },
  {
    title: 'Find words for your story',
    description: 'How to talk about your experience and your move, clearly and honestly.',
  },
  {
    title: 'Move forward',
    description: 'Turning clarity into something you actually do.',
  },
]

const practicalItems = [
  {
    title: 'CV & LinkedIn positioning',
    description: "Making sure your experience reads clearly to the people evaluating it — not just to you.",
  },
  {
    title: 'Interview preparation',
    description: "Practising how to talk about your path with confidence, including the parts that don't fit a neat narrative.",
  },
  {
    title: 'Career positioning',
    description: 'Deciding how to frame a move, a gap, or a shift so it makes sense to others — because it already makes sense to you.',
  },
]

const processSteps = [
  {
    number: 1,
    title: 'Understand',
    description: "We start with what's actually going on — the situation, the context, what's already been tried.",
  },
  {
    number: 2,
    title: 'Explore',
    description: "We look at the options, and the parts of yourself you might not have given much room to yet.",
  },
  {
    number: 3,
    title: 'Choose',
    description: 'You start to see what genuinely matters to you, and a direction becomes clearer.',
  },
  {
    number: 4,
    title: 'Move',
    description: 'We turn that direction into concrete next steps — and you carry them forward.',
  },
]

const stats = [
  '110+ professionals coached',
  '19 nationalities',
  '650+ coaching hours',
  '10+ years in Talent & Leadership Development',
]

const testimonials = [
  {
    quote:
      "Working together brought real clarity to my short-term goals and helped me improve my focus. I discovered strengths I didn't fully recognize before and learned how to apply them — bringing more order into my life. Rather than being told what to do, the process was highly interactive: it helped me find my own answers and create a real path toward my goals.",
    attribution: 'F.M., Software Engineer, Freelancer, UAE',
  },
  {
    quote:
      "In just three sessions, we managed to work through such complex topics and questions, process a lot of emotions, and outline clear actions. It's an amazing result — with real moments of insight along the way. Thank you for your support, understanding, and your caring, gentle approach — while still going deep. And for the questions that immediately brought focus and depth.",
    attribution: 'M.B., Product Manager, EdTech, Spain',
  },
  {
    quote:
      "Margarita, thank you so much for your thoughtful and sensitive support throughout my exploration process. I felt safe the whole time and knew I could show up in different ways while still being myself in our conversations. I now feel much greater clarity, and at the same time I sense a deeper inner call to connect more closely with my true motivations and sources of energy. I'm really glad that I took these important steps at the beginning of the year together with you.",
    attribution: 'A.T., Product Manager, EdTech, Russia',
  },
  {
    quote:
      "Thank you very much for a professional and productive coaching sessions. I really liked how you guided me in accordance with my topic, doing it in a gentle but confident manner. It stimulated me to openness and sincerity, giving the opportunity to open my potential and resolve my own issues. As a result, we managed to build the most productive plan of action to achieve the goal, which I am now following and already seeing results, which I am very happy about!",
    attribution: 'E.B., Regression Therapist, Russia',
  },
]

const faqs = [
  {
    question: "What if I don't know what I want?",
    answer:
      "That's completely normal — and often exactly where coaching is most useful. You don't need a clear goal to start. We begin with what's true for you now, and clarity tends to build from there.",
  },
  {
    question: 'Will you tell me what career I should choose?',
    answer:
      "No. I won't hand you an answer, because it wouldn't be yours to keep. I'll ask the questions that help you find your own — and I'll be honest with you along the way.",
  },
  {
    question: 'Is coaching only for people who want to change jobs?',
    answer:
      "Not at all. Many clients aren't looking to leave their job — they're trying to understand a role that's changed, a sense of misalignment, or how to move forward within where they already are.",
  },
  {
    question: 'Can you help me with my CV or interview?',
    answer:
      'Yes. Once there\'s clarity on direction, we can work on how to communicate it — including your CV, LinkedIn profile, and interview preparation.',
  },
  {
    question: 'Do you work with people outside Germany?',
    answer:
      "Yes. I work with clients worldwide, online, in English and Russian. I've coached people across Europe (France, Sweden, the UK, Italy, Spain, Belgium, Poland) as well as Kazakhstan, the UAE, India, South Korea, Malaysia, Singapore, Russia, Panama and the US. Many of my clients are international professionals living outside their home country.",
  },
  {
    question: 'Do you work with people from my profession?',
    answer:
      "Coaching is less about knowing the technical details of your job and more about understanding you, your situation, and the questions you're navigating. The coaching process can work across fields because the underlying questions — about direction, strengths, confidence, change, leadership or what comes next — are often highly transferable. That said, if industry experience matters to you, I've worked with professionals across a wide range of sectors and professions, including SaaS, IT, sales, consultancy, HR, oil & gas, marketing, e-commerce, EdTech, education, hospitality, travel, pharma, and health & wellbeing. I don't need to be an expert in your specific field to coach you effectively. But I bring familiarity with different professional environments, which helps me understand the context you're working within.",
  },
  {
    question: 'What happens during the discovery call?',
    answer:
      "It's a free, 30-minute conversation to talk about what's bringing you to coaching, answer your questions, and see whether working together feels like a good fit — no pressure, no obligation.",
  },
]

export default function CareerCoachingPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.margarita-dautova.com/' },
    { name: 'Career Coaching', url: 'https://www.margarita-dautova.com/career-coaching' },
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
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3 text-center lg:text-left">
              <h1 className="font-serif text-[2.4rem] leading-[1.15] tracking-[-0.02em] md:text-[44px] text-stone-900 text-balance">
                Career coaching for the moments when you don&apos;t quite know what&apos;s next.
              </h1>
              <div className="mt-6 space-y-4 text-body-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 text-pretty">
                <p>Change doesn&apos;t always arrive with a clear reason.</p>
                <p>
                  A role that no longer fits. A move to a new country. A new chapter you didn&apos;t quite expect.
                  Or simply a quiet sense that something needs to shift.
                </p>
                <p>
                  You don&apos;t need to arrive with a plan. You just need a space to think clearly about what
                  comes next.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/book" variant="primary" size="lg">
                  Book a free discovery call
                </Button>
              </div>
              <p className="mt-5 text-sm text-stone-500">
                ICF PCC-certified · 1:1 coaching · Munich + worldwide
              </p>
            </div>

            <div className="relative lg:col-span-2 lg:order-last lg:flex lg:items-center lg:justify-end">
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG_5836.JPG"
                  alt="Margarita Dautova, Career Coach"
                  fill
                  className="object-cover"
                  priority
                  sizes="33vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Recognition */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Maybe you&apos;re somewhere in between.
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
          <p className="mt-12 text-center text-stone-700 text-lg max-w-3xl mx-auto">
            You don&apos;t need to have it figured out before you come. That&apos;s what the coaching is for.
          </p>
        </Container>
      </section>

      {/* 3. The Coaching Experience */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              A space to think without having to perform.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto text-pretty">
              <p>
                Most of my clients don&apos;t need another problem-solver. They need somewhere they can say
                what they&apos;re actually thinking — without managing how it sounds, without needing to have
                already worked it out.
              </p>
              <p>
                I ask the questions that help you hear yourself clearly. I hold the structure, so you don&apos;t
                have to. And I stay with the complexity of a situation instead of rushing you toward a tidy
                answer.
              </p>
            </div>
            <p className="mt-8 inline-block text-stone-900 font-serif text-xl italic border-t border-b border-stone-300 py-4 px-2 text-pretty">
              Warmth, depth and structure — without rushing the process.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. What Coaching Can Help With */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What might become clearer
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCards.map((card) => (
              <div
                key={card.title}
                className="p-6 md:p-7 border border-stone-200 rounded-sm hover:border-stone-300 transition-colors duration-300"
              >
                <h3 className="font-serif text-lg text-stone-900">{card.title}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Practical Career Support */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              From figuring out what you want to communicating it clearly.
            </h2>
            <p className="mt-4 text-stone-600 text-lg text-pretty">
              As clarity develops, it often needs to be put into words — a CV, a LinkedIn profile, an
              interview. This isn&apos;t a separate service. It&apos;s a natural extension of the same work.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {practicalItems.map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <h3 className="font-serif text-lg text-stone-900">{item.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-pretty text-stone-700 text-lg max-w-2xl mx-auto">
            The goal isn&apos;t to make you sound impressive. It&apos;s to make it easier for the right people
            to see what you bring.
          </p>
        </Container>
      </section>

      {/* 6. How We Work */}
      <section className="section-padding bg-white">
        <Container size="wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              A process shaped around you.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
          <p className="mt-16 text-center text-pretty text-stone-900 font-serif text-xl italic">
            The process has structure. The direction comes from you.
          </p>
        </Container>
      </section>

      {/* 7. Ways to Work Together */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Choose the kind of support that fits where you are.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ServiceCard
              title="90-Day Clarity Through Transition"
              subtitle="3 months"
              description="For people in a meaningful transition who want to think clearly, decide intentionally, and move forward in a grounded way."
              featuresHeading="What's included"
              features={[
                '6 coaching sessions (60 min)',
                'Session summary & notes',
                'Personalized development plan',
                'Email support between sessions',
                'Mid-point and final reviews',
              ]}
              walkAway={{
                heading: "What you'll walk away with",
                items: [
                  'Making sense of a transition or uncertainty',
                  'Clarifying what matters now',
                  'Rebuilding trust in your thinking',
                  'Grounded, sustainable next steps',
                  'Decisions you can stand behind',
                ],
              }}
              idealFor="Career or identity transitions, living abroad, feeling internally misaligned"
              price="€700"
              priceNote="€120 per session individually"
              vatNote="No VAT charged — § 19 German VAT Act"
              ctaText="Let's start with a conversation"
              ctaHref="/book"
              footnote="A free discovery call comes first. After talking through your situation, we'll decide if we can work together and define a plan for the next sessions. Afterwards, I'll send you an invoice and we'll book your first session."
              featured
            />
            <ServiceCard
              title="Strategic Session"
              subtitle="Focused thinking session"
              description="For people who need to untangle one specific question, decision, or situation — and leave with clearer thinking."
              useCases={{
                heading: 'What you can use this for',
                items: [
                  'Make sense of a career decision or choose between two directions',
                  'Prepare for an upcoming interview or important professional conversation',
                  'Get focused feedback on your CV, LinkedIn profile or professional story',
                  'Understand how to position your experience for a new role, industry or job market',
                ],
              }}
              featuresHeading="What's included"
              features={[
                'Pre-session questionnaire',
                '90-minute focused session',
                'Session summary & notes',
                'Optional follow-up session',
              ]}
              idealFor="Career decisions, preparing for conversations, getting unstuck"
              price="€150"
              vatNote="No VAT charged — § 19 German VAT Act"
              ctaText="Book a Strategic Session"
              ctaHref="https://cal.com/margarita-dautova-odapxj/strategic-session"
              footnote={
                <>
                  If we haven&apos;t yet worked together, I recommend having a free{' '}
                  <Link href="/book" className="text-primary-600 underline hover:text-primary-700">
                    discovery call
                  </Link>{' '}
                  first. If we&apos;ve worked together before, feel free to book the Strategic Session
                  directly. I&apos;ll send you the preparation questionnaire shortly after.
                </>
              }
            />
          </div>
        </Container>
      </section>

      {/* 8. Why Work With Me */}
      <section className="section-padding bg-white">
        <Container size="default">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance text-center">
            A coach who understands both the person and the workplace.
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
                  Before becoming a coach, I spent 10+ years in Talent &amp; Leadership Development at
                  international organisations (luxury fashion tech and global travel tech) — working with
                  people and teams through development, role changes, career decisions and organisational
                  change.
                </p>
                <p>
                  That experience gave me a practical understanding of both sides of a transition: what
                  change feels like for the person experiencing it, and how organisations actually work.
                </p>
                <p>
                  I bring that perspective into coaching, while keeping the focus where it belongs: on you,
                  your situation and what you want to make possible from here.
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

      {/* 9. Testimonials */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What it feels like to work together
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.attribution}
                className="bg-white p-6 md:p-8 border border-stone-200 rounded-sm flex flex-col"
              >
                <p className="text-stone-600 leading-relaxed italic flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-6 pt-4 border-t border-stone-100 text-sm font-medium text-stone-500">
                  — {testimonial.attribution}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. FAQ */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-stone-200 rounded-sm p-6">
                <h3 className="font-medium text-stone-900 mb-3">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
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
        </Container>
      </section>

      {/* 11. Final CTA */}
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
    </>
  )
}
