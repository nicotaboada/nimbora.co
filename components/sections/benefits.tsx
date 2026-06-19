import { Clock, TrendingUp, Users, ShieldCheck, Zap, Coins } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const benefits = [
  {
    icon: Clock,
    title: 'Ahorrá tiempo',
    description: 'Eliminá tareas manuales y recuperá horas cada semana.',
  },
  {
    icon: Coins,
    title: 'Reducí costos',
    description: 'Hacé más con tu equipo actual, sin sumar gastos fijos.',
  },
  {
    icon: TrendingUp,
    title: 'Escalá sin fricción',
    description: 'Sistemas que crecen con tu negocio sin romperse.',
  },
  {
    icon: Users,
    title: 'Mejorá la experiencia',
    description: 'Atención más rápida y consistente para tus clientes.',
  },
  {
    icon: Zap,
    title: 'Decisiones más rápidas',
    description: 'Datos claros y en tiempo real cuando los necesitás.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiable y seguro',
    description: 'Soluciones robustas con tus datos siempre protegidos.',
  },
]

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative border-t border-border bg-white/[0.015] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Beneficios
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Por qué automatizar con IA
          </h2>
          <p className="mt-4 text-white/55">
            Más resultados con menos esfuerzo, desde el primer día.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-primary ring-1 ring-white/10">
                  <b.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {b.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
