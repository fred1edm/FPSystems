# Contexto Técnico — FP Systems (React/Next.js)

> Referencia técnica detallada para trabajar en el código. Complementa a `docs/README.md`.
> **Migrado de HTML estático a React/Next.js el 2026-08-11.** El sitio antiguo vive en `legacy/`.

## API de contacto

El formulario está conectado al backend separado `C:\Users\fredl\Desktop\fp-api` mediante `NEXT_PUBLIC_FP_API_URL`. Evolution API y sus credenciales no forman parte del frontend.

## Stack

| Capa | Tecnología | Detalle |
|---|---|---|
| Framework | Next.js 16 (App Router) | Export estático (`output: 'export'` en `next.config.mjs`) |
| UI | React 19 | Server Components por defecto; Client Components solo donde hay interactividad |
| Estilos | Tailwind v4 + `@tailwindcss/postcss` | Tema de marca en `@theme` dentro de `app/globals.css` |
| Iconos | `lucide-react` ^1.31 | Mantenido porque el proyecto ya dependía de Lucide (regla de la skill) |
| Fuentes | `next/font` (Inter + Sora) | Self-hosted, sin Google Fonts CDN |
| JS | JavaScript (JSX) | No TypeScript — mantener convención |

## Estructura de archivos (real)

```
├── app/
│   ├── layout.js           # next/font (Inter, Sora), metadata SEO/OG, clases del body
│   ├── page.js             # <main> con las 12 secciones ensambladas
│   └── globals.css         # @import 'tailwindcss' + @theme (paleta brand) + estilos custom
├── components/
│   ├── icons.jsx           # Mapa nombre-de-icono → componente lucide-react
│   ├── Header.jsx          # 'use client' — menú móvil con useState
│   ├── Hero.jsx            # Hero + mockup dashboard
│   ├── Services.jsx        # Qué hacemos (4 servicios)
│   ├── Problems.jsx        # 6 problemas que resuelven
│   ├── Modules.jsx         # 5 módulos con features (layout alternado)
│   ├── Portfolio.jsx       # 6 proyectos con tags
│   ├── WhyUs.jsx           # 6 razones
│   ├── Process.jsx         # 5 pasos del proceso
│   ├── Plans.jsx           # 4 planes con CTA WhatsApp
│   ├── About.jsx           # Sobre nosotros + 4 valores
│   ├── Contact.jsx         # 'use client' — formulario (preventDefault)
│   ├── Footer.jsx          # 4 columnas + copyright dinámico
│   └── WhatsAppButton.jsx  # Botón flotante
├── data/
│   └── content.js          # ⭐ ÚNICA fuente de contenido: CONTACTO, NAV_LINKS, SERVICIOS,
│                           #   PROBLEMAS, MODULOS, PROYECTOS, RAZONES, PROCESO, PLANES,
│                           #   VALORES, SERVICIOS_FORMULARIO
├── legacy/                 # ⚠️ Sitio estático antiguo (NO editar)
├── docs/, skills/, agents/ # Conocimiento del proyecto
└── .claude/, .freebuff/    # Config de herramientas (no tocar .freebuff)
```

## Tema de marca (Tailwind v4 — `app/globals.css`)

```css
@theme {
  --color-brand-purpleDark: #5b21b6;
  --color-brand-purpleBright: #6d28d9;
  --color-brand-graphite: #111827;
  --color-brand-darkGray: #374151;
  --color-brand-lightGray: #f9fafb;
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-title: var(--font-sora), ui-sans-serif, system-ui, sans-serif;
}
```

- Las variables de fuente se inyectan en el `<html>` (en `layout.js`) — **importante**: si se mueven al `<body>`, Tailwind v4 no las resuelve desde `:root`.
- Clases disponibles: `bg-brand-*`, `text-brand-*`, `border-brand-*`, `font-title`.

## Reglas de arquitectura de componentes

1. **Server Component por defecto.** Solo agregar `'use client'` cuando haya interactividad (estado, eventos). Actualmente: `Header.jsx` (menú móvil) y `Contact.jsx` (submit del form).
2. **Contenido siempre en `data/content.js`.** Nunca hardcodear copy en un componente. Si el contenido cambia, se edita el archivo de datos, no el JSX.
3. **Iconos vía `components/icons.jsx`**: `<Icon name="cpu" className="..." />`. Los nombres usados en `data/content.js` deben existir en el mapa `ICONS` de `icons.jsx`.
4. **Anclas**: cada sección conserva su `id` (`#inicio`, `#que-hacemos`, `#proyectos`, `#proceso`, `#nosotros`, `#contacto`) — no cambiar (SEO/memoria muscular).
5. **Enlaces WhatsApp**: construir desde `CONTACTO.whatsapp` con `encodeURIComponent` (ver `Plans.jsx` y `WhatsAppButton.jsx` como referencia).

## Errores comunes a evitar

- **Pasar `onSubmit`/handlers a un Server Component** → error de build "Event handlers cannot be passed to Client Component props". Solución: agregar `'use client'` al componente.
- **Mover variables de next/font al `<body>`** → las fuentes dejan de aplicarse (Tailwind v4 resuelve desde `:root`). Van en el `<html>`.
- **Hardcodear contenido en JSX** → debe ir a `data/content.js`.
- **Añadir un icono nuevo sin registrarlo** en `components/icons.jsx`.
- **Editar `legacy/`** — es referencia histórica del sitio estático.

## Comandos útiles

```bash
npm run dev          # desarrollo en http://localhost:3000
npm run build        # build producción → verifica Server/Client components + prerender estático
npm install <pkg>    # instalar dependencia (verificar antes con package.json — regla de la skill)
```

