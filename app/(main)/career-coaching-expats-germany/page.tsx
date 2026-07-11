import { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Career Coaching for Expats in Germany | English-Speaking Coach',
  description:
    'ICF PCC-certified career coach for expats and international professionals living in Germany. English-language sessions, based in Munich, online worldwide.',
  alternates: { canonical: '/career-coaching-expats-germany' },
}

const testimonials = [
  {
    quote:
      "Thank you very much for a professional and productive coaching sessions. I really liked how you guided me in accordance with my topic, doing it in a gentle but confident manner. It stimulated me to openness and sincerity, giving the opportunity to open my potential and resolve my own issues. As a result, we managed to build the most productive plan of action to achieve the goal, which I am now following and already seeing results, which I am very happy about!",
    attribution: 'E.B., Russia',
  },
  {
    quote:
      'Margarita, thank you for 2.5 months of joint work. It was exciting, interesting, but most importantly productive! At the moment, "the puzzle is solved", and this has given me more self-confidence to act in achieving my professional goal. Thank you for the pleasant energy that comes from you, as well as for the respectful attitude.',
    attribution: 'K.K., Belgium',
  },
  {
    quote:
      "Working with you has been extremely impactful for my development. Every session feels like a valuable use of my time, and I consistently leave with deeper insights about myself. Coaching helps me overcome obstacles, make meaningful progress toward my goals, and be more effective at work.",
    attribution: 'L.S., Sweden',
  },
]

const faqs = [
  {
    question: 'Do you understand the specific challenges of being an expat in Germany?',
    answer:
      "Yes. I'm based in Munich and work with international professionals living and working across Germany every week. I understand the practical realities — work permits tied to employment, the directness of German workplace culture, and the isolation that can come with rebuilding a career and a support network at the same time.",
  },
  {
    question: 'Do sessions happen in English?',
    answer:
      "Yes, all coaching sessions are conducted in English. Many of my clients work in English-language environments in Germany but still navigate career decisions, job searches, and workplace dynamics that are shaped by German culture.",
  },
  {
    question: "I'm not fluent in German — does that matter for coaching?",
    answer:
      "Not for our work together. What often matters more is finding the language and confidence to articulate your value clearly, whether that's in interviews, performance conversations, or deciding on your next move. We work on that directly.",
  },
  {
    question: 'Can coaching help me decide whether to stay in Germany or move on?',
    answer:
      "Often, yes. Many expat clients come to me at exactly this crossroads — unsure whether what they're feeling is a signal to change roles, change environments, or change countries entirely. Coaching helps you get clarity on what's actually driving the discomfort before you make a big decision.",
  },
  {
    question: 'What if my work situation feels complicated because of visa or contract constraints?',
    answer:
      "That's a common starting point for expat clients. While I'm not an immigration or legal advisor, coaching can help you think clearly about your options, priorities, and next steps within the constraints you're navigating — so you make decisions deliberately rather than out of anxiety.",
  },
  {
    question: 'Do you work with clients outside of Munich or in person?',
    answer:
      "Most coaching happens online via video call, so location within Germany (or elsewhere) isn't a barrier. I'm based in Munich and occasionally meet local clients in person by arrangement.",
  },
]

export default function CareerCoachingExpatsGermanyPage() {
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            For Expats & International Professionals
          </p>
          <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
            Career coaching for expats living and working in Germany
          </h1>
          <p className="mt-6 text-body-lg text-stone-600 max-w-2xl mx-auto">
            An English-speaking, ICF PCC-certified thinking partner for professionals navigating
            career transitions while building a life abroad. Based in Munich, working with clients
            across Germany and worldwide.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium
                bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="prose-custom space-y-6 text-stone-600 leading-relaxed">
            <p>
              Building a career as an expat comes with a layer of complexity that doesn't show up
              in most career advice. You're not just navigating a job change — you're doing it
              while adjusting to a new culture, often a new language, and a support network that's
              thinner than the one you left behind. In Germany specifically, that can mean
              adapting to a more direct communication style, a different relationship with
              hierarchy and feedback, and — for many — a work permit that's tied directly to your
              employment, which raises the stakes on every career decision.
            </p>
            <p>
              I work with international professionals living in Germany who sense that something
              needs to shift — whether that's their role, their industry, or their relationship to
              work itself — but who find it hard to think clearly about it alone. It's common to
              feel capable and accomplished on paper, while privately unsure how to translate that
              into confident next steps in an unfamiliar system. Add distance from family, friends,
              and the informal career advice you'd normally lean on, and even small decisions can
              start to feel heavier than they should.
            </p>
            <h2 className="font-serif text-heading-lg text-stone-900 pt-4">
              How coaching helps expats in Germany specifically
            </h2>
            <p>
              As your thinking partner, I create a confidential space to slow down, get honest
              about what's actually happening, and make sense of decisions in context — your
              context, not a generic playbook. That often includes finding language to describe
              your experience and value clearly (especially useful in interviews, performance
              conversations, or when explaining your path to colleagues who didn't share it),
              working through the specific pressure of a visa or contract tied to your job, and
              deciding whether what you're feeling is a sign to change roles, change companies, or
              rethink your time in Germany altogether.
            </p>
            <p>
              This isn't about giving you answers or telling you what "expats should do." It's
              about helping you trust your own thinking again, so the decisions you make — about
              your career and about your life abroad — are ones you can stand behind.
            </p>
            <p>
              If this sounds like where you are, take a look at{' '}
              <Link href="/coaching" className="text-primary-600 hover:text-primary-700 underline">
                how we can work together
              </Link>
              , or book a free discovery call to talk it through.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-stone-50">
        <div className="container-default">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Client Experiences
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900">
              What clients say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white border border-stone-200 rounded-sm p-8">
                <div className="text-4xl text-primary-300 font-serif leading-none mb-4">"</div>
                <blockquote>
                  <p className="text-stone-600 leading-relaxed italic text-sm">{item.quote}</p>
                </blockquote>
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <p className="text-sm font-medium text-stone-500">— {item.attribution}</p>
                </div>
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
        </div>
      </section>

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
                <h3 className="font-medium text-stone-900 mb-3">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            Let's talk about where you are
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-xl mx-auto">
            A free, no-pressure 30-minute call to see if coaching is the right fit for your
            situation in Germany.
          </p>
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
