/**
 * Homepage Content Configuration
 * All copy for the homepage in one editable file
 */

// Hero Section
export const hero = {
  trustStrip: [
    { label: 'ICF PCC-certified', icon: 'check' },
    { label: '600+ coaching hours with 80+ professionals', icon: 'people' },
    { label: 'Munich-based, working worldwide', icon: 'globe' },
    { label: '10+ years in Talent Development', icon: 'building' },
  ],
  headline: "When growth becomes non-negotiable.",
  subheadline: "I’m Margarita — a career coach and thinking partner for people in transition. I work with thoughtful international professionals who want clarity about who they are and where they’re going — especially those navigating change while living abroad or working in a non-native language.",
  primaryCTA: {
    label: 'Book a Discovery Call',
    href: '/book',
  },
  secondaryCTA: {
    label: 'Download a Playbook',
    href: '/free',
  },
  microcopy: 'Free. 30 minutes. Leave with your next step.',
}

// Problem Section
export const problemSection = {
  eyebrow: " ",
  headline: "If any of this resonates, you might be at a turning point — whether by challenge or opportunity.",
  painPoints: [
    "You’ve been promoted — and want to grow into the role, not just perform it",
    "You’re stepping into leadership and want to lead consciously",
    "You’ve moved countries or contexts, and what used to work no longer translates",
    "You know you need a change, but can’t yet articulate what “next” looks like",
    "Your responsibilities have expanded — and your mindset needs to evolve with them",
    "You’re torn between security and pursuing something more meaningful",
  ],
  transitionMessage: {
    bold: "Moments like these often appear when you're evolving — whether because something no longer fits, or because you're stepping into something bigger.",
    description: "Sometimes it feels like uncertainty. Sometimes like expansion. Either way, it's a signal that your current way of thinking may need to grow with you. Having a thinking partner helps you integrate the change — and move forward deliberately.",
  },
  ctaText: "You can start easy:",
  ctaLabel: "Book a Discovery Call",
}

// Transformation Section (What You'll Get)
export interface Outcome {
  title: string
  description: string
}

