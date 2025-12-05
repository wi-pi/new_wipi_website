# WI-PI Website

Wisconsin Privacy and Security Group website built with [Astro](https://astro.build/).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:4321/`

---

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Navbar.astro
│   └── Footer.astro
├── content/             # Content collections (Markdown files)
│   ├── config.ts        # Schema definitions
│   ├── publications/    # Publication entries
│   ├── news/            # News entries
│   └── projects/        # Project/artifact entries
├── layouts/
│   └── BaseLayout.astro # Main page layout
├── pages/               # Route pages
│   ├── index.astro      # Home page
│   ├── students.astro   # People page
│   ├── news.astro       # News page
│   ├── publications.astro
│   └── slides.astro     # Artifacts page
└── styles/
    └── global.css       # All styles

public/
├── images/              # All site images
│   ├── hero-1.svg       # Hero slideshow images
│   ├── hero-2.svg
│   ├── research-*.svg   # Research area images
│   ├── person-placeholder.svg
│   └── people/          # Person photos (add here)
├── pdfs/                # Publication PDFs
└── slides/              # Presentation slides
```

---

## 📝 Content Management

### Adding a New Publication

1. Create a new `.md` file in `src/content/publications/`
2. Use this template:

```markdown
---
title: 'Your Publication Title'
authors: 'Author One, Author Two'
type: 'Conference'  # Options: Conference, Journal, Dissertation, Patent, arXiv
year: 2024
venue: 'Conference/Journal Name'
pdfUrl: '/pdfs/your-paper.pdf'  # Optional - put PDF in public/pdfs/
focus: ['systems', 'ai']  # Options: systems, people, math, ai
---
Abstract text goes here. This will be displayed as the publication description.
```

**Focus options explained:**
- `systems` - "In Systems" - OS, platforms, large-scale systems
- `people` - "For People" - Human-centered security/privacy
- `math` - "Using Math" - Formal methods, cryptography, statistics
- `ai` - "For/Using AI" - AI privacy implications or AI-powered tools

---

### Adding a News Item

1. Create a new `.md` file in `src/content/news/`
2. Use this template:

```markdown
---
date: 'Jan 2025'  # Format: Mon YYYY
title: 'News Headline Here'
source: 'Source Name'  # Optional
link: 'https://example.com/article'  # Optional
---
Brief summary or description of the news item.
```

News items are automatically grouped by year on the News page.

---

### Adding a Project/Artifact

1. Create a new `.md` file in `src/content/projects/`
2. Use this template:

```markdown
---
title: 'Project Title'
authors: 'Author One, Author Two'
year: 2024
venue: 'Conference/Journal'
slidesUrl: '/slides/project-slides.pdf'  # Optional - put in public/slides/
githubUrl: 'https://github.com/org/repo'  # Optional
huggingFaceUrl: 'https://huggingface.co/org/model'  # Optional
focus: ['ai', 'people']  # Same options as publications
---
Project description goes here.
```

---

### Adding/Editing People (Students & Alumni)

People are defined directly in `src/pages/students.astro`. 

Edit the `peopleData` object:

```javascript
const peopleData = {
  faculty: [
    { 
      name: 'Person Name', 
      link: 'https://personal-website.com/', 
      img: 'https://example.com/photo.jpg' 
    },
    // Add more faculty/students...
  ],
  alumni: [
    { 
      name: 'Alumni Name', 
      link: 'https://linkedin.com/in/alumni', 
      img: 'https://example.com/photo.jpg' 
    },
    // Add more alumni...
  ]
};
```

**Image tips:**
- Use square images (1:1 ratio) for best results
- Recommended size: 200x200px or larger
- Place images in `public/images/people/` and reference as `/images/people/name.jpg`
- Currently using `person-placeholder.svg` - replace with actual photos

---

### Editing Home Page Content

Home page content is in `src/pages/index.astro`. Edit the `homeData` object:

```javascript
const homeData = {
  heroTitle: "Your Title Here",
  heroSubtitle: "Your description...",
  heroImages: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    // Add more slideshow images
  ],
  researchItems: [
    {
      img: 'https://example.com/research-image.jpg',
      title: 'Research Area',
      text: 'Description of this research focus.'
    },
    // Add more research areas (max 4 recommended)
  ]
};
```

---

### Editing Footer

Footer content is in `src/components/Footer.astro`. Edit the `footerContent` object:

```javascript
const footerContent = {
  labName: 'WI-PI Lab',
  email: 'contact@wiscprivacy.com',
  address: '1210 W Dayton St, Madison, WI 53706',
  copyrightOwner: 'Wisconsin Privacy and Security Group'
};
```

---

## 🎨 Styling

All styles are in `src/styles/global.css`.

**Key CSS variables (in `:root`):**
```css
--accent: #900;           /* Primary red color */
--accent-light: #ff6666;  /* Lighter red */
--font-heading: 'Outfit'  /* Headings font */
--font-body: 'Outfit'     /* Body font */
--font-serif: 'Source Serif 4'  /* Serif font for descriptions */
```

---

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to `main`.

**Manual deployment:**
```bash
npm run build
# Output is in ./dist/
```

**GitHub Pages setup:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

Site URL: `https://wipi.github.io/`

---

## 📋 Common Tasks Checklist

| Task | File(s) to Edit |
|------|-----------------|
| Add publication | Create `src/content/publications/new-paper.md` |
| Add news | Create `src/content/news/news-item.md` |
| Add project/artifact | Create `src/content/projects/new-project.md` |
| Add/edit people | Edit `src/pages/students.astro` |
| Edit home page | Edit `src/pages/index.astro` |
| Edit footer | Edit `src/components/Footer.astro` |
| Change colors/fonts | Edit `src/styles/global.css` |
| Add static files (PDFs, images) | Add to `public/` folder |
| Update hero/research images | Replace SVGs in `public/images/` |
| Add person photos | Add to `public/images/people/` |

---

## 🔧 Tech Stack

- [Astro](https://astro.build/) - Static site generator
- Vanilla CSS with CSS variables
- Vanilla JavaScript for interactivity
- GitHub Actions for CI/CD
