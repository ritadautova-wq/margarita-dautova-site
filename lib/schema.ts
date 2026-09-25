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
    url: 'https://www.margarita-dautova.com',
    sameAs: [
      'https://www.linkedin.com/in/margarita-dautova',
      'https://www.instagram.com/dautova.margarita',
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
    url: 'https://www.margarita-dautova.com',
    provider: {
      '@type': 'Person',
      name: 'Margarita Dautova',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Munich',
      addressCountry: 'DE',
    },
    priceRange: '€150–€720',
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
        name: '90-Day Clarity Through Transition',
        description: '3-month thinking partnership for meaningful transitions — clarity, integration, and grounded next steps',
      },
      {
        '@type': 'Offer',
        name: 'Strategic Session',
        description: 'Focused thinking session to untangle one specific question, decision, or situation',
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

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Margarita Dautova Coaching',
    url: 'https://www.margarita-dautova.com',
  }
}

export function generateArticleSchema(article: {
  title: string
  excerpt: string
  imageUrl?: string
  date: string
  author: string
  slug: string
}) {
  const url = `https://www.margarita-dautova.com/resources/${article.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    ...(article.imageUrl && { image: article.imageUrl }),
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Margarita Dautova Coaching',
    },
    mainEntityOfPage: url,
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

