// A hand-brushed ensō: a variable-width ink ring revealed by an animated
// mask, so it appears to be drawn in a single breath.

const CX = 120
const CY = 120
const R = 96
const START = -104 // degrees, just left of the top
const SWEEP = 322 // leaves the circle open, as a real ensō does
const MAX_W = 15
const STEPS = 140

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

function buildRing() {
  const outer: string[] = []
  const inner: string[] = []
  const centre: string[] = []
  for (let i = 0; i <= STEPS; i++) {
    const p = i / STEPS
    const deg = START + SWEEP * p
    const th = (deg * Math.PI) / 180
    const r = R * (1 + 0.014 * Math.sin(3 * th + 0.6) + 0.007 * Math.sin(7 * th + 1.3))
    // Pressure: the brush lands, loads, then lifts into a dry tail.
    const w =
      MAX_W *
      (0.3 + 0.7 * smooth(0, 0.07, p)) *
      (1 - 0.86 * smooth(0.62, 1, p)) *
      (1 + 0.08 * Math.sin(11 * th))
    const cos = Math.cos(th)
    const sin = Math.sin(th)
    // Ink sits slightly outside the centreline, as a loaded brush does.
    const ro = r + w * 0.58
    const ri = r - w * 0.42
    outer.push(`${(CX + ro * cos).toFixed(2)} ${(CY + ro * sin).toFixed(2)}`)
    inner.push(`${(CX + ri * cos).toFixed(2)} ${(CY + ri * sin).toFixed(2)}`)
    centre.push(`${(CX + r * cos).toFixed(2)} ${(CY + r * sin).toFixed(2)}`)
  }
  const shape = `M${outer.join(' L')} L${inner.reverse().join(' L')} Z`
  const path = `M${centre.join(' L')}`
  return { shape, path }
}

const { shape, path } = buildRing()

interface EnsoProps {
  id: string
  className?: string
  animate?: boolean
  delay?: number
  title?: string
}

export default function Enso({
  id,
  className = '',
  animate = true,
  delay = 200,
  title,
}: EnsoProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <filter id={`${id}-brush`} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G" result="shaped" />
          <feGaussianBlur in="shaped" stdDeviation="0.35" />
        </filter>
        <mask id={`${id}-mask`} maskUnits="userSpaceOnUse">
          <path
            d={path}
            fill="none"
            stroke="#fff"
            strokeWidth={MAX_W * 2.4}
            strokeLinecap="round"
            pathLength={1}
            className={animate ? 'enso-stroke' : undefined}
            style={
              animate
                ? ({ '--enso-length': 1, '--enso-delay': `${delay}ms` } as React.CSSProperties)
                : undefined
            }
          />
        </mask>
      </defs>
      <g mask={`url(#${id}-mask)`}>
        <path d={shape} fill="currentColor" filter={`url(#${id}-brush)`} />
      </g>
    </svg>
  )
}
