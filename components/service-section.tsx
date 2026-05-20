'use client'

import { Award, Users, BookOpen, Building2 } from 'lucide-react'
import { useLanguage } from '@/components/language-context'

interface ServiceItem {
  id: string
  titleZh: string
  titleEn: string
  organizationZh: string
  organizationEn: string
  periodZh: string
  periodEn: string
  descriptionZh?: string
  descriptionEn?: string
  icon: 'award' | 'users' | 'book' | 'building'
}

const services: ServiceItem[] = [
  {
    id: '1',
    titleZh: '编委会成员',
    titleEn: 'Editorial Board Member',
    organizationZh: '技术政策与管理期刊',
    organizationEn: 'Journal of Technology Policy & Management',
    periodZh: '2023 - 至今',
    periodEn: '2023 - Present',
    descriptionZh: '审稿并为这本领先的跨学科期刊塑造编辑方向。',
    descriptionEn: 'Reviewing submissions and shaping editorial direction for this leading interdisciplinary journal.',
    icon: 'book',
  },
  {
    id: '2',
    titleZh: '高级研究员',
    titleEn: 'Senior Research Fellow',
    organizationZh: '数字治理研究所',
    organizationEn: 'Institute for Digital Governance',
    periodZh: '2022 - 至今',
    periodEn: '2022 - Present',
    descriptionZh: '参与新兴技术治理的政策研究和公众参与活动。',
    descriptionEn: 'Contributing to policy research and public engagement initiatives on emerging technology governance.',
    icon: 'building',
  },
  {
    id: '3',
    titleZh: '咨询委员会成员',
    titleEn: 'Advisory Committee Member',
    organizationZh: '国家AI战略工作组',
    organizationEn: 'National AI Strategy Task Force',
    periodZh: '2023 - 至今',
    periodEn: '2023 - Present',
    descriptionZh: '为国家AI政策制定和实施策略提供专家意见。',
    descriptionEn: 'Providing expert input on national AI policy development and implementation strategies.',
    icon: 'users',
  },
  {
    id: '4',
    titleZh: '同行评审员',
    titleEn: 'Peer Reviewer',
    organizationZh: '多个会议，包括 ACM FAccT、ICIS 和 Government Information Quarterly',
    organizationEn: 'Multiple venues including ACM FAccT, ICIS, and Government Information Quarterly',
    periodZh: '2020 - 至今',
    periodEn: '2020 - Present',
    icon: 'award',
  },
  {
    id: '5',
    titleZh: '研究生导师',
    titleEn: 'Graduate Mentor',
    organizationZh: '博士生指导项目',
    organizationEn: 'Ph.D. Student Mentorship Program',
    periodZh: '2021 - 至今',
    periodEn: '2021 - Present',
    descriptionZh: '指导技术政策和跨学科研究方法领域的早期研究人员。',
    descriptionEn: 'Mentoring early-career researchers in technology policy and interdisciplinary research methods.',
    icon: 'users',
  },
  {
    id: '6',
    titleZh: '工作组联合主席',
    titleEn: 'Working Group Co-Chair',
    organizationZh: '国际AI政策协会',
    organizationEn: 'International Association for AI Policy',
    periodZh: '2022 - 2024',
    periodEn: '2022 - 2024',
    descriptionZh: '主持算法影响评估标准和最佳实践工作组。',
    descriptionEn: 'Led working group on algorithmic impact assessment standards and best practices.',
    icon: 'building',
  },
]

const iconMap = {
  award: Award,
  users: Users,
  book: BookOpen,
  building: Building2,
}

function TimelineItem({ item, isLast }: { item: ServiceItem; isLast: boolean }) {
  const Icon = iconMap[item.icon]
  const { isEnglish } = useLanguage()

  const title = isEnglish ? item.titleEn : item.titleZh
  const organization = isEnglish ? item.organizationEn : item.organizationZh
  const period = isEnglish ? item.periodEn : item.periodZh
  const description = isEnglish ? item.descriptionEn : item.descriptionZh

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
      )}

      {/* Icon */}
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center">
        <Icon className="h-3 w-3 text-muted-foreground" />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-medium text-foreground">{title}</h3>
          <span className="text-xs text-muted-foreground">{period}</span>
        </div>
        <p className="text-sm text-primary/80">{organization}</p>
        {description && (
          <p className="text-sm text-muted-foreground pt-1">{description}</p>
        )}
      </div>
    </div>
  )
}

export function ServiceSection() {
  const { t } = useLanguage()

  return (
    <section id="service" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground">
            {t('学术服务', 'Academic Service')}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {t(
              '专业服务贡献，包括编辑角色、顾问职位、同行评审和指导活动。',
              'Professional service contributions including editorial roles, advisory positions, peer review, and mentorship activities.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="bg-card rounded-xl border border-border p-6">
            {services.slice(0, 3).map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={index === 2}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="bg-card rounded-xl border border-border p-6">
            {services.slice(3).map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={index === 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
