# No Estás Solo — Build Steps

## Phase 1: Research & Design
- [x] Research subject (Phase 1 subagents completed)
- [x] Design system (palette, typography, signature element)
- [x] Design architecture (component tree, data model)

## Phase 2: Critical Files
- [x] Create about.md
- [x] Create steps.md
- [x] Create AGENTS.md

## Phase 3: Project Setup
- [x] Scaffold Vite + React + TypeScript
- [x] Install dependencies (three, lenis, framer-motion, tailwind)
- [x] Configure Tailwind v4 with design tokens
- [x] Configure TypeScript strict mode + path aliases
- [x] Validate: `pnpm run build`

## Phase 4: Data Layer
- [ ] Create src/data/stats.ts (global statistics)
- [ ] Create src/data/nutt-study.ts (multi-axis drug harm data)
- [ ] Create src/data/testimonies.ts (personal stories)
- [ ] Create src/data/resources.ts (help resources Spain)

## Phase 5: UI Components
- [ ] Button component (primary/ghost variants)
- [ ] SectionHeading component (eyebrow + title + subtitle)
- [ ] AnimatedSection component (scroll-triggered reveal)
- [ ] ParticleCanvas component (WebGL background)
- [ ] Divider component (signature element)

## Phase 6: Layout
- [ ] Header component (sticky nav, mobile menu)
- [ ] Footer component (resources, credits)
- [ ] Layout component (wraps Header + main + Footer)

## Phase 7: Sections
- [ ] Hero section (full-screen, particle intro, title reveal)
- [ ] Stats section (600K deaths, 296M users, key figures)
- [ ] NuttStudy section (multi-axis 3D visualization)
- [ ] Testimonies section (personal stories with particle clustering)
- [ ] Resources section (help lines, centers, links)

## Phase 8: Integration
- [ ] Wire scroll-driven particle behavior
- [ ] Integrate Lenis smooth scroll
- [ ] Connect all sections in App.tsx
- [ ] Validate: `pnpm run build`

## Phase 9: Polish
- [ ] Responsive check (375px, 768px, 1280px)
- [ ] Reduced-motion support
- [ ] Keyboard focus styles
- [ ] Performance optimization (DPR cap, instancing)
- [ ] Validate: `pnpm run build`

## Phase 10: Deploy
- [x] Deploy to Coolify
- [x] Test live site
- [x] Update AGENTS.md with deploy details
- [x] Fix WebGL fallback and error boundary
