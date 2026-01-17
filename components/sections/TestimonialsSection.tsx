import Container from '@/components/Container'

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

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-stone-50">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            The Experience
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            Common shifts my clients notice
          </h2>
          <p className="text-stone-600 text-lg">
            Every journey is individual, but these are the patterns that tend to emerge when we work together as thinking partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {patterns.map((pattern, index) => (
            <div key={index} className="bg-white p-8 border border-stone-200 rounded-sm flex flex-col h-full">
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
                
                <div className="pt-6 border-t border-stone-100">
                  <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mb-2">After</p>
                  <p className="text-stone-900 font-medium leading-relaxed">
                    {pattern.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-stone-200 p-8 md:p-12 rounded-sm max-w-4xl mx-auto">
          <h3 className="font-serif text-heading text-stone-900 mb-6 text-center">What is a thinking partnership?</h3>
          <div className="grid md:grid-cols-2 gap-8 text-stone-600 leading-relaxed">
            <p>
              Many of my clients don't need "advice"—they need a space where they can think out loud without having to perform or impress. I provide the structure, the precise questions, and the calm presence that allows your own insights to surface.
            </p>
            <p>
              We focus on the identity-level transitions that happen when your career or environment shifts. We make space for the complexity of living between cultures and languages, turning confusion into a clear, articulable path.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
