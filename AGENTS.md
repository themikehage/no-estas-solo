# No Estás Solo — Agent Instructions

## Mandatory Context Files

**Before starting any work, read these files:**
1. `about.md` — project overview, type, stack
2. `steps.md` — current progress and next tasks
3. `AGENTS.md` — this file (workflow, conventions, deploy info)

These are the single source of truth. Do not ask the user for context that's already in these files.

## Workflow

1. Read the 3 MD files above
2. Pick the next incomplete task from `steps.md`
3. Complete the task
4. Validate: `pnpm run build`
5. Commit with conventional message
6. Mark task as complete in `steps.md`

## Commands

```bash
pnpm run dev      # Start dev server (port 5100)
pnpm run build    # Production build
pnpm run preview  # Preview production build
```

## Code Conventions

- **TypeScript strict mode** — no `any`, all props typed with interfaces
- **Tailwind only** — no custom CSS unless absolutely necessary (WebGL shaders除外)
- **No comments** in production code
- **Absolute imports** — use `@/` alias for `src/`
- **Mobile-first responsive** — 375px, 768px, 1280px
- **Framer Motion** for all animations
- **Three.js** for WebGL particle system only (in `src/components/ParticleCanvas.tsx`)
- **Lenis** for smooth scroll (initialized in `src/main.tsx`)

## Design Tokens

### Palette
```css
--color-neural-black: #0A0A0A
--color-synapse-green: #00E676
--color-dopamine-gold: #FFB300
--color-stone-warm: #C8A96E
--color-azulejo-blue: #1E4D8C
--color-thread-red: #D32F2F
--color-hospital-white: #F5F5F0
```

### Typography
- **Display:** Instrument Serif
- **Body:** DM Sans
- **Data:** Space Mono

### Signature Element
Constelación de partículas WebGL (200-400 particles) con líneas de conexión. Cada partícula = persona afectada. Líneas = vínculos de apoyo. Reacciona al scroll: se dispersa en "aislamiento", se agrupa en "conexión", se organiza en los 3 ejes del estudio Nutt.

## Project Structure

```
src/
  components/
    layout/       Header, Footer, Layout
    hero/         HeroSection
    stats/        StatsSection
    nutt/         NuttStudySection
    testimonies/  TestimoniesSection
    resources/    ResourcesSection
    ui/           Button, SectionHeading, AnimatedSection, Divider
    ParticleCanvas.tsx  (WebGL background)
  data/           stats.ts, nutt-study.ts, testimonies.ts, resources.ts
  hooks/          useInView, useScrollAnimation
  App.tsx
  main.tsx
  index.css       Tailwind + @theme tokens
```

## Deploy

### Platform
- **Service:** Coolify
- **Project name:** `no-estas-solo`
- **Production URL:** https://no-estas-solo.pages.therry.dev
- **Account:** Coolify instance at pages.therry.dev
- **App UUID:** u1d3g87u2bkty5vnp6adgj6e
- **GitHub repo:** https://github.com/themikehage/no-estas-solo

### Auth
- `COOLIFY_API_KEY` env var contains the API token
- Base URL: `https://pages.therry.dev/api/v1`

### Deploy Command
```bash
# Trigger deployment
curl -X POST "https://pages.therry.dev/api/v1/deploy?uuid=u1d3g87u2bkty5vnp6adgj6e&force=true" \
  -H "Authorization: Bearer $COOLIFY_API_KEY"

# Check deployment status
curl -s "https://pages.therry.dev/api/v1/deployments?application_uuid=u1d3g87u2bkty5vnp6adgj6e&per_page=1" \
  -H "Authorization: Bearer $COOLIFY_API_KEY" | jq '.[0].status'
```

### Considerations
- Build pack: `dockerfile` (custom Dockerfile with multi-stage build)
- Builder: Node 20 Alpine + pnpm
- Runtime: nginx:alpine serving static files from dist/
- SPA routing: nginx configured with try_files fallback to index.html
- Assets cached with immutable headers (1 year)
- Gzip enabled for text assets
- Auto-deploys on push to main branch

## Git Commit Style

```
type(scope): description

feat(hero): add hero section with particle intro
feat(nutt): add multi-axis 3D data visualization
chore(deps): install three.js and lenis
style(polish): responsive layout and focus styles
fix(header): mobile menu toggle
```

## Key Design Principles

1. **Humanizar el dato, no dramatizarlo** — las partículas son personas, no estadísticas
2. **No estás solo** — el mensaje se siente, no se lee. Siempre hay partículas, siempre hay conexiones
3. **Multi-dimensionalidad** — no hay "la peor droga", depende del eje (letalidad vs dependencia vs daño social)
4. **Belleza digna** — la microscopía de fluorescencia es hermosa, la recuperación también. Sin shock, sin miedo
5. **Conexión vs aislamiento** — el mecanismo físico encarna el mensaje central
