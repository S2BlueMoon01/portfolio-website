'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface DownloadCVButtonProps {
  className?: string
  children?: React.ReactNode
}

export function DownloadCVButton({ className = '', children }: DownloadCVButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const { t } = useLanguage()

  const handleDownloadCV = async () => {
    if (isLoading) return
    
    setIsLoading(true)
    
    try {
      // Thêm một delay nhỏ để UI cập nhật loading state
      await new Promise(resolve => setTimeout(resolve, 300))
      
      // Tạo link để download file PDF trực tiếp
      const link = document.createElement('a')
      link.href = '/cv.pdf'
      link.download = 'Nguyen_Ngoc_Hai_CV.pdf'
      link.target = '_blank'
      
      // Trigger download
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
    } catch (error) {
      console.error('Error downloading CV:', error)
      
      // Fallback: mở PDF trong tab mới
      window.open('/cv.pdf', '_blank')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleDownloadCV}
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
            <span>{children || 'Download CV'}</span>
          </>
        )}
      </div>
    </button>
  )
}
