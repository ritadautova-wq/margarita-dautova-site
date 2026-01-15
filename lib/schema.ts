/**
 * JSON-LD Schema Markup Helpers
 * Generates structured data for SEO and rich snippets
 */

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Margarita Dautova',
    jobTitle: 'Career & Transition Coach',
    description: 'PCC ICF certified career and transition coach helping professionals navigate career changes, burnout recovery, and leadership development.',
    url: 'https://margaritadautova.com',
    sameAs: [
      'https://linkedin.com/in/margaritadautova', // TODO: Update with actual LinkedIn URL
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
    description: 'Career and transition coaching for professionals seeking clarity, confidence, and sustainable change.',
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
      'Transition Coaching',
      'Executive Coaching',
      'Leadership Development',
      'Burnout Recovery',
    ],
    offers: [
      {
        '@type': 'Offer',
        name: '90-Day Clarity Sprint',
        description: '3-month intensive coaching program for career transitions and leadership development',
      },
      {
        '@type': 'Offer',
        name: 'Single Strategy Session',
        description: '90-minute focused coaching session for specific challenges',
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

