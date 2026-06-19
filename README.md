# Landing

Proyecto Next.js mínimo para armar una landing page.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Motion** para animaciones
- **lucide-react** para íconos
- **class-variance-authority** + **clsx** + **tailwind-merge** para variantes de componentes

## Comandos

```bash
pnpm install   # instalar dependencias
pnpm dev       # servidor de desarrollo (http://localhost:3000)
pnpm build     # build de producción
pnpm start     # correr el build
pnpm lint      # linting
```

## Estructura

```
app/                 # App Router (layout, page, estilos globales)
components/
  ui/                # primitivos reutilizables (Button)
  sections/          # secciones de la landing (Hero, Features, CTA, etc.)
lib/                 # utilidades (cn)
```

Para agregar una nueva sección, creá un componente en `components/sections/` y
sumalo en `app/page.tsx`.
