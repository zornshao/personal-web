'use client'

import { Mail, Linkedin, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function HeroSection() {
  const { t, isEnglish } = useLanguage()
  const { personalInfo } = SITE_DATA || {}

  // 核心智能容错渲染函数：完美兼容 {zh, en} 对象和普通纯字符串
  const renderField = (field: any) => {
    if (!field) return ''
    if (typeof field === 'object') {
      return isEnglish ? (field.en || field.zh || '') : (field.zh || field.en || '')
    }
    return String(field)
  }

  // 强力防爆处理：解析多段落个人简介 (bio)
  // 无论 bio 是数组还是单段落对象，甚至是普通字符串，都能完美平铺成数组进行渲染
  const getBioParagraphs = () => {
    if (!personalInfo?.bio) return []
    
    // 如果直接分了中英文数组
    if (personalInfo.bio.zh || personalInfo.bio.en) {
      const selectedBio = isEnglish ? personalInfo.bio.en : personalInfo.bio.zh
      if (Array.isArray(selectedBio)) return selectedBio
      if (typeof selectedBio === 'string') return [selectedBio]
      return []
    }
    
    // 如果整体是一个普通的数组
    if (Array.isArray(personalInfo.bio)) return personalInfo.bio
    
    // 如果是个普通字符串
    return [String(personalInfo.bio)]
  }

  const bioParagraphs = getBioParagraphs()
  const affiliations = personalInfo?.affiliations || []

  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Content - Bio & Contact */}
          <div className="lg:col-span-3 space-y-8">
            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
                {renderField(personalInfo?.name)}
              </h1>
              <p className="text-lg text-primary font-medium">
                {renderField(personalInfo?.title)}
              </p>
            </div>

            {/* Affiliations */}
            <div className="space-y-2">
              {affiliations.map((affiliation: any, index: number) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5 shrink-0" />
                  <span>{renderField(affiliation)}</span>
                </div>
              ))}
            </div>

            {/* Bio — multi-paragraph */}
            <div className="space-y-4">
              {bioParagraphs.map((paragraph: any, index: number) => (
                <p key={index} className="text-muted-foreground leading-relaxed text-base">
                  {renderField(paragraph)}
                </p>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {personalInfo?.email && (
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    {personalInfo.email}
                  </a>
                </Button>
              )}
              {personalInfo?.linkedin && (
                <Button variant="outline" size="sm" asChild>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              )}
            </div>
          </div>

         {/* Right Content - Professional Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden border border-border shadow-lg relative group">
                {personalInfo?.avatar ? (
                  <img 
                    src={personalInfo.avatar} 
                    alt={renderField(personalInfo?.name)} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/80">
                    <div className="text-center space-y-3 p-6">
                      <div className="w-28 h-28 mx-auto rounded-full bg-muted-foreground/10 flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                        <span className="text-3xl font-semibold text-muted-foreground">
                          {renderField(personalInfo?.name)?.[0] || '邵'}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {t('职业形象照', 'Professional Photo')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
