// Array of experience details to render dynamically
export const experiences = [
  {
    company: "Lo Justo",
    role: "Desarrollador de Software",
    location: "Arequipa, Perú",
    dates: "Mar 2025 - Presente",
    headline: "DESARROLLO DE ERP CORPORATIVO & DESPLIEGUE CLOUD",
    descriptionHtml:
      'Desarrollador principal del ERP corporativo que alimenta en tiempo real el portal de clientes (<a href="https://portal.lojustoapp.com" target="_blank" rel="noopener noreferrer" class="text-text-primary hover:underline font-medium">portal.lojustoapp.com</a>) y el sitio institucional (<a href="https://lojusto.com" target="_blank" rel="noopener noreferrer" class="text-text-primary hover:underline font-medium">lojusto.com</a>).',
    bullets: [
      {
        label: "Arquitectura y Despliegue",
        text: 'Lideré el desarrollo desde cero del ERP ("OhCapitán"), desplegándolo en un servidor VPS.',
      },
      {
        label: "Integraciones Cloud y Notificaciones",
        text: "Implementé AWS SES (Simple Email Service) para automatizar el envío masivo de notificaciones transaccionales, alertas de calibración y reportes a clientes de manera eficiente.",
      },
      {
        label: "Sistemas de Facturación Electrónica",
        text: "Desarrollé el módulo de facturación del ERP conectándolo directamente con los servicios web, automatizando la emisión, validación y control de comprobantes electrónicos.",
      },
    ],
  },
  {
    company: "JP Ingeniería",
    role: "Programador",
    location: "Arequipa, Perú",
    dates: "May 2024 - Nov 2024",
    headline: "INFRAESTRUCTURA DE RED & DESARROLLO DE ERP INTERNO",
    descriptionHtml:
      "Responsable de la infraestructura local mediante la implementación de almacenamiento en red (NAS) y la puesta en producción de múltiples aplicaciones para la organización.",
    bullets: [
      {
        label: "ERP Interno",
        text: "Desarrollé e implementé el ERP interno de la empresa, integrando módulos especializados para logística, gestión de datos de clientes y administración de órdenes de servicio.",
      },
      {
        label: "Servidores de Almacenamiento",
        text: "Implementé y configuré un servidor de almacenamiento conectado en red (NAS) para centralizar la gestión de archivos, copias de seguridad y seguridad de la información interna.",
      },
    ],
  },
  {
    company: "Ttransporto",
    role: "Desarrollador de Sistemas",
    location: "Remoto",
    dates: "Jul 2023 - Ene 2024",
    headline: "OPTIMIZACIÓN LOGÍSTICA & DESARROLLO FULLSTACK",
    descriptionHtml:
      "Desarrollador backend y frontend integrado en el equipo principal de ingeniería de sistemas. Encargado de la construcción de soluciones tecnológicas orientadas a la optimización logística, geolocalización y despacho de carga pesada.",
    bullets: [
      {
        label: "Backend y Geolocalización",
        text: "Desarrollé módulos para un sistema de optimización de rutas y seguimiento en tiempo real de camiones de delivery utilizando Django en el backend.",
      },
      {
        label: "Frontend y Monitoreo",
        text: "Construí interfaces de usuario dinámicas con Angular para el monitoreo y control logístico de flotas de transporte.",
      },
    ],
  },
  {
    company: "Ubuntu Jóvenes Voluntarios del Perú",
    role: "Administrador de Sistemas",
    location: "Remoto",
    dates: "Ene 2023 - Jul 2023",
    headline: "ADMINISTRACIÓN DE SISTEMAS & ENTORNOS COLABORATIVOS",
    descriptionHtml:
      "Configuración, administración de permisos y gestión de la plataforma SharePoint para estructurar la colaboración del personal de la ONG.",
    bullets: [
      {
        label: "Gestión de SharePoint",
        text: "Configuré los permisos de acceso, seguridad y almacenamiento estructurado dentro de la nueva plataforma SharePoint para el personal de la ONG.",
      },
    ],
  },
];