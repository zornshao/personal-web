'use client'

import { ExternalLink, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-context'

interface Project {
  id: string
  titleZh: string
  titleEn: string
  descriptionZh: string
  descriptionEn: string
  type: 'academic' | 'consulting'
  periodZh: string
  periodEn: string
  roleZh: string
  roleEn: string
  tagsZh: string[]
  tagsEn: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: '1',
    titleZh: 'AI治理观察站',
    titleEn: 'AI Governance Observatory',
    descriptionZh: '主持一项跨越30多个司法管辖区的AI政策发展多年期研究计划，开发比较分析框架和政策建议。',
    descriptionEn: 'Leading a multi-year research initiative tracking AI policy developments across 30+ jurisdictions, developing comparative analysis frameworks and policy recommendations.',
    type: 'academic',
    periodZh: '2022 - 至今',
    periodEn: '2022 - Present',
    roleZh: '首席研究员',
    roleEn: 'Principal Investigator',
    tagsZh: ['AI政策', '比较分析', '治理'],
    tagsEn: ['AI Policy', 'Comparative Analysis', 'Governance'],
    link: '#',
  },
  {
    id: '2',
    titleZh: '算法影响评估试点',
    titleEn: 'Algorithmic Impact Assessment Pilot',
    descriptionZh: '为三个市级政府设计并实施算法影响评估框架，改善了透明度和问责措施。',
    descriptionEn: 'Designed and implemented algorithmic impact assessment frameworks for three municipal governments, resulting in improved transparency and accountability measures.',
    type: 'academic',
    periodZh: '2023 - 2024',
    periodEn: '2023 - 2024',
    roleZh: '研究负责人',
    roleEn: 'Research Lead',
    tagsZh: ['算法评估', '地方政府', '实施'],
    tagsEn: ['AIA', 'Local Government', 'Implementation'],
  },
  {
    id: '3',
    titleZh: '科技伦理顾问 - 世界500强',
    titleEn: 'Tech Ethics Advisory - Fortune 500',
    descriptionZh: '为负责任的AI部署提供战略咨询服务，帮助开发内部治理框架和利益相关者参与策略。',
    descriptionEn: 'Provided strategic advisory services on responsible AI deployment, helping develop internal governance frameworks and stakeholder engagement strategies.',
    type: 'consulting',
    periodZh: '2023 - 至今',
    periodEn: '2023 - Present',
    roleZh: '高级顾问',
    roleEn: 'Senior Advisor',
    tagsZh: ['企业治理', 'AI伦理', '战略'],
    tagsEn: ['Corporate Governance', 'AI Ethics', 'Strategy'],
  },
  {
    id: '4',
    titleZh: '数字化转型战略',
    titleEn: 'Digital Transformation Strategy',
    descriptionZh: '为一家主要政府机构的数字化转型计划提供咨询，专注于以公民为中心的设计和数据治理最佳实践。',
    descriptionEn: 'Advised a major government agency on digital transformation initiatives, focusing on citizen-centric design and data governance best practices.',
    type: 'consulting',
    periodZh: '2022 - 2023',
    periodEn: '2022 - 2023',
    roleZh: '顾问',
    roleEn: 'Consultant',
    tagsZh: ['政府', '数字战略', '数据治理'],
    tagsEn: ['Government', 'Digital Strategy', 'Data Governance'],
  },
  {
    id: '5',
    titleZh: '跨境数据流动研究',
    titleEn: 'Cross-Border Data Flows Study',
    descriptionZh: '研究国际数据传输监管框架的合作研究项目，由知名研究基金会资助。',
    descriptionEn: 'Collaborative research project examining regulatory frameworks for international data transfers, funded by a major research foundation.',
    type: 'academic',
    periodZh: '2021 - 2023',
    periodEn: '2021 - 2023',
    roleZh: '联合研究员',
    roleEn: 'Co-Investigator',
    tagsZh: ['数据政策', '国际', '贸易'],
    tagsEn: ['Data Policy', 'International', 'Trade'],
  },
  {
    id: '6',
    titleZh: '金融科技监管沙盒评估',
    titleEn: 'FinTech Regulatory Sandbox Review',
    descriptionZh: '为一家国际金融机构对金融科技监管沙盒项目进行全面审查，为政策建议提供依据。',
    descriptionEn: 'Conducted comprehensive review of fintech regulatory sandbox programs for an international financial institution, informing policy recommendations.',
    type: 'consulting',
    periodZh: '2022',
    periodEn: '2022',
    roleZh: '首席分析师',
    roleEn: 'Lead Analyst',
    tagsZh: ['金融科技', '监管', '创新'],
    tagsEn: ['FinTech', 'Regulation', 'Innovation'],
  },
]

function ProjectCard({ project }: { project: Project }) {
  const { t, isEnglish } = useLanguage()

  const title = isEnglish ? project.titleEn : project.titleZh
  const description = isEnglish ? project.descriptionEn : project.descriptionZh
  const period = isEnglish ? project.periodEn : project.periodZh
  const role = isEnglish ? project.roleEn : project.roleZh
  const tags = isEnglish ? project.tagsEn : project.tagsZh

  return (
    <Card className="h-full hover:border-primary/50 transition-colors">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <Badge
            variant={project.type === 'academic' ? 'default' : 'secondary'}
            className="shrink-0"
          >
            {project.type === 'academic' 
              ? t('学术课题', 'Academic Research') 
              : t('行业咨询', 'Industry Consulting')}
          </Badge>
          {project.link && (
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
        <CardTitle className="text-lg leading-snug mt-3">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-xs">
          <Calendar className="h-3 w-3" />
          {period} · {role}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
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
  const { t } = useLanguage()

  const academicProjects = projects.filter((p) => p.type === 'academic')
  const consultingProjects = projects.filter((p) => p.type === 'consulting')

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground">
            {t('研究与项目', 'Research & Projects')}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {t(
              '精选学术研究项目和行业咨询合作，涵盖技术治理、数字政策和组织变革领域。',
              'A selection of academic research initiatives and industry consulting engagements spanning technology governance, digital policy, and organizational transformation.'
            )}
          </p>
        </div>

        {/* Academic Research */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-foreground mb-6">
            {t('学术课题', 'Academic Research')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Industry Consulting */}
        <div>
          <h3 className="text-xl font-medium text-foreground mb-6">
            {t('行业咨询', 'Industry Consulting')}
          </h3>
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
