export const site = {
  name: "Bastian Guerra",
  handle: "rizzo",
  role: "Ingeniero en Tecnologías de la Información · Software Engineer",
  location: "Coquimbo, Chile",
  email: "bastianalonso92@gmail.com",
  github: "https://github.com/rizzot0",
  linkedin: "https://www.linkedin.com/in/bastian-guerra/",
  personalSite: "https://landing-page-rizzoto.netlify.app/",
  availability: "Disponible para trabajo y proyectos",
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
  study?: boolean;
};

export const projects: Project[] = [
  {
    slug: "plan-vial",
    number: "01",
    title: "Plan Vial",
    eyebrow: "Ruteo geoespacial & Teoría de grafos · Demo público",
    summary:
      "Plataforma de análisis y planificación de rutas urbanas basada en teoría de grafos. Calcula trayectorias óptimas utilizando el algoritmo de Dijkstra con cola de prioridad, persistencia en PostgreSQL y frontend reactivo con Leaflet.",
    problem:
      "El sistema original consistía en un monolito legado en Java con alta fricción de despliegue y acoplamiento. Se requería re-arquitecturar toda la solución hacia un backend moderno y de alto rendimiento en FastAPI (Python), modelar la red vial urbana en SQLite y desplegarlo en la nube con soporte de cuentas de usuario, persistencia de rutas y sesiones JWT.",
    approach: [
      "Re-arquitectura y migración completa de Java monolítico a microservicio FastAPI (Python) y SPA interactiva con React + Leaflet.",
      "Optimización del cálculo de caminos mínimos mediante Dijkstra con min-heap sobre redes viales complejas con complejidad O((V + E) log V).",
      "Persistencia híbrida y desacoplada: SQLite embebido para el grafo vial estático y PostgreSQL en la nube para autenticación JWT y rutas guardadas.",
      "Geocodificación integrada mediante el servicio Nominatim (OpenStreetMap) con soporte de búsqueda textual y selección por clic en el mapa.",
      "Contenerización con Docker y orquestación con Docker Compose para despliegue automatizado en producción.",
    ],
    stack: ["FastAPI", "Python", "React", "Leaflet", "PostgreSQL", "SQLite", "Docker", "JWT"],
    links: [
      { label: "Demo", href: "https://planvial.onrender.com/" },
      { label: "GitHub", href: "https://github.com/rizzot0/plan-vial" },
      { label: "Repo original", href: "https://github.com/Unflojo21/PIPATZO" },
    ],
    featured: true,
    study: true,
  },
  {
    slug: "compilador",
    number: "02",
    title: "CodeRunner - Compilador en línea",
    eyebrow: "WebAssembly & Sandboxing · Demo público",
    summary:
      "Entorno de ejecución de código multi-lenguaje (Python, JavaScript, C++) en el navegador sin costes de infraestructura, aprovechando WebAssembly (Pyodide) y aislamiento en Web Workers.",
    problem:
      "Proveer un entorno interactivo y seguro de práctica de algoritmos sin incurrir en costos de servidores backend ni vulnerabilidades de inyección de comandos en el servidor.",
    approach: [
      "Frontend moderno en Angular 17 con Monaco Editor (el editor base de VS Code) con soporte de temas, archivos y terminal.",
      "Ejecución segura de JavaScript en el navegador mediante Web Workers aislados con control de timeout.",
      "Ejecución de Python en el cliente mediante WebAssembly utilizando Pyodide (CPython compilado a WASM).",
      "Integración de compilación C++ mediante la API de Compiler Explorer (g++ 13) con políticas CORS.",
      "Despliegue estático de costo cero alojado en GitHub Pages y Vercel.",
    ],
    stack: [
      "Angular 17",
      "TypeScript",
      "Monaco Editor",
      "WebAssembly",
      "Pyodide",
      "Web Workers",
      "GitHub Pages",
    ],
    links: [
      { label: "Demo", href: "https://rizzot0.github.io/codeRunner/" },
      { label: "GitHub", href: "https://github.com/rizzot0/codeRunner" },
    ],
    study: true,
  },
  {
    slug: "hoy-biblioteca",
    number: "03",
    title: "Hoy — Spotify Hub",
    eyebrow: "Integración API & Automatización diaria",
    summary:
      "Servicio automatizado de recomendación y analítica de biblioteca musical consumiendo la Web API de Spotify: rotación diaria de temas favoritos, visualización de reproducciones en tiempo real y métricas semanales.",
    problem:
      "Diseñar una integración limpia con la API de Spotify que gestione de forma segura la autenticación OAuth2 y tokens de refresco, ofreciendo una experiencia sin fricción para los visitantes.",
    approach: [
      "Arquitectura Next.js con endpoints API protegidos para gestión del flujo OAuth de Spotify.",
      "Procesamiento y caché de datos para actualización diaria según zona horaria local (America/Santiago).",
      "Interfaz minimalista y optimizada con Tailwind CSS y componentes reactivos.",
      "Despliegue continuo en Vercel con integración de variables de entorno seguras.",
    ],
    stack: ["Next.js", "TypeScript", "Spotify API", "Tailwind CSS", "Vercel"],
    links: [
      { label: "Demo", href: "https://rizzodailyrecommendation.vercel.app" },
      { label: "GitHub", href: "https://github.com/rizzot0/hoy-biblioteca" },
    ],
    study: true,
  },
  {
    slug: "english-app",
    number: "04",
    title: "English Learning App",
    eyebrow: "Producto educativo interactivo",
    summary:
      "Plataforma interactiva con seis mecánicas de juego para aprendizaje de vocabulario en inglés orientada a primer ciclo básico.",
    problem:
      "Diseñar una herramienta educativa accesible, sin fricción de registro y con alta retención visual para niños.",
    approach: [
      "Desarrollo SPA con React y estilos CSS interactivos.",
      "Diseño de seis dinámicas lúdicas adaptadas para niños de educación básica.",
      "Despliegue estático de alta disponibilidad en Netlify.",
    ],
    stack: ["React", "JavaScript", "CSS3", "Netlify"],
    links: [
      { label: "Demo", href: "https://englishappca.netlify.app/" },
      {
        label: "GitHub",
        href: "https://github.com/rizzot0/englishapp-web-template",
      },
    ],
    study: false,
  },
  {
    slug: "rizzoflix",
    number: "05",
    title: "RIZZOFLIX",
    eyebrow: "Arquitectura frontend & Autenticación",
    summary:
      "Plataforma de streaming reactiva inspirada en Netflix para modelado de sesiones, perfiles de usuario y catálogo dinámico.",
    problem:
      "Implementar un flujo de autenticación completo con gestión de perfiles y renderizado dinámico de medios.",
    approach: [
      "Next.js y TypeScript con Tailwind CSS para una interfaz fluida.",
      "Manejo de estados globales y autenticación de usuarios.",
      "Despliegue automatizado en Vercel.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Auth"],
    links: [
      { label: "Demo", href: "https://netflix-clone-kappa-bice-81.vercel.app/" },
      { label: "GitHub", href: "https://github.com/rizzot0/NetflixClone" },
    ],
    study: false,
  },
];

