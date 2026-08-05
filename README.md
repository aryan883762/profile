# Kumar Aryan Portfolio

A statically rendered portfolio built with Next.js 15, React 18, TypeScript,
Tailwind CSS v4, AOS, and React Icons.

## Development

```bash
npm install
npm run dev
```

The development server uses Turbopack and is available at
`http://localhost:3000` by default.

## Validation

```bash
npm run lint
npm run build
```

## Source structure

```text
src/
  app/          App Router entry points and metadata
  components/
    layout/     Header, footer, and page-level presentation
    providers/  Client-side framework initialization
    sections/   Portfolio section modules and scoped styles
    ui/         Generic reusable UI primitives
  constants/    Shared navigation and link definitions
  data/         Typed portfolio content
  hooks/        Shared client-side behavior
  styles/       Global Tailwind theme and document styles
  types/        Shared TypeScript contracts
  utils/        Pure formatting helpers
```

Section-specific animation CSS is colocated with its section. Global CSS is
limited to Tailwind imports, theme tokens, and document-level defaults.
