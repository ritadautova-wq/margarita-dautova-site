/**
 * JSON-LD Schema Markup Helpers
 * Generates structured data for SEO and rich snippets
 */

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Margarita Dautova',
    jobTitle: 'Career Coach & Thinking Partner',
    description: 'ICF PCC-certified coach specializing in career and identity transitions for international professionals navigating change in a non-native environment.',
    url: 'https://margaritadautova.com',
    sameAs: [
      'https://linkedin.com/in/margaritadautova',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Munich',
      addressCountry: 'DE',
    },
    knowsAbout: [
      'Career Coaching',
      'Transition Coaching',
      'Executive Coaching',
      'Leadership Development',
      'Burnout Recovery',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'PCC (Professional Certified Coach)',
      recognizedBy: {
        '@type': 'Organization',
        name: 'International Coaching Federation',
        url: 'https://coachingfederation.org',
      },
    },
  }
}

export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Margarita Dautova Coaching',
    description: 'Thinking partnership for international professionals in transition seeking clarity, confidence, and sustainable change.',
    url: 'https://margaritadautova.com',
    provider: {
      '@type': 'Person',
      name: 'Margarita Dautova',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: [
      'Career Coaching',
      'Thinking Partnership',
      'Executive Coaching',
      'Leadership Development',
      'Identity Transition',
    ],
    offers: [
      {
        '@type': 'Offer',
        name: '90-Day Clarity & Direction Program',
        description: '3-month thinking partnership for career transitions and identity-level shifts',
      },
      {
        '@type': 'Offer',
        name: 'Single Deep-Dive Session',
        description: '60-minute focused session for clarity on a specific decision or challenge',
      },
    ],
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

