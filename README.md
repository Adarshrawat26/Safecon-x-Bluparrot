# Safecon Blu Parrot - Aerospace & Defence Website

A modern, production-ready website showcasing the integrated capabilities of Safecon and Blu Parrot in defence manufacturing, AI, and systems integration.

## Tech Stack

- **React 18** + **TypeScript** - Modern, type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lenis** - Custom smooth scrolling
- **Lucide React** - Premium icon library
- **React Router v6** - Client-side routing
- **React Lazy Load Image** - Optimized image loading

## Project Structure

```
src/
├── assets/images/       # All images (organized by page)
├── components/
│   ├── layout/          # Navbar, Footer, ScrollToTop
│   ├── ui/              # Reusable UI components
│   └── shared/          # Shared components like PageHero
├── pages/               # All page components
├── data/                # Content and data files
└── hooks/               # Custom React hooks
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## Adding Images

1. Place your images in the appropriate subfolder under `src/assets/images/`:
   - `home/` - Landing page images
   - `about/` - About us page images
   - `leadership/` - Team photos (nitin-kalra.jpg, aditya-arora.jpg)
   - `atmanirbhar/` - Atmanirbhar Bharat page images
   - `services/` - Capabilities showcase images
   - `israel/` - Israel Desk page images
   - `contact/` - Contact page images

2. Update image paths in the code to reference your actual files:
   ```typescript
   '/src/assets/images/leadership/nitin-kalra.jpg'
   ```

3. For heavy images:
   - Convert to WebP format for smaller file sizes
   - Use image compression tools (TinyPNG, Squoosh)
   - Consider using a CDN like Cloudinary (free tier available)

### Image Optimization Tips

- **Current setup**: All images are lazy-loaded automatically
- **Recommended**: Convert all images to WebP (80-90% smaller than JPEG/PNG)
- **For CDN**: Replace image paths with Cloudinary URLs after uploading
- **Placeholder**: Currently using placehold.co - images will show branded placeholders until you add real images

## Deployment

### Option 1: Vercel (Recommended - Zero Config)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Auto-detects Vite, deploys instantly
4. Add custom domain in Vercel dashboard

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Option 3: cPanel / Shared Hosting

```bash
npm run build
# Upload contents of 'dist/' folder to public_html
```

## Customization

### Brand Colors

Edit `tailwind.config.js` to adjust brand colors:

```javascript
colors: {
  safecon: { ... },
  bluparrot: { ... },
  brand: { ... }
}
```

### Content Updates

All content is in `src/data/` folder:
- `content.ts` - Hero, About Us, Atmanirbhar, Israel Desk, Contact
- `services.ts` - Capabilities, programs, whitepapers
- `leadership.ts` - Leadership profiles

### Animations

Adjust animation timing in:
- `src/components/ui/AnimatedSection.tsx` - Section reveal animations
- `src/main.tsx` - Lenis smooth scroll settings

## Features

- Smooth custom scrolling (Lenis)
- Lazy-loaded images for performance
- Responsive design (mobile, tablet, desktop)
- Framer Motion animations throughout
- SEO-friendly meta tags
- Page transitions
- Dark mode support (system preference)
- Accessible components

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+

## Performance

- Code splitting enabled
- Vendor chunks optimized
- Lazy image loading
- Tree-shaking for unused code
- Optimized for Core Web Vitals

## License

Proprietary - Safecon Blu Parrot Aerospace & Defence

## Support

For technical support: contact@safeconbluparrot.com
