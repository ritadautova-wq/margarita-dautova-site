/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
  },
  async headers() {
    const contentSecurityPolicy = [
      "default-src 'self'",
      // 'unsafe-inline' is required because Next.js App Router streams React
      // Server Component payloads via inline <script> tags it injects itself;
      // without it, every page fails to hydrate. Verified needed by testing
      // the production build with a stricter policy first.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://cdn-images-1.medium.com https://miro.medium.com",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src https://cal.com",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://formspree.io",
    ].join('; ')

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // geolocation/camera/microphone are left unrestricted so the
          // Cal.com booking iframe (allow="camera; microphone; geolocation"
          // in LazyCalendarEmbed) keeps working; only clearly unused
          // features are locked down.
          {
            key: 'Permissions-Policy',
            value: 'payment=(), usb=(), interest-cohort=()',
          },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
