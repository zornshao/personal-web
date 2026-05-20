'use client'

import { useState } from 'react'
import { ExternalLink, FileText, ChevronDown, ChevronUp } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  year: number
  abstract?: string
  pdfUrl?: string
  doi?: string
}

const publications: Record<string, Publication[]> = {
  journals: [
    {
      id: '1',
      title: 'Algorithmic Accountability in Public Sector Decision-Making: A Framework for Governance',
      authors: 'Doe, J., Smith, A., & Johnson, B.',
      venue: 'Journal of Public Administration Research and Theory',
      year: 2024,
      abstract: 'This paper develops a comprehensive framework for ensuring algorithmic accountability in public sector applications, examining the intersection of technical transparency and democratic governance.',
      doi: '10.1093/jopart/xxxx',
    },
    {
      id: '2',
      title: 'Digital Platforms and Democratic Discourse: A Comparative Analysis',
      authors: 'Doe, J. & Williams, C.',
      venue: 'Information, Communication & Society',
      year: 2023,
      abstract: 'We examine how digital platforms shape political discourse across different regulatory environments, with implications for policy interventions.',
      pdfUrl: '#',
    },
    {
      id: '3',
      title: 'The Political Economy of Data Governance in East Asia',
      authors: 'Doe, J., Lee, K., & Chen, M.',
      venue: 'Regulation & Governance',
      year: 2023,
      abstract: 'This study analyzes the emerging data governance frameworks across East Asian economies and their implications for global digital trade.',
    },
  ],
  books: [
    {
      id: '4',
      title: 'Technology Governance in the Digital Age',
      authors: 'Doe, J.',
      venue: 'Cambridge University Press',
      year: 2024,
      abstract: 'A comprehensive examination of how governments and institutions can effectively govern emerging technologies while balancing innovation and public interest.',
    },
    {
      id: '5',
      title: 'Chapter: AI Ethics and Policy in Practice',
      authors: 'Doe, J.',
      venue: 'In: Handbook of Digital Policy (eds. Smith & Brown), Oxford University Press',
      year: 2023,
    },
  ],
  conferences: [
    {
      id: '6',
      title: 'Rethinking Algorithmic Impact Assessments: Evidence from Pilot Programs',
      authors: 'Doe, J. & Anderson, P.',
      venue: 'ACM Conference on Fairness, Accountability, and Transparency (FAccT)',
      year: 2024,
      abstract: 'We present findings from three pilot algorithmic impact assessment programs, identifying key success factors and common challenges.',
      pdfUrl: '#',
    },
    {
      id: '7',
      title: 'Cross-Border Data Flows and Regulatory Fragmentation',
      authors: 'Doe, J., Garcia, R., & Müller, H.',
      venue: 'International Conference on Information Systems (ICIS)',
      year: 2023,
    },
  ],
  media: [
    {
      id: '8',
      title: 'Why AI Regulation Needs More Than Technical Fixes',
      authors: 'Doe, J.',
      venue: 'MIT Technology Review',
      year: 2024,
    },
    {
      id: '9',
      title: 'The Hidden Costs of Algorithmic Decision-Making',
      authors: 'Doe, J.',
      venue: 'The Atlantic',
      year: 2023,
    },
    {
      id: '10',
      title: 'Podcast: Tech Policy Frontiers Episode 45',
      authors: 'Guest Appearance',
      venue: 'Tech Policy Press',
      year: 2024,
    },
  ],
}

function PublicationItem({ publication }: { publication: Publication }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="py-6 border-b border-border last:border-0">
      <div className="space-y-2">
        <button
          onClick={() => publication.abstract && setExpanded(!expanded)}
          className={cn(
            'text-left w-full group',
            publication.abstract && 'cursor-pointer'
          )}
        >
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-relaxed">
            {publication.title}
          </h3>
        </button>

        <p className="text-sm text-muted-foreground">
          {publication.authors}
        </p>

        <p className="text-sm text-muted-foreground">
          <span className="italic">{publication.venue}</span>, {publication.year}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {publication.abstract && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="h-8 text-xs"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-3 w-3 mr-1" />
                  Hide Abstract
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3 mr-1" />
                  Show Abstract
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
        {expanded && publication.abstract && (
          <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {publication.abstract}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground">Publications</h2>
          <p className="text-muted-foreground max-w-2xl">
            Selected academic publications spanning technology governance, digital policy, 
            and social science research.
          </p>
        </div>

        <Tabs defaultValue="journals" className="w-full">
          <TabsList className="mb-8 flex-wrap h-auto gap-2 bg-transparent p-0">
            <TabsTrigger
              value="journals"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Journal Articles
            </TabsTrigger>
            <TabsTrigger
              value="books"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Books & Chapters
            </TabsTrigger>
            <TabsTrigger
              value="conferences"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Conference Papers
            </TabsTrigger>
            <TabsTrigger
              value="media"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Media & Op-eds
            </TabsTrigger>
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
