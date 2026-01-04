import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Legal information and imprint for Margarita Dautova Coaching.',
}

/* TODO: This is required for EU-based businesses. Customize with actual legal information. */
export default function ImprintPage() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-neutral-100 to-white">
        <Container size="narrow">
          <h1 className="font-serif text-display text-neutral-900">
            Imprint
          </h1>
          <p className="mt-4 text-neutral-600">
            Legal disclosure according to § 5 TMG (German Telemedia Act)
          </p>
        </Container>
      </section>

      <Section background="white" size="sm">
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none">
            {/* TODO: Replace ALL placeholder information with actual legal details */}
            
            <h2>Service Provider</h2>
            <p>
              Margarita Dautova<br />
              [Street Address]<br />
              [Postal Code] [City]<br />
              [Country]
            </p>

            <h2>Contact</h2>
            <p>
              Email: hello@margaritadautova.com<br />
              {/* TODO: Add phone if applicable */}
              Phone: [Phone Number]
            </p>

            <h2>Professional Information</h2>
            <p>
              Profession: Coach / Consultant<br />
              {/* TODO: Add relevant professional registrations if applicable */}
              Professional Title: [If applicable]<br />
              Awarding Country: [If applicable]
            </p>

            <h2>VAT ID</h2>
            <p>
              {/* TODO: Add VAT number if applicable */}
              VAT identification number according to § 27a UStG:<br />
              [VAT ID Number]
            </p>

            <h2>Responsible for Content</h2>
            <p>
              According to § 55 Abs. 2 RStV:<br />
              Margarita Dautova<br />
              [Address as above]
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (OS): 
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              I am not willing or obliged to participate in dispute resolution proceedings 
              before a consumer arbitration board.
            </p>

            <h2>Liability for Content</h2>
            <p>
              As a service provider, I am responsible for my own content on these pages 
              according to general laws. However, I am not obligated to monitor transmitted 
              or stored third-party information or to investigate circumstances that indicate 
              illegal activity. Obligations to remove or block the use of information under 
              general law remain unaffected.
            </p>

            <h2>Liability for Links</h2>
            <p>
              This website contains links to external third-party websites over whose content 
              I have no control. Therefore, I cannot accept any liability for this external 
              content. The respective provider or operator of the linked pages is always 
              responsible for their content.
            </p>

            <h2>Copyright</h2>
            <p>
              The content and works created by the site operator on these pages are subject 
              to copyright law. Duplication, processing, distribution, or any form of 
              commercialization of such material beyond the scope of copyright law requires 
              prior written consent.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

