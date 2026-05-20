import { Award, Users, BookOpen, Building2 } from 'lucide-react'

interface ServiceItem {
  id: string
  title: string
  organization: string
  period: string
  description?: string
  icon: 'award' | 'users' | 'book' | 'building'
}

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Editorial Board Member',
    organization: 'Journal of Technology Policy & Management',
    period: '2023 - Present',
    description: 'Reviewing submissions and shaping editorial direction for this leading interdisciplinary journal.',
    icon: 'book',
  },
  {
    id: '2',
    title: 'Senior Research Fellow',
    organization: 'Institute for Digital Governance',
    period: '2022 - Present',
    description: 'Contributing to policy research and public engagement initiatives on emerging technology governance.',
    icon: 'building',
  },
  {
    id: '3',
    title: 'Advisory Committee Member',
    organization: 'National AI Strategy Task Force',
    period: '2023 - Present',
    description: 'Providing expert input on national AI policy development and implementation strategies.',
    icon: 'users',
  },
  {
    id: '4',
    title: 'Peer Reviewer',
    organization: 'Multiple venues including ACM FAccT, ICIS, and Government Information Quarterly',
    period: '2020 - Present',
    icon: 'award',
  },
  {
    id: '5',
    title: 'Graduate Mentor',
    organization: 'Ph.D. Student Mentorship Program',
    period: '2021 - Present',
    description: 'Mentoring early-career researchers in technology policy and interdisciplinary research methods.',
    icon: 'users',
  },
  {
    id: '6',
    title: 'Working Group Co-Chair',
    organization: 'International Association for AI Policy',
    period: '2022 - 2024',
    description: 'Led working group on algorithmic impact assessment standards and best practices.',
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
          <h3 className="font-medium text-foreground">{item.title}</h3>
          <span className="text-xs text-muted-foreground">{item.period}</span>
        </div>
        <p className="text-sm text-primary/80">{item.organization}</p>
        {item.description && (
          <p className="text-sm text-muted-foreground pt-1">{item.description}</p>
        )}
      </div>
    </div>
  )
}

export function ServiceSection() {
  return (
    <section id="service" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground">Academic Service</h2>
          <p className="text-muted-foreground max-w-2xl">
            Professional service contributions including editorial roles, advisory positions, 
            peer review, and mentorship activities.
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
