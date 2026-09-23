import { Metadata } from 'next'
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

const internationalQuestions = [
  'Who am I in this country, in this language, in this career?',
  "How do I talk about my experience when the context doesn't translate directly?",
  'Why does something that used to feel easy suddenly take more effort?',
  "How do I build confidence in a system I didn't grow up in?",
  "How do I stay grounded while so much around me is still new?",
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
      "Margarita, thank you so much for your thoughtful and sensitive support throughout my exploration process. I felt safe the whole time and knew I could show up in different ways while still being myself in our conversations. I now feel much greater clarity, and at the same time I sense a deeper inner call to connect more closely with my true motivations and sources of energy. I'm really glad that I took these important steps at the beginning of the year together with you.",
    attribution: 'A.T., Russia',
  },
  {
    quote:
      "In just three sessions, we managed to work through such complex topics and questions, process a lot of emotions, and outline clear actions. It's an amazing result — with real moments of insight along the way. Thank you for your support, understanding, and your caring, gentle approach — while still going deep. And for the questions that immediately brought focus and depth.",
    attribution: 'M.B., Spain',
  },
  {
    quote:
      "Working together brought real clarity to my short-term goals and helped me improve my focus. I discovered strengths I didn't fully recognize before and learned how to apply them — bringing more order into my life. Rather than being told what to do, the process was highly interactive: it helped me find my own answers and create a real path toward my goals.",
    attribution: 'F.M., Software engineer, UAE',
  },
  {
    quote:
      "Thank you very much for a professional and productive coaching sessions. I really liked how you guided me in accordance with my topic, doing it in a gentle but confident manner. It stimulated me to openness and sincerity, giving the opportunity to open my potential and resolve my own issues. As a result, we managed to build the most productive plan of action to achieve the goal, which I am now following and already seeing results, which I am very happy about!",
    attribution: 'E.B., Russia',
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
      "Yes. I work with clients worldwide, online, in English. Many of my clients are international professionals living outside their home country.",
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
        <Container size="narrow" className="text-center">
          <h1 className="font-serif text-[2.4rem] leading-[1.15] md:text-display-lg text-stone-900 text-balance">
            Career coaching for the moments when you don&apos;t quite know what&apos;s next.
          </h1>
          <div className="mt-6 space-y-4 text-body-lg text-stone-600 max-w-2xl mx-auto">
            <p>
              Change doesn&apos;t always arrive with a clear reason. A role that no longer fits. A move to a
              new country. A quiet sense that something needs to shift, even if you can&apos;t yet say what.
            </p>
            <p>
              You don&apos;t need to arrive with a plan, or a clear answer already in hand. You just need a
              space to think clearly about what&apos;s actually happening — and what you want to do about it.
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
          <p className="mt-12 text-center text-stone-700 text-lg max-w-2xl mx-auto">
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
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto">
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
            <p className="mt-8 inline-block text-stone-900 font-serif text-xl italic border-t border-b border-stone-300 py-4 px-2">
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
            <p className="mt-4 text-stone-600 text-lg">
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
          <p className="mt-12 text-center text-stone-700 text-lg max-w-2xl mx-auto">
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
          <p className="mt-16 text-center text-stone-900 font-serif text-xl italic">
            The process has structure. The direction comes from you.
          </p>
        </Container>
      </section>

      {/* 7. International Professionals */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance text-center">
            When your career is changing — and you&apos;re building a life in another country.
          </h2>
          <p className="mt-6 text-stone-600 text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Being an international professional adds its own layer to any transition. It&apos;s not just what&apos;s
            next — it&apos;s also who you are here, in a place that isn&apos;t where you started.
          </p>
          <ul className="mt-10 space-y-4 max-w-xl mx-auto">
            {internationalQuestions.map((question) => (
              <li key={question} className="flex items-start gap-3 text-stone-700">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                <span className="leading-relaxed">{question}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 8. Why Work With Me */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance text-center">
            A coach who understands both the person and the workplace.
          </h2>
          <div className="mt-8 space-y-4 text-stone-600 text-lg leading-relaxed">
            <p>
              Before becoming a coach, I spent 10+ years in Talent &amp; Leadership Development inside
              organisations like Mytheresa and Amadeus — designing programs, sitting in on restructurings,
              and supporting people through role changes, relocations and career transitions from the
              inside.
            </p>
            <p>
              That&apos;s given me something I bring into every session: I understand not just how change
              feels, but how organisations actually work — what&apos;s negotiable, what isn&apos;t, and what it
              really takes to move forward in a real workplace, not just in theory.
            </p>
            <p>
              I&apos;m ICF PCC-certified, and I work in English with professionals across many industries and
              countries.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-stone-200 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {stats.map((stat) => (
              <span key={stat} className="text-sm text-stone-500">
                {stat}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Testimonials */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What it feels like to be coached here
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

      {/* 10. Ways to Work Together */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Choose the kind of support that fits where you are.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ServiceCard
              title="90-Day Clarity Through Transition"
              description="Six 60-minute sessions over about three months — space to make sense of a transition and move forward in a grounded way."
              features={[
                '6 coaching sessions (60 min)',
                'Roughly 3 months',
                'Session summary & notes',
                'Email support between sessions',
              ]}
              price="€700"
              ctaText="Explore the 90-Day journey"
              ctaHref="/coaching#ongoing"
              featured
            />
            <ServiceCard
              title="Strategic Session"
              description="A single, focused 90-minute conversation to untangle one specific question, decision, or situation."
              features={[
                '90-minute focused session',
                'Pre-session questionnaire',
                'Session summary & notes',
                'Optional follow-up session',
              ]}
              price="€150"
              ctaText="Book a Strategic Session"
              ctaHref="/coaching#single"
            />
          </div>
          <p className="mt-10 text-center text-stone-500 text-sm">
            Not sure which is right for you? A free discovery call can help you decide.
          </p>
        </Container>
      </section>

      {/* 11. FAQ */}
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

      {/* 12. Final CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            You don&apos;t have to know the answer yet.
          </h2>
          <p className="mt-6 text-primary-100 text-lg max-w-xl mx-auto">
            You just have to be willing to start looking.
          </p>
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
