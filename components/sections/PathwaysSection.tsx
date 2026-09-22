import Container from '@/components/Container'
import Link from 'next/link'
import { pathwaysSection } from '@/lib/homePageContent'

export default function PathwaysSection() {
  return (
    <section className="section-padding bg-stone-100/50">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            {pathwaysSection.eyebrow}
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            {pathwaysSection.headline}
          </h2>
          <p className="text-stone-600 text-lg">
            {pathwaysSection.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pathwaysSection.pathways.map((pathway, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-stone-200 rounded-sm flex flex-col"
            >
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                {pathway.label}
              </p>
              <h3 className="font-serif text-heading text-stone-900 mb-3">
                {pathway.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6 flex-grow">
                {pathway.description}
              </p>
              <Link
                href={pathway.href}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
              >
                {pathway.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
