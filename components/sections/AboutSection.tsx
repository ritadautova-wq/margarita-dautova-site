import Container from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="section-padding bg-stone-100/50">
      <Container size="default">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-stretch">
          {/* Image — height matches text column */}
          <div className="lg:col-span-2 min-h-[280px] lg:min-h-0">
            <div className="relative h-full min-h-[280px] lg:min-h-0 overflow-hidden rounded-sm bg-gradient-to-br from-primary-100 to-stone-100">
              <Image
                src="/images/IMG_5681.JPG"
                alt="Portrait of Margarita Dautova"
                fill
                className="object-cover object-bottom"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </div>

          {/* Bio content */}
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              About Me
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-6">
              Where coaching meets real organizational experience
            </h2>

            <div className="space-y-4 text-stone-600 leading-relaxed mb-6">
              <p>
                Before becoming a coach, I spent 10+ years in Talent and Leadership Development
                at Mytheresa, Amadeus and other organizations. I've seen firsthand how talented
                people can lose their spark, get stuck in roles that don't fit, or burn out
                trying to meet impossible expectations.
              </p>
              <p>
                I know what professional change looks like from both sides: as an employee
                navigating my own transitions, and from inside organizations supporting people,
                talent and teams. Today, I bring those perspectives together through individual
                coaching, team facilitation and customized transition programs.
              </p>
              <p>
                I'm based in Munich, Germany, and work with clients worldwide. Sessions
                happen online, which means we can meet wherever you are.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
              >
                Read my full story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

