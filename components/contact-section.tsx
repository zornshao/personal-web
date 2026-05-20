'use client'

import { Mail, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function ContactSection() {
  const { t } = useLanguage()
  const { personalInfo } = SITE_DATA

  const socialLinks = [
    {
      nameZh: '邮箱',
      nameEn: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: personalInfo.email,
    },
    {
      nameZh: '领英',
      nameEn: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: Linkedin,
      label: 'LinkedIn Profile',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in production, this would send to an API
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground">
            {t('联系方式', 'Get in Touch')}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {t(
              '如有合作、咨询或学术讨论意向，欢迎通过以下方式联系我。',
              'Interested in collaboration, consulting, or academic discussion? Feel free to reach out through any of the channels below.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="space-y-8">
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.nameEn}
                  href={link.href}
                  target={link.nameEn !== 'Email' ? '_blank' : undefined}
                  rel={link.nameEn !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {t(link.nameZh, link.nameEn)}
                    </p>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-lg bg-secondary/50 border border-border">
              <h3 className="font-medium text-foreground mb-2">
                {t('合作咨询', 'Consultation')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  '如需研究合作、行业咨询或学术讨论，请发送邮件详述您的需求。',
                  'For research collaboration, industry consulting, or academic discussions, please email with details about your needs.'
                )}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-medium text-foreground mb-6">
              {t('发送消息', 'Send a Message')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('姓名', 'Name')}</Label>
                <Input
                  id="name"
                  placeholder={t('您的姓名', 'Your name')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('邮箱', 'Email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('您的邮箱', 'your@email.com')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('留言', 'Message')}</Label>
                <Textarea
                  id="message"
                  placeholder={t('请输入您的留言...', 'How can I help you?')}
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                {t('发送消息', 'Send Message')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t, isEnglish } = useLanguage()
  const { personalInfo } = SITE_DATA

  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: Linkedin,
    },
  ]

  return (
    <footer className="py-8 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {isEnglish ? personalInfo.name.en : personalInfo.name.zh}. {t('保留所有权利。', 'All rights reserved.')}
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
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
