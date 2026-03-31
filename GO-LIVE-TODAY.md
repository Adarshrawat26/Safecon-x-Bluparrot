# Website Structure & Content Map

Complete overview of all pages and sections built.

---

## Pages

### 1. Home (Landing) - `/`

**Sections:**
1. Hero Section (Full-screen)
   - Title: "Integrated Defence Capabilities Powered by AI, Engineering & Execution"
   - Subtitle: "Safecon Blu Parrot Aerospace & Defence"
   - Gradient background with animated text

2. Stats Bar
   - 25+ Years of Experience
   - 100+ Defence Programs
   - Global Presence
   - 100% Atmanirbhar Focused

3. About Us Preview
   - Safecon card (Manufacturing, indigenisation, execution)
   - Blu Parrot card (AI, data science, intelligent systems)
   - Combined capabilities statement

4. Core Capabilities Preview (First 3)
   - Manufacturing & Systems Integration
   - AI for Defence & Intelligence
   - Project Management & Execution
   - CTA: "View All Capabilities"

5. Atmanirbhar Bharat Teaser
   - Make in India logo
   - 4 key focus areas as cards
   - CTA: "Learn More"

6. Leadership Preview
   - CTA: "Meet Our Team"

7. Why Safecon Blu Parrot
   - 5 key differentiators as cards

8. Final CTA Section
   - "Ready to Build the Future of Defence?"
   - CTA: "Get in Touch"

---

### 2. About Us - `/about`

**Sections:**
1. Page Hero
   - Title: "About Safecon Blu Parrot"
   - Subtitle: "Our Story"

2. Company Introduction
   - Safecon overview card
   - Blu Parrot overview card
   - Combined mission statement

3. Journey Timeline (4 milestones)
   - 1999: Safecon Founded
   - 2010s: Expansion & Expertise
   - 2020: Blu Parrot AI Emerges
   - 2025: Fusion

4. Mission, Vision & Values (3 cards)
   - Mission statement
   - Vision statement
   - Core values

5. Indigenisation & Global Supply Chain (2 cards)
   - Make in India initiatives
   - Global supplier network

---

### 3. Services (Capabilities) - `/services`

**Sections:**
1. Page Hero
   - Title: "Core Capabilities"

2. Six Core Capabilities (Full detail)
   - Manufacturing & Systems Integration
   - AI for Defence & Intelligence
   - Project Management & Execution
   - Global Supply Chain Management
   - Onsite & Offshore Support
   - Training & Capability Building

3. Key Programs & Expertise
   - Grid of 7 program types

4. Projects & Experience
   - 6 project categories

5. Certifications & Compliance
   - 3 certification badges

6. Whitepapers Section (6 papers)
   - AI in Defence & Applied Intelligence (Col Lamba case study)
   - AI in Defence & Surveillance
   - SDR & Communication Systems
   - Integration Architectures
   - Future of Defence Manufacturing
   - Training and Capability Development

---

### 4. Leadership - `/leadership`

**Sections:**
1. Page Hero
   - Title: "Leadership"
   - Subtitle: "Meet Our Team"

2. Leadership Profiles (2 cards)
   - **Nitin Kalra** (Co-Founder)
     - Bio paragraphs
     - Core expertise (4 points)
     - Leadership focus (expandable, 4+ points)
     - LinkedIn link
   
   - **Aditya Arora** (Co-Founder)
     - Bio paragraphs
     - Core expertise (4 points)
     - Leadership focus (expandable, 9 points)
     - LinkedIn link

3. Thought Leadership Section
   - Title: "Positioning as Industry Innovators"
   - 4 contribution areas

4. Service Officers Profile
   - Placeholder: "To be added soon"

---

### 5. Atmanirbhar Bharat - `/atmanirbhar-bharat`

**Sections:**
1. Page Hero
   - Title: "Atmanirbhar Bharat | Make in India"
   - Make in India logo

2. Our Commitment
   - Main description
   - 5 contribution points as cards

3. Make in India Execution (4 pillars)
   - Indigenous Manufacturing
   - Technology Localization
   - Supply Chain Development
   - Strategic Program Support

