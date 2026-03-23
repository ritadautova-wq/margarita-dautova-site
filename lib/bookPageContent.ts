/**
 * Book Page Content Configuration
 * Rewritten for a light, calm, non-salesy discovery call page.
 */

export interface HeroContent {
  headline: string
  subheadline: string
  ctaLabel: string
}

export const hero: HeroContent = {
  headline: 'A first conversation',
  subheadline:
    'This call is a chance to get to know each other. We’ll talk about what’s currently on your mind, what brings you here, and what kind of support you’re looking for. It’s also a space to see whether working together would feel like a good fit.',
  ctaLabel: 'Book Discovery Call',
}

export const heroMicrocopy =
  'Free • 30 minutes • No pressure • A simple conversation'

export const exploratoryTopics = [
  'What’s currently happening in your work or life',
  'What feels unclear, stuck, or in transition',
  'What kind of support you’re hoping for (or are unsure about)',
  'Whether coaching — and working together — could make sense',
]

export const whatThisIsNot = [
  'This is not a coaching session',
  'There is no preparation required',
  'You don’t need a clear goal yet',
  'You don’t need to decide anything during the call',
]

export const mutualFitStatement = 
  'Coaching works best when there’s trust, openness, and a sense of alignment. This conversation helps us both understand whether that’s present.'

export const finalCTA = {
  headline: 'If this sounds helpful, you’re welcome to book a call.',
  subheadline:
    'If you’re curious to talk, you can choose a time below. No pressure, just an honest conversation to see where you are.',
  primaryCTA: 'Book Discovery Call',
  microcopy: 'Free • 30 minutes',
}

export const calendarSection = {
  headline: 'Choose a time that works for you',
  subheadline: 'All times shown in your local timezone.',
  loadingText: 'Loading available times...',
  fallbackText: 'Taking too long?',
  fallbackLinkText: 'Open scheduler directly',
  afterBookingText: 'What happens after you book:',
  afterBookingItems: [
    'Confirmation email with call details',
    'A short note from me with a Google Meet link',
    'Easy reschedule or cancel anytime',
  ],
  reassuranceText: 'No pressure. If it’s not a fit, we’ll both know.',
  limitedSpotsText: 'Limited spots available each week.',
}

export const bookPageMetadata = {
  title: 'Discovery Call',
  description: 'A first conversation to get to know each other and see if coaching is a good fit.',
}

export const faqs = [
  {
    question: 'Is this call really free?',
    answer:
      'Yes. I offer these conversations because coaching is deeply personal. It matters that we’re a good fit for each other before any commitment is made.',
  },
  {
    question: 'Will you try to sell me?',
    answer:
      'No. If coaching isn’t right for you, I’ll tell you honestly. If it is a fit, we can discuss how that might look—but the decision is entirely yours.',
  },
  {
    question: 'Do I need to prepare?',
    answer:
      'Not at all. Just come as you are. We’ll start wherever you happen to be right now.',
  },
]
