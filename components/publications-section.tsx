'use client'

import { useState } from 'react'
import { ExternalLink, FileText, ChevronDown, ChevronUp } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-context'

interface Publication {
  id: string
  titleZh: string
  titleEn: string
  authors: string
  venueZh: string
  venueEn: string
  year: number
  abstractZh?: string
  abstractEn?: string
  pdfUrl?: string
  doi?: string
}

const publications: Record<string, Publication[]> = {
  journals: [
    {
      id: '1',
      titleZh: '公共部门决策中的算法问责：一个治理框架',
      titleEn: 'Algorithmic Accountability in Public Sector Decision-Making: A Framework for Governance',
      authors: 'Doe, J., Smith, A., & Johnson, B.',
      venueZh: '公共行政研究与理论期刊',
      venueEn: 'Journal of Public Administration Research and Theory',
      year: 2024,
      abstractZh: '本文开发了一个全面的框架，以确保公共部门应用中的算法问责，审视技术透明度与民主治理的交汇点。',
      abstractEn: 'This paper develops a comprehensive framework for ensuring algorithmic accountability in public sector applications, examining the intersection of technical transparency and democratic governance.',
      doi: '10.1093/jopart/xxxx',
    },
    {
      id: '2',
      titleZh: '数字平台与民主话语：比较分析',
      titleEn: 'Digital Platforms and Democratic Discourse: A Comparative Analysis',
      authors: 'Doe, J. & Williams, C.',
      venueZh: '信息、通信与社会',
      venueEn: 'Information, Communication & Society',
      year: 2023,
      abstractZh: '我们研究了数字平台如何在不同监管环境中塑造政治话语，并探讨其对政策干预的影响。',
      abstractEn: 'We examine how digital platforms shape political discourse across different regulatory environments, with implications for policy interventions.',
      pdfUrl: '#',
    },
    {
      id: '3',
      titleZh: '东亚数据治理的政治经济学',
      titleEn: 'The Political Economy of Data Governance in East Asia',
      authors: 'Doe, J., Lee, K., & Chen, M.',
      venueZh: '监管与治理',
      venueEn: 'Regulation & Governance',
      year: 2023,
      abstractZh: '本研究分析了东亚经济体中新兴的数据治理框架及其对全球数字贸易的影响。',
      abstractEn: 'This study analyzes the emerging data governance frameworks across East Asian economies and their implications for global digital trade.',
    },
  ],
  books: [
    {
      id: '4',
      titleZh: '数字时代的技术治理',
      titleEn: 'Technology Governance in the Digital Age',
      authors: 'Doe, J.',
      venueZh: '剑桥大学出版社',
      venueEn: 'Cambridge University Press',
      year: 2024,
      abstractZh: '全面审视政府和机构如何有效治理新兴技术，同时平衡创新与公共利益。',
      abstractEn: 'A comprehensive examination of how governments and institutions can effectively govern emerging technologies while balancing innovation and public interest.',
    },
    {
      id: '5',
      titleZh: '章节：AI伦理与政策实践',
      titleEn: 'Chapter: AI Ethics and Policy in Practice',
      authors: 'Doe, J.',
      venueZh: '收录于：数字政策手册（Smith & Brown 编），牛津大学出版社',
      venueEn: 'In: Handbook of Digital Policy (eds. Smith & Brown), Oxford University Press',
      year: 2023,
    },
  ],
  conferences: [
    {
      id: '6',
      titleZh: '重新思考算法影响评估：来自试点项目的证据',
      titleEn: 'Rethinking Algorithmic Impact Assessments: Evidence from Pilot Programs',
      authors: 'Doe, J. & Anderson, P.',
      venueZh: 'ACM 公平、问责与透明会议 (FAccT)',
      venueEn: 'ACM Conference on Fairness, Accountability, and Transparency (FAccT)',
      year: 2024,
      abstractZh: '我们展示了三个算法影响评估试点项目的研究结果，识别了关键成功因素和常见挑战。',
      abstractEn: 'We present findings from three pilot algorithmic impact assessment programs, identifying key success factors and common challenges.',
      pdfUrl: '#',
    },
    {
      id: '7',
      titleZh: '跨境数据流动与监管碎片化',
      titleEn: 'Cross-Border Data Flows and Regulatory Fragmentation',
      authors: 'Doe, J., Garcia, R., & Müller, H.',
      venueZh: '国际信息系统会议 (ICIS)',
      venueEn: 'International Conference on Information Systems (ICIS)',
      year: 2023,
    },
  ],
  media: [
    {
      id: '8',
      titleZh: '为什么AI监管需要的不仅仅是技术修复',
      titleEn: 'Why AI Regulation Needs More Than Technical Fixes',
      authors: 'Doe, J.',
      venueZh: 'MIT 技术评论',
      venueEn: 'MIT Technology Review',
      year: 2024,
    },
    {
      id: '9',
      titleZh: '算法决策的隐性成本',
      titleEn: 'The Hidden Costs of Algorithmic Decision-Making',
      authors: 'Doe, J.',
      venueZh: '大西洋月刊',
      venueEn: 'The Atlantic',
      year: 2023,
    },
    {
      id: '10',
      titleZh: '播客：科技政策前沿 第45期',
      titleEn: 'Podcast: Tech Policy Frontiers Episode 45',
      authors: 'Guest Appearance',
      venueZh: 'Tech Policy Press',
      venueEn: 'Tech Policy Press',
      year: 2024,
    },
  ],
}

