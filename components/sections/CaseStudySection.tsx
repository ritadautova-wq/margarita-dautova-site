import Container from '@/components/Container'
import Link from 'next/link'
import { caseStudySection } from '@/lib/homePageContent'

export default function CaseStudySection() {
  return (
    <section className="section-padding bg-white">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              {caseStudySection.eyebrow}
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              {caseStudySection.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="text-xs font-medium text-stone-900 uppercase tracking-wider mb-3">
                {caseStudySection.challengeLabel}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {caseStudySection.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-stone-900 uppercase tracking-wider mb-3">
                {caseStudySection.approachLabel}
              </h3>
              <ul className="space-y-2">
                {caseStudySection.approach.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                    <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium text-stone-900 uppercase tracking-wider mb-3">
                {caseStudySection.resultLabel}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {caseStudySection.result}
              </p>
            </div>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8 text-center mb-8">
            <p className="text-stone-700 italic leading-relaxed mb-4">
              "{caseStudySection.quote}"
            </p>
            <p className="text-sm font-medium text-stone-500">
              — {caseStudySection.quoteAttribution}
            </p>
          </div>

          <div className="text-center">
            <Link
              href={caseStudySection.href}
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
            >
              {caseStudySection.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
