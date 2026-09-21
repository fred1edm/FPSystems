---
name: dev-fpsystems
description: Desarrollar y editar la landing de FP Systems siguiendo sus convenciones: contenido en español, paleta brand.*, iconos Lucide, clases Tailwind inline, y actualizar la documentación (docs/MEMORIA.md) al finalizar.
---

# Skill: Desarrollo de la Landing FP Systems

## Cuándo usar

- El usuario pide cambiar contenido, corregir bugs, añadir secciones o mejorar la landing.
- Cualquier tarea que modifique `index.html`, `css/styles.css` o `js/script.js`.

## Contexto del stack (obligatorio)

- **React + Next.js 16** (App Router): el sitio vive en `app/` y `components/`.
- **Todo el contenido editable está en `data/content.js`** — nunca hardcodear copy en JSX.
- **Tailwind v4** (build local con `@tailwindcss/postcss`): la paleta de marca `brand.*` se define en `@theme` en `app/globals.css`:
  - `brand-purpleDark` `#551FB2`, `brand-purpleBright` `#6D28D9`, `brand-purpleGlow` `#A78BFA`
  - `brand-graphite` `#1D2228`, `brand-darkGray` `#3D4145`, `brand-lightGray` `#F8F7FC`
- **Fuentes**: títulos con clase `font-title` (Sora), cuerpo `font-sans` (Inter), ambas via `next/font` self-hosted en `app/layout.js`.
- **Iconos**: siempre via el mapa `components/icons.jsx` — `<Icon name="cpu" className="..." />`. Registrar iconos nuevos en el mapa.
- **Server vs Client**: Server Component por defecto; `'use client'` solo donde hay estado/eventos (Header, Contact).

## Reglas al editar

1. **Siempre en español** (comentarios y contenido).
2. **Edita el contenido en `data/content.js`**, no en los componentes.
3. **Usa la paleta `brand.*`**, nunca colores hardcodeados si existe equivalente.
4. **No pases handlers/eventos a Server Components** — convierte el componente a `'use client'` (Header, Contact).
5. **Nunca toques `.freebuff/`** (base de datos interna de la app) ni `legacy/` (sitio antiguo, solo referencia).
6. **Valida con `npm run build`** después de cambios estructurales; `npm run dev` para desarrollo.

## Flujo recomendado

1. Leer `docs/CONTEXTO-TECNICO.md` (bugs conocidos) y `docs/MEMORIA.md` (decisiones previas).
2. Hacer el cambio en `data/content.js` (contenido) o en el componente correspondiente.
3. Validar con `npm run build` (verifica Server/Client components y prerender) y revisar en `npm run dev`.
4. **Actualizar la documentación**:
   - Si el cambio corrige un bug: moverlo de "Problemas conocidos" a "Historial" en `docs/MEMORIA.md`.
   - Si el cambio añade secciones/servicios: reflejarlo en `docs/README.md` y `docs/CONTEXTO-TECNICO.md`.
   - Agregar entrada al historial de sesiones en `docs/MEMORIA.md`.

## Errores comunes a evitar

- Pasar `onSubmit`/handlers a un Server Component (error de build).
- Mover las variables de `next/font` del `<html>` al `<body>` (Tailwind v4 no las resuelve).
- Hardcodear copy en JSX en vez de `data/content.js`.
- Usar un icono no registrado en `components/icons.jsx`.
- Editar `legacy/` o `.freebuff/`.
- Dejar el número de WhatsApp placeholder (`51900000000`) en CTAs nuevos.
