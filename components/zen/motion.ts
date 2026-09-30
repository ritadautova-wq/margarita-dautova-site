import type { CSSProperties } from 'react'

// Stagger helpers for [data-reveal] (scroll) and .zen-surface (on load).
export const rd = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties
export const sd = (ms: number) => ({ '--surface-delay': `${ms}ms` }) as CSSProperties
