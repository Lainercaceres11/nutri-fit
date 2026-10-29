# NutriFit

NutriFit es una aplicación web para explorar y comparar productos alimentarios. Permite consultar información nutricional y otros indicadores de productos registrados en Open Food Facts.

## Funcionalidades

- Explorar productos ordenados por popularidad.
- Filtrar el catálogo por país y categoría.
- Obtener información del producto por medio del código de barras
- Ver productos similares en los detalles del producto
- Consultar la información de un producto.
- Seleccionar productos y comparar sus datos, incluidos Nutri-Score, Eco-Score y grupo NOVA cuando están disponibles.
- Navegar los resultados con paginación.

## Tecnologías

- React y TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Open Food Facts API

## Requisitos

- Node.js y npm
- Acceso a internet para consultar Open Food Facts

## Instalación y ejecución

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un archivo `.env.local` en la raíz del proyecto y configura la URL base de la API:

   ```env
   VITE_API_URL=https://world.openfoodfacts.org/api/v2
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

Vite mostrará en la terminal la dirección local para abrir la aplicación.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Comprueba los tipos y genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión de producción. |
| `npm run lint` | Ejecuta ESLint. |

## Datos

Los datos son proporcionados por [Open Food Facts](https://world.openfoodfacts.org/), una base de datos colaborativa. La información puede ser incompleta o variar según el producto. NutriFit es un proyecto independiente y no está afiliado oficialmente con Open Food Facts; la información mostrada no sustituye el consejo de profesionales de la salud.
