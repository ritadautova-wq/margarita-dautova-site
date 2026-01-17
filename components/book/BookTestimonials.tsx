import Container from '@/components/Container'
import Section from '@/components/Section'

const callPatterns = [
  {
    before: "I feel stuck for months, looping through the same three career options.",
    after: "I leave with the real tension identified—and 2-3 concrete steps for the next 7 days.",
    label: "FROM OVERWHELM TO ACTION",
  },
  {
    before: "I’m not sure how to name my strengths in a way that feels natural in a non-native environment.",
    after: "I start to see how my story can translate across cultures with calm confidence.",
    label: "FROM SILENCE TO STORY",
  },
  {
    before: "I’m worried I’ll be pressured into a coaching program I’m not ready for.",
    after: "I experience a pure thinking partnership—no pitch, no pressure, just an honest recommendation.",
    label: "FROM SKEPTICISM TO TRUST",
  },
]

export default function BookTestimonials() {
  return (
    <Section background="light">
      <Container size="narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            What to expect
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 mb-4">
            The shift starts with a conversation
          </h2>
          <p className="text-stone-600">
            Even if we don't end up working together long-term, my goal is for you to walk away from this call with more clarity than you had when you arrived.
          </p>
        </div>

        <div className="space-y-6">
          {callPatterns.map((pattern, index) => (
            <div key={index} className="bg-white border border-stone-200 rounded-sm p-6 md:p-8 shadow-sm">
              <span className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-4 block">
                {pattern.label}
              </span>
              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                <div>
                  <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Before the call</p>
                  <p className="text-stone-600 italic leading-relaxed">
                    "{pattern.before}"
                  </p>
                </div>
                <div className="md:border-l md:pl-12 border-stone-100">
                  <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mb-2">After 30 minutes</p>
                  <p className="text-stone-900 font-medium leading-relaxed">
                    {pattern.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
