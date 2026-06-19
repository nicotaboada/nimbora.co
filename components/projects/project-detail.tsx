'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/sections/navbar'
import { MoreProjects } from '@/components/projects/more-projects'
import type { Project } from '@/lib/projects'

// Page content language (kept fixed; matches the home navbar styling).
const lang = 'es' as const

const t = {
  back: 'Volver al inicio',
  client: 'Cliente',
  date: 'Fecha',
  context: 'Contexto',
}

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function ImageFrame({
  src,
  alt,
  contain = false,
  position = 'top',
}: {
  src: string
  alt: string
  contain?: boolean
  position?: 'top' | 'center'
}) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'relative aspect-[16/10] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10',
        contain ? 'bg-white' : 'bg-neutral-50',
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          contain ? 'object-contain p-12' : 'object-cover',
          !contain && (position === 'center' ? 'object-center' : 'object-top'),
        )}
      />
    </motion.div>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  const images = project.images ?? (project.image ? [project.image] : [])

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Same navbar as the home page */}
      <Navbar />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 md:px-12 md:pt-32 md:pb-16">
        {/* Back */}
        <Link
          href="/#casos"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" />
          {t.back}
        </Link>

        {/* 1. Title (appears first, on load) */}
        <motion.h1
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mt-10 max-w-5xl text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl"
        >
          {project.title}
        </motion.h1>

        {/* Body grid */}
        <div className="mt-14 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[0.8fr_1.4fr] md:gap-16">
          {/* 2. Meta column (appears after the title) */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="space-y-10"
          >
            <Meta label={t.client}>{project.client}</Meta>
            <Meta label={t.date}>{project.date}</Meta>
            <Meta label={t.context}>
              <p className="text-base leading-relaxed text-white/65">{project.context[lang]}</p>
            </Meta>
          </motion.div>

          {/* 3. Images — each reveals as it scrolls into view */}
          <div className="space-y-8 md:border-l md:border-white/10 md:pl-16">
            {/* Logo as the main (first) frame */}
            {project.logo && (
              <ImageFrame src={project.logo} alt={`${project.title} — logo`} contain />
            )}
            {images.length > 0 ? (
              images.map((src, i) => (
                <ImageFrame
                  key={src}
                  src={src}
                  alt={`${project.title} — ${i + 1}`}
                  position={project.imagePosition}
                />
              ))
            ) : project.logo ? null : (
              <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-neutral-50 ring-1 ring-white/10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Imagen próximamente
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* More projects */}
      <MoreProjects currentId={project.id} />
    </main>
  )
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e0581f]">{label}</p>
      <div className="mt-3 text-lg font-medium text-white">{children}</div>
    </div>
  )
}
