interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company?: string
  featured?: boolean
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`relative p-6 md:p-8 rounded-sm transition-all duration-300 ${
        featured
          ? 'bg-primary-50 border border-primary-200'
          : 'bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
      }`}
    >
      {/* Quote mark */}
      <div className="absolute top-4 left-6 text-6xl text-primary-200 font-serif leading-none select-none">
        "
      </div>

      <blockquote className="relative pt-8">
        <p className="text-neutral-700 leading-relaxed italic">"{quote}"</p>
      </blockquote>

      <div className="mt-6 pt-6 border-t border-neutral-200">
        <p className="font-medium text-neutral-900">{name}</p>
        <p className="text-sm text-neutral-500">
          {role}
          {company && <span>, {company}</span>}
        </p>
      </div>
    </div>
  )
}

