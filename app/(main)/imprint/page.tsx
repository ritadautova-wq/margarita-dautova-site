import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen für Margarita Dautova Coaching.',
}

export default function ImprintPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-stone-100/50 to-white">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-display md:text-display-lg text-stone-900">
            Impressum
          </h1>
          <p className="mt-4 text-stone-500 text-lg">
            Legal notice provided in German in accordance with German law
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="container-narrow">
          {/* Main Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Provider Info */}
            <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8">
              <h2 className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-stone-700 leading-relaxed">
                <p className="font-medium text-stone-900">Margarita Dautova</p>
                <p>Freiberufliche Coach</p>
                <p className="mt-3">Taubensteinweg 2</p>
                <p>85551 Kirchheim bei München</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8">
              <h2 className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-4">
                Kontakt
              </h2>
              <div className="text-stone-700 leading-relaxed space-y-2">
                <p>
                  <span className="text-stone-500">E-Mail:</span>{' '}
                  <a 
                    href="mailto:margarita.dautova.coach@gmail.com" 
                    className="text-stone-900 hover:text-primary-600 transition-colors"
                  >
                    margarita.dautova.coach@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-stone-500">Website:</span>{' '}
                  <a
                    href="https://margaritadautova.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-900 hover:text-primary-600 transition-colors"
                  >
                    margaritadautova.com
                  </a>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-200">
                <h3 className="text-sm font-medium text-stone-500 mb-2">Umsatzsteuer</h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet.
                </p>
              </div>
            </div>
          </div>

          {/* Responsible for Content */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 md:p-8 mb-12">
            <h2 className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="text-stone-700 leading-relaxed">
              <p className="font-medium text-stone-900">Margarita Dautova</p>
              <p>Taubensteinweg 2</p>
              <p>85551 Kirchheim bei München</p>
            </div>
          </div>

          {/* Legal Sections */}
          <div className="space-y-8">
            {/* EU Dispute Resolution */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">EU-Streitschlichtung</h2>
              <div className="text-stone-600 leading-relaxed space-y-3">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors break-all"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                  Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Liability for Content */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">Haftung für Inhalte</h2>
              <p className="text-stone-600 leading-relaxed">
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </div>

            {/* Liability for Links */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">Haftung für Links</h2>
              <p className="text-stone-600 leading-relaxed">
                Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen 
                Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                der Seiten verantwortlich.
              </p>
            </div>

            {/* Copyright */}
            <div>
              <h2 className="font-medium text-stone-900 mb-3">Urheberrecht</h2>
              <p className="text-stone-600 leading-relaxed">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen 
                schriftlichen Zustimmung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
