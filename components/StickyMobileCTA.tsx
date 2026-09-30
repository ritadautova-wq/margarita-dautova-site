'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// A small floating pill rather than a full-width bar: present, never pushy.
export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show CTA after scrolling past hero section
    const handleScroll = () => {
      setIsVisible(window.scrollY > 560)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden transition-all duration-1200 ease-zen ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      role="complementary"
      aria-label="Quick actions"
      aria-hidden={!isVisible}
    >
      <div className="flex items-center rounded-full border border-stone-300/70 bg-stone-50/90 backdrop-blur-md shadow-[0_10px_40px_-18px_rgba(47,44,40,0.45)] p-1.5">
        <Link
          href="/book"
          tabIndex={isVisible ? undefined : -1}
          className="flex items-center gap-2 whitespace-nowrap rounded-full bg-stone-900 px-5 py-2.5 text-[0.82rem] tracking-wide text-stone-50 transition-colors duration-900 ease-zen hover:bg-primary-800"
          aria-label="Book a discovery call"
        >
          <span className="zen-seal" aria-hidden="true" />
          Book Call
        </Link>
        <Link
          href="/free"
          tabIndex={isVisible ? undefined : -1}
          className="whitespace-nowrap px-5 py-2.5 text-[0.82rem] tracking-wide text-stone-700 transition-colors duration-900 ease-zen hover:text-stone-900"
          aria-label="Get the free Career Pivot Playbook"
        >
          Free Guide
        </Link>
      </div>
    </div>
  )
}
