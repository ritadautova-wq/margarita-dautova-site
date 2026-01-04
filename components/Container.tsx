import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'narrow' | 'default' | 'wide'
}

const sizeStyles = {
  narrow: 'max-w-3xl',
  default: 'max-w-5xl',
  wide: 'max-w-7xl',
}

export default function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  )
}

