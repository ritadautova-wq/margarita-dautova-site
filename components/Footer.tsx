import Link from 'next/link'
import Enso from '@/components/zen/Enso'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Career Coaching', href: '/career-coaching' },
    { name: 'Team Workshops', href: '/team-workshops' },
    { name: 'Mentoring', href: '/mentoring' },
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/resources' },
    { name: 'Expats in Germany', href: '/career-coaching-expats-germany' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Impressum', href: '/imprint' },
    { name: 'Datenschutzerklärung', href: '/privacy' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/margarita-dautova',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-stone-900 text-stone-300">
      <Enso
        id="footer-enso"
        animate={false}
        className="pointer-events-none absolute -right-64 -bottom-40 w-[34rem] h-[34rem] text-stone-50/[0.03]"
      />
      <div className="container-wide relative">
        {/* Main footer content */}
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 lg:gap-10">
            {/* Brand column */}
            <div className="lg:col-span-5" data-reveal>
              <Link
                href="/"
                className="inline-flex items-center gap-3 font-serif text-2xl text-stone-50 tracking-wide transition-colors duration-900 ease-zen hover:text-primary-200"
              >
                <Enso id="footer-mark" animate={false} className="w-7 h-7 text-stone-100" />
                Margarita Dautova
              </Link>
              <p className="mt-6 text-stone-400 max-w-md leading-[1.95] text-[0.95rem]">
                Career coach and thinking partner for professionals in transition seeking clarity, confidence, 
                and sustainable change. Based in Munich, working with clients worldwide.
              </p>

              {/* Credentials */}
              <p className="mt-6 text-[0.7rem] uppercase tracking-zen text-stone-500">
                PCC ICF · Career & Transition Coach
              </p>

              {/* Social links */}
              <div className="mt-8 flex gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-stone-500 hover:text-stone-100 transition-colors duration-900 ease-zen"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${item.name}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation column */}
            <div className="lg:col-span-3 lg:col-start-7" data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
              <h3 className="font-sans text-[0.7rem] uppercase tracking-zen text-stone-500">
                Navigation
              </h3>
              <ul className="mt-6 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-stone-300 text-[0.95rem] hover:text-stone-50 transition-colors duration-900 ease-zen"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className="lg:col-span-3" data-reveal style={{ '--reveal-delay': '240ms' } as React.CSSProperties}>
              <h3 className="font-sans text-[0.7rem] uppercase tracking-zen text-stone-500">
                Get in Touch
              </h3>
              <div className="mt-6 space-y-3">
                <p className="text-stone-300 text-[0.95rem] break-words">
                  <a href="mailto:margarita.dautova.coach@gmail.com" 
                    className="hover:text-stone-50 transition-colors duration-900 ease-zen">
                    margarita.dautova.coach@gmail.com
                  </a>
                </p>
                <p className="text-stone-500 text-sm">
                  Munich, Germany
                </p>
                <div className="pt-6 space-y-3">
                  <Link
                    href="/book"
                    className="flex items-center justify-center gap-2.5 w-full px-4 py-3 bg-stone-50 text-stone-900
                      hover:bg-primary-100 transition-colors duration-900 ease-zen text-sm tracking-wide"
                  >
                    <span className="zen-seal" aria-hidden="true" />
                    Book a free discovery call
                  </Link>
                  <Link
                    href="/free"
                    className="block w-full text-center px-4 py-3 border border-stone-600 text-stone-300
                      hover:border-stone-400 hover:text-stone-50 transition-colors duration-900 ease-zen text-sm tracking-wide"
                  >
                    Get Playbook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        {/* Extra room on mobile so the floating booking pill never covers the legal links */}
        <div className="pt-8 pb-28 lg:pb-8 border-t border-stone-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs tracking-wide text-stone-500">
              © {currentYear} Margarita Dautova. All rights reserved.
            </p>
            <div className="flex gap-8">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs tracking-wide text-stone-500 hover:text-stone-300 transition-colors duration-900 ease-zen"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
