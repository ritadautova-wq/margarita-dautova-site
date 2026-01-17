import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Margarita Dautova | Career Coach & Thinking Partner | PCC ICF',
    template: '%s | Margarita Dautova',
  },
  description:
    'Thinking partnership for international professionals in transition seeking clarity, confidence, and sustainable change. Based in Munich, working with clients worldwide.',
  keywords: [
    'career coaching',
    'transition coaching',
    'executive coaching',
    'career change',
    'identity transition',
    'thinking partner',
    'PCC ICF coach',
    'Munich coach',
    'Margarita Dautova',
    'international professionals',
  ],
  authors: [{ name: 'Margarita Dautova' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://margaritadautova.com',
    siteName: 'Margarita Dautova Coaching',
    title: 'Margarita Dautova | Career Coach & Thinking Partner',
    description:
      'Thinking partnership for international professionals in transition seeking clarity, confidence, and sustainable change.',
    images: [
      {
        url: '/images/portrait-margarita.JPG',
        width: 1200,
        height: 630,
        alt: 'Margarita Dautova - Career Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Margarita Dautova | Career Coach & Thinking Partner',
    description:
      'Thinking partnership for international professionals in transition seeking clarity, confidence, and sustainable change.',
    images: ['/images/portrait-margarita.JPG'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
