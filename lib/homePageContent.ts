/**
 * Homepage Content Configuration
 * All copy for the homepage in one editable file
 */

// Hero Section
export const hero = {
  trustStrip: [
    { label: 'PCC ICF Certified', icon: 'check' },
    { label: '80+ professionals coached', icon: 'people' },
    { label: '600+ coaching hours', icon: 'clock' },
    { label: 'Worldwide via video', icon: 'globe' },
    { label: 'Clients among Salesforce, Virgin, BP, Mytheresa, Yandex, startups', icon: 'building' },
  ],
  headline: "When life stops making sense, that’s usually where the real work begins.",
  subheadline: "I’m Margarita — a career coach and thinking partner for people in transition. I work with those who want clarity about who they are and where they are going — personally and professionally.",
  primaryCTA: {
    label: 'Book Free Discovery Call',
    href: '/book',
  },
  secondaryCTA: {
    label: 'Get Free Career Guide',
    href: '/free',
  },
  microcopy: 'Free. 30 minutes. Leave with your next step.',
}

// Problem Section
export const problemSection = {
  eyebrow: "You're Not Alone",
  headline: "If you're feeling any of this, you're at a decision point—not broken",
  painPoints: [
    "You're successful on paper but feel stuck or unfulfilled",
    "You know you need a change but don't know what's next",
    "You're considering a career pivot but fear starting over",
    "You've lost confidence in your abilities or direction",
    "You're in a new leadership role and feel like an imposter",
    "You're torn between security and pursuing something meaningful",
  ],
  transitionMessage: {
    bold: "You're not broken.",
    text: "You're at a crossroads—and that's exactly where meaningful change begins.",
    description: "The confusion, the exhaustion, the \"what's next?\" feeling? That's your system telling you something needs to shift. Not because you're failing, but because you're ready for what's next.",
  },
  ctaText: "Here's how we turn this moment into momentum:",
  ctaLabel: "Book Free Discovery Call",
}

// Transformation Section (What You'll Get)
export interface Outcome {
  title: string
  description: string
}

export const transformationSection = {
  eyebrow: "What You'll Get",
  headline: "Specific outcomes, not vague promises",
  description: "Here's what you'll walk away with after working together:",
  outcomes: [
    {
      title: "Clear Direction",
      description: "Know exactly what your next professional move should be—and why it fits",
    },
    {
      title: "Confidence in Your Thinking",
      description: "Move forward without constantly questioning yourself or looking for external validation",
    },
    {
      title: "Sustainable Boundaries",
      description: "Create work that supports your energy and focus, not work that slowly drains you",
    },
    {
      title: "Authentic Leadership",
      description: "Lead in a way that feels natural to you — without copying someone else’s style",
    },
    {
      title: "Clarity Around Your Strengths",
      description: "See how what you already know and do well can evolve into your next chapter",
    },
    {
      title: "Grounded Next Steps",
      description: "Leave with concrete next steps—not just insights, but a roadmap",
    },
  ],
}

// Process Section
export interface ProcessStep {
  number: string
  name: string
  title: string
  description: string
  duration: string
}

export const processSection = {
  eyebrow: "The Method",
  headline: "The 90-Day Clarity & Direction Program",
  description: "A structured, practical approach to professional transitions that actually works.",
  steps: [
    {
      number: '01',
      name: 'CLARIFY',
      title: 'Understand Where You Are',
      description: 'We start by getting honest about what\'s working and what isn\'t. Through structured reflection, we identify your core values, hidden strengths, and the real reasons you\'re feeling stuck.',
      duration: 'Weeks 1-3',
    },
    {
      number: '02',
      name: 'POSITION',
      title: 'Define Where You Want to Go',
      description: 'With clarity on your starting point, we explore your options. We map out potential paths—whether that\'s a pivot, a promotion, or a complete reset—and identify which direction aligns with who you are now.',
      duration: 'Weeks 4-6',
    },
    {
      number: '03',
      name: 'ACT',
      title: 'Move Forward with Confidence',
      description: 'Insights are useless without action. We create a concrete plan with milestones, build your confidence through small wins, and navigate obstacles as they arise. You leave ready to execute.',
      duration: 'Weeks 7-12',
    },
  ],
  ctaText: "Ready to start your clarity program?",
  primaryCTALabel: "Book Free Discovery Call",
  secondaryCTALabel: "Get Free Career Guide",
}

// Offers Section
export interface Offer {
  title: string
  subtitle: string
  description: string
  includes: string[]
  outcomes: string[]
  idealFor: string
  price: string
  priceNote: string
  cta: string
  href: string
  featured: boolean
}

