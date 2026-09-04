# Kumar Aryan Portfolio

A portfolio built with Next.js 15, React 18, TypeScript, Tailwind CSS v4, AOS,
and React Icons. Page content is statically rendered, and the contact form opens
a pre-filled message in the visitor's default mail client.

## Development

```bash
npm install
npm run dev
```

The development server uses Turbopack and is available at
`http://localhost:3000` by default.

## Contact form

The contact form validates the entered details, then opens a `mailto:` link with
the recipient, subject, and message already filled in. It does not require an
email API, server endpoint, environment variables, or paid email service. The
visitor completes delivery by pressing Send in their configured mail client.

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
  lib/          Server-safe validation and application helpers
  styles/       Global Tailwind theme and document styles
  types/        Shared TypeScript contracts
  utils/        Pure formatting helpers
```

Section-specific animation CSS is colocated with its section. Global CSS is
limited to Tailwind imports, theme tokens, and document-level defaults.
