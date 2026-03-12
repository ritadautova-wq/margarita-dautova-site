import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung für Margarita Dautova Coaching.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-stone-100/50 to-white">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-display md:text-display-lg text-stone-900">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-stone-500 text-lg">
            Privacy policy provided in German in accordance with German law
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-12">
        <div className="container-narrow">
          <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 md:p-8">
            <p className="text-stone-700 leading-relaxed mb-4">
              This website is operated from Germany and is therefore subject to German and EU data 
              protection laws (DSGVO/GDPR). For legal compliance, the official privacy policy is 
              provided in German below.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              If you have any questions about how your data is handled, please feel free to contact 
              me directly at{' '}
              <a 
                href="mailto:margarita.dautova.coach@gmail.com" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                margarita.dautova.coach@gmail.com
              </a>
            </p>
            <p className="text-stone-900 font-medium">
              Your privacy and trust are important to me.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="container-narrow">
          {/* Section 1: Responsible Party */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 md:p-8 mb-8">
            <h2 className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-4">
              1. Verantwortliche Stelle
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="text-stone-700 leading-relaxed">
              <p className="font-medium text-stone-900">Margarita Dautova</p>
              <p>Taubensteinweg 2</p>
              <p>85551 Kirchheim bei München</p>
              <p>Deutschland</p>
              <p className="mt-3">
                E-Mail:{' '}
                <a 
                  href="mailto:margarita.dautova.coach@gmail.com" 
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  margarita.dautova.coach@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Remaining Sections */}
          <div className="space-y-8">
            {/* Section 2 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Beim Besuch dieser Website werden automatisch Informationen durch den Server erfasst 
                (z. B. IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs). Diese Daten dienen 
                der technischen Bereitstellung und Sicherheit der Website.
              </p>
            </div>

            {/* Section 3 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                3. Terminbuchung über Cal.com
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-3">
                <p>
                  Für die Terminbuchung nutze ich den Dienst Cal.com (Cal.eu). Bei der Buchung werden 
                  personenbezogene Daten wie Name, E-Mail-Adresse und Terminangaben verarbeitet.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
                </p>
                <p>
                  Weitere Informationen zum Datenschutz bei Cal.com finden Sie unter:{' '}
                  <a 
                    href="https://cal.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors break-all"
                  >
                    https://cal.com/privacy
                  </a>
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                4. Kontaktaufnahme
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer 
                Anfrage gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            {/* Section 5 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                5. Ihre Rechte
              </h2>
              <div className="text-stone-600 leading-relaxed">
                <p className="mb-4">Sie haben das Recht auf:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Auskunft gemäß Art. 15 DSGVO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Berichtigung gemäß Art. 16 DSGVO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Löschung gemäß Art. 17 DSGVO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Datenübertragbarkeit gemäß Art. 20 DSGVO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Widerspruch gemäß Art. 21 DSGVO</span>
                  </li>
                </ul>
                <p className="mb-2">
                  Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                </p>
                <p className="text-stone-500 text-sm">
                  Zuständige Aufsichtsbehörde in Bayern: Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-medium text-stone-900 mb-3">
                6. Speicherdauer
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen 
                Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
