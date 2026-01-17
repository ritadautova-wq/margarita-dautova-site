import Container from '@/components/Container'
import Link from 'next/link'
import { finalCTA } from '@/lib/bookPageContent'

export default function BookFinalCTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary-700">
      <Container size="narrow">
        <div className="text-center text-white">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance mb-6">
            {finalCTA.headline}
          </h2>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {finalCTA.subheadline}
          </p>

          <div className="flex justify-center mb-8">
            <Link
              href="#book-calendar"
              className="inline-flex items-center justify-center px-8 py-4 font-medium bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300 text-base rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              {finalCTA.primaryCTA}
            </Link>
          </div>

          <p className="text-white text-sm">
            <strong>{finalCTA.microcopy}</strong>
          </p>
        </div>
      </Container>
    </section>
  )
}
