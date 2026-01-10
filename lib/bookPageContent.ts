/**
 * Book Page Content Configuration
 * All copy for the /book page in one editable file
 */

export interface HeroContent {
  headline: string
  subheadline: string
  ctaLabel: string
}

export const hero: HeroContent = {
  headline: 'Get Clear Next Steps in 30 Minutes',
  subheadline:
    'For professionals stuck between staying and leaving. Walk away with clarity—no pitch, no pressure.',
  ctaLabel: 'Book The Discovery Call',
}

export const trustStrip = [
  'PCC-Certified Coach',
  'Career Transitions Specialist',
  '8+ Years Experience',
]

export const heroMicrocopy =
  'Free • 30 minutes • No obligation • Walk away with your next step'

export const fitForYou = [
  'You feel stuck between staying and leaving',
  'You want to pivot but don’t know where to start',
  'You’re burnt out and need clarity on your next chapter',
  'You want a promotion but feel invisible',
  'You’re overwhelmed by too many options',
  'You want confidence in your career decisions',
]

export const notForYou = [
  'You’re looking for therapy or mental health support',
  'You want guaranteed job offers or placements',
  'You’re unwilling to take action on insights',
  'You need immediate crisis intervention',
  'You’re looking for a quick fix without commitment',
]

export interface OutcomeCard {
  headline: string
  description: string
}

export const outcomes: OutcomeCard[] = [
  {
    headline: 'Pinpoint what’s keeping you stuck (and what to do next)',
    description:
      'Get clarity on the real blockers—not just symptoms—and identify your immediate next steps.',
  },
  {
    headline: 'Choose the best next move: pivot, promotion, or role change',
    description:
      'Leave with a clear direction on whether to stay, pivot, or make a strategic move.',
  },
  {
    headline: 'Leave with 2–3 clear next steps for the next 7 days',
    description:
      'No vague advice. You’ll have concrete actions you can start immediately.',
  },
  {
    headline: 'Get an honest recommendation on whether coaching fits',
    description:
      'I’ll tell you straight if coaching is right for you—or suggest better alternatives.',
  },
]

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Clarify',
    description: 'Quick context on where you are and where you want to go.',
  },
  {
    number: '2',
    title: 'Diagnose',
    description: 'Identify what’s blocking you and explore your options.',
  },
  {
    number: '3',
    title: 'Plan',
    description: 'Leave with next actions and a clear decision on fit.',
  },
]

export interface Testimonial {
  resultHeadline: string
  quote: string
  name: string
  role?: string
  location?: string
}

// TODO: Replace with real testimonials
export const testimonials: Testimonial[] = [
  {
    resultHeadline: 'Left with clarity after months of confusion',
    quote:
      'The discovery call was incredibly valuable—even before we started working together, I left with insights I hadn’t considered. Margarita has a gift for asking the right questions.',
    name: 'Former discovery call participant',
    role: 'Product Manager',
    location: 'Berlin',
  },
  {
    resultHeadline: 'Finally knew my next step',
    quote:
      'I was stuck for months. In 30 minutes, Margarita helped me see what I couldn’t see myself. I walked away with a clear plan.',
    name: 'Anonymous',
    role: 'Senior Engineer',
  },
  {
    resultHeadline: 'Honest feedback that changed everything',
    quote:
      'She didn’t try to sell me. She gave me honest feedback about whether coaching was right for me. That alone was worth the call.',
    name: 'Anonymous',
    role: 'Director',
    location: 'Munich',
  },
  {
    resultHeadline: 'From overwhelmed to focused',
    quote:
      'I had too many options and no direction. The call helped me narrow down to what actually matters for my career.',
    name: 'Anonymous',
    role: 'VP',
  },
]

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: 'Is this call really free?',
    answer:
      'Yes, it’s genuinely free with no catch. I offer these calls because coaching is deeply personal—it matters that we’re a good fit for each other. This conversation helps us both determine that before any commitment.',
  },
  {
    question: 'Will you try to sell me?',
    answer:
      'No pressure, ever. If coaching isn’t right for you, I’ll tell you honestly and may suggest other resources or approaches. If it is a fit, I’ll share information—but the decision is entirely yours. Many people book calls just to explore.',
  },
  {
    question: 'What if I’m not sure what I want yet?',
    answer:
      'That’s actually a perfect reason to book a call. Many people come in feeling uncertain or stuck. The call is designed to help you clarify what you want—that’s the whole point.',
  },
  {
    question: 'What if I don’t have time?',
    answer:
      'It’s only 30 minutes, and the ROI is high. Most people leave with clarity that saves them weeks or months of spinning. Think of it as an investment in getting unstuck.',
  },
  {
    question: 'How should I prepare?',
    answer:
      'No formal preparation needed. Just come as you are. If it helps, you might briefly reflect on what’s prompting your interest in coaching and what you’d most like to change or achieve.',
  },
  {
    question: 'What happens if I need to reschedule?',
    answer:
      'Easy. After booking, you’ll receive a confirmation email with a link to reschedule or cancel. Life happens—I get it.',
  },
  {
    question: 'Do you work with people in my industry?',
    answer:
      'I’ve worked with professionals across tech, finance, consulting, healthcare, and more. The principles of career clarity and transition apply across industries. If you’re unsure, the call is a great way to explore fit.',
  },
  {
    question: 'What results can I expect?',
    answer:
      'You’ll leave with clarity on what’s keeping you stuck, 2–3 concrete next steps for the next 7 days, and an honest recommendation on whether coaching fits your situation. No vague advice—just actionable insights.',
  },
]

export const leadMagnetContent = {
  headline: 'Not ready to book yet?',
  subheadline:
    'Get the free Career Pivot Playbook: 5 frameworks to help you navigate your next career move.',
  ctaLabel: 'Send me the guide',
  successMessage: 'Check your inbox! We just sent you the Career Pivot Playbook.',
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
    'Short intake questions (optional)',
    'Zoom link provided 24 hours before',
    'Easy reschedule or cancel anytime',
  ],
  reassuranceText: 'No pressure. If it’s not a fit, I’ll tell you.',
  limitedSpotsText: 'Limited spots per week.',
}

export const finalCTA = {
  headline: 'Ready to get clear on your next career move?',
  subheadline:
    'The first step is simple: a free 30-minute strategy call where we talk about where you are and where you want to go. No pressure, no commitment—just an honest conversation that could change everything.',
  primaryCTA: 'Book Your Discovery Call',
  secondaryCTA: 'Get the Free Playbook',
  microcopy: 'Free. 30 minutes. Leave with your next step.',
  privacyNote: 'Everything we discuss is completely confidential.',
}


