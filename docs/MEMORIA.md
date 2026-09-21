# MEMORIA del Proyecto — FP Systems

> Registro de contexto, decisiones tomadas e historial de trabajo. **Cada sesión de agente debe agregar una entrada nueva al historial al final de este archivo.**

## Propósito de este archivo

Evitar que cada sesión de agente empiece de cero. Aquí se registra:
- Lo que el proyecto es y lo que NO es.
- Decisiones de diseño ya tomadas (para no revertirlas por accidente).
- Problemas conocidos y pendientes.
- Historial de sesiones anteriores.

## Contexto del negocio

- **Empresa**: FP Systems (Figueroa + Panaifo).
- **Ubicación**: Iquitos, Loreto, Perú.
- **Mercado**: negocios, emprendedores, empresas e instituciones que operan con procesos manuales.
- **Propuesta de valor**: soluciones digitales a medida, simples y escalables, sin plantillas genéricas.
- **Copy del sitio**: tono cercano, sin tecnicismos excesivos, énfasis en "ordenar procesos" y "adaptarse a la realidad del negocio".

## Decisiones de diseño ya tomadas

| Decisión | Detalle |
|---|---|
| Sitio de una sola página | `app/page.js` ensambla la landing; navegación por anclas. |
| Tailwind local | Tailwind v4 se compila con `@tailwindcss/postcss`; no usar CDN ni `@apply` heredado. |
| Paleta de marca | Cian `#00AEB4`, `#00C2C7`, `#5EECEB`, con azul marino `#111827`. |
| Tipografías | Sora para títulos, Inter para lectura. |
| Contacto principal | WhatsApp (botón flotante + CTAs en planes y proyectos). |
| Contenido centralizado | Servicios, problemas, proyectos, razones, proceso y contacto viven en `data/content.js`. |
| Idioma | Todo el contenido en español (público peruano). |

## Problemas resueltos ✅

1. ✅ **Duplicado en `generateModulo4`** — corregido (2026-08-11): el feature `"Chatbots conversacionales"` duplicado fue eliminado.
2. ✅ **Tags desalineados en `generateProyectoTags`** — corregido (2026-08-11): los tags ahora corresponden a las 6 tarjetas reales (restaurante, tienda, veterinario, web, dashboard, automatización), incluyendo los proyectos 5 y 6 que antes no tenían datos.
3. ✅ **`@apply` inerte en CSS** — corregido (2026-08-11): `css/styles.css` reescrito en CSS puro (sin `@apply`, que no compila con Tailwind CDN). Las reglas personalizadas ahora funcionan de verdad.

## Problemas conocidos (aún sin resolver)

1. **Formulario sin envío**: no envía datos reales (previene el reload). Pendiente: implementar envío vía WhatsApp con datos pre-llenados.
2. **WhatsApp placeholder**: todos los enlaces usan `51900000000` (número de ejemplo) — centralizado en `data/content.js` (`CONTACTO.whatsapp`).
3. **Sin git**: el proyecto no tiene historial de control de versiones.
4. **`ANALISIS_ESTRUCTURA.md` desactualizado**: describe el sitio estático antiguo (ahora en `legacy/`).

## Nota de migración a React (2026-08-11)

El sitio estático original se movió a **`legacy/`** (index.html, css/, js/, assets/ + backups). La versión actual vive en el proyecto React/Next.js en la raíz. **No editar `legacy/`**: solo sirve como referencia histórica.

## Próximos pasos sugeridos

- [ ] Corregir bugs de `js/script.js` (duplicado + tags desalineados).
- [ ] Reemplazar números WhatsApp placeholder por los reales.
- [ ] Implementar envío del formulario (opción sin backend: abrir WhatsApp con los datos pre-llenados).
- [ ] Decidir si se mantiene Tailwind CDN o se migra a build local.
- [ ] Limpiar archivos `.backup`.
- [ ] Inicializar repositorio git.

## Historial de sesiones

