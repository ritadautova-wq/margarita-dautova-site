import Link from 'next/link'
import Button from '@/components/Button'

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100/50 to-stone-50" />
      
      <div className="container-default relative z-10">
        <div className="max-w-4xl">
          {/* Trust Strip */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-stone-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">PCC ICF Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>100+ professionals coached</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M11 3.055V5a2 2 0 002 2h1a2 2 0 002-2V3.055M20.945 13H19a2 2 0 00-2 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 00-2-2h-1.055M13 20.945V19a2 2 0 00-2-2h-1a2 2 0 00-2 2v1.945M3.055 13H5a2 2 0 012-2v-1a2 2 0 00-2-2H3.055" />
              </svg>
              <span>Worldwide via video</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-display md:text-display-lg lg:text-display-xl text-stone-900 text-balance mb-6">
            Land Your Next Career Move Without Burning Out or Starting Over
          </h1>
          {/* Deployment marker: 2026-01-04 */}
          
          {/* Subheadline */}
          <p className="text-body-lg md:text-xl text-stone-600 max-w-3xl leading-relaxed mb-10">
            Career coaching for senior professionals who want clarity on their next chapter—without sacrificing what they've built. 
            The 90-Day Clarity Sprint helps you navigate transitions with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              href="/book"
              variant="primary"
              size="lg"
              className="text-base"
            >
              Book Your Strategy Call
            </Button>
            <Button
              href="/free"
              variant="secondary"
              size="lg"
              className="text-base"
            >
              Get the Career Pivot Playbook
            </Button>
          </div>

          {/* CTA Microcopy */}
          <p className="text-sm text-stone-500">
            <strong className="text-stone-700">Free. 30 minutes.</strong> Leave with your next step.
          </p>
        </div>
      </div>
    </section>
  )
}

