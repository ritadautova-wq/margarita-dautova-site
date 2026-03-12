import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

export const metadata: Metadata = {
  title: 'Client Experience',
  description:
    'Read what clients say about working with Margarita. Real testimonials and what to expect from a thinking partnership.',
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Client Experiences
          </p>
          <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
            What clients say
          </h1>
          <p className="mt-6 text-body-lg text-stone-600 max-w-2xl mx-auto">
            Every coaching journey is unique. Here's what some clients have shared about their experience working together.
          </p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-white">
        <Container size="default">
          <TestimonialsCarousel variant="dark" />
        </Container>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-stone-50">
        <Container size="narrow">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-heading-lg text-stone-900 mb-6">What is a thinking partnership?</h2>
              <div className="prose-custom text-stone-600 space-y-4">
                <p>
                  Many of my clients don't need "advice"—they need a space where they can think out loud without having to perform or impress. I provide the structure, the precise questions, and the calm presence that allows your own insights to surface.
                </p>
                <p>
                  We focus on the identity-level transitions that happen when your career or environment shifts. We make space for the complexity of living between cultures and languages, turning confusion into a clear, articulable path.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-stone-200">
              <h2 className="font-serif text-heading-lg text-stone-900 mb-6">The transition process</h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">Precision and Grounding</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    We slow down the internal loops. We use language precisely. We get honest about what is actually happening beneath the professional surface.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">International Perspective</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    I specialize in working with international professionals who are navigating change in a non-native environment. We ensure your story translates effectively.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">Sustainable Change</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    We don't look for quick fixes. We look for the shifts that allow you to work and lead in a way that is sustainable and authentic to you.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">Safe Thinking Space</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    A confidential, non-judgmental space where you can explore the messy parts of transition before you name them to the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            Ready to explore your own transition?
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-xl mx-auto">
            Book a discovery call and let's identify the real decision beneath the surface.
          </p>
          
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium 
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