### 2026-09-10 — Revisión del proyecto y skill de memoria (Codex)
- Se revisó la estructura vigente: landing en Next.js 16/App Router con export estático, React 19, Tailwind v4 y componentes en `components/`.
- La página actual ensambla Hero, Services, Problems, Portfolio, Differentiators, Contact, Footer y botones de WhatsApp desde `app/page.js`.
- El contenido editable continúa centralizado en `data/content.js`; el formulario de contacto abre WhatsApp con datos prellenados.
- Parte de la documentación anterior aún describe secciones migradas o componentes que ya no aparecen en `app/page.js`; usar el código vigente como fuente de verdad al hacer cambios.
- Se creó la skill reutilizable `skills/memoria-fpsystems/SKILL.md` para cargar contexto y registrar futuras sesiones.
- Verificación: `npm run build` completado correctamente; rutas estáticas `/`, `/_not-found` y `/icon.svg` generadas.

### 2026-09-10 — Imágenes del carrusel en portafolio (Codex)
- Las tarjetas de proyectos ahora reutilizan las imágenes existentes en `public/showcase/`.
- `components/Portfolio.jsx` muestra la imagen del proyecto con `object-cover` y gradiente de legibilidad.
- Se eliminaron los estados visuales “Screenshot pendiente” sin añadir assets nuevos.
- La tarjeta “Sistema para restaurante” usa ahora la imagen proporcionada por el usuario (`public/showcase/01_sistema_restaurante.jpg`, 1024×280 px).
- Se añadieron las imágenes proporcionadas para “Sistema para tienda” (`public/showcase/01_sistema_tienda.jpeg`) y “Dashboard administrativo” (`public/showcase/03_dashboard_administrativo.jpeg`).
- Se añadieron las imágenes proporcionadas para “Página web empresarial” (`public/showcase/02_pagina_web_empresarial.png`) y “Sistema veterinario” (`public/showcase/04_sistema_veterinario.png`).
- La tarjeta “Automatización avanzada” usa ahora la imagen proporcionada (`public/showcase/03_automatizacion_avanzada.png`).

### 2026-09-10 — Paleta visual alineada al logo (Codex)
- Se actualizó la paleta global de la landing para usar el púrpura del logo (`#551FB2`, `#6D28D9`, `#A78BFA`) y su grafito (`#1D2228`, `#3D4145`).
- Se reemplazaron acentos cian/teal en fondos, chips, iconos, focos, navegación y sombras por variaciones púrpura más sobrias.
- Se mantuvo el contraste con fondos claros, superficies blancas y cierres oscuros para evitar saturación visual.

### 2026-09-10 — Rediseño de sección de problemas (Codex)
- La sección “¿Tu negocio todavía trabaja así?” ahora usa una etiqueta de contexto, tarjetas numeradas en grid y un puente visual más claro hacia las soluciones.
- Los problemas conservan el indicador rojo como señal semántica; las soluciones usan tarjetas blancas con acento púrpura para reducir saturación.
- Verificación: `npm run build` completado correctamente.

### 2026-09-10 — Sección “Para tu negocio” (Codex)
- Se reemplazó el bloque “Nuestros servicios” por una presentación de nueve rubros: Restaurantes, Hoteles, Cafeterías, Ferreterías, Bodegas, Pastelerías, Restobares, Tiendas y Heladerías.
- Los rubros viven en `RUBROS` dentro de `data/content.js` y usan iconos registrados en `components/icons.jsx`.
- Se conservó el ancla `#servicios` para mantener la navegación existente.
- Verificación: `npm run build` completado correctamente.

### 2026-09-10 — Ajuste de tamaño del logo (Codex)
- Se redujo el logo del encabezado a 36 px en móvil, 44 px en tablet y 48 px en escritorio, manteniendo su proporción y una anchura máxima más contenida.

### 2026-09-11 — Reducción de contenido repetido (Codex)
- Se retiraron las cuatro etiquetas de soluciones de la sección de problemas; ahora queda un único enlace directo al contacto.
- Se eliminaron los badges “Demo” repetidos del portafolio y se redujeron los diferenciales de seis a cuatro.
- Se quitó la columna de servicios duplicada del footer, manteniendo navegación y contacto.

### 2026-09-11 — Simplificación del bloque de problemas (Codex)
- Se redujo la sección a tres problemas principales: registros manuales, inventario sin control y reportes manuales.
- Se actualizó el título y el texto de apoyo para comunicar el problema con mayor claridad.
- El CTA ahora invita a conversar sobre una solución para el negocio.

