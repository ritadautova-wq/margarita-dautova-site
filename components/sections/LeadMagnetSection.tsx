import Container from '@/components/Container'
import OptInForm from '@/components/OptInForm'

export default function LeadMagnetSection() {
  return (
    <section className="section-padding bg-stone-100/50">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                Free Resource
              </p>
              <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
                Get the Career Pivot Playbook
              </h2>
              <p className="text-stone-600 text-lg mb-6">
                An 8-page guide to help you navigate your next career move with clarity and confidence.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-stone-700">The 5 signs you're ready for a change</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-stone-700">The 3 pivot paths: Shift, Switch, or Start Fresh</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-stone-700">The Hidden Transferable Skills Framework</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-stone-700">30-Day Clarity Kickstart Action Plan</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-6 md:p-8 border border-stone-200 rounded-sm">
              <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
                Download Your Free Guide
              </h3>
              <p className="text-stone-600 text-sm mb-6">
                Enter your email and we'll send you the Career Pivot Playbook instantly.
              </p>
              <OptInForm source="homepage" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

