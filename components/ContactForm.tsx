'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  role: string
  company: string
  interest: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  role: '',
  company: '',
  interest: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.interest) {
      newErrors.interest = 'Please select an option'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('loading')

    // TODO: Connect to actual form handler (Formspree, Netlify Forms, custom API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData(initialFormData)
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 bg-primary-50 border border-primary-100 text-center">
        <svg
          className="w-12 h-12 text-primary-500 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 font-serif text-xl text-stone-900">Message sent</h3>
        <p className="mt-2 text-stone-600">
          Thank you for reaching out. I'll get back to you within 1-2 business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2 border border-stone-300 text-stone-700 
            hover:bg-stone-100 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border text-stone-900
            placeholder:text-stone-400 focus:outline-none focus:ring-2 
            focus:ring-primary-500 focus:border-transparent transition-all duration-200
            ${errors.name ? 'border-red-400' : 'border-stone-300'}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border text-stone-900
            placeholder:text-stone-400 focus:outline-none focus:ring-2 
            focus:ring-primary-500 focus:border-transparent transition-all duration-200
            ${errors.email ? 'border-red-400' : 'border-stone-300'}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Role & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-stone-700 mb-2">
            Your role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Product Manager"
            className="w-full px-4 py-3 bg-white border border-stone-300 
              text-stone-900 placeholder:text-stone-400 focus:outline-none 
              focus:ring-2 focus:ring-primary-500 focus:border-transparent 
              transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-stone-300 
              text-stone-900 placeholder:text-stone-400 focus:outline-none 
              focus:ring-2 focus:ring-primary-500 focus:border-transparent 
              transition-all duration-200"
          />
        </div>
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-stone-700 mb-2">
          What are you interested in? <span className="text-red-500">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border text-stone-900
            focus:outline-none focus:ring-2 focus:ring-primary-500 
            focus:border-transparent transition-all duration-200
            ${errors.interest ? 'border-red-400' : 'border-stone-300'}
            ${!formData.interest ? 'text-stone-400' : ''}`}
          aria-invalid={!!errors.interest}
          aria-describedby={errors.interest ? 'interest-error' : undefined}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="ongoing">Ongoing coaching program</option>
          <option value="single">Single session</option>
          <option value="corporate">Corporate / team coaching</option>
          <option value="question">Just a question</option>
          <option value="other">Other</option>
        </select>
        {errors.interest && (
          <p id="interest-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.interest}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me a bit about yourself and what's on your mind..."
          className={`w-full px-4 py-3 bg-white border text-stone-900
            placeholder:text-stone-400 focus:outline-none focus:ring-2 
            focus:ring-primary-500 focus:border-transparent transition-all 
            duration-200 resize-none
            ${errors.message ? 'border-red-400' : 'border-stone-300'}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Error state */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200" role="alert">
          <p className="text-red-800 text-sm">
            Something went wrong. Please try again or email me directly.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-8 py-3.5 font-medium bg-primary-600 text-white 
          hover:bg-primary-700 transition-all duration-300 disabled:opacity-50 
          disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
