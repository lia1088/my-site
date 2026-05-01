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

## Sections built
- Nav (fixed, mix-blend-mode difference, logo 22px, links 17px)
- Hero (100vh, content vertically centered, H1 fluid 120px, button violet #c2afff)
- "What I do" (2-col grid, H2 fluid 80px, paragraph 4 cols)
- "What I can do for you" (ExpertiseList + ExpertiseItem components, tags appear on hover floating on oval, other items dim to 30% on hover)

## What to build next
- Add items 2 and 3 to expertise section in Sanity (Implementation, SEO)
- Portfolio section (Projects schema: title, subtitle, url, image)
- "5 steps to live" process section
- FAQ accordion section
- Footer with email link
- Bottom footer with nav links + LinkedIn

## Design system
- All sections: pt-0 pb-[200px]
- Eyebrow labels: 20px, leading-none, #fff, mb-[40px]
- H1: clamp(2.5rem, 6.944vw, 7.5rem), font-serif, leading-none
- H2: clamp(2rem, 4.629vw, 5rem), font-serif, leading-none
- Body: clamp(1rem, 1.273vw, 1.375rem), leading-[1.2]
- Buttons: bg-[#c2afff], px-[120px] py-[16px], mt-[40px], no border radius
- Grid: 12 cols, w-[95%] mx-auto, breakpoint lg (1024px)
- Paragraph paired with headline: mt-[8px]

## Reference site
Original site: https://www.liacrupi.com
