import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import TransformationSection from '@/components/sections/TransformationSection'
import ProcessSection from '@/components/sections/ProcessSection'
// TODO: Uncomment when testimonials are ready
// import TestimonialsSection from '@/components/sections/TestimonialsSection'
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
  title: 'Career & Transition Coaching | Margarita Dautova',
  description:
    'Land your next career move without burning out or starting over. Career coaching for professionals ready for clarity, confidence, and sustainable change.',
  // Force deployment update
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
      {/* TODO: Uncomment when testimonials are ready */}
      {/* <TestimonialsSection /> */}
      <OffersSection />
      <LeadMagnetSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <StickyMobileCTA />
    </>
  )
}