### 2026-09-11 — Favicon y título de pestaña (Codex)
- Se añadió el icono proporcionado por el usuario como `app/icon.png` para usarlo como favicon.
- Se retiró el favicon SVG anterior para evitar que el navegador elija un icono distinto.

### 2026-09-11 — Limpieza de botones del Hero (Codex)
- Se retiraron los botones “Cotizar proyecto” y “Ver soluciones” del Hero según indicación del usuario.
- El título del navegador y Open Graph ahora muestran únicamente “FP Systems”.

### 2026-08-11 — Producto SaaS "Con Control" destacado (Buffy)
- El cliente indicó que vende un **sistema SaaS llamado "Con Control"** y adjuntó su captura (PNG 1254x1254, ~2MB).
- **Imagen**: optimizada con ffmpeg a `public/con-control.webp` (1000x1000, ~143KB — de 2MB a 143KB).
- **Nueva sección `#con-control`** entre "Qué hacemos" y "Problemas": `components/ProductShowcase.jsx` (split layout: captura con glow púrpura + texto con eyebrow "Sistema SaaS", características y CTA "Cotizar Con Control" vía WhatsApp).
- **Datos en `data/content.js`**: nuevo objeto `CON_CONTROL` (titulo, descripcion, caracteristicas, imagen, cta). Las 4 características actuales son genéricas de SaaS (acceso web, sin instalación, datos centralizados, actualizaciones) — **TODO pendiente: completar con las características reales del producto**.
- Detalle: el `loading="lazy"` no se disparaba en el preview → se quitó (es la única imagen del sitio).
- Verificado: build OK, imagen carga 1000x1000, CTA apunta a `wa.me/51900000000` (placeholder).

### 2026-08-11 — Rediseño moderno con taste-skill (Buffy)
- **Objetivo**: diseño más moderno aplicando la skill taste-skill instalada (`skills/taste-skill.md`).
- **Dials**: `DESIGN_VARIANCE: 6` · `MOTION_INTENSITY: 4` · `VISUAL_DENSITY: 5`. Tema claro preservado (el logo `LOGO.svg` es oscuro y requiere fondo claro).
- **Cambios visuales**:
  - `app/globals.css`: nuevas utilidades — `hero-mesh` (radial gradients púrpura), `grid-pattern` (rejilla de marca), `mesh-tile` (tiles de módulos), `.glass` (glassmorphism), `.text-gradient` (texto gradiente de marca), `.glow-purple` (sombras teñidas al hue de marca), `.nav-link` (subrayado animado), scroll-reveal (`.reveal`/`.is-visible` con `prefers-reduced-motion` respetado), animaciones `float-slow` y `pulse-dot`.
  - `components/Reveal.jsx` (NUEVO): scroll-reveal con IntersectionObserver (una sola activación, stagger vía `delay`).
  - `Header`: `h-24` → `h-20` (80px, tope de la skill), fondo `bg-white/80 backdrop-blur-xl`, CTA con gradiente + glow, subrayado animado en nav.
  - `Hero`: fondo mesh + rejilla + orbes flotantes, eyebrow glass con punto de estado pulsante, H1 más grande con `tracking-tighter` y frase clave en gradiente, tarjeta-dashboard oscura (contraste premium, estilo screenshot de producto) con glow púrpura y flotación.
  - `Services`: bento con variedad — tarjetas alternadas claro/oscuro con iconos que se rellenan al hover.
  - `Problems`: chips con icono en contenedor rojo suave + reveal.
  - `Modules`: cajas grises → tiles con gradiente de marca + rejilla + icono en chip blanco con glow.
  - `Portfolio`, `WhyUs`, `Process`, `Plans`, `About`: tarjetas con hover lift + glow púrpura, badges con gradiente, cita estilizada con barra de marca, línea conectora en proceso.
  - `Contact`: sección OSCURA (cierre deliberado tipo Color-Block con gradient púrpura + rejilla) con formulario glass y campos con ring de focus; `Footer` oscuro refinado (`#0b0f1a`) — juntos forman el cierre oscuro de la página.
  - `WhatsAppButton`: glow verde + hover lift.
