/**
 * Homepage Content Configuration
 * All copy for the homepage in one editable file
 */

// Hero Section
export const hero = {
  trustStrip: [
    { label: 'PCC ICF Certified', icon: 'check' },
    { label: '80+ professionals coached', icon: 'people' },
    { label: 'Worldwide via video', icon: 'globe' },
  ],
  headline: "Land Your Next Career Move Without Burning Out or Starting Over",
  subheadline: "Career coaching for professionals who want clarity on their next chapter—without sacrificing what they've built. The 90-Day Clarity Sprint helps you navigate transitions with confidence.",
  primaryCTA: {
    label: 'Discovery Call',
    href: '/book',
  },
  secondaryCTA: {
    label: 'Free Career Guide',
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
  ctaLabel: "Book Your Discovery Call",
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
      description: "Know exactly what your next career move should be—and why it fits",
    },
    {
      title: "Confidence in Your Path",
      description: "Move forward with conviction instead of second-guessing every decision",
    },
    {
      title: "Sustainable Boundaries",
      description: "Build work that energizes instead of drains—without sacrificing your success",
    },
    {
      title: "Authentic Leadership",
      description: "Lead like yourself, not your predecessor—with your own voice and style",
    },
    {
      title: "Transferable Skills Clarity",
      description: "See how your existing expertise translates to new roles or industries",
    },
    {
      title: "Action Plan",
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
  headline: "The 90-Day Clarity Sprint",
  description: "A structured, practical approach to career transitions that actually works. No fluff, no vague advice—just clear steps forward.",
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
  ctaText: "Ready to start your clarity sprint?",
  primaryCTALabel: "Book Your Discovery Call",
  secondaryCTALabel: "Get the Free Playbook",
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
      title: '90-Day Clarity Sprint',
      subtitle: '3-month intensive program',
      description: 'Deep, sustained work for meaningful transformation. Perfect for career transitions, burnout recovery, or major leadership shifts.',
      includes: [
        'Bi-weekly coaching sessions (60-75 min)',
        'Personalized development plan',
        'Email support between sessions',
        'The Clarity Sprint framework',
        'Mid-point and final reviews',
      ],
      outcomes: [
        'Clear direction on your next move',
        'Confidence to take action',
        'Sustainable boundaries and practices',
        'A concrete action plan',
      ],
      idealFor: 'Career transitions, burnout recovery, leadership development',
      price: 'Starting from €XXX/month',
      priceNote: 'Payment plans available',
      cta: 'Apply for the Sprint',
      href: '/contact?type=ongoing',
      featured: true,
    },
    {
      title: 'Single Strategy Session',
      subtitle: '90-minute deep dive',
      description: 'A focused session for when you need clarity on something specific. Come with a question, leave with perspective and next steps.',
      includes: [
        'Pre-session questionnaire',
        '90-minute intensive session',
        'Session summary & notes',
        'Optional 30-min follow-up call',
      ],
      outcomes: [
        'Clarity on your specific challenge',
        'New perspective on your situation',
        'Concrete next steps',
        'Experience of the coaching process',
      ],
      idealFor: 'Specific decisions, exploring fit, getting unstuck',
      price: 'From €XXX',
      priceNote: 'Follow-up session available at reduced rate',
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
        'Stronger leadership bench',
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
  notSureCTALabel: "Book Your Discovery Call",
}

// Lead Magnet Section
export const leadMagnetSection = {
  eyebrow: "Free Resource",
  headline: "Get the Career Pivot Playbook",
  description: "An 8-page guide to help you navigate your next career move with clarity and confidence.",
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
  primaryCTALabel: "Book Your Discovery Call",
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

export const faqSection = {
  eyebrow: "Questions",
  headline: "Common questions, honest answers",
  description: "Everything you need to know before booking a call.",
  faqs,
}
