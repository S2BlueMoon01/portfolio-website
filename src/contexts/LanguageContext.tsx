'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'vi' | 'ja'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Full Stack Developer',
    'hero.bio': 'Passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get in Touch',
    
    // Skills Section
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'The tools and technologies I use to build amazing digital experiences',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of my recent work and creative endeavors',
    'projects.learnMore': 'Learn More',
    'projects.viewAll': 'View All Projects',
    
    // CTA Section
    'cta.title': 'Ready to Start Your Next Project?',
    'cta.subtitle': "Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create something amazing.",
    'cta.getStarted': 'Get Started',
    'cta.learnMore': 'Learn More About Me',
    
    // Experience Page
    'experience.title': 'Experience & Education',
    'experience.subtitle': 'My professional journey, educational background, and the skills I\'ve developed along the way.',
    'experience.professionalTitle': 'Professional Experience',
    'experience.professionalSubtitle': 'My career journey and the roles that have shaped my professional development.',
    'experience.educationTitle': 'Education',
    'experience.educationSubtitle': 'My educational background and continuous learning journey.',
    'experience.ctaTitle': 'Let\'s Work Together',
    'experience.ctaSubtitle': 'I\'m always excited to take on new challenges and collaborate on interesting projects.',
  },
  
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.projects': 'Dự án',
    'nav.experience': 'Kinh nghiệm',
    'nav.contact': 'Liên hệ',
    
    // Hero Section
    'hero.title': 'Lập trình viên Full Stack',
    'hero.bio': 'Lập trình viên full-stack đam mê với chuyên môn về các công nghệ web hiện đại. Tôi yêu thích tạo ra những ứng dụng đẹp, chức năng và thân thiện với người dùng để giải quyết các vấn đề thực tế.',
    'hero.viewWork': 'Xem công việc của tôi',
    'hero.getInTouch': 'Liên hệ',
    
    // Skills Section
    'skills.title': 'Kỹ năng & Công nghệ',
    'skills.subtitle': 'Các công cụ và công nghệ tôi sử dụng để tạo ra những trải nghiệm số tuyệt vời',
    
    // Projects Section
    'projects.title': 'Dự án nổi bật',
    'projects.subtitle': 'Giới thiệu về các công việc gần đây và những nỗ lực sáng tạo của tôi',
    'projects.learnMore': 'Tìm hiểu thêm',
    'projects.viewAll': 'Xem tất cả dự án',
    
    // CTA Section
    'cta.title': 'Sẵn sàng bắt đầu dự án tiếp theo của bạn?',
    'cta.subtitle': 'Hãy cùng nhau biến ý tưởng của bạn thành hiện thực. Tôi luôn hào hứng đón nhận những thử thách mới và tạo ra điều gì đó tuyệt vời.',
    'cta.getStarted': 'Bắt đầu',
    'cta.learnMore': 'Tìm hiểu thêm về tôi',
    
    // Experience Page
    'experience.title': 'Kinh nghiệm & Học vấn',
    'experience.subtitle': 'Hành trình nghề nghiệp, nền tảng giáo dục và những kỹ năng tôi đã phát triển trong suốt quá trình này.',
    'experience.professionalTitle': 'Kinh nghiệm nghề nghiệp',
    'experience.professionalSubtitle': 'Hành trình sự nghiệp và những vai trò đã định hình sự phát triển nghề nghiệp của tôi.',
    'experience.educationTitle': 'Học vấn',
    'experience.educationSubtitle': 'Nền tảng giáo dục và hành trình học tập liên tục của tôi.',
    'experience.ctaTitle': 'Hãy cùng làm việc',
    'experience.ctaSubtitle': 'Tôi luôn hào hứng đón nhận những thử thách mới và hợp tác trong các dự án thú vị.',
  },
  
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '私について',
    'nav.projects': 'プロジェクト',
    'nav.experience': '経験',
    'nav.contact': 'お問い合わせ',
    
    // Hero Section
    'hero.title': 'フルスタック開発者',
    'hero.bio': 'モダンなWeb技術に精通した情熱的なフルスタック開発者です。実世界の問題を解決する美しく、機能的で、ユーザーフレンドリーなアプリケーションを作ることが大好きです。',
    'hero.viewWork': '私の作品を見る',
    'hero.getInTouch': 'お問い合わせ',
    
    // Skills Section
    'skills.title': 'スキル＆テクノロジー',
    'skills.subtitle': '素晴らしいデジタル体験を構築するために使用するツールと技術',
    
    // Projects Section
    'projects.title': '注目のプロジェクト',
    'projects.subtitle': '私の最近の作品と創造的な取り組みの紹介',
    'projects.learnMore': '詳細を見る',
    'projects.viewAll': 'すべてのプロジェクトを見る',
    
    // CTA Section
    'cta.title': '次のプロジェクトを始める準備はできていますか？',
    'cta.subtitle': 'あなたのアイデアを実現するために一緒に働きましょう。私は常に新しい挑戦に興奮し、素晴らしいものを作ることに情熱を持っています。',
    'cta.getStarted': '始める',
    'cta.learnMore': '私についてもっと知る',
    
    // Experience Page
    'experience.title': '経験＆教育',
    'experience.subtitle': '私の職業的な歩み、教育的背景、そして過程で身につけたスキルです。',
    'experience.professionalTitle': '職業経験',
    'experience.professionalSubtitle': '私のキャリアの歩みと職業的発展を形作った役割です。',
    'experience.educationTitle': '教育',
    'experience.educationSubtitle': '私の教育的背景と継続的な学習の歩みです。',
    'experience.ctaTitle': '一緒に働きませんか',
    'experience.ctaSubtitle': '私は常に新しい挑戦に興奮し、興味深いプロジェクトでの協力を楽しみにしています。',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && ['en', 'vi', 'ja'].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
