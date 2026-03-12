import type { ReactNode } from 'react'
import MinimalHeader from '@/components/book/MinimalHeader'
import Footer from '@/components/Footer'

export default function BookLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <MinimalHeader />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}

