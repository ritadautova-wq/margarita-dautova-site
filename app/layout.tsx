import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
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
    default: 'Margarita Dautova | Career & Transition Coach | PCC ICF',
    template: '%s | Margarita Dautova',
  },
  description:
    'Career and transition coaching for professionals seeking clarity, confidence, and sustainable change. Based in Munich, working with clients worldwide.',
  keywords: [
    'career coaching',
    'transition coaching',
    'executive coaching',
    'career change',
    'burnout recovery',
    'leadership coaching',
    'PCC ICF coach',
    'Munich coach',
    'Margarita Dautova',
  ],
  authors: [{ name: 'Margarita Dautova' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://margaritadautova.com', // TODO: Replace with actual URL
    siteName: 'Margarita Dautova Coaching',
    title: 'Margarita Dautova | Career & Transition Coach',
    description:
      'Career and transition coaching for professionals seeking clarity, confidence, and sustainable change.',
    images: [
      {
        url: '/images/og-image.jpg', // TODO: Add actual OG image
        width: 1200,
        height: 630,
        alt: 'Margarita Dautova - Career Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Margarita Dautova | Career & Transition Coach',
    description:
      'Career and transition coaching for professionals seeking clarity, confidence, and sustainable change.',
    images: ['/images/og-image.jpg'],
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
