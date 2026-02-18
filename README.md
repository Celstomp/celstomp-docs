# Celstomp Docs

Docs site for Celstomp (built with Fumadocs + Next.js).

## Local Dev

```bash
npm install
npm run dev
```

Open `http://localhost:3000/docs`.

## Content

- Docs live in `content/docs` (MDX).
- Layout/theme overrides live in `src/app/globals.css`.

## Environment

`NEXT_PUBLIC_SITE_URL` controls `metadataBase` for OG/Twitter URLs.

```bash
cp .env.example .env.local
```

## Links

- App: https://ginyo.space/celstomp/
- Source: https://github.com/Celstomp/celstomp
- Docs repo: https://github.com/Celstomp/celstomp-docs
