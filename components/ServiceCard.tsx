import Button from './Button'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  price?: string
  ctaText: string
  ctaHref: string
  featured?: boolean
}

export default function ServiceCard({
  title,
  description,
  features,
  price,
  ctaText,
  ctaHref,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative p-6 md:p-8 rounded-sm transition-all duration-300 ${
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
      <p className="mt-3 text-neutral-600">{description}</p>

      {price && (
        <div className="mt-6 py-4 border-y border-neutral-200">
          <p className="text-sm text-neutral-500">Investment</p>
          <p className="mt-1 font-serif text-2xl text-neutral-900">{price}</p>
        </div>
      )}

      <ul className="mt-6 space-y-3">
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

      <div className="mt-8">
        <Button
          href={ctaHref}
          variant={featured ? 'primary' : 'secondary'}
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  )
}

