'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked'
  className?: string
}

export default function NewsletterForm({
  variant = 'stacked',
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Connect to actual email service (Mailchimp, ConvertKit, etc.)
    // Simulating API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Thank you for subscribing! Check your inbox for confirmation.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`p-4 bg-green-50 border border-green-200 rounded-sm ${className}`}>
        <p className="text-green-800 text-sm">{message}</p>
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
          className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm 
            text-neutral-900 placeholder:text-neutral-400
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
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </Button>

      {status === 'error' && (
        <p id="email-error" className="text-red-600 text-sm" role="alert">
          {message}
        </p>
      )}
    </form>
  )
}

