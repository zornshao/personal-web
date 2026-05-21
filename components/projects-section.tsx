'use client'

import { Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function ProjectsSection() {
  const { t, isEnglish } = useLanguage()
  // 防御性获取 projects 数组，确保即使 SITE_DATA 结构出问题也不会白屏
  const projects = SITE_DATA?.projects || []

  // 核心容错函数：智能判断数据是对象还是纯文本，确保随意更改不报错
  const renderField = (field: any) => {
    if (!field) return ''
    if (typeof field === 'object') {
      return isEnglish ? (field.en || field.zh || '') : (field.zh || field.en || '')
    }
    return String(field)
  }

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
            {projects.map((project, index) => {
              // 确保每个卡片都有唯一的 key，就算 id 漏写了也能正常渲染
              const cardKey = project.id || `project-${index}`
              
              return (
                <Card key={cardKey} className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-4">
                    <Badge variant="default" className="w-fit mb-3">
                      {t('学术项目', 'Academic Research')}
                    </Badge>
                    <CardTitle className="text-lg leading-snug">
                      {renderField(project.title)}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-xs">
                      <Calendar className="h-3 w-3" />
                      {renderField(project.period)}
                      {(project.period && project.role) && ' · '}
                      {renderField(project.role)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
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
