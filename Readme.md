# Mission Mavericks × ClaimShield+ Presentation Deck

A production-ready, dark-futuristic frontend presentation website replacing PowerPoint for the **Mission Mavericks × ClaimShield+** Final Showcase.

## 🚀 Key Features

- **Keynote Slide Deck Experience**: Exactly one slide visible at a time. No continuous scrolling.
- **Persistent Eye Mode**: Seamless toggle (`Eye` / `EyeOff` in the top right, or press `E`) that hides/shows navigation overlays without resetting across slide transitions.
- **Interactive Team Carousel**: 11-member interactive showcase with deep-dive specialties and quick-jump thumbnail navigator.
- **Interactive Timeline Deep Dives**: Week 01 to Week 04 modals with deliverables, domain insights, and PMO milestones.
- **ClaimShield+ Product Reveal**: High-energy cinematic animated reveal with neon gradients, aura glows, and product pillars.
- **3-Actor Connected Ecosystem**: Interactive journey cards and workflows for Customer, Repairer, and Claims Handler.
- **Hero Fast-Track (~30 Minutes)**: Glowing pulse metric, 6-stage STP flow diagram, and live portal launch triggers.
- **Evidence Hub**: In-deck interactive viewers and external resource links for FRD, FRS, Process & Journeys, UI/UX, Videos, and Gallery.
- **Interactive Strategic Roadmap**: NOW, NEXT, and FUTURE horizon explorer with detailed capabilities and business impact.
- **Centralized Data Layer**: All business content, team members, timeline details, and URLs live cleanly in `src/data/`.

---

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (Dark Keynote theme, neon glows, glassmorphism)
- **Animation**: Framer Motion (directional slide transitions, reveal animations, glow pulses)
- **Icons**: Lucide React
- **Zero Backend**: Fully static, deployable directly to Vercel, Netlify, GitHub Pages, or any static hosting.

---

## 🎮 Presentation Controls & Shortcuts

| Action | Control / Shortcut |
| :--- | :--- |
| **Next Slide** | `ArrowRight`, `PageDown`, `Space`, or Bottom-Right Button |
| **Previous Slide** | `ArrowLeft`, `PageUp`, or Bottom-Left Button |
| **Toggle Eye Mode** | Top-Right Eye Button or `E` key |
| **Direct Slide Jump** | Top Navbar Tabs or Bottom Progress Dots (`Slide X / 9`) |
| **Touch / Mobile** | Swipe Left (Next) / Swipe Right (Previous) |
| **Close Modal** | `Escape` key, Close button, or click backdrop |

---

## 📂 Project Structure

```
Presentation_overview/
├── reference/
│   └── index.html               # Read-only original content reference
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── EyeModeToggle.tsx       # Persistent Eye Mode toggle
│   │   │   ├── NavigationControls.tsx  # Fixed Prev / Next buttons
│   │   │   ├── PresentationLayout.tsx  # Slide deck container & swipe handler
│   │   │   ├── ProgressIndicator.tsx   # Slide X / 9 counter & segmented dots
│   │   │   └── SlideNavbar.tsx         # Brand logo & top navigation tabs
│   │   └── modals/
│   │       ├── EvidenceModal.tsx       # In-deck viewer for FRD, FRS, UI/UX, Videos, Gallery
│   │       ├── RoadmapModal.tsx        # Deep dive into NOW, NEXT, FUTURE
│   │       ├── TimelineModal.tsx       # Deep dive into Weeks 1–4
│   │       └── VideoModal.tsx          # Cinematic video modal player
│   ├── context/
│   │   └── PresentationContext.tsx     # Global deck state, keyboard listeners, Eye mode
│   ├── data/
│   │   ├── links.ts                    # Centralized external links & evidence content
│   │   ├── roadmap.ts                  # NOW, NEXT, FUTURE roadmap phases
│   │   ├── team.ts                     # 11 Mission Mavericks team members
│   │   └── timeline.ts                 # 4-week milestones & domain pillars
│   ├── slides/
│   │   ├── Slide1Landing.tsx           # Slide 1: Landing Page (Every claim has a story)
│   │   ├── Slide2Reality.tsx           # Slide 2: The Reality (One claim. Many frictions.)
│   │   ├── Slide3Team.tsx              # Slide 3: Mission Mavericks Reveal (11-member carousel)
│   │   ├── Slide4Journey.tsx           # Slide 4: From Learning To Solution (4-week timeline)
│   │   ├── Slide5Reveal.tsx            # Slide 5: ClaimShield+ Reveal (Keynote launch)
│   │   ├── Slide6Ecosystem.tsx         # Slide 6: ClaimShield+ Ecosystem (3 Connected Journeys)
│   │   ├── Slide7Launch.tsx            # Slide 7: Launch Applications (~30 Min Hero)
│   │   ├── Slide8Evidence.tsx          # Slide 8: Evidence Hub (6 Artifact categories)
│   │   └── Slide9Roadmap.tsx           # Slide 9: Strategic Roadmap & Finale
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The optimized static build output will be generated in `dist/`.