- **Bug de Next 16 resuelto**: el dev server bloqueaba por defecto los recursos de dev para `127.0.0.1` (chunks JS 403 + HMR websocket caído → React nunca hidrataba, menú móvil y reveals muertos). Fix: `allowedDevOrigins: ['127.0.0.1', 'localhost']` en `next.config.mjs`. **Síntoma para detectarlo**: 403 en `/_next/static/chunks/*` y `ERR_INVALID_HTTP_RESPONSE` en el websocket HMR.
- **Quirk de LightningCSS**: declarar `backdrop-filter` + `-webkit-backdrop-filter` juntas en CSS custom hace que LightningCSS emita SOLO la versión prefijada y Chrome la compute como `none`. Fix: dejar solo la propiedad estándar en `.glass`.
- **Verificado**: build OK, consola limpia (`[HMR] connected`), 55 elementos reveal activándose al scroll, header 80px, CTA gradiente + glow, `.glass` computando `blur(16px)`.

### 2026-08-11 — Logo definitivo LOGO.svg (panorámico) (Buffy)
- **Nuevo logo definitivo**: `public/logo.svg` = `LOGO.svg` del cliente (1357x261, ratio 5.2, lockup panorámico con wordmark).
- **Header**: altura reducida a `h-24` (96px); logo con clase CSS `header-logo` en `app/globals.css` (64px móvil / 72px desktop, `max-width: 70vw` para móvil). Se usa CSS custom en vez de Tailwind inline para no depender del escaneo de Turbopack.
- **Hero**: padding `pt-32`/`md:pt-36` (ajustado al header de 96px).
- **Footer**: logo a 32px de alto (166px ancho) — correcto para columna de footer.
- **Razón del cambio de tamaño**: el logo anterior (1536x1024, ratio 1.5) era más cuadrado; el nuevo es panorámico (ratio 5.2), por eso a la misma altura se ve más ancho. A 148px de alto mediría ~770px (demasiado para el header), por eso se bajó a ~64-72px.

### 2026-08-11 — Logo a 222x148 en el header + puerto fijo 3000 (Buffy)
- **Logo del header a 222x148 exactos** (inline style en `components/Header.jsx`), header agrandado a `h-40` (160px) y menú móvil a `top-40`.
- **Hero**: padding superior subido a `pt-44`/`md:pt-48` para que el H1 no quede oculto bajo el header más alto.
- **Importante**: el escaneo en caliente de Turbopack NO generó las clases nuevas (`h-40`, `pt-44`, `top-40`); fue necesario **reiniciar el dev server** para que compilaran.
- **`package.json`**: script `dev` ahora es `next dev -p 3000` (puerto fijo; antes Next elegía puerto aleatorio como 49692).
- **`next.config.mjs`**: eliminada la clave inválida `turbopack.watchOptions` (no existe en Next 16 — causaba warning).
- **Verificado**: logo 222x148, header 161px, H1 visible, `h-40`/`pt-44`/`top-40` presentes en CSS compilado, HTTP 200.

### 2026-08-11 — Logo definitivo: un solo archivo completo (Buffy)
- **El logo completo vive en un único archivo**: `public/logo.svg` (1536x1024, wordmark incluido), origen `ChatGPT Image 6 jul 2026...-Photoroom.svg` (Downloads).
- **Eliminado** `public/logo-icon.svg` (la versión previa usaba 2 archivos — se consolidó en 1).
- **Uso**: Header (`style={{height:'2.25rem'}}`, render 54x36) y Footer (32px, render 48x32).
- **Favicon**: `app/icon.svg` conserva el ícono recortado (457x527) porque un logo apaisado no se ve bien como favicon de 16/32px.
- **Nota técnica**: el header usa inline style porque el CSS compilado no generó `.h-10`/`w-auto` (issue de escaneo Tailwind v4/Turbopack en dev).
- **Verificado**: header 54x36 sin overflow, footer 48x32, favicon OK.

