# Mohammed Fayiz T — Portfolio

Personal developer portfolio presenting my background, selected projects, technical skills, experience, and contact information.

**Live website:** https://www.mohammedfayizt.me

## Sections

- **Hero:** Introduction and primary portfolio links.
- **About:** Background and professional interests.
- **Projects:** Selected work with links to project demos and repositories.
- **Skills:** Technologies and tools.
- **Experience:** Professional and education timeline.
- **Contact:** Contact form integrated with EmailJS.

## Features

- Responsive single-page layout.
- Dark and light theme styling.
- Animated hero section and smooth section navigation.
- Project showcase with demo and source-code links.
- Resume download entry point.
- Contact form using EmailJS.

## Technology

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query
- EmailJS
- Lucide React

## Run locally

### Requirements

- Node.js 18 or newer
- npm

### Setup

```bash
git clone https://github.com/MOHAMMEDFAYIZT/Fayiz_Portfolio_Website.git
cd Fayiz_Portfolio_Website
npm install
```

Create a `.env.local` file for the EmailJS contact form:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

Place the resume PDF at `public/resume.pdf` if you want the resume download link to work.

Start the development server:

```bash
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

Run lint checks:

```bash
npm run lint
```

---

**Portfolio:** [mohammedfayizt.me](https://www.mohammedfayizt.me)  
**GitHub:** [MOHAMMEDFAYIZT](https://github.com/MOHAMMEDFAYIZT)  
**LinkedIn:** [mohammedfayizt](https://www.linkedin.com/in/mohammedfayizt/)
