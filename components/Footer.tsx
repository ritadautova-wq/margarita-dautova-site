import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Services', href: '/coaching' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Impressum', href: '/imprint' },
    { name: 'Datenschutzerklärung', href: '/privacy' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/margaritadautova',
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
    <footer className="bg-stone-900 text-white">
      <div className="container-wide">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="font-serif text-2xl text-white hover:text-primary-300 transition-colors">
                Margarita Dautova
              </Link>
              <p className="mt-4 text-stone-400 max-w-md leading-relaxed">
                Career coach and thinking partner for professionals in transition seeking clarity, confidence, 
                and sustainable change. Based in Munich, working with clients worldwide.
              </p>

              {/* Credentials */}
              <p className="mt-4 text-sm text-stone-500">
                PCC ICF · Career & Transition Coach
              </p>

              {/* Social links */}
              <div className="mt-6 flex gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors duration-200"
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
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-stone-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">
                Get in Touch
              </h3>
              <div className="mt-4 space-y-3">
                <p className="text-stone-400">
                  <a href="mailto:margarita.dautova.coach@gmail.com" 
                    className="hover:text-white transition-colors">
                    margarita.dautova.coach@gmail.com
                  </a>
                </p>
                <p className="text-stone-500 text-sm">
                  Munich, Germany
                </p>
                <div className="mt-4 space-y-2">
                  <Link
                    href="/book"
                    className="inline-block w-full text-center px-4 py-2 bg-primary-600 text-white 
                      hover:bg-primary-700 transition-colors rounded-sm text-sm font-medium"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="/free"
                    className="inline-block w-full text-center px-4 py-2 border border-stone-700 text-stone-300 
                      hover:bg-stone-800 transition-colors rounded-sm text-sm font-medium"
                  >
                    Get Playbook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-stone-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-stone-500">
              © {currentYear} Margarita Dautova. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-stone-500 hover:text-stone-300 transition-colors"
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
