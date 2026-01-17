import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'

export const metadata: Metadata = {
  title: 'Client Experience',
  description:
    'Learn about the experience of working with Margarita. Common shifts, before/after patterns, and what to expect from a thinking partnership.',
}

const patterns = [
  {
    before: "I’m capable and successful on paper, but I feel deeply unclear about my next chapter.",
    after: "I can name the real decision beneath the surface and move forward with grounded confidence.",
    label: "CLARITY",
  },
  {
    before: "I’m living abroad and working in a non-native language; I feel like my story doesn’t translate.",
    after: "I have the language for my professional story—I can explain my path with calm authority.",
    label: "COMMUNICATION",
  },
  {
    before: "I overthink every option, looping through scenarios but never actually choosing.",
    after: "I know exactly what to say yes and no to—and I understand the values driving those choices.",
    label: "DECISION-MAKING",
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            The Experience
          </p>
          <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
            Common shifts my clients notice
          </h1>
          <p className="mt-6 text-body-lg text-stone-600 max-w-2xl mx-auto">
            Every coaching journey is individual, but these are the patterns that tend to emerge 
            when we work together as thinking partners.
          </p>
        </div>
      </section>

      {/* Experience Patterns */}
      <section className="section-padding bg-white">
        <Container size="default">
          <div className="grid md:grid-cols-3 gap-8">
            {patterns.map((pattern, index) => (
              <div key={index} className="bg-stone-50 p-8 border border-stone-200 rounded-sm flex flex-col h-full">
                <span className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-6">
                  {pattern.label}
                </span>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Before</p>
                    <p className="text-stone-600 italic leading-relaxed">
                      "{pattern.before}"
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-stone-200">
                    <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mb-2">After</p>
                    <p className="text-stone-900 font-medium leading-relaxed">
                      {pattern.after}
                    </p>
                  </div>
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
            Book a free discovery call and let's identify the real decision beneath the surface.
          </p>
          
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium 
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Book Free Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
