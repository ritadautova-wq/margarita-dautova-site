import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Margarita Dautova — an ICF PCC-certified coach and thinking partner for international professionals navigating career transitions, identity shifts, and life abroad.',
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
                  I'm a coach and thinking partner for people in transition — especially 
                  international professionals navigating change while living abroad or 
                  working in a non-native language.
                </p>
                <p>
                  Before becoming a coach, I spent years in corporate environments working 
                  in Talent and Leadership Development — designing programs, facilitating 
                  workshops, and sitting across from hundreds of people trying to figure out 
                  their careers. That experience taught me something important: the real 
                  breakthroughs don't happen in group settings. They happen in honest, 
                  one-on-one conversations.
                </p>
                <p className="text-stone-800 italic text-lg">
                  That's why I became a coach — to create space for those conversations 
                  where you can say what you're actually thinking and figure out what you 
                  actually want.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-3 font-medium 
                    bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
                >
                  Book a Discovery Call
                </Link>
              </div>
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
              I mostly work with people in mid-career stages who are navigating personal 
              or professional transitions — especially international professionals living abroad 
              or working in a non-native language.
            </p>
            <p className="font-medium text-stone-800">
              Often, they are:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-stone-50 p-5 border border-stone-200">
                <p className="text-stone-700">Rethinking their career direction after a path that once felt right</p>
              </div>
              <div className="bg-stone-50 p-5 border border-stone-200">
                <p className="text-stone-700">Questioning old definitions of success that no longer fit their life</p>
              </div>
              <div className="bg-stone-50 p-5 border border-stone-200">
                <p className="text-stone-700">Feeling exhausted by roles or expectations that used to work for them</p>
              </div>
              <div className="bg-stone-50 p-5 border border-stone-200">
                <p className="text-stone-700">Sensing an internal shift — becoming someone new, but not yet sure how to name it</p>
              </div>
            </div>
            <p className="text-stone-800 italic">
              They are thoughtful, reflective, and capable — but tired of constantly second-guessing themselves.
            </p>
            <p className="text-stone-600">
              This work is for people who want to make sense of this moment and move forward in a way that feels grounded and true to them.
            </p>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-12 md:py-16 lg:py-20 bg-stone-100/50">
        <div className="container-narrow">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              My Journey
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              I Know What Transition Feels Like
            </h2>
          </div>

          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p className="text-lg">
              I've been in transition myself — more than once, and in different forms.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="bg-white p-5 border-l-4 border-primary-300">
                <p className="text-stone-700">I've relocated across countries and had to rebuild my professional identity in new cultural and language contexts</p>
              </div>
              <div className="bg-white p-5 border-l-4 border-primary-300">
                <p className="text-stone-700">I've navigated periods where external success no longer matched my internal sense of direction</p>
              </div>
              <div className="bg-white p-5 border-l-4 border-primary-300">
                <p className="text-stone-700">I've returned to work after becoming a parent, more than once, and renegotiated ambition, energy, and priorities</p>
              </div>
              <div className="bg-white p-5 border-l-4 border-primary-300">
                {/* Alternative: "I've navigated periods where external success no longer matched my internal sense of direction" */}
                <p className="text-stone-700">I've had seasons where I had to rethink not just what I do, but why I do it — and what I want work to support in my life now</p>
              </div>
            </div>
            <p className="text-stone-800 italic text-lg border-l-4 border-primary-600 pl-4 py-2">
              These experiences taught me how to stay present when answers aren't clear yet — 
              and how to make thoughtful decisions without rushing or losing myself in the process. 
              That's the quality I bring into my work with clients.
            </p>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
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
              I create space for conversations where you don't have to perform, 
              impress, or already know the answer. My role is to see and hear you — 
              to reflect back what I notice, name patterns and tensions without judgment, 
              and help you make sense of what's happening.
            </p>
            <p className="font-medium text-stone-800">
              In our work together:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>We slow things down and make space for complexity</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>I offer observations, not prescriptions — and share my perspective when it's helpful</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sometimes I'll use a story or example that helps you see your situation from a different angle</span>
              </li>
            </ul>
            
            <p>
              I bring structure to our thinking — sometimes simple frameworks or prompts that 
              help organise what feels chaotic. Sessions don't stay abstract; we work toward 
              clarity you can actually use. But structure is there to support, not control.
            </p>

            <div className="bg-stone-50 p-6 border-l-4 border-primary-600">
              <p className="text-stone-700">
                I don't tell you what to do. I don't push you toward decisions before you're ready.
              </p>
              <p className="mt-3 text-stone-800 font-medium">
                I work as a <span className="text-primary-700">thinking partner</span> — someone who helps you 
                hear yourself more clearly, especially when things feel unclear.
              </p>
            </div>

            <p>
              Between sessions, we often agree on something to reflect on or try — 
              it might be a question to sit with, a small experiment, or something practical. 
              These aren't pre-packaged exercises; we design them together based on what's 
              alive in the moment. The goal is integration — making sure insight doesn't stay 
              locked in the session but moves with you into your life.
            </p>

            <p className="text-stone-700">
              This way of working lets clarity emerge without pressure — so you can make 
              grounded decisions that actually hold in real life.
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

      {/* Credentials */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-narrow">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Background
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Coaching Education & Credentials
            </h2>
          </div>

          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              I'm committed to professional standards and ongoing development in my coaching practice.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-stone-50 p-6 border border-stone-200">
                <h3 className="font-medium text-stone-900 mb-4">ICF Credential</h3>
                <p className="text-stone-700">Professional Certified Coach (PCC)</p>
                <p className="text-sm text-stone-500 mt-1">International Coaching Federation</p>
              </div>
              
              <div className="bg-stone-50 p-6 border border-stone-200">
                <h3 className="font-medium text-stone-900 mb-4">Coaching Hours</h3>
                <p className="text-stone-700">600+ hours with 80+ clients</p>
                <p className="text-sm text-stone-500 mt-1">Individual and group coaching</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-stone-900 mb-4">Training & Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="text-stone-600">
                    <span className="text-stone-800">ICF Level 2 Training Program "Coaching in Organization and Business"</span>
                    <span className="block text-sm text-stone-500">International Coaching Academy — 2024</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="text-stone-600">
                    <span className="text-stone-800">Team Coach (ICF Continuing Coaching Education)</span>
                    <span className="block text-sm text-stone-500">Academy of Coaching Professions "Human Capital" — 2023</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="text-stone-600">
                    <span className="text-stone-800">The 5 Prism Method in Coaching</span>
                    <span className="block text-sm text-stone-500">Academy of Professional Coaching "5 Prism" — 2021</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="text-stone-600">
                    <span className="text-stone-800">Erickson Professional Coach</span>
                    <span className="block text-sm text-stone-500">Erickson Coaching International — 2021</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-stone-900 mb-4">Professional Background</h3>
              <p className="text-stone-600">
                10+ years in Talent and Leadership Development, working with professionals 
                across industries and career stages. Based in Munich, working with clients worldwide.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-stone-900 mb-4">Current Professional Practice</h3>
              <p className="text-stone-600">
                I currently work as a career and business coach with established coaching platforms, 
                supporting professionals from a range of international organisations.
              </p>
              <p className="text-stone-600 mt-3">
                My work includes 1:1 and group coaching with clients from sectors such as technology, 
                creative industries, and hospitality — often in complex, fast-moving, and multicultural environments.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-stone-900 mb-4">Professional Standards & Evidence-Based Practice</h3>
              <p className="text-stone-600">
                My work is grounded in evidence-based coaching practices and aligned with the ethical 
                standards and core competencies of the International Coaching Federation (ICF).
              </p>
              <p className="text-stone-600 mt-3">
                I draw on approaches from:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-serif text-lg">•</span>
                  <span className="text-stone-600">Adult development and learning theory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-serif text-lg">•</span>
                  <span className="text-stone-600">Reflective and systemic coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-serif text-lg">•</span>
                  <span className="text-stone-600">Decision-making and sense-making in times of transition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-serif text-lg">•</span>
                  <span className="text-stone-600">Narrative and strengths-based practices</span>
                </li>
              </ul>
              <p className="text-stone-600 mt-4">
                I use these frameworks thoughtfully and flexibly — not as formulas, but as support 
                for clarity, integration, and sustainable change.
              </p>
              <p className="text-stone-600 mt-3">
                I regularly engage in supervision and continuing education to support the quality 
                and integrity of my work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Invitation */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary-700 text-white">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-200 uppercase tracking-wider mb-3">
            Next Step
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            If this resonates
          </h2>
          <p className="mt-6 text-primary-100 text-lg max-w-2xl mx-auto leading-relaxed">
            You're welcome to book a discovery call. It's a simple conversation — 
            no pressure, no commitment. Just a chance to talk about where you are and 
            whether working together could help.
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