## Trampas de Next 16 / Tailwind v4 (2026-08-11)

1. **`allowedDevOrigins` (importante)**: Next 16 bloquea por defecto los recursos de dev para hosts no permitidos. Sin `allowedDevOrigins: ['127.0.0.1', 'localhost']` en `next.config.mjs`, los chunks JS de `/_next/static/chunks/` dan **403**, el websocket HMR falla (`ERR_INVALID_HTTP_RESPONSE`) y **React nunca hidrata** (menú móvil muerto, reveals sin activar, pero el HTML SSR se ve bien). Si el preview "no reacciona a clics", revisar esto primero.
2. **LightningCSS y `backdrop-filter`**: declarar `backdrop-filter` y `-webkit-backdrop-filter` juntas en CSS custom hace que el compilador emita solo la versión prefijada y Chrome la compute como `none`. Usar únicamente la propiedad estándar.
3. **Escaneo de clases en caliente**: Turbopack a veces no genera clases nuevas sin reiniciar el dev server (ocurrió con `h-40`, `pt-44`, `top-40`). Ante clases que "no aplican" en dev: reiniciar el server antes de tocar el código.
4. **Gradientes**: en Tailwind v4 usar `bg-gradient-to-r` (alias compatible) o `bg-linear-to-r`; los gradientes compilan a `linear-gradient(... in oklab ...)`.

## Rediseño moderno (2026-08-11) — utilidades y convenciones

Aplicada la skill `skills/taste-skill.md` (dials VARIANCE 6 · MOTION 4 · DENSITY 5). Tema claro preservado (el logo es oscuro, requiere fondo claro).

**Utilidades custom en `app/globals.css`** (CSS puro, fuera de `@theme`):
- `.hero-mesh`, `.grid-pattern`, `.mesh-tile` — fondos decorativos de marca (gradientes púrpura + rejilla).
- `.glass` — glassmorphism (`backdrop-filter: blur(16px)` + borde blanco + inner highlight).
- `.text-gradient` — texto con gradiente de marca (usado en la frase clave del H1).
- `.glow-purple`, `.glow-purple-lg` — sombras teñidas al hue de marca (nunca sombras negras puras).
- `.nav-link` — subrayado animado con gradiente (usado en el nav del header).
- `.reveal` / `.is-visible` — scroll-reveal; activado por `components/Reveal.jsx` (IntersectionObserver, `'use client'`).
- `.animate-float-slow`, `.animate-pulse-dot` — micro-animaciones sutiles (todas desactivadas en `prefers-reduced-motion`).

**Componente `Reveal`** (`components/Reveal.jsx`): envuelve contenido para animarlo al entrar al viewport. Props: `delay` (ms, para stagger) y `className` (pasa clases al wrapper, ej. `md:col-span-5`). Se usa en casi todas las secciones.

**Cierre oscuro de la página (deliberado)**: `Contact.jsx` es una sección oscura (graphite + radial púrpura + rejilla, formulario glass) que fluye al `Footer.jsx` oscuro (`#0b0f1a`). Es un "Color Block Story" de cierre (regla 4.11 de la skill) — **no cambiar una de las dos sin la otra**.

**Header**: altura `h-20` (80px, tope de la skill), `bg-white/80 backdrop-blur-xl`. El logo sigue con `.header-logo` (64/72px).

## Bugs y problemas conocidos (detalle)

### Resueltos en la migración ✅
- Duplicado "Chatbots conversacionales" (módulo 4) — resuelto al pasar los datos a `MODULOS`.
- Tags desalineados en proyectos — resueltos en `PROYECTOS` (6 proyectos con tags correctos).
- `@apply` inerte con Tailwind CDN — eliminado; ahora Tailwind v4 compila de verdad.
- Módulo 5 vacío — ahora tiene 5 features (antes `script.js` no lo generaba).
- Google Fonts CDN — reemplazado por `next/font` self-hosted.
- Sin SEO/OG — ahora `metadata` en `app/layout.js`.

### Pendientes ⚠️
- **Formulario sin envío real**: `Contact.jsx` hace `preventDefault()` — no envía nada. Opción sin backend: abrir WhatsApp con datos pre-llenados.
- **WhatsApp**: `CONTACTO.whatsapp = '51929899484'`; el envío automático requiere Evolution API conectado.
- **Sin git**: el proyecto no tiene control de versiones.
- **`ANALISIS_ESTRUCTURA.md`** en la raíz: describe el sitio antiguo; candidato a mover a `legacy/` o eliminar.

## Logo (2026-08-11)

| Archivo | Uso |
|---|---|
| `public/logo.svg` | **Único archivo del logo** — `LOGO.svg` del cliente (1357x261, ratio 5.2, lockup panorámico con wordmark). Header y Footer |
| `app/icon.svg` | Favicon (ícono recortado 457x527) — aparte porque el logo panorámico no funciona como favicon |

**Dimensionado del header**: la clase CSS `.header-logo` (en `app/globals.css`) fija altura 64px (móvil) / 72px (desktop) con `width: auto` y `max-width: 70vw`. **No usar inline style para el header logo** — la clase CSS es la fuente de verdad y maneja responsive.

No crear más variantes del logo en `public/`: el logo es un solo archivo (`/logo.svg`).

**Importante**: el Header usa `style={{height:'2.25rem', width:'auto'}}` (no clase `h-10`) porque el escaneo de Tailwind v4/Turbopack no generó `.h-10`/`w-auto` en dev. Si vuelve a verse el logo gigante en el header, revisar primero si la clase compila en el CSS (`npm run build`) antes de tocar el inline style.
