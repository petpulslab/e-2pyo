# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application configured for deployment on Cloudflare Workers/Pages using the OpenNext Cloudflare adapter. The project is an E-2pyo (전자투표) B2B landing site for Korean cooperatives, providing member management, SMS services, and electronic voting solutions.

**Tech Stack:**
- **Framework**: Next.js 15.4.6 with App Router and Turbopack for fast development
- **Styling**: TailwindCSS v4 with PostCSS integration
- **Fonts**: Geist and Geist Mono fonts optimized via next/font
- **Deployment**: Cloudflare Workers via @opennextjs/cloudflare adapter
- **Type Safety**: TypeScript with strict mode enabled
- **Linting**: ESLint with Next.js core web vitals and TypeScript rules

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack (fast refresh)
- `npm run build` - Production build via Next.js
- `npm run start` - Start production server locally
- `npm run lint` - Run ESLint with Next.js rules

### Cloudflare Deployment
- `npm run deploy` - Build and deploy to Cloudflare Workers
- `npm run preview` - Build and preview deployment locally
- `npm run cf-typegen` - Generate Cloudflare environment types

## Architecture

### Application Structure

The site follows a standard Next.js App Router structure with four main sections:

1. **Service Info** (`/service-info/*`)
   - Member Management System (`/member-management`)
   - SMS Service (`/sms-service`)
   - Electronic Voting (`/e-voting`)

2. **Usage Guide** (`/usage-guide/*`)
   - Method Guide (`/method`) - 5-step onboarding process

3. **Service Application** (`/service-application/*`)
   - Application Form (`/form`) - Naver Form integration (URL configurable in page.tsx:6)

4. **Customer Center** (`/customer-center/*`)
   - Notice Board (`/notice`)
   - Resources (`/resources`)
   - FAQ (`/faq`)

### Shared Components

- `Header.tsx` - Global navigation with 4-column mega menu (hover-activated dropdown)
- `Footer.tsx` - Site footer
- `Hero.tsx` - Landing page hero section
- `FeatureSection.tsx` - Landing page feature showcase

### Design System

**Color Palette:**
- Primary: `#3E68CA` (blue)
- Secondary: `#2A4D9C` (darker blue)
- Dark backgrounds: `#1a1a1a`, `#2a2a2a`
- Status indicators: Red badges for "중요" (important)

**Layout Patterns:**
- Hero sections: Dark background (`#1a1a1a`) with white text, 5xl-6xl font headings
- Content sections: White or `gray-50` backgrounds
- Tables: Desktop (table) / Mobile (card list) responsive patterns
- Mobile-first responsive breakpoints (md, lg)

**Common UI Elements:**
- "중요" badge: `bg-red-500 text-white rounded-full px-2.5 py-0.5`
- Attachment icons: 📄 for resources, 📎 for notices
- Process steps: Numbered circles with connecting lines
- CTA buttons: Rounded-lg with hover transitions

### Key Technical Details

**Cloudflare Integration:**
- Cloudflare context available via `getCloudflareContext()` in development
- Assets served through Cloudflare Workers binding
- Environment variables in `wrangler.jsonc` vars section

**TypeScript:**
- Path aliases: `@/*` maps to project root
- Strict mode enabled

**Styling:**
- Korean B2B professional aesthetic (not AI-style designs)
- No emojis in main content (removed from service pages)
- Minimal gradients, clean typography
- Dark hero sections for impact

## Content Guidelines

- All content in Korean
- B2B tone: professional, clear, concise
- Mock data provided for boards (notice, resources, FAQ)
- Image assets in `/public/images/hero-mockups.png` (mobile mockup)

## Important Instructions

### Design Principles
- **Avoid** "AI-style" designs: no excessive gradients, emojis, or playful elements
- **Follow** Korean B2B patterns: dark hero sections, clean tables, professional typography
- **Reference** flex.team and channel.io for design inspiration
- **Use** large bold headings (5xl-6xl), ample whitespace, subtle hover effects

### File Editing
- **ALWAYS** prefer editing existing files over creating new ones
- **NEVER** create documentation files unless explicitly requested
- **DO NOT** add features beyond what is requested