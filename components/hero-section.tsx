'use client'

import { Mail, Linkedin, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function HeroSection() {
  const { t, isEnglish } = useLanguage()
  const { personalInfo } = SITE_DATA

  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Content - Bio & Contact */}
          <div className="lg:col-span-3 space-y-8">
            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
                {isEnglish ? personalInfo.name.en : personalInfo.name.zh}
              </h1>
              <p className="text-lg text-primary font-medium">
                {isEnglish ? personalInfo.title.en : personalInfo.title.zh}
              </p>
            </div>

            {/* Affiliations */}
            <div className="space-y-2">
              {personalInfo.affiliations.map((affiliation, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>{isEnglish ? affiliation.en : affiliation.zh}</span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-base">
                {isEnglish ? personalInfo.bio.en : personalInfo.bio.zh}
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="default" size="sm" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  {personalInfo.email}
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden border border-border shadow-lg">
                {/* Photo Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-secondary/80">
                  <div className="text-center space-y-3 p-6">
                    <div className="w-28 h-28 mx-auto rounded-full bg-muted-foreground/10 flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                      <span className="text-3xl font-semibold text-muted-foreground">
                        {isEnglish ? 'ZS' : '邵'}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t('职业形象照', 'Professional Photo')}
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