export const transformationSection = {
  eyebrow: "What You'll Get",
  headline: "Specific outcomes, not vague promises",
  description: "Here's what my clients walk away with after working together:",
  closingText: "These outcomes aren't about becoming someone else — they're about thinking more clearly and choosing more intentionally.",
  outcomes: [
    {
      title: "Clear Communication",
      description: "You have language for your story (especially for interviews or transitions in a non-native language)",
    },
    {
      title: "Trust in Your Thinking",
      description: "You stop looping and start choosing — moving forward without constantly second-guessing yourself",
    },
    {
      title: "Energy-Aware Boundaries",
      description: "You shape work in a way that supports your energy and focus, instead of slowly draining them",
    },
    {
      title: "Mental Wellbeing",
      description: "You reduce mental noise and self-pressure, and make decisions in a calmer, more sustainable way",
    },
    {
      title: "Decision Clarity",
      description: "You know exactly what to say yes and no to—and you understand why",
    },
    {
      title: "Grounded Next Steps",
      description: "You can explain your next step without apologizing, supported by a clear and realistic roadmap",
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
  headline: "90-Day Clarity Through Transition",
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
  primaryCTALabel: "Book a Discovery Call",
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
      title: '90-Day Clarity Through Transition',
      subtitle: '3 months',
      description: 'For people in a meaningful transition who want to think clearly, decide intentionally, and move forward in a grounded way.',
      includes: [
        '6 coaching sessions (60 min)',
        'Session summary & notes',
        'Personalized development plan',
        'Email support between sessions',
        'Mid-point and final reviews',
      ],
      outcomes: [
        'Making sense of a transition or uncertainty',
        'Clarifying what matters now',
        'Rebuilding trust in your thinking',
        'Grounded, sustainable next steps',
        'Decisions you can stand behind',
      ],
      idealFor: 'Career or identity transitions, living abroad, internally misaligned',
      price: '€499',
      priceNote: 'Limited number of places. Best suited for people ready to engage thoughtfully over time.',
      cta: 'Apply for the Program',
      href: '/contact?type=ongoing',
      featured: true,
    },
    {
      title: 'Strategic Session',
      subtitle: 'Focused thinking session',
      description: "For people who need to untangle one specific question, decision, or situation — and leave with clearer thinking.",
      useFor: [
        'A career or role decision',
        'Clarifying "what\'s next" when everything feels blurry',
        'Preparing for an important conversation or interview',
        'Making sense of a situation that feels emotionally or mentally loaded',
      ],
      includes: [
        'Pre-session questionnaire',
        '90-minute focused session',
        'Session summary & notes',
        'Optional follow-up session',
      ],
      outcomes: [
        'Making sense of a specific situation or decision',
        'Reducing mental noise',
        'Identifying grounded next steps',
        'Finding language that fits your experience',
      ],
      idealFor: 'Career decisions, preparing for conversations, getting unstuck',
      price: '€150',
      priceNote: '',
      cta: 'Book a Session',
      href: '/contact?type=single',
      featured: false,
    },
    {
      title: 'Workshops & Coaching for Organisations',
      subtitle: 'Custom programs',
      description: 'Supporting clarity, psychological safety, and sustainable performance in complex professional environments.',
      includes: [
        'Discovery conversations with key stakeholders',
        'Interactive workshops (in-person or virtual)',
        'Group coaching sessions',
        'Individual coaching for leaders',
        'Programs tailored to context and growth phase',
      ],
      outcomes: [
        'Clearer communication and collaboration',
        'Psychological safety that supports performance',
        'Practical tools teams can apply immediately',
        'Sustainable ways of working — without burnout',
      ],
      idealFor: 'International organisations, growing teams, teams navigating transition',
      price: 'Contact for custom proposal',
      priceNote: 'Flexible engagement structures',
      cta: 'Get in Touch',
      href: '/contact?type=corporate',
      featured: false,
    },
  ],
  notSureText: "Not sure which option fits?",
  notSureDescription: "If you're at an early stage or have one specific question, a Strategic Session is often enough. If you're navigating a broader transition or need space to integrate change over time, the 90-day program offers deeper support. You're also welcome to start with a conversation and decide from there.",
  notSureCTALabel: "Book a Discovery Call",
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
  headline: "Ready to shape your next career move?",
  description: "The first step is simple: a free 30-minute strategy call where we talk about where you are and where you want to go. No pressure, no commitment—just an honest conversation that could change everything.",
  primaryCTALabel: "Book a Discovery Call",
  secondaryCTALabel: "Download Playbook",
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
    question: "What is coaching?",
    answer: "The International Coaching Federation defines coaching as a partnership with clients in a thought-provoking, creative process that inspires them to maximize their personal and professional potential — helping them discover inherent solutions, clarify goals, and achieve more in their lives, rather than fixing what's wrong. My definition is simpler: Coaching is about you. About what you want, what matters to you, and the kind of life you're trying to build. It creates space to listen honestly to yourself, reconnect with your values and aspirations, and design a path that's aligned with who you are — not who you think you should be.",
  },
  {
    question: "How long does the 90-Day Clarity Through Transition program take?",
    answer: "The program is designed to run over 90 days (approximately 3 months), with 6 sessions scheduled at your convenience and space for reflection and integration between them. The timeline can be adjusted based on your specific needs and pace.",
  },
  {
    question: "What if I'm not sure coaching is right for me?",
    answer: "That's exactly what the free discovery call is for. We'll talk about your situation, explore whether coaching is the right fit, and if not, I'll point you toward other resources that might serve you better. There's zero pressure to commit.",
  },
  {
    question: "How much does coaching cost?",
    answer: "We discuss the investment after our initial conversation, once we’ve clarified what you need and made sure we’re the right fit. I work with a small number of 1:1 clients at a time so the work can have the attention it deserves.",
  },
  {
    question: "Will this actually work for me?",
    answer: "Coaching works when you're ready to invest in yourself and take action. It's not magic—it's structured conversation, reflection, and accountability. If you're willing to show up, be honest, and do the work, you'll see results. I can't guarantee specific outcomes, but I can guarantee I'll show up fully for you.",
  },
  {
    question: "Is everything I share confidential?",
    answer: "Yes. Everything we discuss — in sessions, emails, or calls — is strictly confidential. If you’re part of a corporate program, I may share general progress updates with sponsors (never specific content), and only with your explicit agreement. If I use AI tools for preparation or summaries, all information is fully anonymised. No names or identifying details are shared. Your privacy and psychological safety are fundamental to this work. ",
  },
  {
    question: "What happens on the free discovery call?",
    answer: "We spend 30 minutes talking. You share what's on your mind—your situation, challenges, and what you're hoping to change. I listen, ask questions, and we explore whether coaching could help. By the end, you'll have clarity on your next steps, whether or not we work together.",
  },
  {
    question: "Do you work with people outside of Germany?",
    answer: "Yes. I'm based in Munich but work with clients worldwide via video call. Current and past clients are based in the UAE, the USA, Panama, Sweden, the UK, Spain, Italy, Russia, the Ukraine, and Kazakhstan. Time zones are flexible—we'll find times that work for both of us.",
  },
]

export const faqSection = {
  eyebrow: "Questions",
  headline: "Common questions, honest answers",
  description: "Everything you need to know before booking a call.",
  faqs,
}
