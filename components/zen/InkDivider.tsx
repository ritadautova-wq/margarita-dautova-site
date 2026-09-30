// A short hand-drawn ink stroke used between moments instead of boxes.
export default function InkDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true" data-reveal="fade">
      <svg viewBox="0 0 120 8" className="w-20 h-2 text-stone-400">
        <path
          d="M2 5.2 C 22 3.4, 48 3.1, 70 3.9 S 106 5.4, 118 3.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
