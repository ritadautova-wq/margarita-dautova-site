interface ProcessStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export default function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-neutral-200" />
      )}

      {/* Number badge */}
      <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-primary-500 text-white font-serif text-2xl font-semibold shadow-sm">
        {number}
      </div>

      <h3 className="mt-5 font-serif text-xl text-neutral-900">{title}</h3>
      <p className="mt-3 text-neutral-600 leading-relaxed max-w-xs">{description}</p>
    </div>
  )
}

