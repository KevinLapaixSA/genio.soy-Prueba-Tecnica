# genio.soy - Prueba Técnica

Este proyecto es un sitio web tipo blog creado como parte de la prueba técnica para genio.soy de Kevin Ochoa Lapaix. El sitio está desarrollado utilizando Next.js y TypeScript, integrando la API pública de [fernandafamiliar.soy](https://fernandafamiliar.soy/wp-json) para mostrar los posts.

## Descripción

El sitio web contiene dos vistas principales:
1. **Home:** Listado de la primera página de posts.
2. **Detalle del Post:** Vista detallada de cada post al hacer clic en él.

## Tecnologías Utilizadas

- **Next.js:** Framework de React para aplicaciones web.
- **TypeScript:** Superset de JavaScript que agrega tipos estáticos.
- **Tailwind CSS:** Framework de CSS utilitario para estilos rápidos y personalizados.
- **Axios:** Librería para realizar peticiones HTTP.
- **GA4 y GTM:** Herramientas de Google para medir y analizar el tráfico y las interacciones del sitio web.

## Estructura del Proyecto

```plaintext
genio-test/
├── public/
│   ├── fonts/
│   │   ├── OldLondon.tff
│   │   ├── OldLondonAlternate.ttf
│   ├── images/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HomePage.tsx
│   │   ├── ImageModal.tsx
│   │   ├── ImageSlider.tsx
│   │   ├── PostDetail.tsx
│   │   ├── PostList.tsx
│   ├── pages/
│   │   ├── post/
│   │   │   ├── [id].tsx
│   ├── services/
│   │   ├── api/
│   │   │   ├── wordpress.ts
├── .eslintrc.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
```

## Decisiones del Proyecto
1. Elección de Next.js y TypeScript
Next.js mas allá de la indicación especifica de su uso fue seleccionado por su capacidad para renderizado del lado del servidor (SSR), lo que mejora el rendimiento y el SEO del sitio. TypeScript se utilizó para aprovechar los beneficios de los tipos estáticos, mejorando la robustez y mantenibilidad del código.

2. Uso de Tailwind CSS
Tailwind CSS permitió un desarrollo de estilos rápido y eficiente mediante clases utilitarias, asegurando un diseño limpio y coherente sin necesidad de escribir CSS personalizado desde cero.

3. Integración de la API de fernandafamiliar.soy
Implementado como uno de los requisitos basicos y fundamentales para la prueba tecnica. Se utilizo la API pública de fernandafamiliar.soy para obtener los datos de los posts, aprovechando la simplicidad de esta API y asegurando que los datos estén siempre actualizados.

4. Análisis con GA4 y GTM
GA4 y GTM fueron integrados para medir el tráfico y las interacciones de los usuarios. Esto permite obtener información valiosa sobre el comportamiento de los usuarios y mejorar la experiencia del sitio web basado en estos datos.

5. Diseño Responsivo y Accesibilidad
El diseño del sitio se implementó con un enfoque en la accesibilidad y la experiencia del usuario. Se utilizaron componentes de Tailwind CSS para asegurar que el sitio sea completamente responsivo y accesible en todos los dispositivos. Investigue los colores, diseños y criterios que utilizaban diversos medios de noticias en sus blogs para implemtarlos en este proyectos, escogiendo una paleta de colores minimalista que diera una apariencia limpia, profesional y sencilla de entender de forma que la atención del usuario se encontrara rapidamente con las imagenes y los botones de "Leer Nota", así mismo jugue con la presentación de los primeros Post para dar crear un efecto de importancia a los mas recientes.

## Cómo Ejecutar el Proyecto
1. Clona el repositorio:

```
git clone https://github.com/tu-usuario/genio-soy-blog.git
cd genio-soy-blog
```
2. Instala las dependencias:

```
npm install
```

3. Inicia el servidor de desarrollo:

```
npm run dev
```

4. Abre tu navegador y visita http://localhost:3000.

## Contacto

Para cualquier consulta, por favor contacta a kochoa@fevaq.net