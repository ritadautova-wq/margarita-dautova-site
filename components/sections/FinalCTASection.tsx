import Container from '@/components/Container'
import Link from 'next/link'
import { finalCTASection } from '@/lib/homePageContent'

export default function FinalCTASection() {
  return (
    <section className="section-padding bg-primary-700 text-white">
      <Container size="narrow">
        <div className="text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance mb-6">
            {finalCTASection.headline}
          </h2>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {finalCTASection.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium 
                bg-white text-primary-700 hover:bg-stone-50 active:bg-stone-100
                transition-all duration-300 rounded-sm
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              {finalCTASection.primaryCTALabel}
            </Link>
            <Link
              href="/free"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium 
                bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-700
                transition-all duration-300 rounded-sm
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              {finalCTASection.secondaryCTALabel}
            </Link>
          </div>

          <p className="text-primary-100 text-sm">
            <strong className="text-white">{finalCTASection.microcopy}</strong>
          </p>
          <p className="text-primary-200 text-sm mt-2">
            {finalCTASection.privacyNote}
          </p>
        </div>
      </Container>
    </section>
  )
}

