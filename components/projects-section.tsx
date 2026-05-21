'use client'

import { Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function ProjectsSection() {
  const { t, isEnglish } = useLanguage()
  const { projects } = SITE_DATA

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-foreground">
            {t('研究项目', 'Research & Projects')}
          </h2>
        </div>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="h-full hover:border-primary/50 transition-colors">
                <CardHeader className="pb-4">
                  <Badge variant="default" className="w-fit mb-3">
                    {t('学术项目', 'Academic Research')}
                  </Badge>
                  <CardTitle className="text-lg leading-snug">
                    {isEnglish ? project.title.en : project.title.zh}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Calendar className="h-3 w-3" />
                    {project.period} · {isEnglish ? project.role.en : project.role.zh}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            {t('暂无项目', 'No projects yet')}
          </div>
        )}
      </div>
    </section>
  )
}
