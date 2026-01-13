import Container from '@/components/Container'
import OptInForm from '@/components/OptInForm'
import { leadMagnetSection } from '@/lib/homePageContent'

export default function LeadMagnetSection() {
  return (
    <section className="section-padding bg-stone-100/50">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                {leadMagnetSection.eyebrow}
              </p>
              <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
                {leadMagnetSection.headline}
              </h2>
              <p className="text-stone-600 text-lg mb-6">
                {leadMagnetSection.description}
              </p>

              <div className="space-y-4 mb-8">
                {leadMagnetSection.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-stone-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-6 md:p-8 border border-stone-200 rounded-sm">
              <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
                {leadMagnetSection.formTitle}
              </h3>
              <p className="text-stone-600 text-sm mb-6">
                {leadMagnetSection.formDescription}
              </p>
              <OptInForm source="homepage" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

