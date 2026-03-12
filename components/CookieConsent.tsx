'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'

export default function CookieConsent() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('cookie-consent') as 'accepted' | 'declined' | null
    setConsent(stored)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsent('accepted')
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setConsent('declined')
  }

  // Avoid hydration mismatch
  if (!mounted) return null

  return (
    <>
      {/* Only load analytics if user has consented */}
      {consent === 'accepted' && <Analytics />}

      {/* Show banner until user has made a choice */}
      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900 text-white shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <p className="text-sm text-stone-300 leading-relaxed max-w-2xl">
                This website uses privacy-friendly analytics (Vercel Analytics) to understand
                how visitors use the site. No personal data or cookies are used for tracking.{' '}
                <Link
                  href="/privacy"
                  className="underline text-white hover:text-stone-300 transition-colors"
                >
                  Privacy policy
                </Link>
              </p>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm text-stone-400 hover:text-white border
                    border-stone-600 hover:border-stone-400 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2 text-sm font-medium bg-primary-600
                    hover:bg-primary-500 text-white transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
