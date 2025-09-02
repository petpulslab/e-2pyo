# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application configured for deployment on Cloudflare Workers/Pages using the OpenNext Cloudflare adapter. The project uses:

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

### File Structure
- `app/` - Next.js App Router directory containing pages and layouts
- `app/layout.tsx` - Root layout with font configuration and global styles
- `app/page.tsx` - Landing page component
- `app/globals.css` - Global CSS with TailwindCSS imports

### Configuration Files
- `next.config.ts` - Next.js configuration with Cloudflare dev initialization
- `open-next.config.ts` - OpenNext Cloudflare adapter configuration
- `wrangler.jsonc` - Cloudflare Workers configuration with asset binding
- `tailwindcss.config.js` - TailwindCSS v4 configuration (likely present)
- `tsconfig.json` - TypeScript configuration with path aliases (@/*)

### Key Integrations
- **Cloudflare Context**: Available via `getCloudflareContext()` in development
- **Asset Handling**: Static assets served through Cloudflare Workers binding
- **Font Optimization**: Geist fonts loaded via next/font/google
- **Path Aliases**: `@/*` maps to project root for clean imports

## Development Notes

### Cloudflare Specifics
- Uses Node.js compatibility flags for Workers runtime
- Assets are bound to ASSETS binding in wrangler.jsonc
- Environment variables should be defined in wrangler.jsonc vars section
- Secrets managed through Cloudflare Workers dashboard or wrangler secrets

### TypeScript Setup
- Strict mode enabled with comprehensive type checking
- Cloudflare environment types generated via cf-typegen command
- Path aliases configured for clean imports (@/* → ./*)

### Styling Approach
- TailwindCSS v4 with utility-first approach
- Dark mode support via CSS variables and Tailwind classes
- Responsive design patterns following mobile-first approach