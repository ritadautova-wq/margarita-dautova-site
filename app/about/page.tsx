import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Margarita Dautova — a coach who works with people in transition, helping them find clarity through honest, one-on-one conversations.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-100/50 to-stone-50">
        <div className="container-default">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary-100 to-stone-100">
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

            {/* Content */}
            <div className="lg:col-span-3">
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                About Me
              </p>
              <h1 className="font-serif text-display md:text-display-lg text-stone-900">
                Hi, I'm Margarita.
              </h1>
              
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                I work with professionals who find 
                  themselves at a crossroads — people who've built successful careers but 
                  now feel stuck, exhausted, or uncertain about what comes next.
                </p>
                <p>
                  Before becoming a coach, I spent years in corporate environments working 
                  in Talent and Leadership Development. I've designed programs, facilitated 
                  workshops, and sat across from hundreds of people trying to figure out 
                  their careers. That experience taught me something important: the real 
                  breakthroughs don't happen in workshops. They happen in honest, 
                  one-on-one conversations.
                </p>
                <p className="text-stone-800 italic text-lg">
                That's why I became a coach. I wanted to create space for those conversations 
                  — the kind where you can actually say what you're thinking, explore what 
                  you're feeling, and figure out what you actually want.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-3 font-medium 
                    bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
                >
                  Book Free Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-12 md:py-16 lg:py-20 bg-stone-100/50">
        <div className="container-narrow">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              How I Work
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              My Approach
            </h2>
          </div>

          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              That insight is what led me to coaching.
            </p>
            <p>
              I wanted to create space for conversations where you don't have to perform, 
              impress, or already know the answer.
            </p>
            <p className="font-medium text-stone-800">
              In our work together:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>We slow things down</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>We make space for complexity</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>We think carefully, not reactively</span>
              </li>
            </ul>
            <div className="bg-white p-6 border-l-4 border-primary-600">
              <p className="text-stone-700">
                I don't tell you what to do. I don't push you toward decisions before you're ready.
              </p>
              <p className="mt-3 text-stone-800 font-medium">
                I work as a <span className="text-primary-700">thinking partner</span> — someone who helps you 
                hear yourself more clearly, especially when things feel unclear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-narrow">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Is This For You?
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Who I Work With Best
            </h2>
          </div>

          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              I mostly work with people between <strong className="text-stone-800">25 and 45</strong> who 
              are navigating personal or professional transitions.
            </p>
            <p className="font-medium text-stone-800">
              Often, they are:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-stone-50 p-5 border border-stone-200">
                <p className="text-stone-700">Rethinking their career direction</p>
              </div>
              <div className="bg-stone-50 p-5 border border-stone-200">
                <p className="text-stone-700">Questioning old definitions of success</p>
              </div>
              <div className="bg-stone-50 p-5 border border-stone-200">
                <p className="text-stone-700">Feeling exhausted by roles that once fit</p>
              </div>
              <div className="bg-stone-50 p-5 border border-stone-200">
                <p className="text-stone-700">Sensing that they are becoming someone new</p>
              </div>
            </div>
            <p className="text-stone-800 italic">
              They are thoughtful, reflective, and capable — but tired of second-guessing themselves.
            </p>
          </div>
        </div>
      </section>

      {/* What Matters to Me */}
      <section className="py-12 md:py-16 lg:py-20 bg-stone-100/50">
        <div className="container-narrow">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              My Values
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What Matters to Me in This Work
            </h2>
          </div>

          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              Trust, depth, and honesty are central to how I work.
            </p>
            <p className="font-medium text-stone-800">
              I care about:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-serif text-xl">•</span>
                <span>Clarity that feels grounded, not forced</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-serif text-xl">•</span>
                <span>Decisions that come from understanding, not pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-serif text-xl">•</span>
                <span>Work and lives that are sustainable, not just impressive</span>
              </li>
            </ul>
            <p className="text-stone-800 text-lg border-l-4 border-primary-300 pl-4 py-2">
              I believe that when people are given the right space, they usually already know what they need.
              They just need help accessing it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Invitation */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary-700 text-white">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-200 uppercase tracking-wider mb-3">
            An Invitation
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            If you're at a crossroads
          </h2>
          <p className="mt-6 text-primary-100 text-lg max-w-2xl mx-auto leading-relaxed">
            If you want a place to think clearly — without rushing yourself into answers — 
            this might be a good place to start.
          </p>
          <p className="mt-4 text-white text-xl font-medium">
            We can begin with a conversation.
          </p>
          
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium 
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
