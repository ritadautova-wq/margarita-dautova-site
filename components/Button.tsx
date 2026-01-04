'use client'

import Link from 'next/link'
import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  type?: never
  disabled?: never
  onClick?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
  secondary:
    'bg-transparent text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-100 active:bg-stone-200',
  ghost:
    'bg-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base',
}

const baseStyles =
  'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', className = '', children, ...props },
    ref
  ) => {
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    if ('href' in props && props.href) {
      return (
        <Link
          href={props.href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      )
    }

    const { type = 'button', disabled, onClick } = props as ButtonAsButton

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={combinedClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
