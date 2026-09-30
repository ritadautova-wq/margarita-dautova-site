'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'

export default function CookieConsent() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('cookie-consent') as 'accepted' | 'declined' | null
    setConsent(stored)
    // Let the entrance settle before asking anything of the visitor.
    const t = setTimeout(() => setVisible(true), 2600)
    return () => clearTimeout(t)
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

      {/* Show banner until user has made a choice: a small paper card, not a bar */}
      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          inert={!visible}
          className={`fixed z-[55] bottom-3 left-3 right-3 sm:left-auto sm:max-w-sm md:bottom-6 md:right-6
            bg-stone-50/95 backdrop-blur-md border border-stone-300/70 shadow-[0_18px_50px_-24px_rgba(47,44,40,0.5)]
            transition-all duration-1200 ease-zen ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
        >
          <div className="p-4 md:p-6">
            <p className="text-[0.74rem] md:text-[0.82rem] text-stone-600 leading-[1.7] md:leading-[1.8]">
              This website uses privacy-friendly analytics (Vercel Analytics) only if you accept
              below. Some pages also embed third-party content (e.g. the Cal.com booking calendar
              and Medium article images) that can set their own cookies.{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 decoration-stone-400 text-stone-800 hover:text-primary-700 transition-colors duration-900 ease-zen"
              >
                Privacy policy
              </Link>
            </p>
            <div className="mt-3.5 md:mt-5 grid grid-cols-2 gap-3">
              <button
                onClick={handleDecline}
                className="px-4 py-2 md:py-2.5 text-[0.82rem] tracking-wide text-stone-700 border border-stone-400/70
                  hover:border-stone-800 transition-colors duration-900 ease-zen"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 md:py-2.5 text-[0.82rem] tracking-wide bg-stone-900 text-stone-50
                  hover:bg-primary-800 transition-colors duration-900 ease-zen"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
