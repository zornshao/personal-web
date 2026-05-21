'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-context'
import { SITE_DATA } from '@/lib/site-data'

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { isEnglish, toggleLanguage, t } = useLanguage()

  const { personalInfo } = SITE_DATA || {}

  // 核心智能容错渲染函数：完美兼容 {zh, en} 对象和普通纯字符串，防止 Logo 名字崩溃
  const renderField = (field: any) => {
    if (!field) return ''
    if (typeof field === 'object') {
      return isEnglish ? (field.en || field.zh || '') : (field.zh || field.en || '')
    }
    return String(field)
  }

  const navItems = [
    { labelZh: '关于', labelEn: 'About', href: '#about' },
    { labelZh: '发表', labelEn: 'Publications', href: '#publications' },
    { labelZh: '项目', labelEn: 'Projects', href: '#projects' },
    { labelZh: '联系', labelEn: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 升级后的 Logo：智能展示学者姓名，且带全自动类型防御 */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            {renderField(personalInfo?.name) || t('主页', 'Portfolio')}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.labelZh, item.labelEn)}
              </a>
            ))}
          </div>

          {/* Language Toggle, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-1">
            {/* Language Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="h-9 px-3 gap-1.5 text-xs font-medium"
                aria-label="Toggle language"
              >
                <Globe className="h-3.5 w-3.5" />
                <span className="transition-all duration-200">
                  {/* 💡 完美修改交互逻辑：当前是英文（isEnglish为true）时按钮提示 '中'，当前是中文时按钮主动提示 'ENG' */}
                  {isEnglish ? '中' : 'ENG'}
                </span>
              </Button>
            )}

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {t(item.labelZh, item.labelEn)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
