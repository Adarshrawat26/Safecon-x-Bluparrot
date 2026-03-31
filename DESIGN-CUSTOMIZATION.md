# Design Customization Guide

Once you share your preset designs, use this guide to customize the website to match.

---

## Quick Customization Points

### 1. Brand Colors
Edit `tailwind.config.js` lines 8-30:

```javascript
colors: {
  safecon: {
    primary: '#YOUR_COLOR',    // Main Safecon color
    secondary: '#YOUR_COLOR',
    accent: '#YOUR_COLOR',
  },
  bluparrot: {
    primary: '#YOUR_COLOR',    // Main Blu Parrot color
    secondary: '#YOUR_COLOR',
    accent: '#YOUR_COLOR',
    highlight: '#YOUR_COLOR',  // Used in gradients
  },
  brand: {
    navy: '#YOUR_COLOR',       // Primary navy
    blue: '#YOUR_COLOR',       // Primary blue
    cyan: '#YOUR_COLOR',       // Accent cyan
    gold: '#fbbf24',          // Make in India accent
    dark: '#YOUR_COLOR',
    light: '#YOUR_COLOR',
  }
}
```

After changing colors, refresh the browser - changes apply instantly.

---

### 2. Typography (Fonts)

**Current fonts:**
- Headings: Space Grotesk
- Body: Inter

**To change:**

Edit `src/index.css` line 1 (Google Fonts import):
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap');
```

Edit `tailwind.config.js` line 37:
```javascript
fontFamily: {
  sans: ['Your Body Font', 'system-ui', 'sans-serif'],
  display: ['Your Heading Font', 'sans-serif'],
}
```

---

### 3. Hero Section Style

**Current:** Full-screen gradient hero with animated text

**To customize:** Edit `src/pages/Home.tsx` starting at line 34:

```typescript
<PageHero
  subtitle={hero.subtitle}
  title={hero.title}
  description={hero.description.join(' ')}
  height="full"           // Change to "tall" or "medium"
  gradient                // Remove for image background
  // imagePath="/src/assets/images/home/hero-bg.jpg"  // Uncomment to add image
/>
```

---

### 4. Card Styles

**Current:** White cards with border, shadow, and hover lift

**To customize:** Edit `src/components/ui/Card.tsx`:

```typescript
// Line 11: Border radius
const baseStyles = 'rounded-xl'  // Change to rounded-lg, rounded-2xl, etc.

// Line 13: Background gradient
const gradientStyles = gradient 
  ? 'bg-gradient-to-br from-white to-blue-50'  // Your gradient
  : 'bg-white'

// Line 15: Border style
const borderStyles = 'border border-gray-200'  // Adjust thickness/color

// Line 16: Shadow
const shadowStyles = 'shadow-md'  // Change to shadow-lg, shadow-xl, etc.
```

---

### 5. Animation Speed & Style

**Current:** Smooth fade-up on scroll

**To customize:** Edit `src/components/ui/AnimatedSection.tsx`:

```typescript
initial={{ opacity: 0, y: 30 }}        // Starting position
whileInView={{ opacity: 1, y: 0 }}     // End position
transition={{
  duration: 0.6,                       // Animation speed (seconds)
  delay,                               // Staggered delay
  ease: [0.21, 0.47, 0.32, 0.98]      // Easing curve
}}
```

**Preset alternatives:**
- Slide from left: `initial={{ opacity: 0, x: -30 }}`
- Scale in: `initial={{ opacity: 0, scale: 0.9 }}`
- Rotate in: `initial={{ opacity: 0, rotate: -5 }}`

---

### 6. Scroll Behavior

**Current:** Smooth inertia scroll (Lenis)

**To adjust:** Edit `src/main.tsx` line 8:

```typescript
const lenis = new Lenis({
  duration: 1.2,      // Scroll speed (higher = slower)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,  // Desktop smooth scroll
})
```

---

### 7. Button Styles

**Current:** Gradient primary, solid secondary, outline variant

**To customize:** Edit `src/components/ui/Button.tsx` line 13:

```typescript
const variants = {
  primary: 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white',
  secondary: 'bg-brand-navy text-white',
  outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
}
```

---

### 8. Navbar Behavior

**Current:** Transparent on top, solid white on scroll

**To customize:** Edit `src/components/layout/Navbar.tsx` line 29:

```typescript
className={`fixed top-0 ... ${
  scrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-lg'   // Scrolled state
    : 'bg-transparent'                            // Top of page
}`}
```

**Always solid?** Change to:
```typescript
className="fixed top-0 ... bg-white shadow-lg"
```

---

### 9. Section Spacing

**Current:** Large padding (py-16 to py-32)

**To adjust:** Edit `src/index.css` line 47:

```css
.section-padding {
  @apply py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16;
  /* Reduce py values for tighter spacing */
}
```

---

### 10. Stats Counter Animation (Home Page)

**Current:** Static numbers with gradient

**To add counting animation:**
Install use-count-up: `npm install use-count-up`

Edit Home.tsx stats section to animate numbers from 0 to target.

---

## Design Inspirations You'll Provide

When you share your preset designs, I can help you match:
- [ ] Color scheme and gradients
- [ ] Typography (font families, sizes, weights)
- [ ] Card styles (borders, shadows, hover effects)
- [ ] Button styles and variants
- [ ] Hero section layout
- [ ] Navigation style (sticky, transparent, etc.)
- [ ] Animation style (speed, direction, easing)
- [ ] Spacing and layout
- [ ] Mobile responsive breakpoints
- [ ] Icon style and usage

---

## Matching Your Design - Quick Process

1. Share your design files (Figma, images, etc.)
2. I'll extract:
   - Exact color codes
   - Font families and sizes
   - Spacing values
   - Border radius patterns
   - Shadow styles
   - Animation patterns
3. Update the config files above
4. Refresh browser to see changes instantly

---

## Live Preview

Your dev server is running at: **http://localhost:5173**

Open it in your browser to see the current design. All changes you make will hot-reload instantly (no page refresh needed).

---

## Testing Responsive Design

**In Browser DevTools:**
1. Right-click > Inspect
2. Click device toolbar icon (top-left)
3. Test on:
   - iPhone 14 Pro (393x852)
   - iPad (768x1024)
   - Desktop (1920x1080)

---

## Common Design Adjustments

### Make text larger/smaller
Edit `src/index.css` @layer base section.

### Change max-width of content
Edit `.container-custom` in `src/index.css`:
```css
.container-custom {
  @apply max-w-7xl mx-auto;  /* Change 7xl to 6xl, 5xl, etc. */
}
```

### Adjust card hover effect
Edit `src/components/ui/Card.tsx` line 21:
```typescript
whileHover={hover ? { y: -8, boxShadow: '...' } : {}}
```

---

## Need Custom Sections?

If your design has unique sections not in the current build (e.g., image galleries, video embeds, custom layouts), let me know and I'll add them.

---

**Current design philosophy**: Professional, modern, defense-focused with tech-forward aesthetics. Premium feel with smooth animations and card-based layouts.

Share your designs and we'll refine it to match perfectly!
