import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team Workshops',
  description:
    'Workshops and coaching for teams and organisations navigating change, restructuring, and transition. Page currently being updated.',
  alternates: { canonical: '/team-workshops' },
}

export default function TeamWorkshopsPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-stone-100/50 to-stone-50">
      <div className="container-narrow text-center">
        <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
          Team Workshops
        </p>
        <h1 className="font-serif text-display md:text-display-lg text-stone-900 text-balance">
          This page is currently being updated.
        </h1>
        <p className="mt-6 text-body-lg text-stone-600 max-w-xl mx-auto">
          In the meantime, feel free to get in touch directly to talk about workshops or team coaching.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 font-medium
              bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
