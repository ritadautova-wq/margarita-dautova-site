import { ReactNode } from 'react'
import Button from './Button'

interface ServiceCardProps {
  title: string
  subtitle?: string
  description: string
  useCases?: { heading: string; items: string[] }
  featuresHeading?: string
  features: string[]
  walkAway?: { heading: string; items: string[] }
  idealFor?: string
  price?: string
  priceNote?: string
  vatNote?: string
  ctaText: string
  ctaHref: string
  footnote?: ReactNode
  featured?: boolean
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  useCases,
  featuresHeading,
  features,
  walkAway,
  idealFor,
  price,
  priceNote,
  vatNote,
  ctaText,
  ctaHref,
  footnote,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative h-full flex flex-col p-6 md:p-8 rounded-sm transition-all duration-300 ${
        featured
          ? 'bg-primary-50 border-2 border-primary-500 shadow-md'
          : 'bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="font-serif text-heading-sm text-neutral-900">{title}</h3>
      {subtitle && <p className="mt-1 text-sm font-medium text-primary-600">{subtitle}</p>}
      <p className="mt-3 text-neutral-600">{description}</p>

      <div className="mt-6">
        {featuresHeading && (
          <p className="text-xs font-medium tracking-wide uppercase text-neutral-500">{featuresHeading}</p>
        )}
        <ul className="mt-3 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
              <span className="text-neutral-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {useCases && (
        <div className="mt-6">
          <p className="text-xs font-medium tracking-wide uppercase text-neutral-500">{useCases.heading}</p>
          <ul className="mt-3 space-y-2">
            {useCases.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                <span className="text-neutral-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {walkAway && (
        <div className="mt-6">
          <p className="text-xs font-medium tracking-wide uppercase text-neutral-500">{walkAway.heading}</p>
          <ul className="mt-3 space-y-2">
            {walkAway.items.map((item, index) => (
              <li key={index} className="text-neutral-600">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col flex-1 justify-end">
        {idealFor && (
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <p className="text-sm text-neutral-500">Ideal for</p>
            <p className="mt-1 text-neutral-800">{idealFor}</p>
          </div>
        )}

        {price && (
          <div className="mt-6 py-4 border-y border-neutral-200">
            <p className="text-sm text-neutral-500">Investment</p>
            <p className="mt-1 font-serif text-2xl text-neutral-900">
              {price}
              {priceNote && <span className="ml-2 text-sm font-sans text-neutral-500">({priceNote})</span>}
            </p>
            {vatNote && <p className="mt-2 text-xs text-neutral-400">{vatNote}</p>}
          </div>
        )}

        <div className="mt-8">
          <Button
            href={ctaHref}
            variant={featured ? 'primary' : 'secondary'}
            className="w-full"
          >
            {ctaText}
          </Button>
          {footnote && <p className="mt-4 text-sm text-neutral-500 leading-relaxed">{footnote}</p>}
        </div>
      </div>
    </div>
  )
}
