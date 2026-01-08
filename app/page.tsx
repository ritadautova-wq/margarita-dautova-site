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

export const metadata: Metadata = {
  title: 'Career & Transition Coaching | Margarita Dautova',
  description:
    'Land your next career move without burning out or starting over. Career coaching for senior professionals ready for clarity, confidence, and sustainable change.',
  // Force deployment update
}

const faqs = [
  {
    question: "How long does the 90-Day Clarity Sprint actually take?",
    answer: "The program is designed to run over 12 weeks (approximately 3 months), with bi-weekly sessions. However, the timeline can be adjusted based on your specific needs and pace. Some clients complete it faster, others prefer a more extended timeline.",
  },
  {
    question: "What if I'm not sure coaching is right for me?",
    answer: "That's exactly what the free discovery call is for. We'll talk about your situation, explore whether coaching is the right fit, and if not, I'll point you toward other resources that might serve you better. There's zero pressure to commit.",
  },
  {
    question: "How much does coaching cost?",
    answer: "Investment varies based on the format you choose. The 90-Day Clarity Sprint starts from €XXX/month, single sessions start from €XXX, and corporate programs are customized. During our discovery call, we'll discuss pricing options that fit your budget.",
  },
  {
    question: "Will this actually work for me?",
    answer: "Coaching works when you're ready to invest in yourself and take action. It's not magic—it's structured conversation, reflection, and accountability. If you're willing to show up, be honest, and do the work, you'll see results. I can't guarantee specific outcomes, but I can guarantee I'll show up fully for you.",
  },
  {
    question: "Is everything I share confidential?",
    answer: "Absolutely. Everything we discuss—in sessions, emails, or calls—is completely confidential. The only exception is if you're part of a corporate program, where I may provide general progress updates to sponsors (never specific content) and only with your explicit agreement.",
  },
  {
    question: "What happens on the discovery call?",
    answer: "We spend 30 minutes talking. You share what's on your mind—your situation, challenges, and what you're hoping to change. I listen, ask questions, and we explore whether coaching could help. By the end, you'll have clarity on your next steps, whether or not we work together.",
  },
  {
    question: "Do you work with people outside of Germany?",
    answer: "Yes! I'm based in Munich but work with clients worldwide via video call. Time zones are flexible—we'll find times that work for both of us.",
  },
]

export default function HomePage() {
  const personSchema = generatePersonSchema()
  const serviceSchema = generateProfessionalServiceSchema()
  const faqSchema = generateFAQSchema(faqs)

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
