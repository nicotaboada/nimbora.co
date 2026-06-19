import { otherProjects } from '@/lib/projects'
import { Reveal } from '@/components/ui/reveal'
import { ProjectCard } from '@/components/projects/project-card'

/**
 * "More projects" grid shown at the bottom of a project detail page.
 * Pulls from the same source as the home grid, excluding the current one.
 */
export function MoreProjects({ currentId }: { currentId: string }) {
  const others = otherProjects(currentId, 3)
  if (others.length === 0) return null

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e0581f]">
            Más proyectos
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Otros trabajos que nos enorgullecen.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <ProjectCard project={p} lang="es" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
