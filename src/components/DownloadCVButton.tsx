'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface DownloadCVButtonProps {
  className?: string
  children?: React.ReactNode
}

export function DownloadCVButton({ className = '', children }: DownloadCVButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = React.useState(false)
  const { language, t } = useLanguage()

  const handleDownloadCV = async (selectedLanguage?: string) => {
    if (isLoading) return
    
    setIsLoading(true)
    setShowLanguageMenu(false)
    
    try {
      // Determine which CV file to download
      const langCode = selectedLanguage || language
      const fileName = `cv-${langCode}.pdf`
      
      // Create download link
      const link = document.createElement('a')
      link.href = `/${fileName}`
      link.download = `Nguyen_Ngoc_Hai_CV_${langCode.toUpperCase()}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
    } catch (error) {
      console.error('Error downloading CV:', error)
      alert('Error downloading CV. Please try again.')
    } finally {
      setTimeout(() => setIsLoading(false), 1000) // Show loading for smooth UX
    }
  }

  const languageOptions = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        disabled={isLoading}
        className={`
          inline-flex items-center justify-center
          px-6 py-3 
          bg-gradient-to-r from-primary via-purple-600 to-indigo-600
          hover:from-primary/90 hover:via-purple-600/90 hover:to-indigo-600/90
          text-white font-semibold rounded-lg
          transition-all duration-300
          transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25
          disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
          group relative overflow-hidden
          ${className}
        `}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Content */}
        <div className="relative flex items-center space-x-2">
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{t('cta.downloading')}</span>
            </>
          ) : (
            <>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <span>{children || t('cta.downloadCV')}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${showLanguageMenu ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </div>
      </button>

      {/* Language Selection Menu */}
      {showLanguageMenu && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-background/95 border border-border/50 backdrop-blur-sm rounded-xl shadow-2xl z-[9999] overflow-visible">
          <div className="py-1">
            {languageOptions.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => handleDownloadCV(lang.code)}
                className={`w-full px-4 py-3 text-left hover:bg-muted/80 transition-all duration-200 flex items-center space-x-3 group relative overflow-hidden ${
                  index === 0 ? 'rounded-t-xl' : ''
                } ${
                  index === languageOptions.length - 1 ? 'rounded-b-xl' : ''
                }`}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                
                <span className="text-xl relative z-10">{lang.flag}</span>
                <span className="text-foreground font-medium relative z-10 group-hover:text-primary transition-colors duration-200">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {showLanguageMenu && (
        <div 
          className="fixed inset-0 z-[9998]" 
          onClick={() => setShowLanguageMenu(false)}
        />
      )}
    </div>
  )
}
