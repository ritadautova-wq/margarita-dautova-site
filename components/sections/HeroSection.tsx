import Image from 'next/image'
import Button from '@/components/Button'
import { hero } from '@/lib/homePageContent'

export default function HeroSection() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'check':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'people':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      case 'globe':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        )
      case 'clock':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'building':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          MOBILE HERO  (hidden on lg+)
          Layout: full-bleed photo → content card slides up
      ════════════════════════════════════════════════════════ */}
      <section className="lg:hidden">

        {/* Full-bleed portrait — 60 % of viewport height */}
        <div className="relative w-full" style={{ height: '60vh' }}>
          <Image
            src="/images/IMG_5842.JPG"
            alt="Margarita Dautova - Career Coach"
            fill
            className="object-cover object-[55%_15%]"
            priority
            sizes="100vw"
          />

          {/* Bottom fade — blends into the card below */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-transparent to-stone-50/80 pointer-events-none" />

          {/* ── Cert badge — top-left ── */}
          <div className="absolute top-[72px] left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
            <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
            <span className="text-xs font-semibold text-stone-700">ICF PCC-certified</span>
          </div>

          {/* ── Social proof card — bottom-right ── */}
          <div className="absolute bottom-10 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg text-right">
            <p className="text-[1.75rem] font-serif font-bold text-stone-900 leading-none">80+</p>
            <p className="text-[11px] text-stone-500 mt-0.5 leading-tight">professionals<br />coached</p>
          </div>
        </div>

        {/* ── Content card — overlaps image by 24 px ── */}
        <div className="relative -mt-6 bg-stone-50 rounded-t-[2rem] px-6 pt-6 pb-10">

          {/* Drag-handle dot — signals there is more below */}
          <div className="w-10 h-1 bg-stone-300 rounded-full mx-auto mb-6" />

          {/* Eyebrow */}
          <p
            className="text-[10px] font-bold text-primary-600 tracking-[0.2em] uppercase mb-3 animate-fade-in-up"
            style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
          >
            Career Coach · Munich · Worldwide
          </p>

          {/* Headline */}
          <h1
            className="font-serif text-[2.6rem] leading-[1.1] tracking-[-0.02em] text-stone-900 mb-5 animate-fade-in-up"
            style={{ animationDelay: '0.22s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {hero.headline}
          </h1>

          {/* Subheadline — short, punchy version for mobile */}
          <p
            className="text-[1.05rem] leading-relaxed text-stone-600 mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.34s', opacity: 0, animationFillMode: 'forwards' }}
          >
            I work with thoughtful international professionals who want clarity about who they
            are and where they&apos;re going — especially those navigating change while living
            abroad or working in a non-native language.
          </p>

          {/* CTAs — full-width, tap-friendly */}
          <div
            className="flex flex-col gap-3 mb-5 animate-fade-in-up"
            style={{ animationDelay: '0.44s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <Button
              href={hero.primaryCTA.href}
              variant="primary"
              size="lg"
              className="w-full justify-center py-4 text-base"
            >
              {hero.primaryCTA.label}
            </Button>
            <Button
              href={hero.secondaryCTA.href}
              variant="secondary"
              size="lg"
              className="w-full justify-center py-4 text-base"
            >
              {hero.secondaryCTA.label}
            </Button>
          </div>

          {/* Microcopy */}
          <p
            className="text-sm text-stone-500 text-center mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.52s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {hero.microcopy}
          </p>

          {/* Trust pills — skipping the first item (already shown as badge on photo) */}
          <div
            className="flex flex-wrap gap-2 animate-fade-in-up"
            style={{ animationDelay: '0.62s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {hero.trustStrip.slice(1).map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 text-xs text-stone-600 bg-white border border-stone-200 rounded-full px-3 py-1.5 shadow-sm"
              >
                {getIcon(item.icon)}
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          DESKTOP HERO  (hidden on mobile)  — unchanged
      ════════════════════════════════════════════════════════ */}
      <section className="hidden lg:flex min-h-[90vh] items-center pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/50 to-stone-50" />

        <div className="container-default relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">

            {/* Content Column */}
            <div className="lg:col-span-3">
              {/* Trust Strip */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-stone-600">
                {hero.trustStrip.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {getIcon(item.icon)}
                    <span className={index === 0 ? 'font-medium' : ''}>{item.label}</span>
                  </div>
                ))}
              </div>

              <h1 className="font-serif text-[44px] leading-[1.15] tracking-[-0.02em] text-stone-900 text-balance mb-6">
                {hero.headline}
              </h1>

              <p className="text-body-lg md:text-xl text-stone-600 leading-relaxed mb-10">
                {hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href={hero.primaryCTA.href} variant="primary" size="lg" className="text-base">
                  {hero.primaryCTA.label}
                </Button>
                <Button href={hero.secondaryCTA.href} variant="secondary" size="lg" className="text-base">
                  {hero.secondaryCTA.label}
                </Button>
              </div>

              <p className="text-sm text-stone-500">
                <strong className="text-stone-700">{hero.microcopy}</strong>
              </p>
            </div>

            {/* Image Column */}
            <div className="relative lg:col-span-2 lg:order-last lg:flex lg:items-center lg:justify-end">
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG_5842.JPG"
                  alt="Margarita Dautova - Career Coach"
                  fill
                  className="object-cover object-[55%_20%]"
                  priority
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
