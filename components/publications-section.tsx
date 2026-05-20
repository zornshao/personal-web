'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function PublicationsSection() {
  const { t, isEnglish } = useLanguage()
  const { publications } = SITE_DATA

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
              '精选学术发表，涵盖法律社会学、数字政策与规制、知识产权法等研究领域。',
              'Selected academic publications spanning the sociology of law, digital policy and regulation, and intellectual property law.'
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

          {/* Journals */}
          <TabsContent value="journals" className="mt-0">
            <div className="bg-card rounded-xl border border-border">
              <div className="divide-y divide-border">
                {publications.journals.map((pub) => (
                  <div key={pub.id} className="px-6 py-5">
                    <h3 className="font-medium text-foreground leading-relaxed mb-2">
                      {isEnglish ? pub.title.en : pub.title.zh}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="italic">{pub.source}</span>, {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Books */}
          <TabsContent value="books" className="mt-0">
            <div className="bg-card rounded-xl border border-border">
              <div className="divide-y divide-border">
                {publications.books.map((pub) => (
                  <div key={pub.id} className="px-6 py-5">
                    <h3 className="font-medium text-foreground leading-relaxed mb-2">
                      {isEnglish ? pub.title.en : pub.title.zh}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {pub.series}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="italic">{pub.publisher}</span>, {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Conferences */}
          <TabsContent value="conferences" className="mt-0">
            <div className="bg-card rounded-xl border border-border">
              <div className="divide-y divide-border">
                {publications.conferences.map((pub) => (
                  <div key={pub.id} className="px-6 py-5">
                    <h3 className="font-medium text-foreground leading-relaxed mb-2">
                      {isEnglish ? pub.title.en : pub.title.zh}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="italic">{pub.conference}</span>, {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Media */}
          <TabsContent value="media" className="mt-0">
            <div className="bg-card rounded-xl border border-border">
              <div className="divide-y divide-border">
                {publications.media.map((pub) => (
                  <div key={pub.id} className="px-6 py-5">
                    <h3 className="font-medium text-foreground leading-relaxed mb-2">
                      {isEnglish ? pub.title.en : pub.title.zh}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="italic">{pub.outlet}</span>, {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
