import type { Metadata } from 'next'
import localFont from 'next/font/local'
import CookieConsent from '@/components/CookieConsent'
import RevealObserver from '@/components/zen/RevealObserver'
import './globals.css'

// Mincho serif for headings: calm, brush-like contrast. Zen Kaku Gothic for
// body: open, quiet, highly legible. Self-hosted Latin-only cuts (OFL, from
// Google Fonts' text= subsetting): the Google-hosted versions ship ~120
// Japanese unicode-range chunks, and em dashes and quotes pulled several of
// them in late, so punctuation blinked in after the words.
const mincho = localFont({
  src: [
    { path: './fonts/ShipporiMincho-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ShipporiMincho-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-mincho',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

const zenSans = localFont({
  src: [
    { path: './fonts/ZenKakuGothicNew-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ZenKakuGothicNew-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-zen-sans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

// Runs before paint: enables reveal animations only when JS is alive, and
// falls back to fully visible content if the app never hydrates.
const zenBootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('zen-seen'))d.classList.add('zen-seen');sessionStorage.setItem('zen-seen','1')}catch(e){}setTimeout(function(){if(!d.classList.contains('zen-ready'))d.classList.remove('js')},4000)})();`

export const metadata: Metadata = {
  metadataBase: new URL('https://www.margarita-dautova.com'),
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
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.margarita-dautova.com',
    siteName: 'Margarita Dautova Coaching',
    title: 'Margarita Dautova | Career Coach & Thinking Partner',
    description:
      'Thinking partnership for international professionals in transition seeking clarity, confidence, and sustainable change.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Margarita Dautova — Career Coach & Thinking Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Margarita Dautova | Career Coach & Thinking Partner',
    description:
      'Thinking partnership for international professionals in transition seeking clarity, confidence, and sustainable change.',
    images: ['/opengraph-image'],
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
    <html lang="en" className={`${mincho.variable} ${zenSans.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: zenBootScript }} />
      </head>
      <body className="font-sans">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-stone-900 focus:text-stone-50 focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <RevealObserver />
        <CookieConsent />
      </body>
    </html>
  )
}
