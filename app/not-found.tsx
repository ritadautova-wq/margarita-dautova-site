import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
          <Container size="narrow">
            <div className="text-center">
              <p className="text-8xl font-serif text-primary-200">404</p>
              <h1 className="mt-4 font-serif text-display text-neutral-900">
                Page not found
              </h1>
              <p className="mt-4 text-lg text-neutral-600 max-w-md mx-auto">
                Sorry, the page you're looking for doesn't exist or has been moved.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/">Back to home</Button>
                <Button href="/contact" variant="secondary">
                  Contact me
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
