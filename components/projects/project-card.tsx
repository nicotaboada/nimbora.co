import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projectThumbnail, type Project } from '@/lib/projects'

type Lang = 'en' | 'es'

/**
 * Shared project card used on the home grid and in the "more projects"
 * section of a project detail page. Image on top, then CLIENT · YEAR,
 * title and a short description.
 *
 * When a project has a logo, the cover shows the logo and crossfades to the
 * first screenshot on hover (pure CSS, no JS).
 */
export function ProjectCard({
  project,
  lang = 'es',
  cta = 'Ver proyecto',
}: {
  project: Project
  lang?: Lang
  cta?: string
}) {
  const screenshot = projectThumbnail(project)
  const title = project.title.replace(/\.$/, '')
  const pos = project.imagePosition === 'center' ? 'object-center' : 'object-top'

  return (
    <Link href={`/projects/${project.id}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
        {/* Cover */}
        <div
          className={cn(
            'relative aspect-[16/10] overflow-hidden',
            project.logo ? 'bg-white' : 'bg-neutral-50',
          )}
        >
          {project.logo ? (
            <>
              {/* Base: logo, fades out on hover */}
              <Image
                src={project.logo}
                alt={title}
                fill
                className="object-contain p-10 transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Hover: first screenshot */}
              {screenshot && (
                <Image
                  src={screenshot}
                  alt={title}
                  fill
                  className={cn(
                    'object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                    pos,
                  )}
                />
              )}
            </>
          ) : screenshot ? (
            <Image
              src={screenshot}
              alt={title}
              fill
              className={cn(
                'object-cover transition-transform duration-500 group-hover:scale-[1.03]',
                pos,
              )}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02]">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Imagen próximamente
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e0581f]">
            {project.client} · {project.date}
          </p>
          <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/60">
            {project.context[lang]}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-[gap] duration-300 group-hover:gap-3">
            {cta}
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
