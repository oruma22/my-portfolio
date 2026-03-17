# GEMINI.md - Project Context

## Project Overview
**my-hacker-portfolio** is a professional portfolio website for Lemuel Oruma, a backend developer and system architect. The site features a minimalist "hacker" aesthetic and highlights expertise in scalable APIs and database optimization.

### Main Technologies
- **Framework:** Next.js 16 (App Router)
- **Frontend Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Geist (Sans/Mono), Inter
- **Data Management:** Externalized data modules for projects and skills.

## Architecture & Structure
The project follows a modular architecture for better maintainability and scalability:

- `app/`: Contains the main layout and home page.
- `components/`: Reusable React components (Navbar, Hero, ProjectCard, SkillBadge, Footer).
- `data/`: Centralized data store for projects and skills with TypeScript interfaces.
- `public/`: Static assets.

## Building and Running
- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Production Start:** `npm start`
- **Linting:** `npm run lint`

## Development Conventions
### Componentization
- UI elements must be extracted into the `components/` directory.
- Use functional components with TypeScript for props.

### Data Management
- Project and skill information should be updated in `data/projects.ts` and `data/skills.ts` respectively.
- Always use the `Project` interface when adding new projects.

### SEO & Metadata
- Global SEO settings (title, description, keywords) are managed in `app/layout.tsx`.

## Key Files
- `app/layout.tsx`: Root layout with SEO and global shell.
- `app/page.tsx`: Main entry point utilizing modular components and data.
- `components/`: Directory for UI components.
- `data/projects.ts`: Project data and `Project` interface.
- `data/skills.ts`: Core technology stack data.