4. AI + Indigenisation Section
   - Combination of AI and Manufacturing
   - 4 outcome platforms
   - "Built in India, Built for the World" philosophy

5. Strategic Impact
   - 4 impact statements

---

### 6. Israel Desk - `/israel-desk`

**Sections:**
1. Page Hero
   - Title: "Israel Desk"
   - Subtitle: "Strategic Partnerships & Supply Chain Excellence"

2. Introduction
   - Legacy of engagement (3 points)

3. What We Enable (4 service categories)
   - Supply Chain & Sourcing
   - India Market Entry & Execution Support
   - Technology Integration & Indigenisation
   - Program & Project Management

4. Strategic Advantage
   - 4 advantage statements

5. Focus Areas
   - 5 key collaboration domains

6. Final CTA
   - "Partner with Our Israel Desk"

---

### 7. Contact - `/contact`

**Sections:**
1. Page Hero
   - Title: "Get in Touch"

2. Two-Column Layout:
   - **Left:** Contact cards
     - Email card
     - Phone card
     - Office location cards (2)
   
   - **Right:** Contact form
     - Name (required)
     - Email (required)
     - Organization
     - Phone
     - Message (required)
     - Submit button (opens mailto)

3. Multi-Location Section
   - Global presence statement

---

## Global Components (All Pages)

### Navbar
- Logo: "Safecon Blu Parrot"
- 7 navigation links
- Mobile hamburger menu
- Transparent → solid on scroll
- Active page indicator

### Footer
- Company tagline
- Quick Links column
- Initiatives column
- Contact column
- Social media link (LinkedIn)
- Copyright notice

### Scroll to Top Button
- Appears after scrolling 500px
- Floating action button (bottom-right)
- Smooth scroll to top

---

## Content Updates Required Before Live

### High Priority
1. **Contact Details** - `src/data/content.ts`
   - Real email
   - Real phone
   - Real office address

2. **Leadership Photos**
   - Nitin Kalra photo
   - Aditya Arora photo

### Medium Priority
3. **LinkedIn URLs** - Update in:
   - `src/components/layout/Footer.tsx` (line 19-25)
   - `src/pages/Leadership.tsx` (line 50)

4. **Whitepaper Downloads** - `src/data/services.ts`
   - Upload PDFs somewhere
   - Update `downloadLink` URLs

### Low Priority (Can add later)
5. **Additional Images**
   - Hero backgrounds
   - Showcase images
   - Office photos

---

## File Locations for Quick Updates

| Content Type | File Location |
|--------------|---------------|
| Homepage text | `src/data/content.ts` |
| Capabilities | `src/data/services.ts` |
| Leadership bios | `src/data/leadership.ts` |
| Contact info | `src/data/content.ts` |
| Colors | `tailwind.config.js` |
| Fonts | `src/index.css` |

---

## Launch Timeline (Today)

**Minimum viable launch (15 min):**
1. Update contact email/phone
2. Build: `npm run build`
3. Deploy to Vercel: `vercel`
4. Done!

**Polished launch (1-2 hours):**
1. Add leadership photos
2. Optimize images
3. Update contact info
4. Test all pages
5. Build & deploy
6. Configure custom domain
7. Wait for DNS

---

## Known Placeholders to Replace

- Leadership photos (showing initials)
- Contact phone number (showing XXXXX)
- Office address (showing "Address to be added")
- Whitepaper download links (showing #)
- LinkedIn profile URLs (showing #)

Everything else is production-ready!

---

## Domain Configuration

Once you have your domain name, you'll need to:
1. Add it in Vercel/Netlify dashboard
2. Update DNS records at your registrar
3. Wait for propagation (5 min to 24 hours)

**DNS Records for Vercel:**
```
A record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

---

## Success Criteria

Your site is ready when:
- [x] All pages load without errors
- [x] Navigation works smoothly
- [x] Animations are smooth
- [x] Mobile responsive
- [x] Production build successful
- [ ] Real contact info added
- [ ] Leadership photos added (recommended)
- [ ] Custom domain configured (if applicable)

---

**Current Status: 95% Complete**

Add real contact info and you're ready to deploy in 10 minutes!

Good luck with your launch today! 🚀
