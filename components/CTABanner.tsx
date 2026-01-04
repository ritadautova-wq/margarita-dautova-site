import Button from './Button'
import Container from './Container'

interface CTABannerProps {
  title?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  variant?: 'light' | 'dark' | 'accent'
}

const variantStyles = {
  light: 'bg-neutral-100',
  dark: 'bg-neutral-900 text-white',
  accent: 'bg-primary-500 text-white',
}

export default function CTABanner({
  title = 'Ready to take the next step?',
  description = "Let's discuss how coaching can help you achieve your goals.",
  primaryCTA = { text: 'Book a free discovery call', href: '/book' },
  secondaryCTA,
  variant = 'light',
}: CTABannerProps) {
  const isDark = variant === 'dark' || variant === 'accent'

  return (
    <section className={`py-16 md:py-20 ${variantStyles[variant]}`}>
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className={`font-serif text-heading-lg md:text-display ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={primaryCTA.href}
              variant={isDark ? 'secondary' : 'primary'}
              size="lg"
              className={isDark ? 'bg-white text-neutral-900 hover:bg-neutral-100 border-white' : ''}
            >
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="ghost"
                className={isDark ? 'text-white hover:bg-white/10' : ''}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

