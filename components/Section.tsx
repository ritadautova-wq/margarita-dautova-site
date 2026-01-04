import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'light' | 'cream'
  size?: 'sm' | 'md' | 'lg'
}

const backgroundStyles = {
  white: 'bg-white',
  light: 'bg-neutral-50',
  cream: 'bg-primary-50',
}

const sizeStyles = {
  sm: 'py-12 md:py-16 lg:py-20',
  md: 'py-16 md:py-24 lg:py-32',
  lg: 'py-20 md:py-32 lg:py-40',
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  size = 'md',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </section>
  )
}

