import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import { hero } from '@/lib/homePageContent'

export default function HeroSection() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'check':
        return (
          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'people':
        return (
          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      case 'globe':
        return (
          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M11 3.055V5a2 2 0 002 2h1a2 2 0 002-2V3.055M20.945 13H19a2 2 0 00-2 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 00-2-2h-1.055M13 20.945V19a2 2 0 00-2-2h-1a2 2 0 00-2 2v1.945M3.055 13H5a2 2 0 012-2v-1a2 2 0 00-2-2H3.055" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100/50 to-stone-50" />
      
      <div className="container-default relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div>
            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-stone-600">
              {hero.trustStrip.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {getIcon(item.icon)}
                  <span className={index === 0 ? 'font-medium' : ''}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[44px] leading-[1.15] tracking-[-0.02em] text-stone-900 text-balance mb-6">
              {hero.headline}
            </h1>
            
            {/* Subheadline */}
            <p className="text-body-lg md:text-xl text-stone-600 leading-relaxed mb-10">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                href={hero.primaryCTA.href}
                variant="primary"
                size="lg"
                className="text-base"
              >
                {hero.primaryCTA.label}
              </Button>
              <Button
                href={hero.secondaryCTA.href}
                variant="secondary"
                size="lg"
                className="text-base"
              >
                {hero.secondaryCTA.label}
              </Button>
            </div>

            {/* CTA Microcopy */}
            <p className="text-sm text-stone-500">
              <strong className="text-stone-700">{hero.microcopy}</strong>
            </p>
          </div>

          {/* Image Column */}
          <div className="relative lg:order-last">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_5842.JPG"
                alt="Margarita Dautova - Career Coach"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              {/* Decorative gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

