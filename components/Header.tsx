'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Navigation
const navigation = [
  { name: 'Services', href: '/coaching' },
  { name: 'About', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-stone-50/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl text-stone-800 hover:text-primary-600 transition-colors duration-300"
          >
            Margarita Dautova
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/free"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Free Guide
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium 
                bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 rounded-sm"
            >
              Discovery Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-stone-600 hover:text-stone-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-[60px] bg-stone-50 z-40 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col h-full px-5 py-10">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block py-3 text-lg font-medium text-stone-700 hover:text-stone-900 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-stone-200 space-y-3">
              <Link
                href="/book"
                className="block w-full text-center px-6 py-3.5 font-medium 
                  bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 rounded-sm"
              >
                Discovery Call
              </Link>
              <Link
                href="/free"
                className="block w-full text-center px-6 py-3.5 font-medium 
                  border border-stone-300 text-stone-700 hover:bg-stone-100 transition-all duration-300 rounded-sm"
              >
                Get Free Guide
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
