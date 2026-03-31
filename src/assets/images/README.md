# Image Placeholders

This folder structure is ready for your images. Place them in the appropriate subfolders:

## Brand assets

- `safecon-logo.png` — **Safecon Technologies** official logo (navbar, footer, About Us). Replace this file if you receive an updated master asset.
- `bluparrot-logo.svg` — **Blu Parrot Ventures** logo (primary asset used in `BluParrotLogo`). Replace with an updated export from design to refresh site-wide.
- `bluparrot-logo.png` / `bluparrot-logo-original-backup.png` — legacy raster backups only; not referenced by the app.

## Folder Structure

- `home/` - Landing page hero images, capability showcases, team previews
- `about/` - Company history, timeline images, mission/vision visuals
- `leadership/` - Executive photos
  - Required: `nitin-kalra.jpg`, `aditya-arora.jpg`
- `atmanirbhar/` - Make in India visuals, initiative photos
- `services/` - Capability demonstrations, project photos
- `israel/` - Partnership photos, collaboration visuals
- `contact/` - Office photos, team working images

## Image Guidelines

1. **Format**: WebP or JPEG (WebP preferred for 80% smaller size)
2. **Compression**: Use TinyPNG or Squoosh before adding
3. **Naming**: Use lowercase with hyphens (e.g., `hero-image.jpg`)
4. **Size**: 
   - Hero images: 1920x1080px or larger
   - Profile photos: 800x800px minimum
   - Section images: 1200x800px recommended
   - Thumbnails: 400x300px

## Section photography (`sections/`)

Bundled JPEGs under `sections/` are **stock imagery** (sourced from [Unsplash](https://unsplash.com)) used for manufacturing / defence **mood only**. They are **not** customer sites or classified programmes.

| File | Typical use on site |
|------|---------------------|
| `engineering-production.jpg` | About hero, Israel Desk hero (with scrim) |
| `factory-floor.jpg` | Contact hero, Atmanirbhar hero, About “manufacturing” band |
| `defence-aviation.jpg` | Leadership hero |
| `precision-manufacturing.jpg` | Services hero, Home Indo-Israel panel |
| `naval-maritime-industrial.jpg` | Israel Desk — full-width band below hero |
| `industrial-rd-lab.jpg` | Atmanirbhar Bharat — full-width band below hero |

Replace these with **your own cleared marketing photos** for production if required. Keep filenames or update imports in `src/data/siteImagery.ts`.

## Current Status

Brand and section images are in use; leadership profile photos may still be placeholders until you add `leadership/*.jpg`.

The website will automatically lazy-load all images for optimal performance where `LazyLoadImage` is used.
