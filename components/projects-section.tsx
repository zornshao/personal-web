import { ExternalLink, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  description: string
  type: 'academic' | 'consulting'
  period: string
  role: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI Governance Observatory',
    description: 'Leading a multi-year research initiative tracking AI policy developments across 30+ jurisdictions, developing comparative analysis frameworks and policy recommendations.',
    type: 'academic',
    period: '2022 - Present',
    role: 'Principal Investigator',
    tags: ['AI Policy', 'Comparative Analysis', 'Governance'],
    link: '#',
  },
  {
    id: '2',
    title: 'Algorithmic Impact Assessment Pilot',
    description: 'Designed and implemented algorithmic impact assessment frameworks for three municipal governments, resulting in improved transparency and accountability measures.',
    type: 'academic',
    period: '2023 - 2024',
    role: 'Research Lead',
    tags: ['AIA', 'Local Government', 'Implementation'],
  },
  {
    id: '3',
    title: 'Tech Ethics Advisory - Fortune 500',
    description: 'Provided strategic advisory services on responsible AI deployment, helping develop internal governance frameworks and stakeholder engagement strategies.',
    type: 'consulting',
    period: '2023 - Present',
    role: 'Senior Advisor',
    tags: ['Corporate Governance', 'AI Ethics', 'Strategy'],
  },
  {
    id: '4',
    title: 'Digital Transformation Strategy',
    description: 'Advised a major government agency on digital transformation initiatives, focusing on citizen-centric design and data governance best practices.',
    type: 'consulting',
    period: '2022 - 2023',
    role: 'Consultant',
    tags: ['Government', 'Digital Strategy', 'Data Governance'],
  },
  {
    id: '5',
    title: 'Cross-Border Data Flows Study',
    description: 'Collaborative research project examining regulatory frameworks for international data transfers, funded by a major research foundation.',
    type: 'academic',
    period: '2021 - 2023',
    role: 'Co-Investigator',
    tags: ['Data Policy', 'International', 'Trade'],
  },
  {
    id: '6',
    title: 'FinTech Regulatory Sandbox Review',
    description: 'Conducted comprehensive review of fintech regulatory sandbox programs for an international financial institution, informing policy recommendations.',
    type: 'consulting',
    period: '2022',
    role: 'Lead Analyst',
    tags: ['FinTech', 'Regulation', 'Innovation'],
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full hover:border-primary/50 transition-colors">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <Badge
            variant={project.type === 'academic' ? 'default' : 'secondary'}
            className="shrink-0"
          >
            {project.type === 'academic' ? 'Academic Research' : 'Industry Consulting'}
          </Badge>
          {project.link && (
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
        <CardTitle className="text-lg leading-snug mt-3">{project.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-xs">
          <Calendar className="h-3 w-3" />
          {project.period} · {project.role}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  const academicProjects = projects.filter((p) => p.type === 'academic')
  const consultingProjects = projects.filter((p) => p.type === 'consulting')

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground">Research & Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of academic research initiatives and industry consulting engagements 
            spanning technology governance, digital policy, and organizational transformation.
          </p>
        </div>

        {/* Academic Research */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-foreground mb-6">Academic Research</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Industry Consulting */}
        <div>
          <h3 className="text-xl font-medium text-foreground mb-6">Industry Consulting</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
