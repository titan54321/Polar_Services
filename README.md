# Polar

Landing page para Polar, técnico instalador de aires acondicionados.

## Publicación

Cada `push` a `main` publica el sitio en GitHub Pages con el workflow `.github/workflows/pages.yml`.
Solo se publican `index.html`, `styles.css`, `script.js` y `assets/`.

Sitio: https://titan54321.github.io/Polar_Services/

## Ver en local

```bash
python3 -m http.server 5173
```

Abre http://localhost:5173

## Logo

Hay dos espacios reservados en `index.html` (marcados con comentarios):
- En la barra de navegación (`.logo-slot--sm`)
- En el hero (`.logo-slot--lg`), reemplazar por `<img class="hero-logo" src="assets/img/logo.svg" alt="Logo de Polar">`

## Créditos

Imagen de fondo: Unsplash (licencia Unsplash).
