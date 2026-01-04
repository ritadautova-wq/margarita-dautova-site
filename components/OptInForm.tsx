'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'

interface OptInFormProps {
  variant?: 'inline' | 'stacked'
  className?: string
  source?: string
}

export default function OptInForm({
  variant = 'stacked',
  className = '',
  source = 'homepage',
}: OptInFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
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
        body: JSON.stringify({ email, source }),
      })

      if (!response.ok) {
        throw new Error('Subscription failed')
      }

      setStatus('success')
      setMessage('Check your inbox! We just sent you the Career Pivot Playbook.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`p-6 bg-green-50 border border-green-200 rounded-sm ${className}`}>
        <div className="flex items-start gap-3 mb-4">
          <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="text-green-800 font-medium">Success! Your playbook is ready.</p>
            <p className="text-green-700 text-sm mt-1">We've also sent a copy to your inbox.</p>
          </div>
        </div>
        <a
          href="/downloads/career-pivot-playbook.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-sm hover:bg-primary-700 transition-colors"
        >
          📖 View Your Playbook Now
        </a>
        <p className="text-xs text-green-700 mt-3 text-center">
          Tip: Use Ctrl/Cmd+P to save as PDF
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        variant === 'inline' ? 'flex flex-col sm:flex-row gap-3' : 'space-y-4'
      } ${className}`}
    >
      <div className={variant === 'inline' ? 'flex-1' : ''}>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 bg-white border border-stone-300 rounded-sm 
            text-stone-900 placeholder:text-stone-400
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            transition-all duration-200"
          aria-describedby={status === 'error' ? 'email-error' : undefined}
        />
      </div>

      <Button
        type="submit"
        disabled={status === 'loading'}
        className={variant === 'inline' ? 'sm:w-auto' : 'w-full'}
      >
        {status === 'loading' ? 'Sending...' : 'Get the Free Playbook'}
      </Button>

      {status === 'error' && (
        <p id="email-error" className="text-red-600 text-sm" role="alert">
          {message}
        </p>
      )}

      <p className="text-xs text-stone-500">
        No spam. Unsubscribe anytime. We respect your privacy.
      </p>
    </form>
  )
}

