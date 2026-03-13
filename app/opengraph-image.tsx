import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Margarita Dautova — Career Coach & Thinking Partner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#f5f4ef',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Green accent bar on the right */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '8px',
            height: '100%',
            background: '#5f7260',
          }}
        />

        {/* Green decorative block top-left */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '8px',
            height: '100%',
            background: '#5f7260',
            opacity: 0.3,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 100px',
            width: '100%',
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: '22px',
              color: '#5f7260',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '28px',
              fontFamily: 'sans-serif',
              fontWeight: 500,
            }}
          >
            Career Coach · ICF PCC · Munich
          </p>

          {/* Name */}
          <h1
            style={{
              fontSize: '96px',
              color: '#2c332d',
              lineHeight: 1.0,
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
              fontWeight: 400,
            }}
          >
            Margarita Dautova
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: '32px',
              color: '#57534e',
              lineHeight: 1.4,
              maxWidth: '760px',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
            }}
          >
            Thinking partner for professionals in transition.
          </p>

          {/* Bottom detail */}
          <p
            style={{
              position: 'absolute',
              bottom: '56px',
              left: '100px',
              fontSize: '20px',
              color: '#a8a29e',
              fontFamily: 'sans-serif',
            }}
          >
            margaritadautova.com
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
