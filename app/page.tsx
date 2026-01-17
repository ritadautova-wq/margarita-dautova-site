import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import TransformationSection from '@/components/sections/TransformationSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import OffersSection from '@/components/sections/OffersSection'
import LeadMagnetSection from '@/components/sections/LeadMagnetSection'
import AboutSection from '@/components/sections/AboutSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import {
  generatePersonSchema,
  generateProfessionalServiceSchema,
  generateFAQSchema,
} from '@/lib/schema'

import { faqSection } from '@/lib/homePageContent'

export const metadata: Metadata = {
  title: 'Margarita Dautova | Career Coach & Thinking Partner',
  description:
    'Thinking partnership for international professionals in transition seeking clarity, confidence, and sustainable change. Based in Munich, working with clients worldwide.',
}

export default function HomePage() {
  const personSchema = generatePersonSchema()
  const serviceSchema = generateProfessionalServiceSchema()
  const faqSchema = generateFAQSchema(faqSection.faqs)

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />
      <ProblemSection />
      <TransformationSection />
      <ProcessSection />
      <TestimonialsSection />
      <OffersSection />
      <LeadMagnetSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <StickyMobileCTA />
    </>
  )
}
