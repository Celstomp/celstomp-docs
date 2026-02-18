# Celstomp Documentation

Official documentation for Celstomp - a lightweight and accessible browser-based 2D handdrawn cel animation suite.

## About

This documentation site is built with:
- **Next.js 16** - React framework
- **Fumadocs** - Documentation framework with MDX support
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Dev server runs at `http://localhost:3000`

## Environment

- `NEXT_PUBLIC_SITE_URL` is used for `metadataBase` (Open Graph/Twitter image URLs).
- Copy `.env.example` to `.env.local` for local dev overrides.

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run start
```

## Project Structure

```
celstomp-docs/
├── src/
│   ├── app/
│   │   ├── docs/          # MDX documentation files
│   │   ├── layout.tsx       # Root layout
│   │   ├── docs/layout.tsx # Docs layout
│   │   ├── globals.css      # Global styles
│   │   └── page.tsx        # Homepage
├── source.config.ts           # Fumadocs configuration
├── next.config.mjs           # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration
└── package.json              # Dependencies
```

## Adding Documentation

Documentation files use MDX format with frontmatter:

```mdx
---
title: Page Title
description: Page description
---

Content here...
```

Place files in `src/app/docs/` following the structure:
- `src/app/docs/introduction.mdx`
- `src/app/docs/features/canvas.mdx`
- `src/app/docs/guides/first-animation.mdx`

## Styling

The documentation uses Celstomp's color palette:

- **Primary**: `#2a2f38` (Celstomp's signature teal/blue)
- **Secondary**: `#3b4759`
- **Accent**: `#4080ff`

Styles are in `src/app/globals.css`.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Any platform supporting Next.js static export:
- Netlify
- GitHub Pages
- Cloudflare Pages
- And more

## Contributing

To contribute to documentation:

1. Fork this repository
2. Create branch for your changes
3. Edit/add MDX files in `src/app/docs/`
4. Test changes locally (`npm run dev`)
5. Submit pull request

## License

This documentation is licensed under the same license as Celstomp (GPL-3.0).

## Links

- **Celstomp**: [github.com/Celstomp/celstomp](https://github.com/Celstomp/celstomp)
- **Live Demo**: [ginyo.space/celstomp](https://ginyo.space/celstomp/)
- **Fumadocs**: [fumadocs.dev](https://fumadocs.dev/)

## Maintainers

Documentation maintained by Celstomp contributors.
