import Link from 'next/link'

/**
 * HOME PAGE STRUCTURE - Flowing narrative inspired by story-driven coaching sites
 * 
 * Sections (in order):
 * 1. Hero / Intro - Personal greeting, who Margarita is, what she does
 * 2. Approach - How she works, her methodology
 * 3. Areas - What clients work on with her (6 cards)
 * 4. Who I Work With - Ideal client description
 * 5. Testimonials - Client stories and transformations
 * 6. First Session - What happens in a discovery call
 * 7. Formats & Pricing - Coaching offerings
 * 8. About (Short) - Brief bio with link to full page
 * 9. Credentials - ICF, education, training
 * 10. Contact CTA - Final call to action
 */

// ============================================
// DATA
// ============================================

const coachingAreas = [
  {
    title: 'Career Transitions',
    description: 'Navigating a career change, pivoting industries, or finding direction when you feel at a crossroads.',
  },
  {
    title: 'Burnout & Wellbeing',
    description: 'Recovering from exhaustion, rebuilding energy, and creating sustainable ways of working.',
  },
  {
    title: 'Confidence & Self-Trust',
    description: 'Overcoming self-doubt, imposter syndrome, and building genuine confidence in your abilities.',
  },
  {
    title: 'Leadership Growth',
    description: 'Stepping into leadership roles, developing your leadership identity, and leading with authenticity.',
  },
  {
    title: 'Values & Purpose',
    description: 'Reconnecting with what matters most and aligning your career with your deeper values.',
  },
  {
    title: 'Work-Life Balance',
    description: 'Setting boundaries, managing priorities, and designing a life that works for you.',
  },
]

// TODO: Replace with real testimonials from Margarita's clients
const testimonials = [
  {
    quote: "Working with Margarita helped me finally understand what was holding me back. Her calm, structured approach gave me the clarity I needed to make a significant career change — and the confidence to actually do it.",
    name: 'Anna K.',
    role: 'Senior Product Manager',
    context: 'Career transition',
  },
  {
    quote: "I was burned out and lost. Margarita created a safe space where I could be honest about what wasn't working. Six months later, I have a new role, better boundaries, and I actually enjoy my work again.",
    name: 'Michael S.',
    role: 'Director of Operations',
    context: 'Burnout recovery',
  },
  {
    quote: "Margarita's coaching is practical, grounded, and genuinely helpful. No fluff, no vague advice — just honest conversations that led to real change. I can't recommend her highly enough.",
    name: 'Elena R.',
    role: 'Tech Lead',
    context: 'Leadership development',
  },
]

const coachingFormats = [
  {
    title: 'Ongoing Coaching',
    subtitle: '3–6 month program',
    description: 'Deep, sustained work for meaningful transformation. We meet regularly to explore your challenges, clarify your goals, and create lasting change.',
    includes: [
      'Bi-weekly sessions (60-75 min)',
      'Personalized development plan',
      'Email support between sessions',
      'Optional assessments & tools',
    ],
    idealFor: 'Career transitions, burnout recovery, leadership development',
    price: 'Starting from €XXX/month', // TODO: Insert real pricing
    cta: 'Apply for coaching',
    href: '/contact?type=ongoing',
    featured: true,
  },
  {
    title: 'Single Deep-Dive',
    subtitle: '90-minute session',
    description: 'A focused session for when you need clarity on a specific challenge or decision. Come with a question, leave with perspective.',
    includes: [
      'Pre-session questionnaire',
      '90-minute intensive session',
      'Session summary & notes',
      'Optional follow-up call',
    ],
    idealFor: 'Specific decisions, gaining clarity, exploring fit',
    price: 'From €XXX', // TODO: Insert real pricing
    cta: 'Book a session',
    href: '/contact?type=single',
    featured: false,
  },
  {
    title: 'Team & Corporate',
    subtitle: 'Custom programs',
    description: 'Workshops, group coaching, and leadership development programs for organizations investing in their people.',
    includes: [
      'Tailored to your needs',
      'Group or 1:1 formats',
      'Workshop facilitation',
      'Ongoing partnerships',
    ],
    idealFor: 'HR leaders, team managers, organizations',
    price: 'Contact for quote', // TODO: Update
    cta: 'Get in touch',
    href: '/contact?type=corporate',
    featured: false,
  },
]

const credentials = [
  { label: 'ICF Credential', value: 'PCC (Professional Certified Coach)' },
  { label: 'Education', value: 'Global Management, Accounting & Analysis' },
  { label: 'Corporate Background', value: 'Talent & Leadership Development' },
  { label: 'Experience', value: 'Mytheresa, Amadeus, and more' }, // TODO: Verify companies
]

// ============================================
// PAGE COMPONENT
// ============================================

