---
name: memoria-fpsystems
description: Mantener y recuperar el contexto del proyecto FP Systems antes y después de cambios en la landing Next.js.
metadata:
  short-description: Memoria del proyecto FP Systems
---

# Memoria de FP Systems

Usa esta skill cuando trabajes en la landing de FP Systems o necesites recuperar decisiones previas del proyecto.

## Antes de editar

- Lee `docs/MEMORIA.md` y `docs/CONTEXTO-TECNICO.md`.
- Trata `app/`, `components/` y `data/content.js` como la versión vigente; `legacy/` es solo referencia histórica.
- Respeta el contenido en español, la paleta `brand.*`, las fuentes Inter/Sora, el mapa de iconos y los límites Server/Client Components.
- No edites `.freebuff/` ni `legacy/` salvo que el usuario lo pida expresamente.

## Después de editar

- Registra una entrada fechada en la sección “Historial de sesiones” de `docs/MEMORIA.md` con cambios, decisiones y verificación.
- Actualiza `docs/README.md` o `docs/CONTEXTO-TECNICO.md` si cambia la arquitectura, el contenido centralizado o los comandos.
- Ejecuta `npm run build` después de cambios estructurales y anota el resultado.
- Distingue placeholders y pendientes reales (por ejemplo, el WhatsApp `51900000000`) de problemas ya resueltos.

## Formato de historial

Usa un encabezado `### YYYY-MM-DD — <resumen> (<agente>)` y viñetas breves. No borres entradas anteriores; corrige documentación desactualizada solo cuando el cambio esté comprobado.
