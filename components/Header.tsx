'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Enso from '@/components/zen/Enso'

// Navigation
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Career Coaching', href: '/career-coaching' },
  { name: 'Team Workshops', href: '/team-workshops' },
  { name: 'Mentoring', href: '/mentoring' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 24)
      // Step aside while reading downward, return as soon as you look back up.
      if (y > 240 && y > lastY.current + 6) setIsHidden(true)
      else if (y < lastY.current - 6 || y <= 240) setIsHidden(false)
      lastY.current = y
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we're on the homepage and clicking an anchor link
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMenuOpen(false)
    }
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      <header
        className={`zen-header fixed top-0 left-0 right-0 z-50 border-b ${
          isScrolled || isMenuOpen
            ? 'bg-stone-50/90 backdrop-blur-md border-stone-300/40 py-3.5'
            : 'bg-transparent border-transparent py-6 md:py-7'
        }`}
        style={{ transform: isHidden && !isMenuOpen ? 'translateY(-110%)' : 'none' }}
      >
        <nav className="container-wide" aria-label="Main">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 font-serif text-lg md:text-xl text-stone-900 tracking-wide transition-colors duration-900 ease-zen hover:text-primary-700"
            >
              <Enso
                id="logo-enso"
                animate={false}
                className="w-6 h-6 md:w-7 md:h-7 text-stone-800 transition-transform duration-1600 ease-zen group-hover:rotate-[24deg]"
              />
              Margarita Dautova
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-9">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`relative whitespace-nowrap text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-900 ease-zen ${
                    isActive(item.href) ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.name}
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 -bottom-2.5 -translate-x-1/2 w-1 h-1 rounded-full bg-shu-500 transition-opacity duration-900 ease-zen ${
                      isActive(item.href) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center">
              <Link
                href="/book"
                className="inline-flex items-center gap-2.5 whitespace-nowrap px-5 py-2.5 text-[0.78rem] tracking-[0.08em]
                  border border-stone-800/70 text-stone-900 transition-colors duration-900 ease-zen
                  hover:bg-stone-900 hover:text-stone-50"
              >
                <span className="zen-seal" aria-hidden="true" />
                Book a free discovery call
              </Link>
            </div>

            {/* Mobile menu button: two quiet lines that settle into a cross */}
            <button
              type="button"
              className="xl:hidden relative w-11 h-11 -mr-2.5 text-stone-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <span
                aria-hidden="true"
                className={`absolute left-1/2 top-1/2 h-px bg-current transition-all duration-900 ease-zen ${
                  isMenuOpen ? 'w-6 -translate-x-1/2 rotate-45' : 'w-6 -translate-x-1/2 -translate-y-[4px]'
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute left-1/2 top-1/2 h-px bg-current transition-all duration-900 ease-zen ${
                  isMenuOpen ? 'w-6 -translate-x-1/2 -rotate-45' : 'w-4 -translate-x-[4px] translate-y-[4px]'
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation: a paper screen that slides quietly aside */}
      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 z-40 bg-stone-50 transition-[opacity,visibility] duration-900 ease-zen ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <Enso
          id="menu-enso"
          animate={false}
          className="absolute -right-24 -bottom-20 w-[26rem] h-[26rem] text-stone-900/[0.05]"
        />
        <div className="relative flex flex-col h-full px-8 pt-32 pb-12">
          <div className="space-y-1">
            {navigation.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                tabIndex={isMenuOpen ? undefined : -1}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`flex items-center gap-4 py-3 font-serif text-[1.7rem] transition-all duration-1200 ease-zen ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                } ${isActive(item.href) ? 'text-stone-900' : 'text-stone-600'}`}
                style={{ transitionDelay: isMenuOpen ? `${160 + i * 70}ms` : '0ms' }}
              >
                <span
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full ${isActive(item.href) ? 'bg-shu-500' : 'bg-transparent'}`}
                />
                {item.name}
              </Link>
            ))}
          </div>
          <div
            className={`mt-auto pt-10 border-t border-stone-300/60 transition-all duration-1200 ease-zen ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: isMenuOpen ? '640ms' : '0ms' }}
          >
            <Link
              href="/book"
              tabIndex={isMenuOpen ? undefined : -1}
              className="btn-primary w-full"
            >
              <span className="zen-seal" aria-hidden="true" />
              Book a free discovery call
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
