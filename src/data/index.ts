import { PersonalInfo, Project, Experience, Skill, Education, SocialLink, NavigationItem } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Ngọc Hải", 
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.",
  location: "Ho Chi Minh City, Vietnam",
  email: "your.email@example.com", // Thay thế bằng email thật
  phone: "+84 123 456 789", // Thay thế bằng số điện thoại thật
  website: "https://yourwebsite.com", // Thay thế bằng website thật
  avatar: "/images/avatar.jpg", // Thay thế bằng ảnh đại diện thật
  resume: "/resume.pdf", // Thay thế bằng CV thật
  availability: "available"
}

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
    url: "https://github.com/yourusername", // Thay thế bằng GitHub thật
    icon: "github",
    username: "yourusername"
  },
  {
    id: "linkedin",
    name: "LinkedIn", 
    url: "https://linkedin.com/in/yourusername", // Thay thế bằng LinkedIn thật
    icon: "linkedin",
    username: "yourusername"
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/yourusername", // Thay thế bằng Twitter thật
    icon: "twitter", 
    username: "yourusername"
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:your.email@example.com", // Thay thế bằng email thật
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

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with modern UI/UX, payment integration, and admin dashboard.",
    longDescription: "Built with Next.js, TypeScript, Prisma, and Stripe. Features include user authentication, product management, shopping cart, payment processing, order tracking, and comprehensive admin panel.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    category: "web",
    featured: true,
    completedAt: new Date("2024-01-15")
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "Developed using React, Node.js, Socket.io, and MongoDB. Includes features like drag-and-drop task boards, real-time collaboration, file attachments, and time tracking.",
    image: "/images/projects/task-manager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    demoUrl: "https://demo-taskmanager.vercel.app",
    githubUrl: "https://github.com/yourusername/task-management",
    category: "web",
    featured: true,
    completedAt: new Date("2023-11-20")
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    description: "A beautiful weather application with detailed forecasts and location-based services.",
    image: "/images/projects/weather.jpg",
    technologies: ["React Native", "TypeScript", "OpenWeather API", "Expo"],
    demoUrl: "https://expo.dev/@yourusername/weather-app",
    githubUrl: "https://github.com/yourusername/weather-app",
    category: "mobile",
    completedAt: new Date("2023-09-10")
  }
]

export const experiences: Experience[] = [
  {
    id: "senior-frontend-dev",
    company: "Tech Company ABC",
    position: "Senior Frontend Developer",
    startDate: new Date("2022-03-01"),
    description: "Led the development of modern web applications using React, Next.js, and TypeScript. Mentored junior developers and improved application performance by 40%.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    location: "Ho Chi Minh City, Vietnam",
    type: "full-time"
  },
  {
    id: "fullstack-dev",
    company: "Startup XYZ",
    position: "Full Stack Developer",
    startDate: new Date("2020-06-01"),
    endDate: new Date("2022-02-28"),
    description: "Developed and maintained multiple client projects using various technologies. Built REST APIs, integrated third-party services, and implemented responsive designs.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker", "AWS"],
    location: "Remote",
    type: "full-time"
  },
  {
    id: "frontend-intern",
    company: "Digital Agency DEF",
    position: "Frontend Developer Intern",
    startDate: new Date("2019-09-01"),
    endDate: new Date("2020-05-31"),
    description: "Assisted in developing client websites and landing pages. Learned modern frontend technologies and best practices.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    location: "Ho Chi Minh City, Vietnam",
    type: "internship"
  }
]

export const education: Education[] = [
  {
    id: "computer-science",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: new Date("2016-09-01"),
    endDate: new Date("2020-06-30"),
    gpa: 3.8,
    description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
    location: "Ho Chi Minh City, Vietnam"
  }
]
