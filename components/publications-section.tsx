'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function PublicationsSection() {
  const { t, isEnglish } = useLanguage()
  
  // 安全获取 publications 数据，并提供兜底的空数组，防止数据未定义时崩溃
  const publications = SITE_DATA?.publications || {
    journals: [],
    books: [],
    conferences: [],
    media: []
  }

  const tabs = [
    { value: 'journals', labelZh: '期刊论文', labelEn: 'Journal Articles' },
    { value: 'books', labelZh: '学术专著', labelEn: 'Books & Chapters' },
    { value: 'conferences', labelZh: '会议论文', labelEn: 'Conference Papers' },
    { value: 'media', labelZh: '媒体评论', labelEn: 'Media & Op-eds' },
  ]

  // 核心智能容错渲染函数：完美兼容 {zh, en} 对象和普通纯字符串
  const renderField = (field: any) => {
    if (!field) return ''
    if (typeof field === 'object') {
      return isEnglish ? (field.en || field.zh || '') : (field.zh || field.en || '')
    }
    return String(field)
  }

  // 安全检查渲染列表的防爆函数
  const renderList = (list: any[]) => list || []

  return (
    <section id="publications" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-foreground">
            {t('学术发表', 'Publications')}
          </h2>
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
                {renderList(publications.journals).map((pub, idx) => (
                  <div key={pub.id || `journal-${idx}`} className="px-6 py-5">
                    <h3 className="font-medium text-foreground leading-relaxed mb-2">
                      {renderField(pub.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="italic">{renderField(pub.source)}</span>
                      {pub.year ? `, ${pub.year}` : ''}
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
                {renderList(publications.books).map((pub, idx) => (
                  <div key={pub.id || `book-${idx}`} className="px-6 py-5">
                    <h3 className="font-medium text-foreground leading-relaxed mb-2">
                      {renderField(pub.title)}
                    </h3>
                    {pub.series && (
                      <p className="text-sm text-muted-foreground mb-1">
                        {renderField(pub.series)}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      <span className="italic">{renderField(pub.publisher)}</span>
                      {pub.year ? `, ${pub.year}` : ''}
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
                {renderList(publications.conferences).map((pub, idx) => (
                  <div key={pub.id || `conf-${idx}`} className="px-6 py-5">
                    <h3 className="font-medium text-foreground leading-relaxed mb-2">
                      {renderField(pub.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="italic">{renderField(pub.conference)}</span>
                      {pub.year ? `, ${pub.year}` : ''}
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
                {renderList(publications.media).map((pub, idx) => (
                  <div key={pub.id || `media-${idx}`} className="px-6 py-5">
                    <h3 className="font-medium text-foreground leading-relaxed mb-2">
                      {renderField(pub.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="italic">{renderField(pub.outlet)}</span>
                      {pub.year ? `, ${pub.year}` : ''}
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
