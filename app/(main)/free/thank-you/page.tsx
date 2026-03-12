import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Career Pivot Playbook',
  description: 'Thank you for downloading the Career Pivot Playbook.',
}

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance mb-6">
              Check Your Inbox!
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              We just sent you the Career Pivot Playbook. It should arrive in your inbox within the next few minutes.
            </p>
          </div>
        </Container>
      </section>

      {/* Next Steps */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-heading-lg text-stone-900 mb-6 text-center">
              What's Next?
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">
                    Download and Read the Playbook
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Open the email we just sent and download your PDF. Take your time reading through it—there's no rush.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">
                    Complete the Self-Assessment
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Start with the "5 Signs You're Ready for a Change" section. Be honest with yourself—this is for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">
                    Try the 30-Day Action Plan
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Pick one or two actions from the plan and commit to them this week. Small steps lead to big changes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">
                    Book a Discovery Call (Optional)
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    If you want to go deeper, book a 30-minute call where we can explore your specific situation 
                    and whether coaching could help.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary-50 border border-primary-100 rounded-sm p-6 md:p-8 text-center">
              <h3 className="font-serif text-heading text-stone-900 mb-3">
                Ready to Take the Next Step?
              </h3>
              <p className="text-stone-600 mb-6">
                Book a strategy call and let's talk about where you are and where you want to go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/book" variant="primary" size="lg">
                  Book a Discovery Call
                </Button>
                <Button href="/" variant="secondary" size="lg">
                  Back to Homepage
                </Button>
              </div>
            </div>

            {/* Email Help */}
            <div className="mt-8 text-center">
              <p className="text-sm text-stone-500 mb-2">
                Didn't receive the email?
              </p>
              <p className="text-sm text-stone-600">
                Check your spam folder, or{' '}
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 underline">
                  contact us
                </Link>{' '}
                and we'll resend it.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