### 2026-08-28 — Logo del footer reemplazado (Buffy)
- **Nuevo logo del footer**: imagen PNG del cliente (`ChatGPT Image 28 ago 2026...png`) — logo blanco sobre fondo oscuro, ideal para el footer oscuro (`#0b0f1a`).
- **Optimizado**: PNG 193KB → WebP 18KB (800px ancho, calidad 90%) en `public/logo-footer.webp`.
- **`components/Footer.jsx`**: `<img>` ahora usa `/logo-footer.webp` en vez de `/logo.svg` — altura `h-8` (32px), render 96x32.
- **Eliminado** `public/logo-footer.png` (solo se conserva el WebP).
- El logo del header sigue siendo `public/logo.svg` (el lockup panorámico oscuro para fondo claro).
- **Verificado**: imagen carga (800x267 natural, 96x32 display), build OK.

### 2026-08-11 — Reemplazo de logo por el nuevo de FP Systems (Buffy)

### 2026-08-11 — Migración completa a React/Next.js (Buffy)
- **Migrado TODO el sitio estático a React**: Next.js 16 (App Router, export estático) + React 19 + Tailwind v4 (`@tailwindcss/postcss`) + lucide-react + next/font (Inter/Sora self-hosted, sin CDN).
- **Estructura**: `app/` (layout, page, globals.css), `components/` (14 componentes: Header, Hero, Services, Problems, Modules, Portfolio, WhyUs, Process, Plans, About, Contact, Footer, WhatsAppButton, Icon), `data/content.js` (todo el contenido centralizado y editable).
- **Eliminado**: Tailwind CDN, `@apply` muerto, Google Fonts CDN, `script.js` con render dinámico — todo ahora es React con componentes tipados por datos.
- **Mejoras de la migración**: el módulo 5 (Redes y presencia digital) ahora muestra sus 5 features (antes quedaba vacío porque `script.js` no tenía función para él); menú móvil como componente cliente con estado; formulario como Client Component con `preventDefault`.
- **Ganancia con la skill taste-skill**: fuentes `next/font` (regla 3.A), un solo acento de color, sin CDN en producción, build de producción verificado (`next build` OK, static prerender).
- **Verificado**: `npm run build` exitoso; preview en dev server; H1 con Sora aplicada, paleta brand `#6D28D9` aplicada, 58 iconos Lucide renderizados, menú móvil funcional.

### 2026-08-11 — Aplicación de taste-skill (rediseño preservando marca) (Buffy)
- **Skill instalada**: `skills/taste-skill.md` (design-taste-frontend, v2 del repo Leonxlnx/taste-skill) — skill anti-slop de frontend.
- **Design Read**: landing de estudio de desarrollo local (Iquitos, Perú) para dueños de PYMES, lenguaje profesional/confiable en español, acento púrpura de marca.
- **Dials**: `DESIGN_VARIANCE: 5` · `MOTION_INTENSITY: 3` · `VISUAL_DENSITY: 5` (Redesign-Preserve: se mantuvo IA, copy y marca púrpura).
- **Cambios aplicados** (Levers 1-4 de la skill):
  - `index.html`: padding del hero reducido (`pt-28/md:pt-32`), `tracking-tight` en H1/H2, emoji 💡 reemplazado por icono Lucide sparkles, CTAs unificados a "Cotizar proyecto" + estado `active:scale-[0.98]`, eyebrows "Módulo 0X" → etiquetas semánticas ("Desarrollo a medida", "Rubros específicos", "Diseño web profesional", "Automatización e IA", "Redes y presencia digital"), `max-w-[65ch]` en párrafos de soluciones.
  - `js/script.js`: corregidos los bugs 1 y 2 (ver arriba).
  - `css/styles.css`: reescrito en CSS puro, `text-wrap: balance` en títulos, `prefers-reduced-motion`, placeholder con contraste AA, estados activos táctiles.
- **No se tocó**: copy de secciones, paleta de marca púrpura, IA del sitio, enlaces WhatsApp (siguen placeholder).

