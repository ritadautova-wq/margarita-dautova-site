'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show CTA after scrolling past hero section
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-stone-200 shadow-lg"
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="container-default py-3">
        <div className="flex gap-2">
          <Link
            href="/book"
            className="flex-1 px-4 py-3 bg-primary-600 text-white text-center font-medium rounded-sm hover:bg-primary-700 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="Book a strategy call"
          >
            Book Call
          </Link>
          <Link
            href="/free"
            className="flex-1 px-4 py-3 bg-stone-100 text-stone-700 text-center font-medium rounded-sm hover:bg-stone-200 transition-colors text-sm border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="Get the free Career Pivot Playbook"
          >
            Free Guide
          </Link>
        </div>
      </div>
    </div>
  )
}

