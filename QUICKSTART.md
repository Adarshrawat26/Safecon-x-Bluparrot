# Quick Start Guide

## Your website is ready to go live!

The dev server is running at: **http://localhost:5173**

---

## What's Built

- Home (Landing) page with hero, stats, capabilities preview
- About Us page with company history and timeline
- Services/Capabilities page with all 6 core capabilities + whitepapers
- Leadership page with Nitin Kalra and Aditya Arora profiles
- Atmanirbhar Bharat dedicated page with Make in India focus
- Israel Desk page showcasing strategic partnerships
- Contact page with form and office information
- Smooth custom scrolling (Lenis)
- Framer Motion animations throughout
- Lazy-loaded images for performance
- Responsive design (mobile, tablet, desktop)
- Dark mode support

---

## Before Going Live - Add Your Images

All images are currently using placeholders. Replace them with your actual images:

### Required Leadership Photos
```
src/assets/images/leadership/
├── nitin-kalra.jpg      (800x800px or larger, square)
└── aditya-arora.jpg     (800x800px or larger, square)
```

### Recommended Additional Images
```
src/assets/images/
├── home/
│   ├── hero-bg.jpg           (1920x1080px, full-screen hero)
│   ├── safecon-showcase.jpg  (1200x800px)
│   └── bluparrot-showcase.jpg (1200x800px)
├── about/
│   ├── company-timeline.jpg
│   └── team-working.jpg
├── atmanirbhar/
│   ├── make-in-india-hero.jpg
│   └── indigenous-manufacturing.jpg
├── services/
│   ├── manufacturing.jpg
│   ├── ai-intelligence.jpg
│   └── naval-systems.jpg
└── israel/
    └── collaboration.jpg
```

### Image Optimization Tips
- **Format**: Convert to WebP (use [Squoosh.app](https://squoosh.app))
- **Compression**: Aim for < 200KB per image
- **Tools**: TinyPNG, ImageOptim, or Squoosh
- **CDN**: Consider Cloudinary for automatic optimization

---

## Update Contact Information

Edit `src/data/content.ts`:

```typescript
export const contact = {
  email: 'your-real-email@safeconbluparrot.com',
  phone: '+91 XXXXX XXXXX',  // Update this
  offices: [
    {
      location: 'Delhi NCR, India',
      address: 'Your actual address',  // Update this
      type: 'Headquarters'
    }
  ]
};
```

---

## Deploy in 3 Steps

### 1. Build Production Version
```bash
npm run build
```

### 2. Test Production Build Locally
```bash
npm run preview
```

### 3. Deploy

**Vercel (Fastest)**
```bash
npm i -g vercel
vercel
```

**Or Upload to cPanel**
- Upload contents of `dist/` folder to `public_html/`

See `DEPLOYMENT.md` for detailed instructions.

---

## Adding Your Custom Domain

After deploying to Vercel/Netlify:
1. Go to project settings
2. Add your domain
3. Update DNS records (shown in dashboard)
4. Wait 5-60 minutes for DNS propagation
5. SSL certificate is automatic

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check
```

---

## File Structure Overview

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, ScrollToTop
│   ├── ui/           # Reusable UI components
│   └── shared/       # PageHero
├── pages/            # All page components
├── data/             # All content and data
│   ├── content.ts    # Main content
│   ├── services.ts   # Capabilities & whitepapers
│   └── leadership.ts # Team profiles
└── assets/images/    # Your images go here
```

---

## Customization

### Colors
Edit `tailwind.config.js` to change brand colors.

### Content
All text content is in `src/data/` folder - easy to update.

### Animations
Adjust timing in `src/components/ui/AnimatedSection.tsx`.

---

## Performance Features

- Code splitting (vendor, animations, icons bundles)
- Lazy image loading (below-fold images load on scroll)
- Smooth scrolling with Lenis
- Optimized production build
- Responsive images with placeholders

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Need Help?

Check the detailed `README.md` and `DEPLOYMENT.md` files for more information.

**Ready to launch! 🚀**
