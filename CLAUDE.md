# Lia Crupi Portfolio Site

## What this project is
A personal portfolio website for Lia Crupi, freelance web designer based in Helsinki. Rebuilding liacrupi.com using a modern headless CMS stack.

## Tech stack
- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** (Radix/Nova preset) for components
- **Sanity CMS** for all content
- **Vercel** for hosting (auto-deploys from GitHub)
- **GitHub**: github.com/lia1088/my-site

## Design decisions
- Black background (`bg-black`)
- White text (`text-white`)
- **Headings**: Times New Roman (`font-serif`)
- **Body text**: Roboto (loaded via next/font/google)
- **Button color**: `#c2afff` (violet) with `#d4c5ff` on hover
- Nav is fixed, uses `mix-blend-mode: difference`
- Max content width: `max-w-4xl mx-auto px-8`

## Sanity project
- Project ID: `cijjw3xt`
- Dataset: `production`
- Studio runs at: `localhost:3000/studio`
- Schemas location: `sanity/schemaTypes/`

## Schemas built so far
- `homepage` — heroHeading, heroButtonText, whatIDoHeading, whatIDoDescription, whatIDoButtonText

## Pages built so far
- `app/page.tsx` — Homepage with Nav, Hero, and "What I do" section

## What to build next
- Portfolio section (Projects schema already planned — title, subtitle, url, image)
- "What I can do for you" section (Digital Design, Implementation, SEO with tags)
- "5 steps to live" process section
- FAQ accordion section
- Footer with email link
- Bottom footer with nav links + LinkedIn

## Reference site
Original site: https://www.liacrupi.com
