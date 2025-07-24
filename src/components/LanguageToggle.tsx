'use client'

import { useLanguage, Language } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
] as const

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-foreground h-10 w-10 group relative overflow-hidden"
        )}
        type="button"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="text-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
          {currentLanguage?.flag}
        </span>
        <span className="sr-only">Change Language</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-12 z-50 w-48 rounded-xl border border-border/20 bg-background/98 backdrop-blur-2xl shadow-2xl shadow-primary/10 animate-in slide-in-from-top-2 duration-300">
            <div className="p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as Language)
                    setIsOpen(false)
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-300 hover:bg-muted group relative overflow-hidden",
                    language === lang.code ? "bg-muted text-primary" : "text-foreground"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-base relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {lang.flag}
                  </span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                    {lang.name}
                  </span>
                  {language === lang.code && (
                    <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-purple-500 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
