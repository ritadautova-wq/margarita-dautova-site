/**
 * Analytics Event Tracking
 * Abstraction layer for swappable analytics providers
 */

export interface AnalyticsEvent {
  name: string
  props?: Record<string, unknown>
}

/**
 * Track an analytics event
 * In development, logs to console
 * In production, can be connected to Vercel Analytics, GA4, Segment, etc.
 */
export function trackEvent(name: string, props?: Record<string, unknown>) {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', name, props || '')
  }
}

/**
 * Track page view
 */
export function trackPageView(path: string) {
  trackEvent('page_view', { path })
}

/**
 * Predefined event names for consistency
 */
export const AnalyticsEvents = {
  HERO_PRIMARY_CTA_CLICK: 'hero_primary_cta_click',
  CALENDAR_SECTION_VIEW: 'calendar_section_view',
  CALENDAR_LOADED: 'calendar_loaded',
  CALENDAR_FALLBACK_CLICKED: 'calendar_fallback_clicked',
  FAQ_EXPAND: 'faq_expand',
  LEAD_MAGNET_SUBMIT: 'lead_magnet_submit',
  BOOKING_STARTED: 'booking_started',
} as const

