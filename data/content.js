// Datos centralizados del sitio FP Systems.
// Todo el contenido editable vive aquí; los componentes solo lo renderizan.

export const CONTACTO = {
  whatsapp: '51929899484',
  email: 'contacto@fpsystems.com',
  ubicacion: 'Iquitos, Loreto, Perú',
  ubicacionCorta: 'Iquitos, Perú',
};

export const REDES_SOCIALES = [
  { nombre: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61551420959333', icono: '/icons/facebook.svg' },
];

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

// ─── SERVICIOS (grid 2×2) ──────────────────────────────────────
export const SERVICIOS = [
  {
    titulo: 'Sistemas a medida',
    descripcion:
      'Software personalizado para controlar ventas, inventario, clientes, pedidos, caja y reportes.',
    icono: 'cpu',
    features: ['Ventas', 'Inventario', 'Clientes', 'Reportes'],
  },
  {
    titulo: 'Páginas web',
    descripcion:
      'Webs modernas y responsive para mostrar tu negocio y recibir consultas.',
    icono: 'globe',
    features: ['Responsive', 'WhatsApp', 'Formularios', 'SEO básico'],
  },
  {
    titulo: 'Automatización e IA',
    descripcion:
      'Dashboards, reportes inteligentes y herramientas con IA según el proyecto.',
    icono: 'zap',
    features: ['Dashboards', 'Reportes', 'Chatbots', 'IA aplicada'],
  },
  {
    titulo: 'Presencia digital',
    descripcion:
      'Apoyo con redes sociales, flyers, banners y piezas promocionales.',
    icono: 'share-2',
    features: ['Redes', 'Flyers', 'Banners', 'Publicaciones'],
  },
];

export const RUBROS = [
  { titulo: 'Restaurantes', icono: 'utensils' },
  { titulo: 'Hoteles', icono: 'bed-double' },
  { titulo: 'Cafeterías', icono: 'coffee' },
  { titulo: 'Ferreterías', icono: 'wrench' },
  { titulo: 'Bodegas', icono: 'store' },
  { titulo: 'Pastelerías', icono: 'cake-slice' },
  { titulo: 'Restobares', icono: 'chef-hat' },
  { titulo: 'Tiendas', icono: 'shirt' },
  { titulo: 'Heladerías', icono: 'ice-cream-bowl' },
];

// ─── PROBLEMAS (chips compactos) ───────────────────────────────
export const PROBLEMAS = [
  'Registros en cuadernos o Excel',
  'Sin control de inventario',
  'Reportes manuales',
];

// ─── PROYECTOS / PORTFOLIO ─────────────────────────────────────
export const PROYECTOS = [
  {
    titulo: 'Sistema para restaurante',
    descripcion: 'Gestión de mesas, pedidos, cocina, caja, delivery e inventario.',
    image: '/showcase/01_sistema_restaurante.jpg',
    tags: ['Mesas', 'Pedidos', 'Cocina', 'Caja', 'Delivery'],
  },
  {
    titulo: 'Sistema para tienda',
    descripcion: 'Control de ventas, productos, stock, clientes y reportes.',
    image: '/showcase/01_sistema_tienda.jpeg',
    tags: ['Ventas', 'Productos', 'Stock', 'Clientes'],
  },
  {
    titulo: 'Dashboard administrativo',
    descripcion: 'Panel visual con ventas, gastos, ganancias e indicadores.',
    image: '/showcase/03_dashboard_administrativo.jpeg',
    tags: ['Gráficos', 'Indicadores', 'Filtros'],
  },
  {
    titulo: 'Página web empresarial',
    descripcion: 'Web profesional para mostrar servicios y recibir consultas.',
    image: '/showcase/02_pagina_web_empresarial.png',
    tags: ['Responsive', 'SEO', 'WhatsApp'],
  },
  {
    titulo: 'Sistema veterinario',
    descripcion: 'Registro de mascotas, dueños, historial clínico y citas.',
    image: '/showcase/04_sistema_veterinario.png',
    tags: ['Pacientes', 'Historial', 'Citas'],
  },
  {
    titulo: 'Automatización avanzada',
    descripcion: 'Automatización de tareas, reportes y organización de datos.',
    image: '/showcase/03_automatizacion_avanzada.png',
    tags: ['Automatización', 'Reportes', 'Datos'],
  },
];

// ─── DIFERENCIALES (compactos) ─────────────────────────────────
export const RAZONES = [
  { titulo: 'Soluciones a medida', icono: 'sliders' },
  { titulo: 'Diseño moderno', icono: 'smartphone' },
  { titulo: 'Acompañamiento', icono: 'users' },
  { titulo: 'Escalable', icono: 'trending-up' },
];

// ─── PROCESO ───────────────────────────────────────────────────
export const PROCESO = [
  { titulo: 'Escuchamos', descripcion: 'Analizamos tu problema y cómo trabajas.' },
  { titulo: 'Diseñamos', descripcion: 'Definimos pantallas, funciones y flujo.' },
  { titulo: 'Desarrollamos', descripcion: 'Construimos con diseño moderno y pruebas.' },
  { titulo: 'Entregamos', descripcion: 'Capacitamos y dejamos todo listo.' },
  { titulo: 'Mejoramos', descripcion: 'Seguimos agregando funciones y soporte.' },
];

// ─── PLANES ────────────────────────────────────────────────────
export const PLANES = [
  {
    titulo: 'Web Presencial',
    descripcion: 'Página profesional para tu negocio.',
    popular: false,
  },
  {
    titulo: 'Sistema Básico',
    descripcion: 'Controla ventas, productos y clientes.',
    popular: true,
  },
  {
    titulo: 'Sistema Empresarial',
    descripcion: 'Módulos avanzados, reportes y usuarios.',
    popular: false,
  },
  {
    titulo: 'IA / Automatización',
    descripcion: 'Soluciones con inteligencia artificial.',
    popular: false,
  },
];

// ─── VALORES ───────────────────────────────────────────────────
export const VALORES = [
  { titulo: 'Claridad', descripcion: 'Procesos transparentes.' },
  { titulo: 'Innovación', descripcion: 'IA y tecnología moderna.' },
  { titulo: 'Responsabilidad', descripcion: 'Cumplimiento estricto.' },
  { titulo: 'Resultados', descripcion: 'Impacto directo.' },
];

// ─── HERO SHOWCASE (carrusel de servicios) ─────────────────────
export const HERO_SHOWCASE = [
  {
    id: 'sistemas',
    title: 'Sistemas personalizados',
    description:
      'Ventas, pedidos, inventario y gestión adaptados a cada negocio.',
    icon: 'cpu',
    image: '/showcase/01_sistemas_personalizados.png',
    alt: 'Sistema personalizado para restaurante desarrollado por FP Systems',
  },
  {
    id: 'web',
    title: 'Páginas web empresariales',
    description:
      'Sitios modernos y responsive para presentar tu negocio.',
    icon: 'globe',
    image: '/showcase/02_paginas_web_empresariales.png',
    alt: 'Página web empresarial responsive desarrollada por FP Systems',
  },
  {
    id: 'automatizacion',
    title: 'Automatización e IA',
    description:
      'Procesos, dashboards y herramientas inteligentes.',
    icon: 'zap',
    image: '/showcase/03_automatizacion_ia.png',
    alt: 'Dashboard de automatización e inteligencia artificial de FP Systems',
  },
  {
    id: 'digital',
    title: 'Apoyo digital',
    description:
      'Contenido y presencia visual para fortalecer tu negocio.',
    icon: 'share-2',
    image: '/showcase/04_apoyo_digital.png',
    alt: 'Servicio de apoyo digital y contenido para redes de FP Systems',
  },
];

// ─── FORMULARIO ────────────────────────────────────────────────
export const SERVICIOS_FORMULARIO = [
  'Sistema personalizado',
  'Página web',
  'Automatización',
  'Solución con IA',
];
