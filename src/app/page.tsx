'use client'

import Link from "next/link"
import { skills, getPersonalInfo, getProjects } from "@/data"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HomePage() {
  const { t, language } = useLanguage()
  const personalInfo = getPersonalInfo(language)
  const projects = getProjects(language)
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-primary/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full animate-float animation-delay-1000 blur-xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float animation-delay-2000 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full animate-pulse blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            {/* Avatar */}
            <div className="w-36 h-36 mx-auto mb-8 relative animate-fade-in-up animation-delay-200 group cursor-pointer">
              {/* Outer rotating gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-spin-slow opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Middle ring */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-primary animate-pulse opacity-70"></div>
              
              {/* Inner transparent circle */}
              <div className="absolute inset-2 rounded-full backdrop-blur-sm border border-white/10 shadow-2xl"></div>
              
              {/* Gradient text with glow effect */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-5xl font-black bg-gradient-to-br from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-primary group-hover:to-purple-600 transition-all duration-700 group-hover:scale-110 drop-shadow-2xl filter group-hover:drop-shadow-[0_0_20px_rgba(138,43,226,0.8)]">
                  {personalInfo.name.charAt(0)}
                </span>
              </div>
              
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating particles effect */}
              <div className="absolute -inset-4 rounded-full">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping opacity-60 animation-delay-1000"></div>
                <div className="absolute left-0 top-1/2 w-1 h-1 bg-pink-500 rounded-full animate-ping opacity-50 animation-delay-2000"></div>
                <div className="absolute right-0 top-1/4 w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping opacity-70 animation-delay-1500"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in-up animation-delay-300">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animation-delay-500">
              {t('hero.title')}
            </p>

            {/* Bio */}
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-700">
              {t('hero.bio')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-900">
              <Link
                href="/projects"
                className="btn-primary hover-lift"
              >
                <span className="mr-2">🚀</span>
                {t('hero.viewWork')}
              </Link>
              <Link
                href="/contact"
                className="btn-secondary hover-lift"
              >
                <span className="mr-2">💬</span>
                {t('hero.getInTouch')}
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-fade-in animation-delay-1200">
              <div className="animate-bounce">
                <svg className="w-6 h-6 mx-auto text-muted-foreground hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in-up scroll-trigger">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('skills.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={skill.name}
                className="text-center p-8 bg-card border border-border rounded-2xl hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up scroll-trigger group hover:border-primary/40 transition-all duration-1000 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Simple background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Icon container with cleaner design */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 border-2 border-primary/30 rounded-2xl flex items-center justify-center text-3xl transition-all duration-1000 group-hover:border-primary/60 group-hover:bg-primary/20 group-hover:scale-105">
                    <span className="transition-transform duration-1000 group-hover:scale-110">{skill.icon}</span>
                  </div>
                  
                  {/* Title with cleaner styling */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-1000">
                    {skill.name}
                  </h3>
                  
                  {/* Progress bar with cleaner design */}
                  <div className="w-full bg-muted border border-border rounded-full h-3 mb-4 overflow-hidden group-hover:border-primary/30 transition-all duration-1000">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-2000 group-hover:from-primary group-hover:to-purple-500" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  {/* Percentage with cleaner styling */}
                  <span className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors duration-1000">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float animation-delay-500"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute top-1/2 right-20 w-12 h-12 bg-pink-500/20 rounded-full animate-float animation-delay-1500"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up scroll-trigger">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up scroll-trigger group border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  <span className="text-primary text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">🚀</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:scale-105 transition-transform duration-200 border border-primary/20 hover:bg-primary/20"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects#${project.id}`}
                    className="text-primary hover:text-purple-600 font-medium group-hover:underline transition-all duration-300 inline-flex items-center hover:translate-x-1"
                    aria-label={`View details of ${project.title} project`}
                  >
                    {t('projects.learnMore')} 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up scroll-trigger animation-delay-600">
            <Link
              href="/projects"
              className="btn-primary hover-lift"
            >
              <span className="mr-2">👀</span>
              {t('projects.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/90 via-purple-600/90 to-indigo-600/90 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-15">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full animate-float animation-delay-500 backdrop-blur-sm"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-300/40 rounded-full animate-float animation-delay-1000 backdrop-blur-sm"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-300/30 rounded-full animate-float animation-delay-1500 backdrop-blur-sm"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up scroll-trigger">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in-down drop-shadow-lg">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200 drop-shadow-md">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                href="/contact"
                className="bg-white text-black hover:bg-gray-100 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover-lift inline-flex items-center justify-center border-2 border-white shadow-lg hover:shadow-2xl"
              >
                <span className="mr-2">🚀</span>
                {t('cta.getStarted')}
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover-lift inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">👨‍💻</span>
                {t('cta.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
