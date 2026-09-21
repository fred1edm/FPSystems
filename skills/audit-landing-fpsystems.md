---
name: audit-landing-fpsystems
description: Auditar la landing page de FP Systems: revisar estructura, contenido, JS y CSS, y reportar problemas encontrados. Úsala cuando te pidan analizar el proyecto, revisar su estado, o verificar que todo funciona.
---

# Skill: Auditoría de la Landing FP Systems

## Cuándo usar

- El usuario pide "analizar", "revisar" o "auditar" el proyecto.
- Se sospecha que algo no funciona o que hay contenido desactualizado.
- Antes de una entrega al cliente o de publicar.

## Pasos

1. **Leer el contexto del proyecto** (si no está fresco):
   - `docs/README.md` — visión general y servicios.
   - `docs/CONTEXTO-TECNICO.md` — stack, bugs conocidos, convenciones.
   - `docs/MEMORIA.md` — historial y decisiones previas.

2. **Revisar estructura**: `index.html`, `css/styles.css`, `js/script.js`, `assets/`. Verificar que los archivos referenciados existen (no hay 404 en `src`/`href`).

3. **Revisar `js/script.js`**:
   - ¿Todos los `getElementById` apuntan a IDs que existen en el HTML?
   - ¿Los arrays de datos corresponden a las tarjetas/secciones del HTML?
   - ¿Hay duplicados en los arrays de features/tags?
   - ¿Se llama `lucide.createIcons()` después de cada inyección de HTML con iconos?

4. **Revisar `css/styles.css`**:
   - ¿Usa `@apply`? → No compila con Tailwind CDN en CSS externo (es código muerto). Reportarlo y sugerir opciones.

5. **Revisar el HTML**:
   - ¿Los enlaces WhatsApp usan el número real o el placeholder `51900000000`?
   - ¿El formulario tiene `action` real o `"#"`?
   - ¿Faltan meta tags SEO/OG/favicon?
   - ¿Los IDs de sección de la navbar (`#inicio`, `#que-hacemos`, `#proyectos`, `#proceso`, `#nosotros`, `#contacto`) existen como anclas?

6. **Reportar en formato claro**:
   - ✅ Lo que está bien.
   - ⚠️ Problemas encontrados (con archivo y aproximación de línea).
   - 💡 Sugerencias de mejora ordenadas por prioridad.
   - No corregir nada sin que el usuario lo pida; el objetivo de la skill es auditar y reportar.

## Checklist rápido

- [ ] Todos los recursos cargan (no hay rutas rotas).
- [ ] Los 6 proyectos del portafolio tienen tags que corresponden a su tarjeta.
- [ ] No hay features duplicados en `generateModulo*`.
- [ ] Los enlaces WhatsApp apuntan al número real.
- [ ] El formulario tiene un destino de envío funcional.
- [ ] No hay reglas `@apply` inertes confundiendo el CSS.
