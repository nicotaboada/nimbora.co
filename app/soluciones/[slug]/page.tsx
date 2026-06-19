import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  Brain,
  Zap,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Settings,
  Bot,
  Users,
  Search,
  Gauge,
  Lightbulb,
  Shield,
  Rocket,
  Plug,
  Wrench,
  Database,
  Layers,
  MessageCircle,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { ConstellationBackground } from '@/components/sections/constellation-bg'
import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import { SERVICES, getService } from '@/lib/services'

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  zap: Zap,
  target: Target,
  trending: TrendingUp,
  clock: Clock,
  dollar: DollarSign,
  chart: BarChart3,
  settings: Settings,
  bot: Bot,
  users: Users,
  search: Search,
  gauge: Gauge,
  lightbulb: Lightbulb,
  shield: Shield,
  rocket: Rocket,
  plug: Plug,
  wrench: Wrench,
  database: Database,
  layers: Layers,
  message: MessageCircle,
}

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Target
  return <Cmp className={className} />
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.title} — Nimbora`,
    description: service.heroDescription,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* HERO + CTA (mismo fondo que la home, centrado) */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <ConstellationBackground />
          </div>
          <div className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-[70vh]" />

          <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-36 text-center md:pt-44">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-white/80">
                Soluciones IA
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                {service.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
                {service.heroDescription}
              </p>
              <div className="mt-10 flex justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="white">
                    Empezá hoy
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {service.why.title}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/55">
                  {service.why.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.why.benefits.map((b, i) => (
                <Reveal key={b.label} delay={i * 0.08}>
                  <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-7 text-center">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04]">
                      <Icon name={b.icon} className="size-6 text-white/85" />
                    </div>
                    <p className="mt-5 text-sm font-medium text-white/55">{b.label}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug">
                      {b.headline}
                    </h3>
                    <p className="mt-3 text-sm text-white/55">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {service.process.title}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/55">
                  {service.process.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-7 text-center">
                    <span className="flex size-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon name={step.icon} className="mt-5 size-6 text-white/85" />
                    <h3 className="mt-4 font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm text-white/55">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="relative border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {service.useCases.title}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/55">
                  {service.useCases.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {service.useCases.items.map((uc, i) => (
                <Reveal key={uc.title} delay={(i % 3) * 0.08}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                    <h3 className="text-lg font-semibold">{uc.title}</h3>
                    <p className="mt-3 text-sm text-white/55">{uc.desc}</p>
                    <p className="mt-6 text-sm font-semibold">Ejemplos comunes:</p>
                    <ul className="mt-3 space-y-2.5">
                      {uc.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2.5 text-sm text-white/60">
                          <CheckCircle2 className="size-4 shrink-0 text-white/70" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border px-6 py-16 text-center md:px-12 md:py-20">
                <div className="bg-glow pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,153,255,0.08),rgba(223,122,254,0.08))]" />
                <div className="relative">
                  <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                    {service.finalCta.title}
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-white/60">
                    {service.finalCta.desc}
                  </p>
                  <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link href="/contact">
                      <Button size="lg" variant="white">
                        Trabajá con nosotros
                        <ArrowRight className="size-4" />
                      </Button>
                    </Link>
                    <Link href="/#casos">
                      <Button size="lg" variant="outline">
                        Ver casos de estudio
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
