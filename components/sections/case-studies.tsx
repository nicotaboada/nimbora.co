import { Reveal } from '@/components/ui/reveal'
import { ProjectCard } from '@/components/projects/project-card'
import { projects } from '@/lib/projects'

const lang = 'es' as const

export function CaseStudies() {
  return (
    <section id="casos" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Nuestro trabajo</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Proyectos de los que estamos orgullosos.
          </h2>
          <p className="mt-4 text-white/55">
            Cada proyecto es la historia de un problema real resuelto con ingenio, creatividad y dedicación.
          </p>
        </Reveal>

        {/* Uniform card grid — same format as the "more projects" section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.1}>
              <ProjectCard project={p} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
