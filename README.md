# MS TECH Portfolio

Institutional portfolio for MS TECH, a web design and development studio focused on building modern, responsive and results-driven websites.

The project showcases services, recent work, technical skills, brand information and contact details — all in a single landing page built with React, Vite, TypeScript and Tailwind CSS.

Live site: [mstech.services](https://mstech.services)

## Overview

This site was built to communicate MS TECH's proposition clearly: combining design and development to deliver beautiful, fast and functional digital experiences.

Main sections:

- Hero with headline and navigation buttons
- Services offered
- Portfolio with projects and external links
- Why choose MS TECH
- Technical skills
- About Us
- Brand quotes
- Contact via Instagram and e-mail
- Scroll-to-top button

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React
- React Icons

## Project Structure

```txt
src/
  assets/              Images and videos
  components/          Page components
  config/
    content.ts         All site text, links, projects and data
    theme.ts           Main theme colours
  styles/              Global style files
  App.tsx              Section order
  main.tsx             App entry point
```

## Where to Edit

Text, projects, links and social media:

```txt
src/config/content.ts
```

Site colours:

```txt
src/config/theme.ts
```

Section order:

```txt
src/App.tsx
```

About Us image and layout:

```txt
src/components/About.tsx
```

Project cards and buttons:

```txt
src/components/Portfolio.tsx
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Generate a production build:

```bash
npm run build
```

## Portfolio Projects

Projects are configured in `src/config/content.ts`, inside `portfolioContent.projects`.

Each project supports:

- title
- description
- challenge
- category
- image
- external link
- technologies used

Example:

```ts
{
  id: 1,
  title: 'E-Commerce Platform',
  description: 'A modern e-commerce platform built with React and Vite.',
  category: 'Web Development',
  image: eCommerceImg,
  link: 'https://justmatheus2.github.io/e-commerce-page/',
  technologies: ['React', 'Vite', 'TypeScript']
}
```

## Deployment

Deployed on [Vercel](https://vercel.com) with automatic deployments on every push to `main`.

## Notes

Files and folders such as `node_modules`, `dist`, `.env`, `.claude` and local editor config are excluded from version control via `.gitignore`.
