# Khushal Nirwal — Portfolio

Personal portfolio of **Khushal Nirwal**, an AI/ML engineer building RAG pipelines, LLM agents and deep learning systems.

**Live site:** [randomplayerhere.github.io](https://randomplayerhere.github.io/)

Built with React, Vite and Tailwind CSS. The hero has a floating 3D retro computer (Three.js) over a parallax city skyline.

## What's on the site

| Section | What it shows |
| --- | --- |
| **Hero** | Intro, rotating tagline, resume button, 3D computer model |
| **About** | Bento grid: bio, draggable skill cards, 3D globe, copy-email button, orbiting tech-stack icons |
| **Projects** | Swiggy Jugaad, Sentinel AI, Datich and more. Hover for a preview image, click for details, repo and live-demo links |
| **Experience** | Scroll-animated timeline (Deloitte, Teemo.ai, ELabs) |
| **Achievements** | Education, certifications and competition results |
| **Contact** | Contact form that sends email through EmailJS |

## Tech stack

- **UI:** React 19, Vite 7, Tailwind CSS 4
- **Animation:** Motion (Framer Motion)
- **3D:** Three.js, @react-three/fiber, @react-three/drei, Cobe (globe)
- **Email:** EmailJS
- **Hosting:** GitHub Pages (`gh-pages` branch)

## Project structure

```
.
├── index.html                  # HTML shell, SEO and Open Graph meta tags
├── public/
│   ├── Khushal_Nirwal_Resume.pdf
│   ├── favicon.png
│   ├── models/
│   │   └── retro-computer.glb  # 3D hero model
│   └── assets/
│       ├── city/               # Parallax skyline layers (1 = back … 5 = front)
│       ├── icons/              # UI icons (arrows, menu, close, copy)
│       ├── images/             # Misc images (About card, OG preview)
│       ├── logos/              # Tech logos used in tags and the tech-stack orbit
│       ├── projects/           # Project preview images
│       └── socials/            # Social-media icons
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page layout (section order)
    ├── index.css               # Tailwind theme tokens and shared classes
    ├── constants/
    │   └── index.js            # ALL site content: projects, experience, achievements, socials
    ├── sections/               # One file per page section
    │   ├── Navbar.jsx  Hero.jsx  About.jsx  Projects.jsx
    │   ├── Experience.jsx  Achievements.jsx  Contact.jsx  Footer.jsx
    └── components/             # Reusable building blocks
        ├── HeroText.jsx  FlipWords.jsx  ParallaxBackground.jsx  Computer.jsx  Loader.jsx
        ├── Card.jsx  globe.jsx  Frameworks.jsx  OrbitingCircles.jsx  CopyEmailButton.jsx
        ├── Project.jsx  ProjectDetails.jsx  Timeline.jsx
        └── Alert.jsx  Particles.jsx
```

## Getting started

Requires Node.js 20+.

```bash
git clone https://github.com/randomPlayerHere/randomplayerhere.github.io.git
cd randomplayerhere.github.io
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

## Updating content

Almost everything is data in [`src/constants/index.js`](src/constants/index.js).

**Add a project** by appending to `myProjects`:

```js
{
  id: 6,
  title: "Project name",
  description: "One-paragraph summary shown at the top of the modal.",
  subDescription: ["Bullet one", "Bullet two"],
  href: "https://github.com/...",      // repo link; leave "" to hide the button
  demo: "https://...",                 // live demo; leave "" to hide the button
  image: `${BASE_URL}assets/projects/my-project.png`,
  tags: [
    { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
    { id: 2, name: "LangGraph" },      // no `path` -> rendered as a text chip
  ],
}
```

**Experience** lives in `experiences` (`title`, `job`, `date`, `contents[]`), shown newest first. **Education and certifications** live in `achievements` (`title`, `issuer`, `detail`).

Other things you might want to change:

- **Resume:** replace `public/Khushal_Nirwal_Resume.pdf`. Keep the filename, or update `RESUME_URL` in the constants file.
- **Tech-stack orbit:** edit the `skills` list in `src/components/Frameworks.jsx`. Each name must match an SVG in `public/assets/logos/`.
- **About cards and bio:** `src/sections/About.jsx`.
- **Theme colors:** the `@theme` block at the top of `src/index.css` (`--color-terminal`, `--color-lavender`, `--color-coral`, …).

## Deployment

The site is served by GitHub Pages from the `gh-pages` branch:

```bash
npm run deploy
```

This runs `vite build` and then pushes `dist/` to `gh-pages` using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

## License

[MIT](LICENSE) © Khushal Nirwal

## Contact

- GitHub: [@randomPlayerHere](https://github.com/randomPlayerHere)
- LinkedIn: [khushalnirwal](https://www.linkedin.com/in/khushalnirwal/)
- Email: khushalnirwal@gmail.com
