const stats = [
  { value: '700+', label: 'Hours of 1:1 Coaching' },
  { value: '110+', label: 'Professionals Coached' },
  { value: '20+', label: 'Countries' },
  { value: '10', label: 'Years in Talent Development' },
]

export default function StatsBarSection() {
  return (
    <section className="bg-stone-950 py-14 md:py-16">
      <div className="container-default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x md:divide-stone-700/50">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <p className="font-serif text-4xl md:text-5xl text-stone-50">{stat.value}</p>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-stone-400 max-w-xl mx-auto">
          Supporting clients across 3 continents — from first-time managers to C-suite leaders.
        </p>
      </div>
    </section>
  )
}
