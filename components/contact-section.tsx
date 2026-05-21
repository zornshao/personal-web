'use client'

import { Mail, Linkedin } from 'lucide-react'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function ContactSection() {
  const { t, isEnglish } = useLanguage()
  const { personalInfo } = SITE_DATA || {}

  const socialLinks = [
    {
      nameZh: '邮箱',
      nameEn: 'Email',
      href: personalInfo?.email ? `mailto:${personalInfo.email}` : '#',
      icon: Mail,
      label: personalInfo?.email || '',
    },
    {
      nameZh: '领英',
      nameEn: 'LinkedIn',
      href: personalInfo?.linkedin || '#',
      icon: Linkedin,
      label: 'LinkedIn Profile',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-secondary/10 border-t border-border/50">
      <div className="mx-auto max-w-4xl px-6">
        {/* 头部标题与描述全居中 */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            {t('联系方式', 'Get in Touch')}
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            {t(
              '如需研究合作、行业咨询或学术讨论，欢迎随时取得联系。',
              'Feel free to reach out for research collaboration, industry consulting, or academic discussions.'
            )}
          </p>
        </div>

        {/* 邮箱和领英并排横向撑满展示，移动端自动纵向叠放 */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.nameEn}
              href={link.href}
              target={link.nameEn !== 'Email' ? '_blank' : undefined}
              rel={link.nameEn !== 'Email' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-secondary/40 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <p className="font-medium text-foreground text-base">
                  {t(link.nameZh, link.nameEn)}
                </p>
                <p className="text-sm text-muted-foreground break-all">{link.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t, isEnglish } = useLanguage()
  const { personalInfo } = SITE_DATA || {}

  const renderField = (field: any) => {
    if (!field) return ''
    if (typeof field === 'object') {
      return isEnglish ? (field.en || field.zh || '') : (field.zh || field.en || '')
    }
    return String(field)
  }

  const socialLinks = [
    {
      name: 'Email',
      href: personalInfo?.email ? `mailto:${personalInfo.email}` : '#',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: personalInfo?.linkedin || '#',
      icon: Linkedin,
    },
  ]

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {renderField(personalInfo?.name)}. {t('保留所有权利。', 'All rights reserved.')}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
