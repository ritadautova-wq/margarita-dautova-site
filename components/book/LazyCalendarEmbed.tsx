'use client'

import { useState, useEffect, useRef } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { calendarSection } from '@/lib/bookPageContent'
import { trackEvent, AnalyticsEvents } from '@/lib/analytics'

interface LazyCalendarEmbedProps {
  calLink: string
  eventType?: string
  height?: string
}

export default function LazyCalendarEmbed({
  calLink,
  eventType,
  height = '700px',
}: LazyCalendarEmbedProps) {
  // Load immediately on mount - lazy-loading can be enabled later if needed
  const [shouldLoad, setShouldLoad] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null)

  const baseUrl = `https://app.cal.eu/${calLink}`
  const embedUrl = eventType
    ? `${baseUrl}/${eventType}?embed=true`
    : `${baseUrl}?embed=true`
  const directUrl = eventType ? `${baseUrl}/${eventType}` : baseUrl

  // Track when calendar section is viewed (for analytics)
  useEffect(() => {
    if (shouldLoad) {
      trackEvent(AnalyticsEvents.CALENDAR_SECTION_VIEW)
    }
  }, [shouldLoad])

  // Auto-hide loading after timeout (cross-origin iframes may not fire onLoad)
  useEffect(() => {
    if (shouldLoad && isLoading) {
      // Hide loading overlay after 2 seconds - iframe loads asynchronously anyway
      const loadingTimer = setTimeout(() => {
        setIsLoading(false)
      }, 2000)

      // Show fallback link after 10 seconds
      fallbackTimerRef.current = setTimeout(() => {
        setShowFallback(true)
      }, 10000)

      return () => {
        clearTimeout(loadingTimer)
        if (fallbackTimerRef.current) {
          clearTimeout(fallbackTimerRef.current)
        }
      }
    }
  }, [shouldLoad, isLoading])

  const handleLoad = () => {
    setIsLoading(false)
    trackEvent(AnalyticsEvents.CALENDAR_LOADED)
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current)
    }
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    setShowFallback(true)
  }

  const handleFallbackClick = () => {
    trackEvent(AnalyticsEvents.CALENDAR_FALLBACK_CLICKED)
  }

  return (
    <Section background="white" id="book-calendar">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-heading-lg md:text-display text-stone-900 mb-4">
              {calendarSection.headline}
            </h2>
            <p className="text-lg text-stone-600">{calendarSection.subheadline}</p>
          </div>

          <div
            ref={containerRef}
            className="bg-stone-50 border border-stone-200 rounded-sm overflow-hidden"
            style={{ minHeight: height }}
          >

            {/* Fallback link shown during loading */}
            {shouldLoad && isLoading && !hasError && showFallback && (
              <div className="p-4 text-center border-t border-stone-200 bg-white">
                <p className="text-sm text-stone-500">
                  {calendarSection.fallbackText}{' '}
                  <a
                    href={directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleFallbackClick}
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    {calendarSection.fallbackLinkText}
                  </a>
                </p>
              </div>
            )}

            {/* Calendar iframe - always visible, loading overlay fades out */}
            {shouldLoad && (
              <div className="relative" style={{ minHeight: height }}>
                <iframe
                  src={embedUrl}
                  style={{
                    width: '100%',
                    height: height,
                    border: '0',
                    borderRadius: '4px',
                    display: 'block',
                    backgroundColor: '#fff',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  title="Schedule a call"
                  allow="camera; microphone; geolocation"
                  allowFullScreen
                  onLoad={handleLoad}
                  onError={handleError}
                />
                {/* Loading overlay - fades out automatically */}
                {isLoading && !hasError && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-500"
                    style={{
                      zIndex: 1,
                      pointerEvents: 'none',
                      opacity: isLoading ? 0.9 : 0,
                    }}
                  >
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
                      <p className="text-stone-600">{calendarSection.loadingText}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Error state */}
            {hasError && (
              <div className="p-8 md:p-12 text-center">
                <svg
                  className="w-12 h-12 text-stone-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-stone-600 mb-2">Unable to load calendar</p>
                <p className="text-sm text-stone-500 mb-4">
                  Please try opening the scheduling page directly.
                </p>
                <a
                  href={directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleFallbackClick}
                  className="inline-block px-6 py-3 bg-primary-600 text-white rounded-sm hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {calendarSection.fallbackLinkText}
                </a>
              </div>
            )}

            {/* After booking info */}
            {shouldLoad && !isLoading && !hasError && (
              <div className="p-6 border-t border-stone-200 bg-white">
                <p className="text-sm font-medium text-stone-900 mb-3">
                  {calendarSection.afterBookingText}
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  {calendarSection.afterBookingItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-stone-200">
                  <p className="text-sm text-stone-600 italic">
                    {calendarSection.reassuranceText}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    {calendarSection.limitedSpotsText}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}

