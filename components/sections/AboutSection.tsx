import Container from '@/components/Container'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="section-padding bg-stone-100/50">
      <Container size="default">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-stone-100 flex items-center justify-center rounded-sm">
              {/* TODO: Add Margarita's professional portrait */}
              <div className="text-center text-stone-400">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="mt-2 text-sm">Portrait</p>
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              About Me
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-6">
              A coach who understands the corporate world
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed mb-6">
              <p>
                Before becoming a coach, I spent years in corporate environments—working in 
                Talent and Leadership Development at companies like Mytheresa and Amadeus. 
                I've seen firsthand how talented people can lose their spark, get stuck in 
                roles that don't fit, or burn out trying to meet impossible expectations.
              </p>
              <p>
                That experience shapes how I coach. I understand the pressures you face, the 
                politics you navigate, and the real stakes involved in career decisions. 
                I'm not just coaching from theory—I've lived the corporate reality.
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

