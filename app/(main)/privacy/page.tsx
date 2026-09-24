import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung für Margarita Dautova Coaching.',
  alternates: { canonical: '/privacy' },
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
                2. Hosting
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-3">
                <p>
                  Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                  ("Vercel"), gehostet. Vercel verarbeitet dabei automatisch technische
                  Verbindungsdaten (z. B. IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs,
                  abgerufene Seite) in sogenannten Server-Logfiles. Diese Daten dienen der technischen
                  Bereitstellung und Sicherheit der Website und werden nicht mit anderen Datenquellen
                  zusammengeführt.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse an einer sicheren und funktionsfähigen Bereitstellung der Website).
                </p>
                <p>
                  Da Vercel ein US-amerikanisches Unternehmen ist, kann eine Datenübermittlung in die
                  USA erfolgen. Vercel stützt sich hierfür auf den EU-U.S. Data Privacy Framework
                  sowie, ergänzend, auf EU-Standardvertragsklauseln (Art. 46 DSGVO). Weitere
                  Informationen:{' '}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors break-all"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                3. Cookies und lokale Speicherung
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-3">
                <p>
                  Diese Website speichert Ihre Einwilligungsentscheidung zum Cookie-Hinweis lokal in
                  Ihrem Browser (localStorage, Schlüssel "cookie-consent"). Dabei handelt es sich um
                  keinen Cookie im technischen Sinne, sondern um eine rein technisch notwendige,
                  lokale Speicherung ohne Übertragung an mich oder Dritte. Rechtsgrundlage ist Art. 6
                  Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Nachweisbarkeit Ihrer Entscheidung).
                </p>
                <p>
                  Erst wenn Sie der Nutzung von Analyse-Tools zustimmen, werden zusätzlich die unter
                  Ziffer 4 beschriebenen Cookies bzw. vergleichbaren Technologien von Vercel Analytics
                  gesetzt. Beim Laden des Terminbuchungs-Kalenders (Ziffer 6) sowie beim Anzeigen von
                  Bildern aus meinen Artikeln (Ziffer 8) werden ebenfalls Cookies bzw. vergleichbare
                  Technologien von Drittanbietern gesetzt; die entsprechenden Abschnitte enthalten
                  Details dazu, wann dies geschieht.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                4. Webanalyse mit Vercel Analytics
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-3">
                <p>
                  Wenn Sie dem zustimmen, nutze ich Vercel Analytics, einen datenschutzfreundlichen
                  Webanalysedienst von Vercel Inc. (USA), um anonymisierte Statistiken über die Nutzung
                  dieser Website zu erhalten (z. B. aufgerufene Seiten, Gerätetyp, ungefähre Region).
                  Es wird keine IP-Adresse dauerhaft gespeichert und es findet kein Tracking über
                  verschiedene Websites hinweg statt.
                </p>
                <p>
                  Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung
                  (Art. 6 Abs. 1 lit. a DSGVO), die Sie über den Cookie-Hinweis erteilen und jederzeit
                  mit Wirkung für die Zukunft widerrufen können, indem Sie die lokale Speicherung
                  gemäß Ziffer 3 in Ihrem Browser löschen. Zur Datenübermittlung in die USA siehe
                  Ziffer 2.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                5. Terminbuchung über Cal.com
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-3">
                <p>
                  Für die Terminbuchung nutze ich den Dienst Cal.com Inc. (USA). Der Buchungskalender
                  wird auf der Seite "/book" eingebunden. Sobald diese Seite aufgerufen wird und Sie der
                  Nutzung von Drittinhalten zugestimmt haben, wird eine Verbindung zu den Servern von
                  Cal.com aufgebaut, wobei Ihre IP-Adresse übermittelt und Cookies von Cal.com gesetzt
                  werden können. Bei einer Terminbuchung werden zusätzlich Name, E-Mail-Adresse und
                  Terminangaben verarbeitet.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                  (Vertragserfüllung bzw. vorvertragliche Maßnahmen) für die Buchung selbst und auf
                  Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) für das Laden des
                  eingebetteten Kalenders vor einer Buchung. Da Cal.com Inc. ein US-amerikanisches
                  Unternehmen ist, kann eine Datenübermittlung in die USA erfolgen; Cal.com stützt sich
                  hierfür auf Standardvertragsklauseln (Art. 46 DSGVO).
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

            {/* Section 6 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                6. Kontaktformular und Anmeldung zum Career Pivot Playbook
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-3">
                <p>
                  Für das Kontaktformular und für die Anmeldung zum kostenlosen "Career Pivot
                  Playbook" nutze ich den Formular-Dienst Formspree, Inc. (USA). Die von Ihnen
                  eingegebenen Daten (z. B. Name, E-Mail-Adresse, Nachrichtentext bzw. Ihre
                  E-Mail-Adresse bei der Playbook-Anmeldung) werden dabei an Formspree übermittelt und
                  dort gespeichert, damit ich Ihre Anfrage beantworten bzw. Ihnen erneut das Playbook
                  zusenden kann.
                </p>
                <p>
                  Für den Versand des Playbooks per E-Mail nutze ich zusätzlich den
                  E-Mail-Versanddienst Resend, Inc. (USA). Ihre E-Mail-Adresse und der Inhalt der
                  versendeten E-Mail werden dabei über die Server von Resend verarbeitet.
                </p>
                <p>
                  Die Verarbeitung erfolgt bei Kontaktanfragen auf Grundlage von Art. 6 Abs. 1 lit. b
                  bzw. lit. f DSGVO (Bearbeitung Ihrer Anfrage bzw. mein berechtigtes Interesse
                  daran) und bei der Playbook-Anmeldung auf Grundlage Ihrer Einwilligung
                  (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch das Absenden des Formulars erteilen und
                  die Sie jederzeit formlos, z. B. per E-Mail an{' '}
                  <a
                    href="mailto:margarita.dautova.coach@gmail.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    margarita.dautova.coach@gmail.com
                  </a>
                  , widerrufen können. Da beide Anbieter US-amerikanische Unternehmen sind, kann eine
                  Datenübermittlung in die USA erfolgen; beide stützen sich hierfür auf
                  Standardvertragsklauseln (Art. 46 DSGVO). Ihre Daten gebe ich darüber hinaus nicht
                  ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                7. Eingebundene Inhalte von Medium
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-3">
                <p>
                  Die Artikelbilder im Bereich "Articles" werden technisch von den Servern der
                  A Medium Corporation (USA) eingebunden. Beim Aufruf einer Artikelseite wird dadurch
                  eine Verbindung zu Medium aufgebaut, wobei Ihre IP-Adresse an Medium übermittelt
                  wird und Medium ein Cookie setzen kann. Ich habe keinen Einfluss darauf, in welchem
                  Umfang Medium die dabei erhobenen Daten verarbeitet.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage meines berechtigten Interesses an einer
                  einfachen technischen Darstellung meiner Artikelinhalte (Art. 6 Abs. 1 lit. f
                  DSGVO). Weitere Informationen:{' '}
                  <a
                    href="https://medium.com/policy/medium-privacy-policy-f03bf92035c9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors break-all"
                  >
                    Medium-Datenschutzrichtlinie
                  </a>
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="border-b border-stone-200 pb-8">
              <h2 className="font-medium text-stone-900 mb-3">
                8. Ihre Rechte
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

            {/* Section 9 */}
            <div>
              <h2 className="font-medium text-stone-900 mb-3">
                9. Speicherdauer
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
