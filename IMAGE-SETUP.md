# Image Setup Guide

## Current Status
All images are using **branded placeholders** that display your content. The website is fully functional and ready for your actual images.

---

## Priority Images (Add These First)

### Leadership Photos (Required)
```
src/assets/images/leadership/
├── nitin-kalra.jpg       800x800px (square, professional headshot)
└── aditya-arora.jpg      800x800px (square, professional headshot)
```

These are displayed on the Leadership page. Currently showing initials placeholders.

---

## Optional Hero Images (Enhance Visual Impact)

### Home Page
Update `src/pages/Home.tsx` to add hero background:
```typescript
<PageHero
  // Add this line:
  imagePath="/src/assets/images/home/hero-bg.jpg"
  // ... rest stays the same
/>
```

Recommended: High-quality defence/aerospace imagery (1920x1080px)

### Other Pages
You can add hero backgrounds to any page by passing `imagePath` prop to `PageHero` component.

---

## How to Add Images

### Step 1: Place Images in Correct Folders
```
src/assets/images/
├── home/              # Landing page images
├── about/             # Company history, timeline
├── leadership/        # ⚠️ Required: team photos
├── atmanirbhar/       # Make in India visuals
├── services/          # Capabilities showcase
├── israel/            # Partnership photos
└── contact/           # Office photos
```

### Step 2: Update Image Paths in Code

**Leadership photos** are auto-referenced in `src/data/leadership.ts`:
```typescript
imagePath: '/src/assets/images/leadership/nitin-kalra.jpg',
```

**Hero images** - add to PageHero components in page files:
```typescript
<PageHero
  imagePath="/src/assets/images/home/hero-bg.jpg"
  // ...
/>
```

---

## Image Optimization (Important!)

Your images are described as "heavy". Here's how to fix that:

### Method 1: Convert to WebP (Recommended)
WebP images are 80% smaller than JPEG with same quality.

**Online Tool**: [Squoosh.app](https://squoosh.app)
- Drag & drop your images
- Select WebP format
- Quality: 80-85
- Download optimized version

**Bulk Conversion** (if you have many images):
```bash
# Install sharp-cli globally
npm install -g sharp-cli

# Convert all JPG/PNG to WebP
cd "src/assets/images"
sharp -i **/*.{jpg,png,jpeg} -o . -f webp
```

### Method 2: Use Online Image Compression
- [TinyPNG](https://tinypng.com) - JPEG/PNG compression
- [Compressor.io](https://compressor.io) - All formats

Target: < 200KB per image

---

## Alternative: Use a CDN (No Local Files)

If images are very large, use Cloudinary (free tier):

### Setup Cloudinary
1. Create free account: [cloudinary.com](https://cloudinary.com)
2. Upload all images to Cloudinary
3. Get image URLs (like: `https://res.cloudinary.com/yourcloud/image/upload/...`)
4. Replace paths in code with Cloudinary URLs

**Benefits:**
- Automatic optimization
- Auto WebP conversion
- Global CDN delivery
- Responsive images
- No build size increase

### Example:
```typescript
// Before
imagePath: '/src/assets/images/leadership/nitin-kalra.jpg'

// After (Cloudinary)
imagePath: 'https://res.cloudinary.com/yourcloud/image/upload/v123/nitin-kalra.jpg'
```

---

## Current Image Behavior

All images use `ImageWithFallback` component that:
- Shows placeholder until real image loads
- Displays branded placeholder if image is missing
- Lazy loads images (below fold images load on scroll)
- Prevents layout shift with explicit dimensions

---

## No Images? No Problem!

The website works perfectly without images:
- Leadership section shows initials (NK, AA)
- Hero sections use gradient backgrounds
- All placeholders are branded and professional

You can go live NOW and add images later without any code changes.

---

## Quick Test Checklist

Before deploying:
- [ ] Add leadership photos (nitin-kalra.jpg, aditya-arora.jpg)
- [ ] Compress/optimize all images
- [ ] Test image loading on all pages
- [ ] Check mobile image display
- [ ] Verify no broken image links

---

## Image Credits / Alt Text

All images have descriptive alt text for accessibility. No changes needed unless you want to customize the descriptions.

---

**Bottom Line**: Website is 100% functional with placeholders. Add real images anytime (before or after launch) by dropping them in the folders above. No code changes required.
