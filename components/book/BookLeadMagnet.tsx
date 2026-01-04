'use client'

import { useState, FormEvent } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { leadMagnetContent } from '@/lib/bookPageContent'
import { trackEvent, AnalyticsEvents } from '@/lib/analytics'

export default function BookLeadMagnet() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source: 'book-page' }),
      })

      if (!response.ok) {
        throw new Error('Subscription failed')
      }

      setStatus('success')
      setMessage(leadMagnetContent.successMessage)
      setEmail('')
      trackEvent(AnalyticsEvents.LEAD_MAGNET_SUBMIT, { source: 'book-page' })
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <Section background="white">
        <Container size="narrow">
          <div className="bg-green-50 border border-green-200 rounded-sm p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-green-800 font-medium">Success! Your playbook is ready.</p>
            </div>
            <a
              href="/downloads/career-pivot-playbook.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-sm hover:bg-primary-700 transition-colors mb-4"
            >
              📖 View Your Playbook Now
            </a>
            <p className="text-sm text-green-700">
              Still want to book a call?{' '}
              <a
                href="#book-calendar"
                className="text-green-800 underline font-medium hover:text-green-900"
              >
                Choose a time here
              </a>
            </p>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section background="light">
      <Container size="narrow">
        <div className="bg-white border border-stone-200 rounded-sm p-8 md:p-10 text-center">
          <h3 className="font-serif text-heading text-stone-900 mb-3">
            {leadMagnetContent.headline}
          </h3>
          <p className="text-stone-600 mb-6 max-w-xl mx-auto">
            {leadMagnetContent.subheadline}
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="email"
                id="lead-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white border border-stone-300 rounded-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                aria-describedby={status === 'error' ? 'lead-email-error' : undefined}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-sm hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                {status === 'loading' ? 'Sending...' : leadMagnetContent.ctaLabel}
              </button>
            </div>

            {status === 'error' && (
              <p id="lead-email-error" className="text-red-600 text-sm mb-2" role="alert">
                {message}
              </p>
            )}

            <p className="text-xs text-stone-500">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  )
}

