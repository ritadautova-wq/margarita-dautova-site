'use client'

import { useState, useCallback } from 'react'
import Container from '@/components/Container'

const testimonials = [
  {
    quote: "Thank you very much for a professional and productive coaching sessions. I really liked how you guided me in accordance with my topic, doing it in a gentle but confident manner. It stimulated me to openness and sincerity, giving the opportunity to open my potential and resolve my own issues. As a result, we managed to build the most productive plan of action to achieve the goal, which I am now following and already seeing results, which I am very happy about!",
    attribution: "E.B., Russia",
  },
  {
    quote: "Margarita, thank you for 2.5 months of joint work. It was exciting, interesting, but most importantly productive! At the moment, \"the puzzle is solved\", and this has given me more self-confidence to act in achieving my professional goal. Thank you for the pleasant energy that comes from you, as well as for the respectful attitude.",
    attribution: "K.K., Belgium",
  },
  {
    quote: "Margarita, thank you so much for your thoughtful and sensitive support throughout my exploration process. I felt safe the whole time and knew I could show up in different ways while still being myself in our conversations. I now feel much greater clarity, and at the same time I sense a deeper inner call to connect more closely with my true motivations and sources of energy. I'm really glad that I took these important steps at the beginning of the year together with you.",
    attribution: "A.T., Russia",
  },
  {
    quote: "In just three sessions, we managed to work through such complex topics and questions, process a lot of emotions, and outline clear actions. It's an amazing result — with real moments of insight along the way. Thank you for your support, understanding, and your caring, gentle approach — while still going deep. And for the questions that immediately brought focus and depth.",
    attribution: "M.B., Spain",
  },
  {
    quote: "Working with you has been extremely impactful for my development. Every session feels like a valuable use of my time, and I consistently leave with deeper insights about myself. Coaching helps me overcome obstacles, make meaningful progress toward my goals, and be more effective at work. I'm beginning to understand the importance of state and how to apply the methods we've discussed — and that shift alone has been life-changing. I feel more equipped to make the changes that matter to me, both personally and professionally.",
    attribution: "L.S., Sweden",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="section-padding bg-stone-50">
      <Container size="default">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-3">
            Client Experiences
          </p>
          <h2 className="font-serif text-heading-lg md:text-display text-stone-900 text-balance mb-4">
            What clients say
          </h2>
          <p className="text-stone-600 text-lg">
            Every coaching journey is unique. Here's what some clients have shared about their experience.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 flex items-center justify-center bg-white border border-stone-200 rounded-full text-stone-400 hover:text-stone-600 hover:border-stone-300 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 flex items-center justify-center bg-white border border-stone-200 rounded-full text-stone-400 hover:text-stone-600 hover:border-stone-300 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Card */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="bg-white p-8 md:p-12 border border-stone-200 rounded-sm">
                        <div className="text-5xl text-primary-300 font-serif leading-none mb-6 text-center">"</div>
                        <blockquote className="text-center">
                          <p className="text-stone-600 text-lg leading-relaxed italic">
                            {testimonial.quote}
                          </p>
                        </blockquote>
                        <div className="mt-8 pt-6 border-t border-stone-100 text-center">
                          <p className="text-sm font-medium text-stone-500">
                            — {testimonial.attribution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white border border-stone-200 p-8 md:p-12 rounded-sm max-w-4xl mx-auto">
          <h3 className="font-serif text-heading text-stone-900 mb-6 text-center">What is a thinking partnership?</h3>
          <div className="grid md:grid-cols-2 gap-8 text-stone-600 leading-relaxed">
            <p>
              Many of my clients don't need "advice"—they need a space where they can think out loud without having to perform or impress. I provide the structure, the precise questions, and the calm presence that allows your own insights to surface.
            </p>
            <p>
              We focus on the identity-level transitions that happen when your career or environment shifts. We make space for the complexity of living between cultures and languages, turning confusion into a clear, articulable path.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
