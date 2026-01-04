import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Margarita Dautova Coaching website.',
}

/* TODO: Have this reviewed by a legal professional and customize for your jurisdiction */
export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-neutral-100 to-white">
        <Container size="narrow">
          <h1 className="font-serif text-display text-neutral-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-neutral-600">
            Last updated: January 2024
          </p>
        </Container>
      </section>

      <Section background="white" size="sm">
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none">
            {/* TODO: Replace this placeholder with your actual privacy policy */}
            <p className="lead">
              Your privacy is important to me. This privacy policy explains what personal 
              information I collect and how I use it.
            </p>

            <h2>Information I Collect</h2>
            <p>
              When you use this website, I may collect the following information:
            </p>
            <ul>
              <li>
                <strong>Contact information:</strong> When you fill out a contact form or 
                subscribe to the newsletter, I collect your name, email address, and any 
                other information you provide.
              </li>
              <li>
                <strong>Usage data:</strong> I may collect information about how you interact 
                with the website, including pages visited and time spent on the site.
              </li>
              <li>
                <strong>Cookies:</strong> The website may use cookies to improve your 
                experience. You can control cookie settings in your browser.
              </li>
            </ul>

            <h2>How I Use Your Information</h2>
            <p>I use the collected information to:</p>
            <ul>
              <li>Respond to your inquiries and provide coaching services</li>
              <li>Send you newsletter updates (if you've subscribed)</li>
              <li>Improve the website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>
              I do not sell your personal information. I may share your data with:
            </p>
            <ul>
              <li>Service providers who help operate the website (e.g., email service providers)</li>
              <li>Legal authorities if required by law</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              I retain your personal information only for as long as necessary to fulfill 
              the purposes outlined in this policy, unless a longer retention period is 
              required by law.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul>
              <li>Access the personal information I hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent to data processing</li>
              <li>Object to certain processing of your information</li>
            </ul>

            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy or your personal data, 
              please contact me at:
            </p>
            <p>
              {/* TODO: Replace with actual contact information */}
              Email: hello@margaritadautova.com<br />
              Margarita Dautova Coaching<br />
              [Address]<br />
              [City, Country]
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              I may update this privacy policy from time to time. Any changes will be 
              posted on this page with an updated "Last updated" date.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

