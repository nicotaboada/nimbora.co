import { notFound } from 'next/navigation'
import { getProject, projects } from '@/lib/projects'
import { ProjectDetail } from '@/components/projects/project-detail'

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProject(id)
  if (!project) return { title: 'Project not found' }
  return {
    title: `${project.title} — Analytics Group`,
    description: project.context.en,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProject(id)

  if (!project) notFound()

  return <ProjectDetail project={project} />
}