export const offersSection = {
  eyebrow: "Ways to Work Together",
  headline: "Choose the format that fits your situation",
  description: "Different situations call for different approaches. Here's how I typically work with clients.",
  offers: [
    {
      title: '90-Day Clarity & Direction Program',
      subtitle: '3 months',
      description: 'Deep, sustained work for meaningful transformation. Perfect for professional transitions, burnout recovery, or major leadership shifts.',
      includes: [
        '6 coaching sessions (60 min)',
        'Session summary & notes',
        'Personalized development plan',
        'Email support between sessions',
        'Mid-point and final reviews',
      ],
      outcomes: [
        'Knowing your values and strengths',
        'Clear direction on your next move',
        'Confidence to take action',
        'Sustainable boundaries',
        'A concrete action plan',
      ],
      idealFor: 'Professional transitions, burnout recovery, leadership development',
      price: '€499',
      priceNote: 'Payment plans available',
      cta: 'Apply for the Program',
      href: '/contact?type=ongoing',
      featured: true,
    },
    {
      title: 'Single Session',
      subtitle: '60-minute deep dive',
      description: 'A focused session for when you need clarity on something specific. Come with a question, leave with perspective and next steps.',
      includes: [
        'Pre-session questionnaire',
        '60-minute session',
        'Session summary & notes',
        '7 days email support after session',
        'Optional follow-up session',
      ],
      outcomes: [
        'Clarity on your specific challenge',
        'New perspective on your situation',
        'Concrete next steps',
        'Experience of the coaching process',
      ],
      idealFor: 'Specific decisions, exploring fit, getting unstuck',
      price: '€90',
      priceNote: '',
      cta: 'Book a Session',
      href: '/contact?type=single',
      featured: false,
    },
    {
      title: 'Team & Corporate',
      subtitle: 'Custom programs',
      description: 'Coaching and workshop solutions for organizations investing in their people. Tailored programs for teams, leaders, and companies.',
      includes: [
        'Discovery conversation with stakeholders',
        'Customized program design',
        '1:1 coaching, group coaching, or workshops',
        'Progress reporting (confidentiality maintained)',
        'Program evaluation and recommendations',
      ],
      outcomes: [
        'Improved retention and engagement',
        'Better team dynamics',
        'Culture of development and growth',
      ],
      idealFor: 'HR leaders, team managers, organizations',
      price: 'Contact for custom proposal',
      priceNote: 'Flexible engagement structures',
      cta: 'Get in Touch',
      href: '/contact?type=corporate',
      featured: false,
    },
  ],
  notSureText: "Not sure which format is right for you?",
  notSureDescription: "Book a free discovery call and we'll figure it out together. No pressure, just an honest conversation.",
  notSureCTALabel: "Book Free Discovery Call",
}

// Lead Magnet Section
export const leadMagnetSection = {
  eyebrow: "Free Resource",
  headline: "Get the Career Pivot Playbook",
  description: "An 8-page guide to help you navigate your next professional move with clarity and confidence.",
  features: [
    "The 5 signs you're ready for a change",
    "The 3 pivot paths: Shift, Switch, or Start Fresh",
    "The Hidden Transferable Skills Framework",
    "30-Day Clarity Kickstart Action Plan",
  ],
  formTitle: "Download Your Free Guide",
  formDescription: "Enter your email and we'll send you the Career Pivot Playbook instantly.",
}

// Final CTA Section
export const finalCTASection = {
  headline: "Ready to land your next career move?",
  description: "The first step is simple: a free 30-minute strategy call where we talk about where you are and where you want to go. No pressure, no commitment—just an honest conversation that could change everything.",
  primaryCTALabel: "Book Free Discovery Call",
  secondaryCTALabel: "Get the Free Playbook",
  microcopy: "Free. 30 minutes. Leave with your next step.",
  privacyNote: "Everything we discuss is completely confidential.",
}

// FAQ Section
export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: "How long does the 90-Day Clarity & Direction Program actually take?",
    answer: "The program is designed to run over 12 weeks (approximately 3 months), with 6 sessions scheduled at your convenience. The timeline can be adjusted based on your specific needs and pace. Some clients complete it faster, others prefer a more extended timeline.",
  },
  {
    question: "What if I'm not sure coaching is right for me?",
    answer: "That's exactly what the free discovery call is for. We'll talk about your situation, explore whether coaching is the right fit, and if not, I'll point you toward other resources that might serve you better. There's zero pressure to commit.",
  },
  {
    question: "How much does coaching cost?",
    answer: "Investment varies based on the format you choose. The 90-Day Clarity & Direction Program is €499, single sessions are €90 for 60 minutes, and corporate programs are customized. During our discovery call, we'll discuss pricing options that fit your budget.",
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
    question: "What happens on the free discovery call?",
    answer: "We spend 30 minutes talking. You share what's on your mind—your situation, challenges, and what you're hoping to change. I listen, ask questions, and we explore whether coaching could help. By the end, you'll have clarity on your next steps, whether or not we work together.",
  },
  {
    question: "Do you work with people outside of Germany?",
    answer: "Yes! I'm based in Munich but work with clients worldwide via video call. Time zones are flexible—we'll find times that work for both of us.",
  },
]

export const faqSection = {
  eyebrow: "Questions",
  headline: "Common questions, honest answers",
  description: "Everything you need to know before booking a call.",
  faqs,
}
