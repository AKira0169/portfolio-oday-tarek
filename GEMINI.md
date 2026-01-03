# Project Context: Portfolio Oday Tarek

## Project Overview
This project is a personal portfolio website for Oday Tarek, built with modern web technologies. It showcases work, skills, and provides a contact method. The application is designed to be deployed to GitHub Pages.

**Key Technologies:**
*   **Framework:** [React 19](https://react.dev/)
*   **Build Tool:** [Vite 7](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (configured via `@tailwindcss/vite`)
*   **Routing:** [React Router 7](https://reactrouter.com/) (using `HashRouter`)
*   **Animations:** `motion` (Motion for React), `gsap`, `ogl`, `tw-animate-css`
*   **Icons:** `lucide-react`, `react-icons`
*   **Forms:** `react-hook-form`

## Directory Structure
*   `src/blocks/`: Contains specialized, high-visual-impact UI components and animations (e.g., Backgrounds, TextAnimations).
*   `src/components/`: Domain-specific components used in pages (e.g., `Hero`, `Skills`, `FeaturedWorks`).
*   `src/components/layout/`: Layout components like `Header`, `Layout`, `MobileHeader`.
*   `src/components/ui/`: Generic, reusable UI components (e.g., `button.tsx`), likely following shadcn/ui patterns.
*   `src/pages/`: Main page components (`Home`, `Contact`, `NotFound`).
*   `src/lib/`: Utility functions, including `cn` for class name merging.
*   `public/`: Static assets (images, logos, PDFs).

## Building and Running

### Prerequisites
*   Node.js (LTS recommended)
*   pnpm

### Commands
*   **Install Dependencies:**
    ```bash
    pnpm install
    ```
*   **Start Development Server:**
    ```bash
    pnpm dev
    ```
*   **Build for Production:**
    ```bash
    pnpm build
    ```
    *This runs `tsc -b` followed by `vite build`.*
*   **Preview Production Build:**
    ```bash
    pnpm preview
    ```
*   **Lint Code:**
    ```bash
    pnpm lint
    ```
*   **Deploy to GitHub Pages:**
    ```bash
    pnpm deploy
    ```
    *This triggers `predeploy` (build) and then pushes the `dist` folder to the `gh-pages` branch.*

## Development Conventions

*   **Path Aliases:** Use `@/` to import from `src/`.
    *   Example: `import { cn } from "@/lib/utils"`
*   **Styling:**
    *   Use Tailwind CSS utility classes.
    *   Use the `cn()` utility function (from `@/lib/utils`) when conditionally applying classes or merging custom classes with default component styles.
*   **Routing:**
    *   The project uses `HashRouter`. Ensure all internal links use `Link` or `NavLink` from `react-router-dom`.
*   **Assets:**
    *   Place static assets in `public/`. They are served at the root path (e.g., `/logo.png`).
