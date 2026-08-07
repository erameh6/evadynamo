# Eva Dynamo — evadynamo.com

Official company website for **Eva Dynamo Ltd** — intelligent software and scalable technology solutions.

## Stack
- React 18 + Vite + TypeScript
- Tailwind CSS + Framer Motion
- react-router-dom (multi-page SPA)
- Static export → GitHub Pages (gh-pages branch, `out/` folder)

## Pages
- `/` Home — hero with wave headline, terminal visual, services, principles, stack
- `/services` + `/services/:slug` — 5 service detail pages
- `/solutions` — packaged business outcomes
- `/work` — case studies (problem → solution → technology → result)
- `/about` — story, mission/vision, values
- `/blog` — topic hub linking to blog.evadynamo.com
- `/contact` — project inquiry form (mailto)

## Design tokens
- Paper `#F7F6F2` / white sections, ink `#17150F`, accent orange `#FF4D00`
- Space Grotesk (display) · Inter (body) · JetBrains Mono (mono)

## Local dev
```bash
npm install
npm run dev      # vite dev server
npm run build    # production build → dist/
```

## Deploy
GitHub Pages serves the `gh-pages` branch `out/` folder (built via `npm run build` then copied to `out/`). CNAME: `evadynamo.com`.
