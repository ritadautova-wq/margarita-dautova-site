import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`group p-6 md:p-8 bg-white border border-neutral-200 rounded-sm 
        transition-all duration-300 hover:border-primary-300 hover:shadow-sm ${className}`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 font-serif text-xl text-neutral-900">{title}</h3>
      <p className="mt-3 text-neutral-600 leading-relaxed">{description}</p>
    </div>
  )
}

