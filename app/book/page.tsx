import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import CalendarEmbed from '@/components/CalendarEmbed'

export const metadata: Metadata = {
  title: 'Book a Discovery Call',
  description:
    'Schedule a free 30-minute discovery call with Margarita Dautova to explore how coaching can help you achieve your career goals.',
}

const benefits = [
  {
    title: 'Get clarity',
    description: 'Articulate your current challenges and what you want to change.',
  },
  {
    title: 'Explore possibilities',
    description: "Understand how coaching could help you reach your goals.",
  },
  {
    title: 'Ask questions',
    description: "Learn about my approach and see if we're a good fit.",
  },
  {
    title: 'No pressure',
    description: 'This is an exploratory conversation, not a sales pitch.',
  },
]

const expectations = [
  "We'll spend a few minutes getting to know each other",
  "You'll share what's on your mind and what brought you here",
  "I'll ask a few questions to understand your situation",
  "We'll discuss whether and how coaching might help",
  "You'll leave with clarity on your next steps — whether or not we work together",
]

const idealFor = [
  'Professionals considering a career transition',
  'Leaders stepping into new or expanded roles',
  'High-achievers feeling stuck or unfulfilled',
  'Executives seeking to enhance their leadership',
  'Anyone curious about what coaching could offer them',
]

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary-600 mb-4">
              Discovery Call
            </p>
            <h1 className="font-serif text-display md:text-display-lg text-neutral-900 text-balance">
              Let's explore what's possible
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Book a free 30-minute discovery call. No pressure, no obligation — just a 
              genuine conversation about where you are and where you want to go.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              <h2 className="font-serif text-heading text-neutral-900">
                What you'll get from our call
              </h2>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index}>
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                      <svg
                        className="w-5 h-5 text-primary-600"
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
                    </div>
                    <h3 className="font-medium text-neutral-900">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="mt-12">
                <h3 className="font-serif text-xl text-neutral-900 mb-4">
                  What to expect
                </h3>
                <ul className="space-y-3">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="mt-12">
                <h3 className="font-serif text-xl text-neutral-900 mb-4">
                  This call is ideal for
                </h3>
                <ul className="space-y-2">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Widget */}
            <div>
              <div className="sticky top-32">
                <div className="bg-neutral-50 border border-neutral-200 rounded-sm overflow-hidden">
                  <div className="p-6 border-b border-neutral-200">
                    <h2 className="font-serif text-xl text-neutral-900">
                      Schedule your call
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600">
                      Choose a time that works for you. All times shown in your local timezone.
                    </p>
                  </div>

                  {/* Cal.com Embed */}
                  <div className="p-6">
                    <CalendarEmbed 
                      calLink="margarita-dautova" 
                      eventType="discovery-call"
                      height="700px"
                    />

                    {/* Fallback: Manual Request */}
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <p className="text-sm text-neutral-600 text-center">
                        Having trouble with the calendar?{' '}
                        <a
                          href="/contact"
                          className="text-primary-600 hover:text-primary-700 underline"
                        >
                          Send me a message
                        </a>{' '}
                        and I'll find a time that works.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section background="light" size="sm">
        <Container size="narrow">
          <div className="text-center">
            <p className="text-neutral-600 leading-relaxed max-w-xl mx-auto">
              "The discovery call was incredibly valuable — even before we started working 
              together, I left with insights I hadn't considered. Margarita has a gift for 
              asking the right questions."
            </p>
            {/* TODO: Replace with real testimonial */}
            <p className="mt-4 text-sm text-neutral-500">
              — Former discovery call participant
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <Container size="narrow">
          <h2 className="font-serif text-heading text-neutral-900 text-center mb-8">
            Questions about the call
          </h2>
          <div className="space-y-4">
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-sm">
              <h3 className="font-medium text-neutral-900">
                Is this really free? What's the catch?
              </h3>
              <p className="mt-2 text-neutral-600">
                Yes, it's genuinely free. There's no catch. I offer these calls because 
                coaching is deeply personal — it matters that we're a good fit for each 
                other. This conversation helps us both determine that.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-sm">
              <h3 className="font-medium text-neutral-900">
                What if I'm not ready to commit to coaching?
              </h3>
              <p className="mt-2 text-neutral-600">
                That's completely fine! Many people book discovery calls just to explore. 
                You'll still leave with value — often, just articulating your situation to 
                someone outside it provides useful clarity.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-sm">
              <h3 className="font-medium text-neutral-900">
                How should I prepare for the call?
              </h3>
              <p className="mt-2 text-neutral-600">
                No formal preparation needed. Just come as you are. If it helps, you might 
                briefly reflect on what's prompting your interest in coaching and what 
                you'd most like to change or achieve.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-sm">
              <h3 className="font-medium text-neutral-900">
                What happens after the call?
              </h3>
              <p className="mt-2 text-neutral-600">
                If we both feel there's a good fit, I'll share information about relevant 
                coaching options and next steps. If not, I may suggest other resources or 
                approaches that might serve you better. Either way, you'll have clarity.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

