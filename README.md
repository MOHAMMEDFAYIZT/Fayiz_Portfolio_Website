# Portfolio Website

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. The site is designed to present professional experience, projects, skills, and contact details in a clean, conversion-focused layout with dark and light mode support.

## Features

- Responsive single-page portfolio layout
- Dark and light theme toggle with persistent preference
- Animated hero section with typing headline
- Smooth scrolling navigation
- Project showcase with live demo and code links
- Experience, education, and skills sections
- Contact form powered by EmailJS
- Resume download button
- Custom styling with Tailwind CSS and shadcn/ui components

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- TanStack Query
- EmailJS
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- A package manager such as npm, pnpm, or bun

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Environment Variables

The contact form uses EmailJS and requires the following variables in a `.env.local` file:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## Resume File

Place your resume at:

```text
public/resume.pdf
```

The hero section links to that file for the resume button.

## Project Structure

```text
src/
	components/   # Section components and UI building blocks
	hooks/        # Shared hooks
	lib/          # Utility helpers
	pages/        # Route-level pages
	assets/       # Images and media
```

## Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint
- `npm run test` - run Vitest tests
- `npm run test:watch` - run Vitest in watch mode

## Notes

- The site uses smooth scrolling for section navigation.
- Theme preference is stored in `localStorage`.
- The contact form sends messages directly through EmailJS, so no backend is required.
## 🚀 Live Demo
https://mohammedfayizt.me