export const stack = {
  languages: ["TypeScript", "JavaScript", "Python", "Java", "C/C++ (fundamentos)"],
  frontend: ["React", "Next.js", "Angular", "Tailwind CSS", "Monaco Editor"],
  backend: ["FastAPI", "Node.js", "Express", "RESTful APIs", "JWT Auth"],
  data: ["PostgreSQL", "SQLite", "MongoDB"],
  tools: ["Docker", "Docker Compose", "Git", "GitHub Actions", "Vercel", "Render", "Netlify"],
};

export const letter = {
  greeting: "Hola —",
  paragraphs: [
    "Soy Bastian Guerra, Ingeniero en Tecnologías de la Información titulado de la Universidad Católica del Norte (UCN). Construyo aplicaciones web full-stack: arquitectura limpia, APIs robustas y modelado de datos con rigor ingenieril.",
    "Mi stack principal se centra en TypeScript, React y Next.js en el frontend, y FastAPI, Node.js y PostgreSQL en el backend. Me apasiona resolver problemas técnicos no triviales: modelado de grafos viales, optimización algorítmica, WebAssembly y flujos de negocio completos.",
    "Este sitio es mi carta de presentación técnica. Tanto el motor de rutas Plan Vial (Dijkstra, mapas y PostgreSQL) como el compilador en línea (Angular y WebAssembly) cuentan con demos interactivos y código abierto documentado.",
  ],
  signoff: "Un saludo,",
};

export const about = {
  title: "Un poco más",
  body: [
    "Para mí, el desarrollo de software es una disciplina de ingeniería: cada decisión de modelo de datos, contrato de API o arquitectura de componentes impacta directamente en la mantenibilidad y escalabilidad del producto.",
    "Además de la programación web, me interesan la teoría de grafos, los sistemas distribuidos, el diseño de interfaces limpias y el aprendizaje continuo en nuevas tecnologías.",
  ],
};

export const nav = [
  { label: "Proyectos", href: "/#trabajo" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];
