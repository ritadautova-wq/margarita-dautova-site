'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Watches every [data-reveal] element and lets it surface softly the first
// time it enters the viewport. Pages stay server components: they only add
// data-reveal (and optionally style={{ '--reveal-delay': '240ms' }}).
let firstPath: string | null = null

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('zen-ready')
    // After the first page, hero choreography plays in its shorter form.
    if (firstPath === null) firstPath = pathname
    else if (pathname !== firstPath) root.classList.add('zen-seen')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-shown')
            io.unobserve(entry.target)
          }
        }
      },
      // Begin just before an element enters, so the fade is already under way
      // when it arrives and the screen never looks empty mid-scroll.
      { threshold: 0, rootMargin: '0px 0px 8% 0px' }
    )

    const scan = () => {
      document
        .querySelectorAll('[data-reveal]:not(.is-shown)')
        .forEach((el) => io.observe(el))
    }
    scan()

    // Client components (forms, carousels) may render after this effect.
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [pathname])

  return null
}