### 2026-08-11 — Análisis inicial y creación de estructura de conocimiento (Buffy)
- Se analizó el proyecto completo: estructura, contenido, JS y CSS.
- Se documentó el proyecto en `docs/` (README, MEMORIA, CONTEXTO-TECNICO).
- Se crearon `skills/` (audit-landing, dev-fpsystems) y `agents/agent-landing.md`.
- Hallazgos principales: 2 bugs en `script.js`, `@apply` inerte con Tailwind CDN, formulario sin envío, WhatsApp placeholder, sin git.
- **No se modificó código del sitio** — solo se creó documentación y estructura de conocimiento.

### 2026-09-13 — Integración del formulario con API de WhatsApp (Codex)
- Se creó el backend independiente `C:\Users\fredl\Desktop\fp-api` con Express, Helmet, CORS restringido, rate limit, validación y rutas `/health`, `/contacto` y `/webhooks/evolution`.
- El formulario de `components/Contact.jsx` ahora envía el lead por `POST` a `NEXT_PUBLIC_FP_API_URL`, incluye teléfono, rubro, presupuesto, consentimiento, estados de envío y fallback directo al WhatsApp actual.
- La comunicación con Evolution API quedó centralizada en `src/services/whatsapp.service.js`, usando el endpoint oficial v2 `/message/sendText/{instance}` y credenciales solo en `.env`.
- Se agregaron `.env.example`, README y guía de configuración. No se incorporaron secretos, IA, CRM, base de datos ni endpoints API al frontend estático.
- **Verificado**: `npm run build` de la landing exitoso; `GET http://localhost:4000/health` responde `{ok:true,service:'fp-api'}`; validación inválida devuelve 400 controlado. Evolution queda pendiente de configurar con una instancia real y número real.

### 2026-09-17 — Actualización del número de WhatsApp (Codex)
- Se actualizó el contacto de FP Systems a formato internacional de Perú en `data/content.js` y `fp-api/.env`.
- **Pendiente**: configurar la clave y la instancia reales de Evolution API; el número ya queda preparado para los enlaces y notificaciones.

### 2026-09-17 — Icono oficial de WhatsApp en botón flotante (Codex)
- Se añadió `public/icons/whatsapp.svg` desde el repositorio open source Simple Icons (licencia CC0 indicada por el proyecto).
- `components/WhatsAppButton.jsx` ahora muestra el logotipo de WhatsApp en blanco dentro del botón verde, manteniendo el enlace directo al número configurado.
- **Verificado**: `npm run build` exitoso.

### 2026-09-17 — Facebook agregado al footer (Codex)
- Se centralizó el enlace de Facebook en `REDES_SOCIALES` dentro de `data/content.js`.
- Se añadió el icono local `public/icons/facebook.svg` desde Simple Icons y un botón accesible en `components/Footer.jsx` que abre el perfil en una pestaña nueva.
- **Verificado**: `npm run build` exitoso.

### 2026-09-17 — Ocultar indicador de desarrollo de Next.js (Codex)
- Se añadió `devIndicators: false` en `next.config.mjs` para retirar el botón circular de herramientas de desarrollo que aparecía sobre la landing.
- Se reinició el servidor y se verificó que el indicador ya no aparece en el DOM de la página.

### 2026-09-17 — API key de Evolution configurada (Codex)
- Se guardó la clave proporcionada por el usuario en `fp-api/.env` (archivo ignorado por git) y se reinició el backend.
- **Verificado**: `GET http://localhost:4000/health` responde correctamente. Evolution API aún no responde en `localhost:8080`, por lo que falta iniciar el servicio y conectar la instancia de WhatsApp.

### 2026-09-20 — Limpieza previa a publicar en GitHub (Codex)
- Se eliminaron artefactos generados o temporales: `out/`, `build-check.txt`, `.claude/`, `assets/` vacío y `ANALISIS_ESTRUCTURA.md` obsoleto.
- Se conservaron `legacy/`, `docs/` y `skills/` porque contienen referencia histórica y memoria operativa del proyecto.
- Se actualizaron las notas de documentación que todavía mostraban el número de WhatsApp antiguo.
- **Verificado**: `npm run build` exitoso; la carpeta `out/` se retiró después de validar porque está ignorada y se regenera automáticamente.

---
*Para registrar una nueva sesión, agrega una entrada con fecha, agente y resumen al final de la sección Historial.*
