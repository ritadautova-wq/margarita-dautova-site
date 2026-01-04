interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  alignment?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignmentStyles = alignment === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignmentStyles} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wider text-primary-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-heading-lg md:text-display text-neutral-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

