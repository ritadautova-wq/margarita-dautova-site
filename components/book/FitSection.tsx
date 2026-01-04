import Container from '@/components/Container'
import Section from '@/components/Section'
import { fitForYou, notForYou } from '@/lib/bookPageContent'

export default function FitSection() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 mb-4">
            Is this call right for you?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Let's make sure we're a good fit before you book.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For You If */}
          <div className="bg-primary-50 border border-primary-200 rounded-sm p-6 md:p-8">
            <h3 className="font-serif text-heading text-stone-900 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              This is for you if:
            </h3>
            <ul className="space-y-3">
              {fitForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You If */}
          <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8">
            <h3 className="font-serif text-heading text-stone-900 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-stone-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              This is not for you if:
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-stone-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-stone-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

