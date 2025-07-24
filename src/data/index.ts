import { personalInfoData } from './personalInfo'
import { projectsData } from './projects'
import { experiencesData } from './experiences'
import { educationData } from './education'
import { NavigationItem, SocialLink, Skill } from '@/types'

// Static data that doesn't need translation
export const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
    username: "yourusername"
  },
  {
    id: "linkedin",
    name: "LinkedIn", 
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
    username: "yourusername"
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter", 
    username: "yourusername"
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "mail"
  }
]

export const skills: Skill[] = [
  // Frontend
  { id: "react", name: "React", category: "frontend", level: 5, icon: "⚛️" },
  { id: "nextjs", name: "Next.js", category: "frontend", level: 5, icon: "▲" },
  { id: "typescript", name: "TypeScript", category: "frontend", level: 4, icon: "📘" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", level: 5, icon: "🎨" },
  { id: "vue", name: "Vue.js", category: "frontend", level: 4, icon: "💚" },
  
  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", level: 4, icon: "🟢" },
  { id: "python", name: "Python", category: "backend", level: 4, icon: "🐍" },
  { id: "express", name: "Express.js", category: "backend", level: 4, icon: "🚀" },
  { id: "nestjs", name: "NestJS", category: "backend", level: 3, icon: "🐱" },
  
  // Database
  { id: "mongodb", name: "MongoDB", category: "database", level: 4, icon: "🍃" },
  { id: "postgresql", name: "PostgreSQL", category: "database", level: 4, icon: "🐘" },
  { id: "redis", name: "Redis", category: "database", level: 3, icon: "🔴" },
  
  // DevOps
  { id: "docker", name: "Docker", category: "devops", level: 3, icon: "🐳" },
  { id: "aws", name: "AWS", category: "devops", level: 3, icon: "☁️" },
  { id: "vercel", name: "Vercel", category: "devops", level: 4, icon: "▲" },
  
  // Design
  { id: "figma", name: "Figma", category: "design", level: 3, icon: "🎨" },
  { id: "photoshop", name: "Photoshop", category: "design", level: 3, icon: "🖼️" },
]

// Helper functions to get data by language
export const getPersonalInfo = (language: string = 'en') => {
  return personalInfoData[language] || personalInfoData.en
}

export const getProjects = (language: string = 'en') => {
  return projectsData[language] || projectsData.en
}

export const getExperiences = (language: string = 'en') => {
  return experiencesData[language] || experiencesData.en
}

export const getEducation = (language: string = 'en') => {
  return educationData[language] || educationData.en
}

// For backward compatibility
export const personalInfo = personalInfoData.en
export const projects = projectsData.en
export const experiences = experiencesData.en
export const education = educationData.en
