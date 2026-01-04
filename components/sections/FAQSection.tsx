import Container from '@/components/Container'

export default function FAQSection() {
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

  return (
    <section className="section-padding bg-white">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Questions
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            Common questions, honest answers
          </h2>
          <p className="text-stone-600 text-lg">
            Everything you need to know before booking a call.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-stone-50 border border-stone-200 rounded-sm p-6"
            >
              <h3 className="font-medium text-stone-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-stone-600 mb-4">Have another question?</p>
          <a
            href="/contact"
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}

