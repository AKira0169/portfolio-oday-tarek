# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 19, Vite 7, TypeScript, and Tailwind CSS 4. Deployed to GitHub Pages at https://AKira0169.github.io/portfolio-oday-tarek/.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Type-check and build for production (tsc -b && vite build)
pnpm lint       # Run ESLint
pnpm preview    # Preview production build locally
pnpm deploy     # Build and deploy to GitHub Pages (gh-pages -d dist)
```

## Architecture

### Routing
Uses `HashRouter` from react-router-dom (required for GitHub Pages static hosting). All routes nested under `Layout` component.

### Component Organization

- **`src/blocks/`** - Reusable visual effect components from a shared library (Animations, Backgrounds, TextAnimations, Components like Dock)
- **`src/components/`** - Domain-specific components (Hero, Skills, FeaturedWorks, WorkExperience, etc.)
- **`src/components/layout/`** - Layout components (Header, Layout, MobileHeader)
- **`src/components/ui/`** - Generic UI components following shadcn/ui patterns
- **`src/pages/`** - Page components (Home, NotFound)
- **`src/lib/utils.ts`** - Contains `cn()` utility for Tailwind class merging

### Provider Structure
App is wrapped with: `React.StrictMode` → `HelmetProvider` (SEO) → `ThemeProvider` (dark/light mode)

### Key Libraries
- **Animations**: gsap, motion (Motion for React), ogl (WebGL)
- **UI**: lucide-react, react-icons, class-variance-authority
- **Forms**: react-hook-form

## Conventions

- **Path aliases**: Use `@/` to import from `src/` (e.g., `import { cn } from "@/lib/utils"`)
- **Styling**: Tailwind utility classes; use `cn()` for conditional/merged classes
- **Static assets**: Place in `public/`, served at root path
