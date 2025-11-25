# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Tricky P Gaming** - A gaming brand website for PG's content and community.

- **Target Audience**: Gamers who enjoy PG's content
- **Design Philosophy**: Modern, engaging gaming aesthetics with a dark theme
- **Learning Context**: PG is learning web development while building this, so explain concepts and decisions clearly

## Tech Stack

- **Framework**: Astro - For optimal performance with static site generation
- **Interactive Components**: React - Used within Astro for dynamic elements
- **Styling**: CSS/Tailwind (to be determined during setup)

## Design System

### Color Palette
- **Background**: `#0a0e27` (Deep space blue)
- **Surface**: `#141b3d` (Dark slate)
- **Primary Accent**: `#00d9ff` (Electric cyan) - For CTAs and highlights
- **Secondary Accent**: `#9d4edd` (Vibrant purple) - For links and secondary actions
- **Success/Highlight**: `#39ff14` (Neon green) - For achievements, stats
- **Text Primary**: `#e8f1ff` (Off-white)
- **Text Secondary**: `#a0aec0` (Muted gray)

### Visual Style
- Dark theme with high contrast for readability
- Subtle gradients and glow effects for gaming aesthetic
- Smooth animations and transitions
- Responsive design (mobile-first approach)

## Development Commands

```bash
# Initial setup
npm create astro@latest
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking (if using TypeScript)
npm run astro check
```

## Project Structure (Astro Standard)

```
/
├── src/
│   ├── components/     # React components and Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   ├── styles/         # Global styles
│   └── assets/         # Images, fonts, etc.
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```

## Architecture Guidelines

### Component Strategy
- Use **Astro components** for static content (headers, footers, about sections)
- Use **React components** for interactive features (games list, filters, contact forms)
- Keep components small and focused on single responsibilities

### Page Structure
- Homepage: Hero section, featured content, call-to-action
- About/Bio: PG's gaming journey and brand story
- Content/Games: Showcase of games or content PG creates
- Contact/Community: Ways to connect and engage

### Performance Priorities
- Leverage Astro's partial hydration - only hydrate interactive React components
- Optimize images (use Astro's image optimization)
- Minimize JavaScript bundle size
- Lazy load non-critical content

## Development Workflow

When implementing new features:
1. Start with the layout and structure (Astro components)
2. Add interactivity only where needed (React components)
3. Style with the established color palette
4. Test responsiveness across devices
5. Ensure accessibility (ARIA labels, keyboard navigation)

## Key Considerations

- **Explain as You Go**: PG is learning, so include comments explaining WHY certain patterns are used
- **Gaming Aesthetics**: Think bold, modern, energetic - avoid corporate or bland designs
- **Performance First**: Gamers appreciate fast-loading sites
- **Community Feel**: Design should feel welcoming and engaging