export default function HomePage() {
  return (
    <>
      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/50 to-stone-50" />
        
        <div className="container-default relative z-10">
          <div className="max-w-3xl">
            {/* Personal greeting */}
            <p className="text-primary-600 font-medium mb-4">
              Hi, I'm Margarita
            </p>
            
            <h1 className="font-serif text-display md:text-display-lg lg:text-display-xl text-stone-900 text-balance">
              I help professionals find{' '}
              <em className="not-italic text-primary-600">clarity</em>,{' '}
              <em className="not-italic text-primary-600">confidence</em>, and{' '}
              <em className="not-italic text-primary-600">direction</em>{' '}
              in their careers
            </h1>
            
            <p className="mt-6 text-body-lg text-stone-600 max-w-2xl leading-relaxed">
              As a career and transition coach, I work with mid-career professionals and leaders 
              who feel stuck, burned out, or at a crossroads. Together, we create space for 
              honest reflection and sustainable change — so you can build a career that 
              actually works for you.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-7 py-4 font-medium 
                  bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
              >
                Book a free discovery call
              </Link>
              <a
                href="#approach"
                className="inline-flex items-center justify-center px-7 py-4 font-medium 
                  border border-stone-300 text-stone-700 hover:border-stone-400 
                  hover:bg-stone-100 transition-all duration-300"
              >
                Learn about my approach
              </a>
            </div>

            {/* Brief credentials */}
            <p className="mt-10 text-sm text-stone-500">
              PCC ICF Coach · Based in Munich · Working with clients worldwide
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: APPROACH ==================== */}
      <section id="approach" className="section-padding bg-white">
        <div className="container-default">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left: Intro text */}
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                My Approach
              </p>
              <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
                Coaching that meets you where you are
              </h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  I believe meaningful change happens when you have space to think clearly, 
                  reflect honestly, and act intentionally. My coaching creates that space.
                </p>
                <p>
                  Our conversations are structured but flexible — grounded in your real 
                  challenges, not abstract theories. I bring my background in talent development 
                  and leadership, but ultimately, you're the expert on your own life.
                </p>
              </div>
            </div>

            {/* Right: Key principles */}
            <div className="space-y-8">
              <div className="border-l-2 border-primary-300 pl-6">
                <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
                  Safe & Confidential
                </h3>
                <p className="text-stone-600">
                  A judgment-free space where you can speak openly about what's really going 
                  on — the doubts, frustrations, and hopes you might not share elsewhere.
                </p>
              </div>

              <div className="border-l-2 border-primary-300 pl-6">
                <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
                  Partnership, Not Advice
                </h3>
                <p className="text-stone-600">
                  I'm not here to tell you what to do. I'm here to help you discover what 
                  you already know — and support you in acting on it.
                </p>
              </div>

              <div className="border-l-2 border-primary-300 pl-6">
                <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
                  Grounded & Practical
                </h3>
                <p className="text-stone-600">
                  Insights are valuable, but action creates change. Every conversation 
                  connects reflection with concrete steps forward.
                </p>
              </div>

              <div className="border-l-2 border-primary-300 pl-6">
                <h3 className="font-serif text-heading-sm text-stone-900 mb-2">
                  Sustainable Wellbeing
                </h3>
                <p className="text-stone-600">
                  Career success shouldn't come at the cost of your health or happiness. 
                  We work toward outcomes that are genuinely sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: AREAS OF WORK ==================== */}
      <section id="areas" className="section-padding bg-stone-100/50">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              What We Work On
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Common areas clients bring to coaching
            </h2>
            <p className="mt-4 text-stone-600">
              These are some of the themes that come up most often. Your situation is unique — 
              and coaching adapts to what you actually need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coachingAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-7 border border-stone-200 hover:border-primary-300 
                  transition-colors duration-300"
              >
                <h3 className="font-serif text-heading-sm text-stone-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: WHO I WORK WITH ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Who I Work With
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
            Coaching is for people ready for real conversation
          </h2>
          
          <div className="mt-8 text-left max-w-2xl mx-auto space-y-4 text-stone-600 leading-relaxed">
            <p>
              My clients are typically mid-career professionals, managers, and leaders — people 
              who've achieved a level of success but find themselves at a turning point. 
              Maybe the path forward isn't clear anymore. Maybe something feels off, even 
              if they can't quite name it.
            </p>
            <p>
              They're reflective, self-aware, and willing to look honestly at what's working 
              and what isn't. They're not looking for someone to fix them or give them a 
              5-step formula. They want a thinking partner who can help them find their 
              own answers.
            </p>
            <p className="font-medium text-stone-800">
              Coaching works best when you're ready to invest in yourself — not just in finding 
              a quick fix, but in creating lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: TESTIMONIALS ==================== */}
      <section id="clients" className="section-padding bg-primary-50/30">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              Client Stories
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              What clients say about working together
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* TODO: Replace with real testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-stone-200"
              >
                <p className="text-sm text-primary-600 font-medium mb-4">
                  {testimonial.context}
                </p>
                <blockquote className="text-stone-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-4 border-t border-stone-100">
                  <p className="font-medium text-stone-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Read more client stories →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: FIRST SESSION ==================== */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
                Getting Started
              </p>
              <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
                What happens in a first session?
              </h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  The first conversation is simple: we talk. You share what's on your mind — 
                  the situation you're in, what you're hoping to change, what's been holding 
                  you back. I listen, ask questions, and start to understand your world.
                </p>
                <p>
                  There's no pressure to commit to anything. This is a chance for both of 
                  us to see if coaching feels like the right fit. Sometimes it is, sometimes 
                  it isn't — and that's completely fine.
                </p>
                <p>
                  By the end of the call, you'll have a clearer sense of what coaching could 
                  look like for you. And even if we don't continue, you'll leave with at 
                  least one useful insight to take with you.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-7 py-4 font-medium 
                    bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
                >
                  Book your free discovery call
                </Link>
              </div>
            </div>

            {/* Visual element */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-stone-100 
                flex items-center justify-center">
                {/* TODO: Add image or illustration */}
                <div className="text-center text-stone-400">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p className="mt-2 text-sm">Conversation illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: FORMATS & PRICING ==================== */}
      <section id="formats" className="section-padding bg-stone-100/50">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
              How We Can Work Together
            </p>
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
              Coaching formats
            </h2>
            <p className="mt-4 text-stone-600">
              Different situations call for different approaches. Here's how I typically work 
              with clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {coachingFormats.map((format, index) => (
              <div
                key={index}
                className={`bg-white p-8 border transition-all duration-300 flex flex-col ${
                  format.featured
                    ? 'border-primary-400 ring-1 ring-primary-200'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                {format.featured && (
                  <span className="inline-block text-xs font-medium text-primary-600 
                    bg-primary-100 px-2 py-1 mb-4 self-start">
                    Most popular
                  </span>
                )}
                
                <h3 className="font-serif text-heading text-stone-900">
                  {format.title}
                </h3>
                <p className="text-sm text-primary-600 font-medium mt-1">
                  {format.subtitle}
                </p>
                
                <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                  {format.description}
                </p>

                <ul className="mt-6 space-y-2 flex-grow">
                  {format.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-xs text-stone-500 mb-1">Ideal for</p>
                  <p className="text-sm text-stone-700 mb-4">{format.idealFor}</p>
                  
                  {/* TODO: Replace with real pricing */}
                  <p className="font-medium text-stone-900 mb-4">{format.price}</p>
                  
                  <Link
                    href={format.href}
                    className={`block text-center py-3 font-medium transition-all duration-300 ${
                      format.featured
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'border border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-stone-50'
                    }`}
                  >
                    {format.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: ABOUT (SHORT) ==================== */}
      <section id="about" className="section-padding bg-white">
        <div className="container-default">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-stone-100 
                flex items-center justify-center">
                {/* TODO: Add Margarita's professional portrait */}
                <div className="text-center text-stone-400">
                  <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
              <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance">
                A coach who understands the corporate world
              </h2>
              
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Before becoming a coach, I spent years in corporate environments — working in 
                  Talent and Leadership Development at companies like Mytheresa and Amadeus. 
                  I've seen firsthand how talented people can lose their spark, get stuck in 
                  roles that don't fit, or burn out trying to meet impossible expectations.
                </p>
                <p>
                  That experience shapes how I coach. I understand the pressures you face, the 
                  politics you navigate, and the real stakes involved in career decisions. 
                  I'm not just coaching from theory — I've lived the corporate reality.
                </p>
                <p>
                  I'm based in Munich, Germany, and work with clients worldwide. Sessions 
                  happen online, which means we can meet wherever you are.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Read my full story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: CREDENTIALS ==================== */}
      <section className="py-14 md:py-20 bg-stone-100/50">
        <div className="container-default">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-center">
            {credentials.map((item, index) => (
              <div key={index} className="min-w-[180px]">
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-medium text-stone-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 10: CONTACT CTA ==================== */}
      <section id="contact" className="section-padding bg-primary-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading-lg md:text-display text-white text-balance">
            Ready to start a conversation?
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-xl mx-auto">
            The first step is simple: a free discovery call where we talk about where you 
            are and where you want to go. No pressure, no commitment — just an honest 
            conversation.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 font-medium 
                bg-white text-primary-700 hover:bg-stone-100 transition-all duration-300"
            >
              Book a free discovery call
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-medium 
                border border-primary-300 text-white hover:bg-primary-600 transition-all duration-300"
            >
              Send me a message
            </Link>
          </div>

          <p className="mt-10 text-primary-200 text-sm">
            Everything we discuss is completely confidential.
          </p>
        </div>
      </section>
    </>
  )
}
