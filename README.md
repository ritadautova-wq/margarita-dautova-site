# Margarita Dautova Coaching Website

A high-converting, premium personal brand website for professional coach Margarita Dautova, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
margarita_dautova_site/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── coaching/page.tsx     # Services/Coaching page
│   ├── testimonials/page.tsx # Testimonials & case studies
│   ├── resources/            # Blog/Resources section
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Individual blog posts
│   ├── contact/page.tsx      # Contact form
│   ├── book/page.tsx         # Book discovery call
│   ├── privacy/page.tsx      # Privacy policy
│   ├── imprint/page.tsx      # Legal imprint (EU)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # Robots.txt
│   └── not-found.tsx         # 404 page
├── components/               # Reusable components
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── Button.tsx            # Button component
│   ├── Container.tsx         # Layout container
│   ├── Section.tsx           # Section wrapper
│   ├── SectionHeader.tsx     # Section title component
│   ├── TestimonialCard.tsx   # Testimonial display
│   ├── FeatureCard.tsx       # Feature highlight card
│   ├── ServiceCard.tsx       # Service/pricing card
│   ├── BlogCard.tsx          # Blog post card
│   ├── ProcessStep.tsx       # Process step display
│   ├── CTABanner.tsx         # Call-to-action banner
│   ├── ContactForm.tsx       # Contact form component
│   └── NewsletterForm.tsx    # Newsletter signup
├── public/                   # Static assets
│   └── images/               # Image assets (add your images here)
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## ✅ TODO List - Customization Required

Before launching, search for `TODO` comments throughout the codebase and update:

### Content Updates
- [ ] Replace all placeholder copy with Margarita's actual content
- [ ] Update bio, credentials, and timeline on About page
- [ ] Add real testimonials and case studies
- [ ] Write/import actual blog posts
- [ ] Customize service offerings and pricing

### Images
- [ ] Add professional portrait(s) of Margarita
- [ ] Add Open Graph image (`public/images/og-image.jpg`)
- [ ] Add any lifestyle/decorative images

### Integrations
- [ ] Connect contact form to actual backend (Formspree, Netlify Forms, etc.)
- [ ] Connect newsletter form to email service (Mailchimp, ConvertKit, etc.)
- [ ] Embed actual Calendly widget on /book page
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

### Legal & SEO
- [ ] Update domain in sitemap.ts and robots.ts
- [ ] Review and customize Privacy Policy
- [ ] Review and customize Imprint (required for EU)
- [ ] Update all meta descriptions
- [ ] Add actual LinkedIn and social URLs

### Branding (Optional)
- [ ] Customize colors in `tailwind.config.ts` if needed
- [ ] Adjust typography preferences
- [ ] Add favicon

## 🎨 Design System

### Colors
The site uses a warm, sophisticated color palette:
- **Primary**: Warm terracotta (#c97a5c) - used for CTAs and accents
- **Neutral**: Stone tones for text and backgrounds

### Typography
- **Headings**: Cormorant Garamond (serif) - elegant, distinctive
- **Body**: Inter (sans-serif) - clean, readable

### Components
All components are designed to be reusable and customizable via props. See individual component files for available options.

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The site is a standard Next.js application and can be deployed to any platform that supports Next.js (Netlify, AWS, etc.)

## 📧 Form Handling

The contact and newsletter forms are currently frontend-only with simulated submissions. To make them functional:

### Contact Form
Replace the simulated submission in `components/ContactForm.tsx` with:
- **Formspree**: `fetch('https://formspree.io/f/YOUR_FORM_ID', ...)`
- **Netlify Forms**: Add `data-netlify="true"` to form
- **Custom API**: Create `/app/api/contact/route.ts`

### Newsletter Form
Replace the simulated submission in `components/NewsletterForm.tsx` with your email service API.

## 📝 Adding Blog Posts

Currently, blog posts are hardcoded in `/app/resources/[slug]/page.tsx`. For a production site, consider:
- Using a headless CMS (Contentful, Sanity, Strapi)
- Using MDX files with `gray-matter`
- Creating an API route to fetch posts

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is created for Margarita Dautova. All rights reserved.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