function PublicationItem({ publication }: { publication: Publication }) {
  const [expanded, setExpanded] = useState(false)
  const { t, isEnglish } = useLanguage()

  const title = isEnglish ? publication.titleEn : publication.titleZh
  const venue = isEnglish ? publication.venueEn : publication.venueZh
  const abstract = isEnglish ? publication.abstractEn : publication.abstractZh

  return (
    <div className="py-6 border-b border-border last:border-0">
      <div className="space-y-2">
        <button
          onClick={() => abstract && setExpanded(!expanded)}
          className={cn(
            'text-left w-full group',
            abstract && 'cursor-pointer'
          )}
        >
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-relaxed">
            {title}
          </h3>
        </button>

        <p className="text-sm text-muted-foreground">
          {publication.authors}
        </p>

        <p className="text-sm text-muted-foreground">
          <span className="italic">{venue}</span>, {publication.year}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {abstract && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="h-8 text-xs"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-3 w-3 mr-1" />
                  {t('收起摘要', 'Hide Abstract')}
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3 mr-1" />
                  {t('展开摘要', 'Show Abstract')}
                </>
              )}
            </Button>
          )}
          {publication.pdfUrl && (
            <Button variant="ghost" size="sm" className="h-8 text-xs" asChild>
              <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="h-3 w-3 mr-1" />
                PDF
              </a>
            </Button>
          )}
          {publication.doi && (
            <Button variant="ghost" size="sm" className="h-8 text-xs" asChild>
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                DOI
              </a>
            </Button>
          )}
        </div>

        {/* Abstract */}
        {expanded && abstract && (
          <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {abstract}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function PublicationsSection() {
  const { t } = useLanguage()

  const tabs = [
    { value: 'journals', labelZh: '期刊论文', labelEn: 'Journal Articles' },
    { value: 'books', labelZh: '学术专著', labelEn: 'Books & Chapters' },
    { value: 'conferences', labelZh: '会议论文', labelEn: 'Conference Papers' },
    { value: 'media', labelZh: '媒体评论', labelEn: 'Media & Op-eds' },
  ]

  return (
    <section id="publications" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground">
            {t('学术发表', 'Publications')}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {t(
              '精选学术发表，涵盖技术治理、数字政策和社会科学研究领域。',
              'Selected academic publications spanning technology governance, digital policy, and social science research.'
            )}
          </p>
        </div>

        <Tabs defaultValue="journals" className="w-full">
          <TabsList className="mb-8 flex-wrap h-auto gap-2 bg-transparent p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
              >
                {t(tab.labelZh, tab.labelEn)}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(publications).map(([key, pubs]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="bg-card rounded-xl border border-border">
                <div className="divide-y divide-border px-6">
                  {pubs.map((pub) => (
                    <PublicationItem key={pub.id} publication={pub} />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
