![React application architecture — illustrated project overview](docs/assets/cover.svg)

# React application architecture

[![Unit tests](https://github.com/Zireael-web/advanced-frontend-project/actions/workflows/tests.yml/badge.svg)](https://github.com/Zireael-web/advanced-frontend-project/actions/workflows/tests.yml)

A frontend development project built with **React 17 and TypeScript**. It explores a modular application shell with client-side routing, theme switching, and localization.

[Quick start](#quick-start) · [What's inside](#whats-inside) · [Project structure](#project-structure) · [Development](#development)

## What's inside

- **Application structure:** separate app, page, widget, and shared layers.
- **Navigation:** React Router 6 with lazy-loaded page components and a fallback route.
- **Themes:** light and dark styles through a shared theme provider.
- **Localization:** Russian and English resources powered by i18next.
- **UI building blocks:** links, buttons, a collapsible sidebar, and loading states.
- **Tooling:** a configurable Webpack build, SCSS modules, and Jest tests for the class-name utility.

This repository is an application foundation and development study. It does not include a complete backend or a deployed product.

## Quick start

Install Node.js and npm, then run:

```sh
npm ci
npm start
```

Open **http://localhost:3000**. Translation resources are served from `public/locales`.

The Webpack configuration also enables Bundle Analyzer on its default port. If a build remains open after compiling, check that analyzer process.

## Project structure

```text
src/
├── app/        Application shell, providers, routing, and global styles
├── pages/      Route-level components
├── widgets/    Navbar, sidebar, and error UI
└── shared/     UI primitives, configuration, utilities, and assets
config/
├── build/      Webpack configuration helpers
└── jest/       Test configuration
public/
└── locales/    English and Russian translation files
```

## Development

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build:dev` | Compile a development bundle |
| `npm run build:prod` | Compile a production bundle |
| `npm run unit -- --runInBand` | Run Jest tests |
| `npm run lint:ts` | Check TypeScript and TSX files |
| `npm run lint:scss` | Check SCSS files |

Dependencies reflect the existing React 17 codebase. Check compatibility before upgrading the toolchain.

The cover is an illustration of the project's structure, not a screenshot of a deployed application.
