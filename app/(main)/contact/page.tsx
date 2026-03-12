import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Margarita Dautova. Ask questions about coaching, book a session, or simply start a conversation.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Contact
          </p>
          <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
            Let's start a conversation
          </h1>
          <p className="mt-6 text-body-lg text-stone-600 max-w-2xl mx-auto">
            Whether you have a question, want to learn more, or you're ready to get started — 
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-heading text-stone-900 mb-6">
                Other ways to reach me
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:margarita.dautova.coach@gmail.com"
                    className="text-stone-800 hover:text-primary-600 transition-colors"
                  >
                    margarita.dautova.coach@gmail.com
                  </a>
                </div>

                {/* LinkedIn */}
                <div>
                  <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-2">
                    LinkedIn
                  </h3>
                  <a
                    href="https://linkedin.com/in/margaritadautova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-stone-800 hover:text-primary-600 transition-colors"
                  >
                    Connect on LinkedIn
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-2">
                    Location
                  </h3>
                  <p className="text-stone-800">Munich, Germany</p>
                  <p className="text-sm text-stone-500 mt-1">
                    Working with clients worldwide via video
                  </p>
                </div>

                {/* Response Time */}
                <div>
                  <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-2">
                    Response Time
                  </h3>
                  <p className="text-stone-600">
                    I typically respond within 1-2 business days.
                  </p>
                </div>
              </div>

              {/* Book a call prompt */}
              <div className="mt-10 p-6 bg-primary-50 border border-primary-100">
                <h3 className="font-serif text-lg text-stone-900 mb-2">
                  Prefer to talk?
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  If you'd like to discuss things directly, you can book a 
                  30-minute discovery call.
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium 
                    hover:text-primary-700 transition-colors"
                >
                  Book a Discovery Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-stone-50 p-6 md:p-8 lg:p-10 border border-stone-200">
                <h2 className="font-serif text-heading text-stone-900 mb-6">
                  Send a message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding-sm bg-stone-100/50">
        <div className="container-narrow">
          <h2 className="font-serif text-heading text-stone-900 text-center mb-8">
            Common questions
          </h2>
          <div className="space-y-4">
            <div className="p-6 bg-white border border-stone-200">
              <h3 className="font-medium text-stone-900 mb-2">
                What happens after I send a message?
              </h3>
              <p className="text-stone-600">
                I'll read your message and respond within 1-2 business days. If you're 
                interested in coaching, I'll typically suggest a brief call to discuss 
                your situation.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200">
              <h3 className="font-medium text-stone-900 mb-2">
                Is everything I share confidential?
              </h3>
              <p className="text-stone-600">
                Yes, absolutely. Everything you share with me — whether by email, form, 
                or in coaching sessions — is completely confidential.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200">
              <h3 className="font-medium text-stone-900 mb-2">
                I'm not sure if coaching is right for me. Can I still reach out?
              </h3>
              <p className="text-stone-600">
                Of course. That's often the best reason to reach out. We can have a 
                conversation to help you figure out what you need — whether that's 
                coaching or something else entirely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
