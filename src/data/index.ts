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
    url: "mailto:s2ngochai01@gmail.com",
    icon: "mail"
  }
]

export const skills: Skill[] = [
  // Frontend Development
  { id: "html", name: "HTML5", category: "frontend", level: 95, icon: "🌐" },
  { id: "css", name: "CSS3", category: "frontend", level: 90, icon: "🎨" },
  { id: "javascript", name: "JavaScript", category: "frontend", level: 85, icon: "🟨" },
  { id: "typescript", name: "TypeScript", category: "frontend", level: 80, icon: "�" },
  { id: "react", name: "React", category: "frontend", level: 85, icon: "⚛️" },
  { id: "nextjs", name: "Next.js", category: "frontend", level: 80, icon: "▲" },
  
  // AWS Services  
  { id: "aws-s3", name: "AWS S3", category: "devops", level: 80, icon: "📦" },
  { id: "aws-lambda", name: "AWS Lambda", category: "backend", level: 65, icon: "⚡" },
  { id: "aws-appsync", name: "AWS AppSync", category: "backend", level: 70, icon: "🔗" },
  { id: "aws-amplify", name: "AWS Amplify", category: "devops", level: 75, icon: "📱" },
  { id: "graphql", name: "GraphQL", category: "backend", level: 75, icon: "🔷" },
  
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", level: 90, icon: "💨" },
  { id: "bootstrap", name: "Bootstrap", category: "frontend", level: 85, icon: "🅱️" },
  
  // Backend Development
  { id: "nodejs", name: "Node.js", category: "backend", level: 75, icon: "🟢" },
  { id: "express", name: "Express.js", category: "backend", level: 70, icon: "�" },
  
  // Database
  { id: "mysql", name: "MySQL", category: "database", level: 80, icon: "🐬" },
  { id: "postgresql", name: "PostgreSQL", category: "database", level: 70, icon: "🐘" },
  { id: "mongodb", name: "MongoDB", category: "database", level: 65, icon: "🍃" },
  { id: "dynamodb", name: "DynamoDB", category: "database", level: 65, icon: "⚡" },
  { id: "firebase", name: "Firebase", category: "database", level: 70, icon: "🔥" },

  // DevOps & Tools
  { id: "git", name: "Git", category: "devops", level: 85, icon: "📋" },
  { id: "github", name: "GitHub", category: "devops", level: 85, icon: "�" },
  { id: "gitlab", name: "GitLab", category: "devops", level: 80, icon: "🦊" },
  { id: "codeCommit", name: "CodeCommit", category: "devops", level: 80, icon: "�" },
  { id: "vercel", name: "Vercel", category: "devops", level: 75, icon: "▲" },
  { id: "postman", name: "Postman", category: "devops", level: 80, icon: "�" },
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
