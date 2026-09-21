# FP Systems — Landing Page (React/Next.js)

> Documento de referencia para cualquier agente (Claude Code, Freebuff, etc.) que trabaje en este proyecto. Léelo primero antes de hacer cambios.

## ¿Qué es FP Systems?

**FP Systems** es un estudio de desarrollo de software con base en **Iquitos, Loreto, Perú**, fundado por Figueroa y Panaifo. Su propuesta: convertir procesos manuales (cuadernos, Excel, mensajes sueltos) en sistemas digitales claros y a medida para negocios, empresas e instituciones.

Este repositorio contiene la **landing page institucional** (una sola página) que presenta la empresa y sus servicios. **Migrado a React/Next.js en 2026-08-11** (antes era HTML estático con Tailwind CDN — la versión antigua vive en `legacy/`).

## Servicios principales

1. **Sistemas personalizados** — ventas, inventario, clientes, pedidos, caja, reportes, usuarios, procesos internos.
2. **Páginas web empresariales** — diseño y desarrollo web moderno, responsive, con consultas por WhatsApp o formularios.
3. **Soluciones avanzadas** — automatizaciones, dashboards, reportes inteligentes, herramientas con IA.
4. **Apoyo digital para redes** — revisión de redes, flyers, banners, publicaciones e imagen visual básica.

## Datos clave de contacto

| Dato | Valor actual |
|---|---|
| Email | `contacto@fpsystems.com` |
| WhatsApp | `51929899484` (configurado en `data/content.js`) |
| Ubicación | Iquitos, Loreto, Perú |

> ⚠️ El número de WhatsApp está centralizado en `data/content.js` → `CONTACTO.whatsapp`. Cambiarlo ahí actualiza todos los enlaces del sitio.

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16 (App Router) | Framework React, export estático (`output: 'export'`) |
| React | 19 | Librería UI |
| Tailwind CSS | v4 (`@tailwindcss/postcss`) | Estilos con tema de marca `@theme` |
| lucide-react | ^1.31 | Iconografía (el proyecto ya dependía de Lucide) |
| next/font | — | Inter (cuerpo) + Sora (títulos), self-hosted, sin CDN |

## Estructura del proyecto

```
├── app/
│   ├── layout.js           # Fuentes next/font, metadata SEO, globals
│   ├── page.js             # Ensambla las 12 secciones
│   └── globals.css         # Tailwind v4 + tema brand.* + estilos custom
├── components/             # 14 componentes (uno por sección)
│   ├── Header.jsx          # Navbar fijo con menú móvil (Client Component)
│   ├── Hero.jsx, Services.jsx, Problems.jsx, Modules.jsx, Portfolio.jsx
│   ├── WhyUs.jsx, Process.jsx, Plans.jsx, About.jsx, Contact.jsx
│   ├── Footer.jsx, WhatsAppButton.jsx, icons.jsx
├── data/
│   └── content.js          # ⭐ TODO el contenido editable del sitio
├── legacy/                 # ⚠️ Sitio estático antiguo — NO editar, solo referencia
├── docs/                   # Conocimiento del proyecto (empieza aquí)
├── skills/                 # Skills reutilizables (incluye taste-skill.md)
└── agents/                 # Definiciones de agentes especializados
```

## Arquitectura del sitio (12 secciones)

1. Header/Navbar fijo con menú mobile/desktop
2. Hero principal (`#inicio`)
3. Qué hacemos (`#que-hacemos`) — 4 servicios
4. Problemas que resolvemos
5. Servicios detallados — 5 módulos
6. Portafolio/Proyectos (`#proyectos`) — 6 tarjetas demo con tags
7. Por qué elegirnos
8. Proceso de trabajo (`#proceso`) — 5 pasos
9. Planes/tipos de solución — 4 tarjetas con CTA WhatsApp
10. Sobre nosotros (`#nosotros`)
11. Contacto (`#contacto`) — formulario + email
12. Footer

## Comandos

```bash
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo (http://localhost:3000)
npm run build        # build de producción (genera out/ estático)
```

## Nota sobre el estado del proyecto

- ✅ **React/Next.js con build de producción verificado** (`next build` OK, prerender estático).
- ✅ Tailwind v4 con build local (sin CDN), fuentes self-hosted.
- ⚠️ **Sin control de versiones**: no es un repositorio git (`git init` pendiente).
- ⚠️ El envío de WhatsApp requiere Evolution API conectado y una instancia real configurada en `fp-api/.env`.
