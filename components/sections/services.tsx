'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Check, Clock, X, Loader2, MessageCircle, Lightbulb } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

function AgentsMockup() {
  return (
    <div className="flex h-80 flex-col justify-between rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6 backdrop-blur-sm">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-end"
        >
          <div className="max-w-xs rounded-2xl rounded-tr-md bg-primary/20 px-4 py-3 text-sm text-white">
            ¿Cuántos leads necesito calificar hoy?
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-start"
        >
          <div className="max-w-xs rounded-2xl rounded-tl-md bg-white/5 px-4 py-3 text-sm text-white/80">
            <div className="mb-2 flex items-center gap-1.5">
              <MessageCircle className="size-4 text-primary" />
              <span className="font-medium">Agente IA</span>
            </div>
            Procesé 47 leads, 15 calificadas
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-start"
        >
          <div className="max-w-xs rounded-2xl rounded-tl-md bg-white/5 px-4 py-3 text-sm text-white/80">
            <div className="flex gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-primary/60 animate-pulse"></span>
              <span className="inline-block h-2 w-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="inline-block h-2 w-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-2 border-t border-white/10 pt-4">
        <div className="h-8 w-8 rounded-full bg-primary/20"></div>
        <div className="flex-1 space-y-1">
          <div className="h-2 w-20 rounded bg-white/10"></div>
          <div className="h-2 w-16 rounded bg-white/5"></div>
        </div>
      </div>
    </div>
  )
}

function WorkflowMockup() {
  const tasks = [
    { icon: Check, label: 'Extraer datos', color: 'text-green-400', bg: 'bg-green-500/10' },
    { icon: Clock, label: 'Validar información', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { icon: Loader2, label: 'Procesando...', color: 'text-primary', bg: 'bg-primary/10' },
    { icon: X, label: 'Error detectado', color: 'text-red-400', bg: 'bg-red-500/10' },
  ]

  return (
    <div className="flex h-80 flex-col justify-between rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6 backdrop-blur-sm">
      <div className="space-y-3">
        {tasks.map((task, i) => (
          <motion.div
            key={task.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3 rounded-lg bg-white/5 p-3 border-l-2 border-primary/40"
          >
            <div className={`flex size-8 items-center justify-center rounded ${task.bg}`}>
              <task.icon className={`size-4 ${task.color}`} />
            </div>
            <span className="text-sm text-white/70">{task.label}</span>
            <div className="ml-auto text-xs text-white/40">
              {i === 2 ? '2s' : i > 2 ? 'failed' : 'done'}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-4">
        <div className="h-1 w-full rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60%' }}
            transition={{ duration: 2 }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
          />
        </div>
      </div>
    </div>
  )
}

function PrototypeMockup() {
  return (
    <div className="flex h-80 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-sm">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-white/10 bg-white/[0.02] p-3 flex flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="h-2 w-12 rounded bg-primary/40"
        ></motion.div>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`h-2 rounded ${i === 0 ? 'w-16 bg-primary/60' : 'w-12 bg-white/10'}`}
          ></motion.div>
        ))}
      </div>

      {/* Dashboard */}
      <div className="flex-1 p-4 flex flex-col gap-3">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="h-3 w-1/3 rounded bg-white/10"
        ></motion.div>

        {/* Widgets */}
        <div className="flex gap-2 flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 rounded bg-primary/10 border border-primary/20 p-2 flex flex-col justify-between"
          >
            <div className="h-1.5 w-1/2 rounded bg-primary/40"></div>
            <div className="h-3 w-2/3 rounded bg-primary/20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
            className="flex-1 rounded bg-purple-500/10 border border-purple-500/20 p-2 flex flex-col justify-between"
          >
            <div className="h-1.5 w-1/2 rounded bg-purple-500/40"></div>
            <div className="h-3 w-2/3 rounded bg-purple-500/20"></div>
          </motion.div>
        </div>

        {/* Chart area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 rounded border border-white/10 bg-white/[0.02] p-2 flex items-end gap-1"
        >
          {[40, 60, 45, 70, 55].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary/20"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function ConsultingMockup() {
  const phases = [
    { label: 'Diagnóstico', status: 'done' },
    { label: 'Estrategia', status: 'done' },
    { label: 'Implementación', status: 'active' },
    { label: 'Escalamiento', status: 'pending' },
  ]

  return (
    <div className="flex h-80 flex-col justify-between rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6 backdrop-blur-sm">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Lightbulb className="size-4 text-primary" />
          <span className="text-sm font-medium text-white">Hoja de ruta IA</span>
          <span className="ml-auto text-xs text-white/40">4 fases</span>
        </div>

        <div className="space-y-2">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2.5"
            >
              <span
                className={`flex size-6 items-center justify-center rounded-full text-[10px] font-semibold ${
                  phase.status === 'done'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : phase.status === 'active'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-white/5 text-white/40'
                }`}
              >
                {phase.status === 'done' ? (
                  <Check className="size-3.5" />
                ) : (
                  String(i + 1).padStart(2, '0')
                )}
              </span>
              <span
                className={`text-sm ${
                  phase.status === 'pending' ? 'text-white/40' : 'text-white/80'
                }`}
              >
                {phase.label}
              </span>
              {phase.status === 'done' && (
                <span className="ml-auto text-xs text-emerald-400/70">Listo</span>
              )}
              {phase.status === 'active' && (
                <span className="ml-auto flex gap-1">
                  <span className="inline-block size-1.5 rounded-full bg-primary/60 animate-pulse"></span>
                  <span className="inline-block size-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="inline-block size-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-sm text-white/60">Oportunidades detectadas</span>
        <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
          12
        </span>
      </div>
    </div>
  )
}

const services = [
  {
    num: '01',
    question: '¿Tu equipo pierde horas respondiendo siempre las mismas preguntas?',
    label: 'Agentes de IA',
    href: '/soluciones/agentes-ia',
    description:
      'Construimos agentes que se integran con tus sistemas actuales y resuelven el trabajo repetitivo de forma autónoma, 24/7.',
    mockup: <AgentsMockup />,
  },
  {
    num: '02',
    question: '¿Todavía copiás datos entre sistemas a mano?',
    label: 'Automatización de Workflows',
    href: '/soluciones/automatizacion-workflows',
    description:
      'Mapeamos tus procesos manuales y los reemplazamos con flujos automatizados. Menos errores y más tiempo para lo que importa.',
    mockup: <WorkflowMockup />,
  },
  {
    num: '03',
    question: '¿Sabés que la IA puede ayudarte pero no por dónde empezar?',
    label: 'Consultoría IA',
    href: '/soluciones/consultoria-ia',
    description:
      'Te guiamos con una estrategia clara: identificamos oportunidades, priorizamos casos de uso y armamos una hoja de ruta para adoptar IA con confianza.',
    mockup: <ConsultingMockup />,
  },
  {
    num: '04',
    question: '¿El software genérico no se adapta a cómo trabajás?',
    label: 'Software a Medida',
    href: '/soluciones/software-a-medida',
    description:
      'Diseñamos y construimos aplicaciones web y móviles, portales y herramientas internas a la medida de tus procesos. Del prototipo al producto en semanas.',
    mockup: <PrototypeMockup />,
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Qué hacemos
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Lo que construimos para vos
          </h2>
        </Reveal>

        <div className="mt-20 space-y-16">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.1}>
              <div
                className={`grid gap-12 items-center md:grid-cols-2 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/60">
                    {service.num}
                  </p>
                  <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
                    {service.question}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-primary">{service.label}</p>
                  <p className="mt-4 text-white/55 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-primary"
                  >
                    Conocé más
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  {service.mockup}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
