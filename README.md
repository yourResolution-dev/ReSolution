<div align="center">

# Resolution

**Turning Ideas Into Digital Reality**

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.1-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=for-the-badge&logo=vercel)](https://turbo.build/pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

An engineering-grade digital product agency platform built for modern web, mobile apps, custom software systems, and AI automation.

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [API Routes](#api-routes) • [Project Structure](#project-structure) • [Deployment](#deployment)

---

</div>

## Overview

**Resolution** is a digital product organisation platform designed with technical precision, modern OKLCH design tokens, accessible interactive widgets, and seamless inquiry processing. It showcases agency capabilities, featured client systems, end-to-end product delivery process, tech stacks, team profiles, and testimonials.

## Features

- **⚡ Next.js 16 (App Router) & Turbopack:** Blazing-fast compilation, zero-overhead static generation, and streaming route handlers.
- **🎨 Technical-Premium Aesthetic:** Pure CSS Modules with wide-gamut OKLCH design tokens, ambient lighting, and bespoke vector illustrations.
- **📱 Accessible Responsive Carousels:** Custom-engineered `useCarousel` hook supporting touch swipe gestures, keyboard arrow navigation (`ArrowLeft` / `ArrowRight`), and responsive column views.
- **✉️ Seamless Inquiry System:**
  - Interactive project briefing dialog with pre-selection by service.
  - Serverless API route with email delivery via [Resend](https://resend.com/).
  - Automatic fallback to pre-formatted email drafts (`mailto:`) if Resend is not yet configured.
  - Honeypot protection against automated spam bots.
  - IP-based rate limiting to protect endpoints.
  - One-click copy brief with cross-browser clipboard fallback.
- **♿ WCAG 2.1 Accessibility:** Focus trap management, modal focus restoration to trigger elements, ARIA live regions, skip links, and semantic landmark roles.
- **🔍 SEO & Social Sharing:** Native OpenGraph and Twitter image generation (`ImageResponse`), dynamic `sitemap.xml`, and `robots.txt`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | CSS Modules + Custom OKLCH Token Architecture (`tokens.css`) |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Typography** | Inter Variable, Inter Tight Variable, Caveat |
| **Email API** | [Resend](https://resend.com/) REST API |
| **CI / CD** | GitHub Actions |

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.x or higher recommended)
- [npm](https://www.npmjs.com/) (v10.x or higher)

### 1. Clone the repository

```bash
git clone https://github.com/yourResolution-dev/ReSolution.git
cd ReSolution
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables (Optional for email delivery)

Copy the example environment configuration:

```bash
cp .env.example .env.local
```

Edit `.env.local` to configure live email routing via Resend:

```env
# Resend API Key (obtain from https://resend.com/api-keys)
RESEND_API_KEY=re_your_api_key_here

# Destination email where inquiries are sent
INQUIRY_TO_EMAIL=your-inbox@example.com

# Sender email (must be a verified domain on Resend, or default sandbox)
INQUIRY_FROM_EMAIL=Resolution <onboarding@resend.dev>
```

> **Note:** The inquiry dialog works out of the box even without API credentials. If unconfigured or offline, it gracefully falls back to generating a pre-formatted `mailto:` draft and allows one-click brief copying.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm run start
```

---

## Project Structure

```text
ReSolution/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI pipeline
├── app/
│   ├── api/
│   │   └── inquiry/
│   │       └── route.ts       # POST endpoint for project inquiries & rate limiting
│   ├── globals.css            # Base styles, resets, typography & utilities
│   ├── icon.svg               # SVG favicon
│   ├── layout.tsx             # Root layout with metadata and providers
│   ├── opengraph-image.tsx    # Dynamic Open Graph card generation (1200x630)
│   ├── page.module.css        # Page layout styles
│   ├── page.tsx               # Homepage assembly
│   ├── robots.ts              # Search crawler rules (robots.txt)
│   ├── sitemap.ts             # Dynamic sitemap (sitemap.xml)
│   └── twitter-image.tsx      # Dynamic Twitter summary card
├── components/
│   ├── About.tsx              # About organisation & capabilities
│   ├── Avatar.tsx             # Client & team avatar components
│   ├── CarouselControls.tsx   # Reusable Previous/Next buttons
│   ├── CountUp.tsx            # Animated intersection count-up counters
│   ├── CtaBanner.tsx          # Bottom call-to-action banner
│   ├── Footer.tsx             # Site footer with social & section links
│   ├── Hero.tsx               # Marquee hero section with proof stats
│   ├── HeroVisual.tsx         # Interactive parallax laptop & 3D plant graphic
│   ├── Logo.tsx               # Resolution SVG brandmark
│   ├── Navbar.tsx             # Sticky navigation with mobile drawer & scroll spy
│   ├── OfficeScene.tsx        # Vector studio scene illustration
│   ├── Portrait.tsx           # Procedural SVG avatar system
│   ├── Process.tsx            # 5-step delivery process timeline
│   ├── Projects.tsx           # Featured project portfolio cards
│   ├── ProjectVisuals.tsx     # Custom mockups (Skyflick, FinPulse, Kinetix)
│   ├── Reveal.tsx             # Intersection-observer scroll reveal animations
│   ├── SectionHead.tsx        # Standardized section headers with action links
│   ├── Services.tsx           # 5 core services with quick inquiry triggers
│   ├── StartProjectProvider.tsx # Inquiry modal provider & form state
│   ├── Stats.tsx              # Organization milestone metrics
│   ├── Team.tsx               # Team member slider
│   ├── TechStack.tsx          # 16 modern language, framework & tool badges
│   ├── Testimonials.tsx       # Client review slider
│   └── useCarousel.ts         # Hook for touch swipe, keyboard & step measurements
├── tokens.css                 # OKLCH color palettes, radii, shadows, typography tokens
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript strict configuration
```

---

## API Routes

### `POST /api/inquiry`

Processes incoming project briefs.

**Request Body:**
```json
{
  "name": "Jane Cooper",
  "email": "jane@company.com",
  "projectType": "Web Development",
  "message": "Looking to build a scalable dashboard...",
  "reference": "FINPULSE",
  "company": ""
}
```

**Responses:**
- `200 OK`: `{ "ok": true, "sent": true }` (Dispatched via Resend)
- `200 OK`: `{ "ok": true, "sent": false }` (Resend not configured; client draft fallback)
- `400 Bad Request`: `{ "ok": false, "errors": { ... } }` (Validation failed)
- `429 Too Many Requests`: `{ "ok": false, "error": "Too many requests..." }` (Rate limit exceeded)

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Set the environment variables (`RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL`).
4. Click **Deploy**.

---

## License

This project is licensed under the [MIT License](LICENSE).
