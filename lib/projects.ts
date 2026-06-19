export type Localized = { en: string; es: string }

export type Project = {
  id: string
  title: string
  client: string
  date: string
  context: Localized
  /** Optional single screenshot shown in the browser mockup. Falls back to a placeholder. */
  image?: string
  /** Optional list of screenshots, each shown stacked in its own browser mockup. */
  images?: string[]
  /** Optional brand logo. Used as the card cover and the first frame on the detail page. */
  logo?: string
  /** Vertical focus for cover/frame images. Defaults to 'top'. */
  imagePosition?: 'top' | 'center'
  /** Address shown in the faux browser bar of the mockup. */
  url?: string
}

export const projects: Project[] = [
  {
    id: 'nimboclass',
    title: 'Nimboclass — AI Language School Platform.',
    client: 'Nimboclass',
    date: '2026',
    url: 'app.nimboclass.com',
    logo: '/nimbo-logo.png',
    images: ['/nimbo3.png', '/nimbo4.png', '/nimbo5.png', '/nimbo6.png'],
    context: {
      en: 'We built Nimboclass, an all-in-one platform for language schools. AI agents automatically generate invoices and automate the manual tasks that consume academies’ day-to-day, from enrollment to billing.',
      es: 'Construimos Nimboclass, una plataforma todo-en-uno para academias de idiomas. Agentes de IA generan facturas automáticamente y automatizan las tareas manuales que llenan el día a día de las academias, desde la inscripción hasta la cobranza.',
    },
  },
  {
    id: 'buildhunter',
    title: 'BuildHunter — PC Parts Price Comparator.',
    client: 'BuildHunter',
    date: '2025',
    logo: '/buildhunter-logo.png',
    images: [
      '/buildhunter1.png',
      '/buildhunter2.png',
      '/buildhunter3.png',
      '/buildhunter4.png',
    ],
    context: {
      en: 'We built BuildHunter, a PC-parts price comparator for Argentina. We integrated AI that lets users create their own builds and recommends a configuration based on the components they want and their budget.',
      es: 'Construimos BuildHunter, un comparador de precios de componentes de PC para Argentina. Integramos IA que permite a los usuarios armar sus propios builds y les recomienda una configuración según los componentes que desean y el presupuesto que tienen.',
    },
  },
  {
    id: 'barberjob',
    title: 'Barberjob — AI Booking & Reception System.',
    client: 'Local Barbershop',
    date: '2025',
    images: ['/barberjob.png'],
    context: {
      en: 'We built an AI-powered reception and booking system for a local barbershop to automate customer communication and appointment scheduling. The system handles incoming WhatsApp messages, answers frequently asked questions, manages real-time availability, and books appointments directly into the calendar. It also sends automated reminders and follow-ups to reduce no-shows and increase client retention, allowing barbers to focus entirely on service delivery instead of manual scheduling and message management.',
      es: 'Construimos un sistema de recepción y reservas con IA para una barbería local que automatiza la comunicación con los clientes y la gestión de turnos. El sistema responde los mensajes de WhatsApp entrantes, contesta las preguntas frecuentes, maneja la disponibilidad en tiempo real y agenda los turnos directamente en el calendario. Además envía recordatorios y seguimientos automáticos para reducir las ausencias y mejorar la retención de clientes, dejando que los barberos se enfoquen en atender en vez de coordinar turnos y responder mensajes a mano.',
    },
  },
  {
    id: 'skilling-forward',
    title: 'Skilling Forward — AI Academy Workspace.',
    client: 'Online English Academy',
    date: '2025',
    images: ['/skilling.png'],
    imagePosition: 'center',
    context: {
      en: "We built an AI-powered workspace that unified the academy's existing tools and resources into a single platform. The system connects internal documents, FAQs, course information, and student data to provide instant answers, automate lead qualification, and recommend the most suitable courses based on each student's goals and proficiency level. This reduced administrative workload and improved the experience for both prospective and existing students.",
      es: 'Construimos un workspace con IA que unificó las herramientas y recursos existentes de la academia en una sola plataforma. El sistema conecta documentos internos, FAQs, información de cursos y datos de los alumnos para dar respuestas instantáneas, automatizar la calificación de leads y recomendar los cursos más adecuados según los objetivos y el nivel de cada estudiante. Esto redujo la carga administrativa y mejoró la experiencia tanto de los alumnos potenciales como de los actuales.',
    },
  },
  {
    id: 'awg',
    title: 'AWG — Enterprise AI & Bot Platform.',
    client: 'AWG',
    date: '2026',
    url: 'app.awg-sage.tinnto.co',
    context: {
      en: 'We built AWG an enterprise platform for intelligent assistants that connects data, users, and processes in a secure environment, with configurable bots and multi-agent orchestration.',
      es: 'Construimos para AWG una plataforma empresarial de asistentes inteligentes que conecta datos, usuarios y procesos en un entorno seguro, con bots configurables y orquestación multi-agente.',
    },
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

/** Projects other than the given id (for "more projects" sections). */
export function otherProjects(id: string, limit = 3): Project[] {
  return projects.filter((p) => p.id !== id).slice(0, limit)
}

/** First screenshot of a project, used as a card thumbnail. */
export function projectThumbnail(p: Project): string | undefined {
  return p.images?.[0] ?? p.image
}
