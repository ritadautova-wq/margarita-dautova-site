'use client'

import Link from 'next/link'

export default function MinimalHeader() {
  return (
    <header className="bg-stone-50/95 backdrop-blur-md py-4 border-b border-stone-200/50">
      <nav className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl text-stone-800 hover:text-primary-600 transition-colors duration-300"
          >
            Margarita Dautova
          </Link>

          {/* Back to home link */}
          <Link
            href="/"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>
    </header>
  )
}
