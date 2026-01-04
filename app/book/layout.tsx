import MinimalHeader from '@/components/book/MinimalHeader'
import Footer from '@/components/Footer'

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MinimalHeader />
      {children}
      <Footer />
    </>
  )
}

