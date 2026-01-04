'use client'

import Link from 'next/link'

export default function MinimalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 py-4">
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl text-stone-800 hover:text-primary-600 transition-colors duration-300"
            aria-label="Go to homepage"
          >
            Margarita Dautova
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors duration-200 flex items-center gap-1"
          >
            <span>←</span>
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

