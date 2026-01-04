'use client'

import { useState, useEffect } from 'react'

interface CalendarEmbedProps {
  /**
   * Cal.com username (e.g., "margarita-dautova")
   */
  calLink: string
  /**
   * Event type slug (e.g., "discovery-call")
   * If not provided, shows all available event types
   */
  eventType?: string
  /**
   * Additional className for styling
   */
  className?: string
  /**
   * Height of the embed (default: "700px")
   */
  height?: string
}

/**
 * CalendarEmbed Component
 * 
 * Embeds a Cal.com scheduling widget inline on the page using an iframe.
 * This is the most reliable method and works with Google Calendar sync.
 * 
 * Usage:
 * <CalendarEmbed calLink="margarita-dautova" eventType="discovery-call" />
 * 
 * The component uses Cal.com's iframe embed which automatically
 * syncs with Google Calendar when configured in Cal.com settings.
 */
export default function CalendarEmbed({
  calLink,
  eventType,
  className = '',
  height = '700px',
}: CalendarEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Build the Cal.com embed URL
  // Format: https://app.cal.eu/username/event-type?embed=true
  // Note: If eventType is provided, it will be used. Otherwise, shows all event types.
  const baseUrl = `https://app.cal.eu/${calLink}`
  const embedUrl = eventType 
    ? `${baseUrl}/${eventType}?embed=true`
    : `${baseUrl}?embed=true`

  // Hide loading overlay quickly - cross-origin iframes may not fire onLoad reliably
  // Show iframe immediately and let it load in the background
  useEffect(() => {
    // Hide loading after 1 second - iframe loads asynchronously anyway
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      className={`cal-embed-container ${className}`}
      style={{ minHeight: height, position: 'relative', width: '100%' }}
    >
      {/* Cal.com iframe embed - always visible and on top */}
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
        onLoad={() => {
          setIsLoading(false)
        }}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
      />

      {/* Loading placeholder - fades out quickly, behind iframe */}
      {isLoading && !hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-white border border-neutral-200 rounded-sm transition-opacity duration-500"
          style={{ 
            opacity: isLoading ? 0.9 : 0,
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <div className="text-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-sm text-neutral-600">Loading calendar...</p>
          </div>
        </div>
      )}

      {/* Error state with fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white border border-neutral-200 rounded-sm z-10">
          <div className="text-center p-8">
            <svg
              className="w-12 h-12 text-neutral-300 mx-auto"
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
            <p className="mt-4 text-neutral-600">Unable to load calendar</p>
            <p className="mt-2 text-sm text-neutral-500 mb-4">
              Please try opening the scheduling page directly.
            </p>
            <a
              href={`https://app.cal.eu/${calLink}${eventType ? `/${eventType}` : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-sm hover:bg-primary-700 transition-colors"
            >
              Open scheduling page
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

