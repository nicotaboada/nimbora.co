export type ServiceBenefit = {
  icon: string
  label: string
  headline: string
  desc: string
}

export type ServiceStep = {
  icon: string
  title: string
  desc: string
}

export type ServiceUseCase = {
  title: string
  desc: string
  examples: string[]
}

export type Service = {
  slug: string
  /** Etiqueta para el menú */
  navLabel: string
  /** Título del hero */
  title: string
  heroDescription: string
  why: {
    title: string
    subtitle: string
    benefits: ServiceBenefit[]
  }
  process: {
    title: string
    subtitle: string
    steps: ServiceStep[]
  }
  useCases: {
    title: string
    subtitle: string
    items: ServiceUseCase[]
  }
  finalCta: {
    title: string
    desc: string
  }
}

export const SERVICES: Service[] = [
  {
    slug: 'agentes-ia',
    navLabel: 'Agentes de IA',
    title: 'Agentes de IA',
    heroDescription:
      'Asistentes inteligentes que trabajan con tu información y ejecutan tareas por vos. Construimos agentes y chatbots de IA sobre modelos líderes —sin entrenar nada desde cero— para que tengas resultados en semanas, no en meses.',
    why: {
      title: '¿Por qué Agentes de IA?',
      subtitle: 'Los beneficios de sumar asistentes inteligentes a tu operación',
      benefits: [
        {
          icon: 'message',
          label: 'Atención 24/7',
          headline: 'Siempre disponibles',
          desc: 'Atendé consultas y resolvé tareas a toda hora, sin sumar headcount.',
        },
        {
          icon: 'brain',
          label: 'Tu conocimiento',
          headline: 'Responden con tu info',
          desc: 'Conectamos el agente a tu documentación para respuestas precisas y en contexto.',
        },
        {
          icon: 'zap',
          label: 'Implementación rápida',
          headline: 'Resultados en semanas',
          desc: 'Usamos modelos de IA líderes ya entrenados; no empezamos de cero.',
        },
        {
          icon: 'trending',
          label: 'Escala',
          headline: 'Más capacidad sin más costo',
          desc: 'Manejá más volumen sin que tu equipo crezca en la misma proporción.',
        },
      ],
    },
    process: {
      title: 'Nuestro Proceso',
      subtitle: 'De la idea a un agente en producción, integrado a tus sistemas',
      steps: [
        {
          icon: 'search',
          title: 'Descubrimiento',
          desc: 'Identificamos las tareas y consultas que mejor se resuelven con un agente.',
        },
        {
          icon: 'database',
          title: 'Conexión de datos',
          desc: 'Conectamos el agente a tu información y herramientas (RAG e integraciones).',
        },
        {
          icon: 'bot',
          title: 'Construcción',
          desc: 'Diseñamos, probamos y ajustamos el comportamiento del agente.',
        },
        {
          icon: 'gauge',
          title: 'Despliegue y mejora',
          desc: 'Lo ponemos en producción y lo optimizamos según el uso real.',
        },
      ],
    },
    useCases: {
      title: 'Casos de Uso',
      subtitle: 'Lo que podemos construir con IA aplicada para tu negocio',
      items: [
        {
          title: 'Asistentes y chatbots',
          desc: 'Agentes que atienden y resuelven usando tu información',
          examples: ['Atención al cliente', 'Calificación de leads', 'Soporte interno'],
        },
        {
          title: 'Búsqueda sobre tu conocimiento',
          desc: 'Respuestas precisas a partir de tus documentos (RAG)',
          examples: ['Base de conocimiento', 'Búsqueda en documentación', 'Preguntas frecuentes'],
        },
        {
          title: 'Procesamiento de documentos',
          desc: 'Extraé y estructurá datos de documentos automáticamente',
          examples: ['Facturas y recibos', 'Contratos', 'Emails y formularios'],
        },
        {
          title: 'Generación de contenido',
          desc: 'Creá y adaptá texto a escala',
          examples: ['Redacción de respuestas', 'Traducciones', 'Resúmenes'],
        },
        {
          title: 'Clasificación y análisis',
          desc: 'Ordená y entendé tu información',
          examples: ['Análisis de sentimiento', 'Categorización', 'Priorización de tickets'],
        },
        {
          title: 'IA dentro de tus workflows',
          desc: 'Sumá pasos inteligentes a tus automatizaciones',
          examples: ['Decisiones automáticas', 'Enriquecimiento de datos', 'Ruteo inteligente'],
        },
      ],
    },
    finalCta: {
      title: '¿Listo para sumar IA a tu negocio?',
      desc: 'Construyamos juntos un agente o asistente de IA a la medida de tu operación. Hablemos de tu caso.',
    },
  },
  {
    slug: 'consultoria-ia',
    navLabel: 'Consultoría IA',
    title: 'Consultoría IA',
    heroDescription:
      'Te guiamos en cada paso de tu camino hacia la IA. Desde la estrategia hasta la implementación, te ayudamos a identificar oportunidades y adoptar inteligencia artificial con confianza.',
    why: {
      title: '¿Por qué Consultoría IA?',
      subtitle: 'El acompañamiento experto que necesitás para adoptar IA sin tropiezos',
      benefits: [
        {
          icon: 'lightbulb',
          label: 'Estrategia clara',
          headline: 'Hoja de ruta a medida',
          desc: 'Definí dónde y cómo aplicar IA para maximizar el retorno.',
        },
        {
          icon: 'shield',
          label: 'Menos riesgo',
          headline: 'Adopción segura',
          desc: 'Evitá errores costosos con la guía de especialistas experimentados.',
        },
        {
          icon: 'rocket',
          label: 'Time to value',
          headline: 'Resultados más rápidos',
          desc: 'Acelerá la adopción de IA con un plan probado y accionable.',
        },
        {
          icon: 'users',
          label: 'Capacitación',
          headline: 'Autonomía interna',
          desc: 'Empoderá a tu equipo para sostener y escalar las iniciativas de IA.',
        },
      ],
    },
    process: {
      title: 'Nuestro Proceso de Consultoría',
      subtitle: 'Un camino estructurado desde la estrategia hasta el escalamiento',
      steps: [
        {
          icon: 'search',
          title: 'Diagnóstico',
          desc: 'Evaluamos tu madurez digital, tus datos y tus oportunidades de IA.',
        },
        {
          icon: 'lightbulb',
          title: 'Estrategia',
          desc: 'Definimos una hoja de ruta priorizada y alineada a tus objetivos.',
        },
        {
          icon: 'settings',
          title: 'Implementación',
          desc: 'Acompañamos la ejecución de los primeros proyectos de IA.',
        },
        {
          icon: 'trending',
          title: 'Escalamiento',
          desc: 'Te ayudamos a escalar las iniciativas exitosas en toda la organización.',
        },
      ],
    },
    useCases: {
      title: 'Casos de Uso',
      subtitle: 'En qué podemos acompañarte a lo largo de tu camino con IA',
      items: [
        {
          title: 'Estrategia de IA',
          desc: 'Definí una visión y hoja de ruta de inteligencia artificial',
          examples: ['Casos de uso priorizados', 'Roadmap de adopción', 'Business case'],
        },
        {
          title: 'Auditoría de datos',
          desc: 'Evaluá la calidad y disponibilidad de tus datos',
          examples: ['Inventario de datos', 'Análisis de calidad', 'Gobierno de datos'],
        },
        {
          title: 'Selección de tecnología',
          desc: 'Elegí las herramientas y plataformas correctas',
          examples: ['Evaluación de proveedores', 'Arquitectura técnica', 'Build vs buy'],
        },
        {
          title: 'Pruebas de concepto',
          desc: 'Validá el valor de la IA antes de escalar',
          examples: ['POC rápidos', 'Pilotos controlados', 'Medición de ROI'],
        },
        {
          title: 'Gestión del cambio',
          desc: 'Preparamos a tu equipo para trabajar con IA',
          examples: ['Capacitaciones', 'Documentación', 'Acompañamiento'],
        },
        {
          title: 'Gobernanza y ética',
          desc: 'Asegurá un uso responsable de la IA',
          examples: ['Políticas de uso', 'Cumplimiento normativo', 'Mitigación de sesgos'],
        },
      ],
    },
    finalCta: {
      title: '¿Listo para empezar tu camino con IA?',
      desc: 'Sumate a las empresas que adoptan IA con una estrategia clara. Hablemos de cómo guiarte en tu transformación.',
    },
  },
  {
    slug: 'automatizacion-workflows',
    navLabel: 'Automatización de Workflows',
    title: 'Automatización de Workflows',
    heroDescription:
      'Transformá las operaciones de tu negocio con automatización inteligente de workflows. Eliminá tareas repetitivas, reducí errores y liberá a tu equipo para enfocarse en lo que importa.',
    why: {
      title: '¿Por qué Automatización de Workflows?',
      subtitle: 'Descubrí los beneficios transformadores de automatizar tus procesos',
      benefits: [
        {
          icon: 'clock',
          label: 'Ahorro de tiempo',
          headline: 'Reducí el trabajo manual 50-80%',
          desc: 'Automatizá tareas repetitivas y liberá a tu equipo para el trabajo estratégico.',
        },
        {
          icon: 'dollar',
          label: 'Reducción de costos',
          headline: 'Bajá los gastos operativos',
          desc: 'Eliminá ineficiencias y reducí la necesidad de personal adicional.',
        },
        {
          icon: 'target',
          label: 'Mayor precisión',
          headline: '99.9% menos errores',
          desc: 'Eliminá errores humanos y asegurá procesos consistentes y confiables.',
        },
        {
          icon: 'trending',
          label: 'Escalabilidad',
          headline: 'Crecé sin fricción',
          desc: 'Escalá tus operaciones sin aumentar proporcionalmente los costos.',
        },
      ],
    },
    process: {
      title: 'Nuestro Proceso de Automatización',
      subtitle: 'Una metodología probada que asegura una implementación exitosa',
      steps: [
        {
          icon: 'chart',
          title: 'Evaluación de procesos',
          desc: 'Analizamos tus workflows actuales para identificar oportunidades de automatización y cuellos de botella.',
        },
        {
          icon: 'settings',
          title: 'Diseño de la solución',
          desc: 'Nuestros expertos diseñan workflows de automatización a medida de tus necesidades específicas.',
        },
        {
          icon: 'bot',
          title: 'Implementación',
          desc: 'Construimos y desplegamos tus soluciones de automatización con mínima interrupción de las operaciones.',
        },
        {
          icon: 'users',
          title: 'Capacitación y soporte',
          desc: 'Capacitación integral y soporte continuo para asegurar una adopción y optimización exitosas.',
        },
      ],
    },
    useCases: {
      title: 'Casos de Uso',
      subtitle: 'Explorá la amplia gama de procesos que podemos automatizar para tu negocio',
      items: [
        {
          title: 'Procesamiento y migración de datos',
          desc: 'Recolectá, procesá y transferí datos entre sistemas automáticamente',
          examples: ['Sincronización de CRM', 'Generación de reportes', 'Migraciones de base de datos'],
        },
        {
          title: 'Comunicación con clientes',
          desc: 'Optimizá las interacciones y seguimientos con clientes',
          examples: ['Campañas de email', 'Ruteo de tickets de soporte', 'Secuencias de seguimiento'],
        },
        {
          title: 'Operaciones financieras',
          desc: 'Automatizá procesos contables y financieros',
          examples: ['Procesamiento de facturas', 'Reportes de gastos', 'Conciliación de pagos'],
        },
        {
          title: 'RR.HH. y onboarding',
          desc: 'Simplificá la gestión de recursos humanos y empleados',
          examples: ['Onboarding de empleados', 'Control horario', 'Evaluaciones de desempeño'],
        },
        {
          title: 'Ventas y marketing',
          desc: 'Optimizá la generación y nutrición de leads',
          examples: ['Lead scoring', 'Gestión de campañas', 'Actualización del pipeline'],
        },
        {
          title: 'Gestión de inventario',
          desc: 'Automatizá el seguimiento de stock y las compras',
          examples: ['Alertas de stock', 'Reposición automática', 'Comunicación con proveedores'],
        },
      ],
    },
    finalCta: {
      title: '¿Listo para automatizar tus workflows?',
      desc: 'Sumate a cientos de empresas que transformaron sus operaciones con nuestras soluciones de automatización. Hablemos de cómo podemos ayudarte a lograr resultados similares.',
    },
  },
  {
    slug: 'software-a-medida',
    navLabel: 'Software a Medida',
    title: 'Software a Medida',
    heroDescription:
      'Diseñamos y construimos aplicaciones web y móviles, portales y herramientas internas a la medida de tus procesos. Del prototipo al producto funcional, sin las limitaciones del software genérico.',
    why: {
      title: '¿Por qué Software a Medida?',
      subtitle: 'Las ventajas de tener software diseñado para tu negocio',
      benefits: [
        {
          icon: 'wrench',
          label: 'A medida',
          headline: 'Hecho para tu negocio',
          desc: 'Software diseñado para tus procesos exactos, no al revés.',
        },
        {
          icon: 'zap',
          label: 'Productividad',
          headline: 'Equipos más rápidos',
          desc: 'Centralizá tareas y eliminá el trabajo entre planillas y sistemas.',
        },
        {
          icon: 'database',
          label: 'Datos unificados',
          headline: 'Una sola fuente de verdad',
          desc: 'Conectá toda tu información en una plataforma central.',
        },
        {
          icon: 'trending',
          label: 'Escalable',
          headline: 'Crece con vos',
          desc: 'Aplicaciones que evolucionan junto a las necesidades de tu negocio.',
        },
      ],
    },
    process: {
      title: 'Nuestro Proceso de Desarrollo',
      subtitle: 'De la idea a un producto en producción',
      steps: [
        {
          icon: 'search',
          title: 'Descubrimiento',
          desc: 'Entendemos tus procesos, tus usuarios y los objetivos del producto.',
        },
        {
          icon: 'layers',
          title: 'Diseño y prototipo',
          desc: 'Diseñamos la interfaz y validamos un prototipo antes de construir.',
        },
        {
          icon: 'settings',
          title: 'Desarrollo',
          desc: 'Construimos y desplegamos la aplicación integrada a tus sistemas.',
        },
        {
          icon: 'users',
          title: 'Soporte',
          desc: 'Capacitamos a tu equipo y damos soporte y mejoras continuas.',
        },
      ],
    },
    useCases: {
      title: 'Casos de Uso',
      subtitle: 'El tipo de software que construimos a medida',
      items: [
        {
          title: 'Aplicaciones web',
          desc: 'Plataformas a medida para tu operación',
          examples: ['Paneles de administración', 'SaaS internos', 'Sistemas de gestión'],
        },
        {
          title: 'Apps móviles',
          desc: 'Apps nativas para iOS y Android',
          examples: ['Apps para clientes', 'Apps para tu equipo', 'IA integrada'],
        },
        {
          title: 'Portales de cliente',
          desc: 'Ofrecé autoservicio a tus clientes',
          examples: ['Seguimiento de pedidos', 'Documentación', 'Soporte integrado'],
        },
        {
          title: 'Herramientas internas',
          desc: 'Potenciá a tu equipo con software propio',
          examples: ['Gestión de operaciones', 'Workflows de aprobación', 'Control de permisos'],
        },
        {
          title: 'Dashboards a medida',
          desc: 'Visualizá tus métricas clave en tiempo real',
          examples: ['KPIs operativos', 'Reportes automáticos', 'Alertas'],
        },
        {
          title: 'Prototipos y MVP',
          desc: 'Validá tu idea antes de invertir en grande',
          examples: ['Prototipos funcionales', 'MVP en semanas', 'Iteración rápida'],
        },
      ],
    },
    finalCta: {
      title: '¿Listo para construir tu software a medida?',
      desc: 'Convirtamos tu idea o necesidad en un producto funcional. Hablemos de lo que querés construir.',
    },
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
