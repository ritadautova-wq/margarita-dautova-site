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

      {/* Workshop Testimonials */}
      <section className="section-padding bg-stone-50">
        <Container size="default">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Team Workshops
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900">
              What workshop participants say
            </h2>
            <p className="mt-4 text-stone-600 max-w-xl mx-auto">
              Feedback from team workshops focused on reflection, collaboration, and shared clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote: "Moderators did an amazing job facilitating this workshop. Topics were very relevant to the current situation in the team. We covered many topics within one day and it was a great overview of what we need to work on further.",
                attribution: "Marketing Team, e-commerce company",
              },
              {
                quote: "It was fun and interactive, and at the same time we learned a lot about different working styles and how to improve our work. The day was very well structured and we got the chance to actually work on specific issues that exist in our team.",
                attribution: "SEO Team, e-commerce company",
              },
              {
                quote: "Moderators did a very good job guiding us through the day. The structure was clear and the overall organisation was great. The whole day was nicely paced and the exercises were engaging and thought-provoking.",
                attribution: "SEA Team, e-commerce company",
              },
              {
                quote: "The topics we wanted to discuss were perfectly transformed into team tasks. I felt that the workshop was crafted specifically for our needs. It helped us see the existing issues from a different angle and start working on practical solutions.",
                attribution: "Marketing Team, e-commerce company",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-stone-200 rounded-sm p-8">
                <div className="text-4xl text-primary-300 font-serif leading-none mb-4">"</div>
                <blockquote>
                  <p className="text-stone-600 leading-relaxed italic">{item.quote}</p>
                </blockquote>
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <p className="text-sm font-medium text-stone-500">— {item.attribution}</p>
                </div>
              </div>
            ))}
          </div>
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
