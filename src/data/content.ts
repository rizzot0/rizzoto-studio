export const site = {
  name: "Bastian Guerra",
  handle: "rizzo",
  role: "Ingeniero de software",
  location: "Coquimbo, Chile",
  email: "bastianalonso92@gmail.com",
  github: "https://github.com/rizzot0",
  personalSite: "https://landing-page-rizzoto.netlify.app/",
  availability: "Disponible para trabajo y encargos",
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
    slug: "compilador",
    number: "01",
    title: "Compilador en línea",
    eyebrow: "Editor · demo público",
    summary:
      "Editor en el navegador para escribir y ejecutar JavaScript, Python y C++ sin instalar nada. Demo vivo en GitHub Pages.",
    problem:
      "Quería un entorno de práctica que se pudiera abrir con un link. Un backend en Vercel no sirve para Python/C++: esa plataforma no trae esos compiladores, y el deploy anterior quedó en 404.",
    approach: [
      "Frontend Angular con Monaco Editor (la misma base de VS Code): archivos, temas, stdin y terminal.",
      "JavaScript corre en un Web Worker del propio navegador, con timeout.",
      "Python usa Pyodide (CPython compilado a WebAssembly); la primera ejecución descarga el runtime.",
      "C++ se compila y ejecuta con Compiler Explorer (g++ 13), porque un intérprete JS se rompía al parsear.",
      "Hosting estático en GitHub Pages: cero costo, sin servidor propio para el demo.",
    ],
    stack: [
      "Angular",
      "TypeScript",
      "Monaco Editor",
      "Pyodide",
      "Compiler Explorer",
      "GitHub Pages",
    ],
    links: [
      { label: "Demo", href: "https://rizzot0.github.io/codeRunner/" },
      { label: "GitHub", href: "https://github.com/rizzot0/codeRunner" },
    ],
    featured: true,
    study: true,
  },
  {
    slug: "pipatzo",
    number: "02",
    title: "PIPATZO",
    eyebrow: "Mapas · grafos · trabajo en equipo",
    summary:
      "Visor de ciudades donde cargas un mapa, marcas origen y destino, y calculas la mejor ruta sobre el grafo vial.",
    problem:
      "Había que pasar de datos territoriales (nodos, aristas, ciudades) a una herramienta que se pudiera usar: elegir una ciudad, ver el mapa y pedir una ruta sin pelear con la API a mano.",
    approach: [
      "Frontend en React + Leaflet: selección de ciudad, clicks en el mapa y estados de carga/error claros.",
      "Backend FastAPI que sirve ciudades, estadísticas, grafo y cálculo de ruta sobre SQLite.",
      "Scripts de migración por ciudad (datos XML → base local) para no depender de un CSV suelto.",
      "Trabajo en equipo sobre un repo compartido, con un remake propio para iterar la interfaz.",
    ],
    stack: ["React", "Leaflet", "FastAPI", "SQLite", "Python"],
    links: [
      { label: "Remake", href: "https://github.com/rizzot0/pipatzo-remake" },
      { label: "Repo del equipo", href: "https://github.com/Unflojo21/PIPATZO" },
    ],
    study: true,
  },
  {
    slug: "english-app",
    number: "03",
    title: "English Learning App",
    eyebrow: "Producto educativo",
    summary:
      "Seis minijuegos de inglés para primer ciclo básico: frutas, animales, colores y más, con una interfaz pensada para niños.",
    problem:
      "Un recurso escolar tiene que ser usable en poco tiempo, con instrucciones obvias y sin fricción de login. El objetivo era práctica, no un LMS completo.",
    approach: [
      "React con flujos cortos: elegir tema, jugar, repetir.",
      "Seis mecánicas distintas para no cansar el mismo formato.",
      "Deploy estático en Netlify para que un profesor o un apoderado abra el link y listo.",
    ],
    stack: ["React", "JavaScript", "CSS3", "Netlify"],
    links: [
      { label: "Demo", href: "https://englishappca.netlify.app/" },
      {
        label: "GitHub",
        href: "https://github.com/rizzot0/englishapp-web-template",
      },
    ],
    study: true,
  },
  {
    slug: "rizzoflix",
    number: "04",
    title: "RIZZOFLIX",
    eyebrow: "Estudio · autenticación",
    summary:
      "Clon de Netflix para practicar Next.js, autenticación y un catálogo con perfiles. Lo dejo como evidencia de stack, no como producto propio.",
    problem:
      "Necesitaba cerrar el circuito completo de una app con usuarios: registro, sesión, perfiles y UI de catálogo.",
    approach: [
      "Next.js + TypeScript + Tailwind para la interfaz.",
      "Auth y persistencia (el ejercicio cubre login, perfiles y listado).",
      "Deploy en Vercel para tener una URL compartible.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Auth"],
    links: [
      { label: "Demo", href: "https://netflix-clone-kappa-bice-81.vercel.app/" },
      { label: "GitHub", href: "https://github.com/rizzot0/NetflixClone" },
    ],
  },
];

export const stack = {
  languages: ["TypeScript", "JavaScript", "Python", "Java", "C++ (básico)"],
  frontend: ["React", "Next.js", "Angular", "Tailwind CSS"],
  backend: ["Node.js", "FastAPI", "REST APIs"],
  data: ["PostgreSQL", "SQLite", "MongoDB"],
  tools: ["Git", "Docker", "GitHub Pages", "Vercel", "Netlify"],
};

export const letter = {
  greeting: "Hola —",
  paragraphs: [
    "Soy Bastian, ingeniero de software en Coquimbo. Construyo aplicaciones web full-stack: interfaces claras, APIs y datos que se pueden mantener.",
    "Me muevo sobre todo en TypeScript, React y Next.js. Cuando el problema lo pide, también trabajo el backend en Node o Python. Me interesa el trabajo con dueño de producto: autenticación, mapas, editores, flujos reales — no solo una landing.",
    "Este sitio es mi carta de presentación. El compilador en línea tiene demo público en GitHub Pages; el otro sitio, más personal, sigue publicado si quieres ver cómo me expreso fuera de este formato.",
  ],
  signoff: "Un saludo,",
};

export const about = {
  title: "Un poco más",
  body: [
    "Programar, para mí, se parece a armar un puzzle: cada decisión de modelo o de interfaz cuenta una historia. También diseño y pixel art cuando quiero hacer algo sin que exista un ticket detrás.",
    "Fuera del editor: juegos (Outer Wilds, Dark Souls, Deltarune), música (Radiohead, Daft Punk, indie chileno) y playlists para concentrarme. Eso no es el centro de este sitio; está en el espacio personal.",
  ],
};

export const nav = [
  { label: "Trabajo", href: "/#trabajo" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];
