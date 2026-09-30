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
    'bg-stone-900 text-stone-50 border border-stone-900 hover:bg-primary-800 hover:border-primary-800',
  secondary:
    'bg-transparent text-stone-800 border border-stone-400/70 hover:border-stone-800 hover:bg-stone-100/60',
  ghost:
    'bg-transparent text-stone-700 hover:text-stone-900',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-[0.95rem]',
  lg: 'px-9 py-4 text-[0.95rem]',
}

const baseStyles =
  'inline-flex items-center justify-center gap-3 tracking-wide transition-[color,background-color,border-color] duration-900 ease-zen focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

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
