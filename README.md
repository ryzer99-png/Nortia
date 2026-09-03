# NORTIA — Sitio Web Oficial & Plataforma de Seguros

Plataforma web de **NORTIA**, consultora especializada en asesoría, prevención estratégica y corretaje de seguros en Colombia (Personas, Hogar, Movilidad y Empresas).

Construido sobre **Astro**, combinando una arquitectura **Data-Driven** (textos y datos centralizados en JavaScript) con **Static Site Generation (SSG)** para un rendimiento del 100% y SEO nativo para motores de búsqueda.

---

## 🏛️ Arquitectura del Proyecto

El repositorio sigue las mejores prácticas y estándares de la industria para proyectos frontend escalables:

```text
Nortia/
├── public/                     # Archivos estáticos servidos directamente
│   ├── assets/img/             # Fotografías, logos de aseguradoras, isotipos
│   └── favicon.svg             # Ícono del sitio
│
├── src/
│   ├── components/             # Componentes modulares agrupados por dominio
│   │   ├── layout/             # Header, Footer, Drawer móvil, Botón WhatsApp
│   │   ├── home/               # Hero, Flip Cards, Editorial, Datos Oficiales, El Camino, TrustBanner
│   │   ├── subpage/            # Hero contextual, Análisis de Riesgo, Escenarios, Planes, FAQs
│   │   └── ui/                 # Componentes transversales (FinalCta, badges, botones)
│   │
│   ├── data/                   # 🧠 Fuente única de verdad (Diccionario de Contenidos)
│   │   ├── content.js          # Agregador maestro de contenidos
│   │   ├── global.js           # Marca, contacto, mensajes de WhatsApp, navegación
│   │   ├── home.js             # Contenido de la página de inicio
│   │   ├── assets.js           # Catálogo centralizado de URLs de imágenes
│   │   └── coverages/          # Ramo por ramo (Planes, FAQs, Riesgo)
│   │       ├── life.js         # Personas y familias (Salud / Vida)
│   │       ├── home.js         # Hogar y patrimonio
│   │       ├── business.js     # Empresas y pymes
│   │       └── mobility.js     # Movilidad, autos y motos
│   │
│   ├── layouts/                # Plantillas estructurales
│   │   └── Layout.astro        # Head, Meta tags, SEO, OpenGraph, Fuentes, Scripts
│   │
│   ├── pages/                  # Enrutamiento basado en archivos (URLs Limpias)
│   │   ├── index.astro         # / (Home)
│   │   ├── personas.astro      # /personas (Personas y Familias)
│   │   ├── hogar.astro         # /hogar (Hogar y Patrimonio)
│   │   ├── movilidad.astro     # /movilidad (Movilidad y Vehículos)
│   │   └── empresas.astro      # /empresas (Empresas y Pymes)
│   │
│   ├── scripts/                # Interactividad de cliente (sin generación de DOM)
│   │   └── interactions.js     # Flip cards, menú móvil, scroll reveal, anclas, WhatsApp
│   │
│   └── styles/                 # Sistema de diseño CSS modular
│       ├── styles.css          # Punto de entrada maestro
│       ├── base/               # Variables HSL, reset, tipografía y fuentes
│       ├── components/         # Botones, tarjetas, badges
│       ├── sections/           # Estilos específicos por sección
│       └── utilities/          # Animaciones y adaptabilidad responsive
│
├── astro.config.mjs            # Configuración estática de Astro
├── tsconfig.json               # Configuración TypeScript y Path Aliases (@)
├── deno.json                   # Definición de tareas y scripts de ejecución
└── package.json                # Metadatos del paquete y dependencias
```

---

## ⚡ Path Aliases (Importaciones Limpias)

El proyecto cuenta con alias de importación configurados en `tsconfig.json`. En lugar de rutas relativas como `../../data/content.js`, utiliza:

| Alias | Apunta a | Ejemplo de uso |
| :--- | :--- | :--- |
| `@components/*` | `src/components/*` | `import Header from '@components/layout/Header.astro'` |
| `@layouts/*` | `src/layouts/*` | `import Layout from '@layouts/Layout.astro'` |
| `@data/*` | `src/data/*` | `import { SITE_CONTENT } from '@data/content.js'` |
| `@styles/*` | `src/styles/*` | `import '@styles/styles.css'` |
| `@scripts/*` | `src/scripts/*` | `import { initInteractions } from '@scripts/interactions.js'` |

---

## ✍️ Manual de Edición de Textos

**Nunca es necesario editar archivos `.astro` ni `.html` para cambiar textos.** Todos los textos del sitio se gestionan en JavaScript puro dentro de `src/data/`:

1. **Textos del Home (Inicio):**
   Edita `src/data/home.js` para modificar el Hero, la filosofía de prevención, los pasos de *El Camino* o el banner de *Confianza y No recibimos dinero*.
2. **Planes, Precios o Preguntas Frecuentes:**
   Edita el archivo del ramo correspondiente en `src/data/coverages/`:
   * `life.js` (Personas, Vida, Salud)
   * `home.js` (Hogar y Patrimonio)
   * `mobility.js` (Autos, Motos, Bicicletas)
   * `business.js` (Empresas y Pymes)
3. **Número de WhatsApp, Redes o Navegación:**
   Edita `src/data/global.js` para cambiar teléfonos, correos o menús.

Al guardar los cambios, Astro actualiza automáticamente la vista en el navegador (hot reload) y pre-renderiza los nuevos textos en el HTML estático de producción.

---

## 🚀 Comandos de Ejecución

El proyecto utiliza **Deno** (o Node.js / npm):

### 1. Iniciar Servidor de Desarrollo
```bash
deno task dev
```
Inicia el entorno local en `http://localhost:4321` con recarga instantánea en tiempo real.

### 2. Compilar para Producción
```bash
deno task build
```
Genera la carpeta `dist/` con código HTML estático, CSS optimizado y assets listos para desplegar en cualquier hosting (Cloudflare Pages, Netlify, Vercel, AWS S3, etc.).

### 3. Previsualizar la Compilación
```bash
deno task preview
```
Levanta un servidor local simulando el entorno de producción para validar la carpeta `dist/`.

---

## 🌐 SEO y Rendimiento
- **0% JavaScript bloqueante de renderizado:** Todo el contenido semántico (`<h1>`, `<p>`, listas de beneficios) viene pre-renderizado en el HTML inicial.
- **OpenGraph Tags:** Títulos, descripciones y tipo de contenido configurados en `Layout.astro` para previsualizaciones en WhatsApp, LinkedIn y redes sociales.
- **Micro-interacciones optimizadas:** Giro de tarjetas (flip cards), menú drawer accesible por teclado y animaciones con `IntersectionObserver` que respetan `prefers-reduced-motion`.
