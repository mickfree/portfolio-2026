// Project data array
export const projects = [
    {
        id: "1",
        title: "erp.lojusto.com",
        category: "Desarrollo Fullstack & ERP",
        year: "2025",
        description:
            "Arquitectura ERP empresarial diseñada a medida para la optimización integral de flujos de trabajo core. Centraliza la operación mediante módulos independientes y altamente integrados de logística (control de inventario, despachos), contabilidad, CRM y un motor comercial. Desarrollado bajo un enfoque modular, robusto y escalable de alta disponibilidad.",
        images: [
            "/images/erp_06.png",
            "/images/erp_05.png",
            "/images/erp_02.png",
            "/images/erp_04.png",
            "/images/erp_01.png",
            "/images/erp_03.png",
        ],
        stacks: [
            { name: "Django", icon: "/logos/django.svg" },
            { name: "HTMX", icon: "/logos/htmx.svg" },
            { name: "Tailwind", icon: "/logos/tailwindcss.svg" },
            { name: "Django Cotton", icon: "/logos/django.svg" },
            { name: "DRF", icon: "/logos/django.svg" },
            { name: "Docker", icon: "/logos/docker.svg" }
        ],
    },
    {
        id: "2",
        title: "portal.lojustoapp.com",
        category: "Desarrollo Web & Portal de Clientes",
        year: "2026",
        description:
            "Plataforma avanzada de autogestión y fidelización de clientes B2B orientada al sector de calibración industrial metrológica. Conectada de forma directa con el ecosistema central erp.lojusto.com para el consumo y sincronización inmediata de datos operativos. La aplicación web permite a las empresas asociadas administrar de manera autónoma sus equipos de medición, procesar requerimientos técnicos, acceder de forma instantánea al histórico de calibraciones y realizar descargas masivas de certificados metrológicos validados.",
        images: [
            "/images/portal_01.png",
            "/images/portal_02.png",
            "/images/portal_03.png",
            [
                "/images/portal_mobile_01.png",
                "/images/portal_mobile_02.png",
                "/images/portal_mobile_03.png",
			],
        ],
        stacks: [
            { name: "Next.js", icon: "/logos/react.svg" },
            { name: "React", icon: "/logos/react.svg" },
            { name: "TypeScript", icon: "/logos/typescript.svg" },
            { name: "Tailwind", icon: "/logos/tailwindcss.svg" },
        ],
    },
    {
        id: "3",
        title: "lojusto.com",
        category: "Desarrollo Frontend",
        year: "2026",
        description:
            "Canal digital corporativo principal diseñado bajo principios de alto rendimiento, accesibilidad y conversión para servicios de metrología. Integrado con erp.lojusto.com para la automatización del flujo de leads y sincronización de consultas comerciales.  Combina una interfaz de usuario fluida con una navegación semántica estructurada, orientada a la captación cualificada de clientes potenciales.",
        images: [
            "/images/web_01.png",
            "/images/web_02.png",
            "/images/web_03.png",
            "/images/web_04.png",
        ],
        stacks: [
            { name: "Astro", icon: "/logos/astro.svg" },
            { name: "React", icon: "/logos/react.svg" },
            { name: "TypeScript", icon: "/logos/typescript.svg" },
            { name: "Tailwind", icon: "/logos/tailwindcss.svg" },
        ],
    },
];