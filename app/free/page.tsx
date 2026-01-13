import { Metadata } from 'next'
import Container from '@/components/Container'
import OptInForm from '@/components/OptInForm'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Get Your Free Career Pivot Playbook',
  description:
    'Download the Career Pivot Playbook: An 8-page guide to help you navigate your next career move with clarity and confidence.',
}

export default function FreeResourcePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary-600 mb-4">
              Free Resource
            </p>
            <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance mb-6">
              Get Your Career Pivot Playbook
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              An 8-page guide to help you navigate your next career move with clarity and confidence—without burning out or starting over.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: What's Inside */}
            <div>
              <h2 className="font-serif text-heading-lg text-stone-900 mb-6">
                What's Inside
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-2">
                      The 5 Signs You're Ready for a Change
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      A self-assessment to help you recognize when it's time to pivot—and when you might just need a break.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-2">
                      The 3 Pivot Paths: Shift, Switch, or Start Fresh
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Understand your options: staying in your field but changing roles, switching industries, or building something new.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-2">
                      The Hidden Transferable Skills Framework
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Discover skills you already have that translate to new roles—you're not starting from zero.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-2">
                      30-Day Clarity Kickstart Action Plan
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Concrete steps you can take right now to start moving toward clarity—no waiting required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-sm p-6">
                <h3 className="font-medium text-stone-900 mb-2">
                  Plus: Invitation to a Free Discovery Call
                </h3>
                <p className="text-stone-600 text-sm">
                  After you download the playbook, you'll get an invitation to book a free 30-minute strategy call 
                  where we can dive deeper into your specific situation.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8">
                <h2 className="font-serif text-heading text-stone-900 mb-2">
                  Download Your Free Guide
                </h2>
                <p className="text-stone-600 text-sm mb-6">
                  Enter your email and we'll send you the Career Pivot Playbook instantly.
                </p>
                <OptInForm source="free-page" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="section-padding-sm bg-stone-100/50">
        <Container size="narrow">
          <div className="text-center">
            <p className="text-stone-600 leading-relaxed max-w-xl mx-auto mb-6">
              "The playbook gave me exactly what I needed to start thinking differently about my career. 
              The transferable skills framework alone was worth it—I realized I had way more options than I thought."
            </p>
            <p className="text-sm text-stone-500">
              — Former playbook reader
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="text-center bg-primary-50 border border-primary-100 rounded-sm p-8 md:p-10">
            <h2 className="font-serif text-heading-lg text-stone-900 mb-4">
              Ready for deeper support?
            </h2>
            <p className="text-stone-600 mb-6">
              The playbook is a great start. If you're ready to go deeper, book a free strategy call 
              where we can explore your specific situation and whether coaching could help.
            </p>
            <Button href="/book" variant="primary" size="lg">
              Book Free Discovery Call
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

