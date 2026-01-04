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
      {children}
      <Footer />
    </>
  )
}

