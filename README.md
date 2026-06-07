# Usman Iqbal — Portfolio Website

Premium Next.js 15 portfolio with mouse-tracking animations, scroll reveals, and a clean dark aesthetic.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      — Root layout with metadata
│   ├── page.tsx        — Main page assembling all sections
│   └── globals.css     — Global styles, CSS vars, animations
├── components/
│   ├── Cursor.tsx      — Custom mouse cursor (dot + ring)
│   ├── Nav.tsx         — Sticky navigation with mobile menu
│   ├── Hero.tsx        — Hero with typing animation + parallax
│   ├── About.tsx       — About section
│   ├── Experience.tsx  — Timeline work history
│   ├── Projects.tsx    — Projects grid (featured + compact)
│   ├── Skills.tsx      — Animated skill bars + tag cloud
│   ├── GitHubStats.tsx — GitHub stats and activity
│   ├── Contact.tsx     — Contact links and form
│   └── Footer.tsx      — Footer
└── hooks/
    └── useAnimations.ts — Mouse parallax + scroll reveal hooks
```

## 🎨 Design System

- **Colors**: Dark base (#080808) with electric green accent (#00ff88)
- **Typography**: Syne (display) + DM Sans (body) + Space Mono (code/labels)
- **Animations**: Mouse parallax, scroll reveals, typing cursor, skill bars
- **Cursor**: Custom dot + ring cursor with hover expansion

## 📸 Adding Your Profile Photo

In `src/components/Hero.tsx`, find the photo placeholder section and replace with:

```tsx
<Image
  src="/profile.jpg"  // Place your photo in /public/profile.jpg
  alt="Usman Iqbal"
  fill
  className="object-cover object-top"
  priority
/>
```

Add your photo to `/public/profile.jpg`

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at vercel.com for automatic deploys.

## ✏️ Customization

- Update `metadata` in `src/app/layout.tsx` with your domain
- Replace placeholder photo in `Hero.tsx`
- All content is in the component files — easy to edit
- Color scheme controlled by CSS variables in `globals.css`
