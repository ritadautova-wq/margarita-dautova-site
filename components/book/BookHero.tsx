'use client'

import { defaultHeroVariant, heroVariants, trustStrip, heroMicrocopy } from '@/lib/bookPageContent'
import Container from '@/components/Container'
import Link from 'next/link'
import { trackEvent, AnalyticsEvents } from '@/lib/analytics'

export default function BookHero() {
  const hero = heroVariants[defaultHeroVariant]

  const handleCTAClick = () => {
    trackEvent(AnalyticsEvents.HERO_PRIMARY_CTA_CLICK, {
      variant: defaultHeroVariant,
    })
    // Scroll to calendar section
    const calendarSection = document.getElementById('book-calendar')
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
      <Container size="narrow">
        <div className="text-center">
          <h1 className="font-serif text-display md:text-display-lg lg:text-display-xl text-stone-900 text-balance mb-6">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="#book-calendar"
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-medium rounded-sm hover:bg-primary-700 transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {hero.ctaLabel}
            </Link>
          </div>

          <p className="text-sm text-stone-500 mb-6">{heroMicrocopy}</p>

          {/* Trust Strip */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs text-stone-500">
            {trustStrip.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

