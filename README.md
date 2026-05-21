# Diego | Software Engineer Portfolio

Personal portfolio website built with Astro, React, and Tailwind CSS v4. Features a cyberpunk/terminal-inspired design with bilingual support (English/Spanish).

## Tech Stack

- **Astro** - Static site generator
- **React** - UI components
- **Tailwind CSS v4** - Styling
- **TypeScript** - Type safety

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── cv-eng.pdf
│   └── hv.pdf
├── src/
│   ├── assets/
│   │   ├── logos/
│   │   └── gifs/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Sidebar.astro
│   │   ├── TechStack.astro
│   │   ├── TechModal.astro
│   │   ├── Projects.astro
│   │   ├── ProjectModal.astro
│   │   ├── ProjectModalOnlyInfo.astro
│   │   ├── NativeBridgeAnimation.astro
│   │   ├── LibmodAnimation.astro
│   │   └── LanguageToggle.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── types.ts
└── package.json
```

## Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installs dependencies                            |
| `npm run dev`     | Starts local dev server at `localhost:4321`      |
| `npm run build`   | Build your production site to `./dist/`          |
| `npm run preview` | Preview your build locally, before deploying     |

## Features

- **Bilingual**: English/Spanish language toggle with localStorage persistence
- **Responsive**: Mobile-first design with desktop sidebar navigation
- **Interactive Modals**: Technology details, project showcases with animations
- **SVG Animations**: Data flow visualizations for project architectures
- **Glitch Effects**: Hover-triggered glitch animations on tech logos
- **Terminal Aesthetic**: Omarchy-style window frames, monospace typography, grid backgrounds

## Deployment

Configured for GitHub Pages deployment. Update `site` and `base` in `astro.config.mjs` as needed.
