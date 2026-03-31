# Deployment Guide - Safecon Blu Parrot Website

The production build is ready in the `dist/` folder. Choose your deployment method:

---

## Option 1: Vercel (Recommended - Zero Config, Fast)

### Method A: Using Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and deploy
6. Your site will be live at `https://your-project.vercel.app`

### Method B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts - defaults are correct for Vite
```

### Adding Custom Domain
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your domain (e.g., `safeconbluparrot.com`)
4. Update your DNS records as instructed
5. SSL certificate is automatic and free

**DNS propagation**: 5 minutes to 24 hours (usually < 1 hour)

---

## Option 2: Netlify

### Method A: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Drag the `dist/` folder to the upload area
3. Site is live instantly

### Method B: Using Netlify CLI
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Custom Domain
1. Site settings > Domain management
2. Add custom domain
3. Update DNS records (similar to Vercel)

---

## Option 3: cPanel / Shared Hosting

1. Build the project locally:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains all production files

3. Upload via FTP or cPanel File Manager:
   - Upload all contents of `dist/` to `public_html/` (or your domain's root folder)
   - Make sure `.htaccess` is configured for SPA routing

4. Create/update `.htaccess` in public_html:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Option 4: GitHub Pages (Free, but slower)

```bash
# Install gh-pages package
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

Update `vite.config.ts` to add base URL:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

---

## Pre-Deployment Checklist

- [ ] Replace placeholder images in `src/assets/images/`
- [ ] Add real contact details in `src/data/content.ts`
- [ ] Test all pages locally with `npm run dev`
- [ ] Run `npm run build` to ensure no errors
- [ ] Test the production build: `npm run preview`
- [ ] Update social media links in Footer
- [ ] Add LinkedIn profile URLs for leadership team
- [ ] Upload whitepapers and update download links

---

## Image Optimization Before Deploy

Your images are heavy. Here's how to optimize:

### Option A: Convert to WebP (recommended)
```bash
# Install sharp-cli
npm install -g sharp-cli

# Convert all JPG/PNG to WebP (80% smaller)
sharp -i src/assets/images/**/*.{jpg,png} -o src/assets/images/ -f webp
```

### Option B: Use Cloudinary (Free CDN)
1. Create free account at [cloudinary.com](https://cloudinary.com)
2. Upload all images
3. Replace image paths with Cloudinary URLs:
   ```typescript
   // Before
   src="/src/assets/images/leadership/nitin-kalra.jpg"
   
   // After
   src="https://res.cloudinary.com/your-cloud/image/upload/v123/nitin-kalra.jpg"
   ```
4. Benefits: Auto-optimization, responsive images, CDN delivery

---

## Environment Variables (if needed)

Create `.env.production` for production-specific configs:
```
VITE_API_URL=https://api.yourdomain.com
VITE_CONTACT_EMAIL=contact@safeconbluparrot.com
```

Access in code: `import.meta.env.VITE_API_URL`

---

## DNS Configuration

When adding custom domain, update DNS with these records:

### For Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

---

## Post-Deployment Testing

1. Test all pages and navigation
2. Check mobile responsiveness
3. Test forms (contact page)
4. Verify all images load correctly
5. Test page load speed: [PageSpeed Insights](https://pagespeed.web.dev)
6. Check cross-browser compatibility

---

## Quick Deploy Commands

```bash
# Build
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

---

## Need Help?

- **Build errors**: Check terminal output and fix TypeScript errors
- **Deployment issues**: Check Vercel/Netlify logs
- **Domain not working**: Wait 24 hours for DNS propagation
- **Images not loading**: Check file paths and CORS settings

---

**Estimated Time to Live**: 5-30 minutes (depending on method)

Good luck with your launch today!
