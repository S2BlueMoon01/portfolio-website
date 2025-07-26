export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'desktop' | 'other'
  featured?: boolean
  completedAt?: Date
  inProgress?: boolean
  startedAt?: Date
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: Date
  endDate?: Date
  description: string
  technologies: string[]
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance'
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other'
  level: number
  icon?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate?: Date
  gpa?: number
  description?: string
  location: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
  username?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishedAt: Date
  updatedAt?: Date
  tags: string[]
  readingTime: number
  featured?: boolean
  image?: string
}

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  author: string
  siteUrl: string
  image?: string
  twitterHandle?: string
}

export interface NavigationItem {
  name: string
  href: string
  icon?: string
  external?: boolean
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  phone?: string
  website: string
  avatar: string
  resume?: string
  availability: 'available' | 'busy' | 'unavailable'
}
