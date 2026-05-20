'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface LanguageContextType {
  isEnglish: boolean
  toggleLanguage: () => void
  t: (zh: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isEnglish, setIsEnglish] = useState(false)

  const toggleLanguage = () => setIsEnglish((prev) => !prev)
  const t = (zh: string, en: string) => (isEnglish ? en : zh)

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
