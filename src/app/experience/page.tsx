"use client";

import { skills, getExperiences, getEducation } from "@/data"
import { useLanguage } from "@/contexts/LanguageContext"
import { DownloadCVButton } from "@/components/DownloadCVButton"

export default function ExperiencePage() {
  const { t, language } = useLanguage()
  const experiences = getExperiences(language)
  const education = getEducation(language)
  
  const formatDateRange = (startDate: Date, endDate?: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' }
    const start = startDate.toLocaleDateString('en-US', options)
    const end = endDate ? endDate.toLocaleDateString('en-US', options) : t('experience.present')
    return `${start} - ${end}`
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background/90 to-primary/5 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full animate-float animation-delay-1000 blur-xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float animation-delay-2000 blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('experience.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('experience.subtitle')}
            </p>
            
            {/* Download CV Button */}
            <div className="mb-12">
              <DownloadCVButton className="mx-auto">
                {t('experience.downloadCV')}
              </DownloadCVButton>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('experience.workExperience')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('experience.workExperienceSubtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full">
                    {formatDateRange(exp.startDate, exp.endDate)}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('experience.education')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('experience.educationSubtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full">
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground text-sm">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
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
              {t('experience.skills')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('experience.skillsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
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
                      className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full transition-all duration-1000 group-hover:from-primary group-hover:to-indigo-500" 
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
              <a
                href="/contact"
                className="bg-white text-black hover:bg-gray-100 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-1000 transform hover:scale-105 hover-lift inline-flex items-center justify-center border-2 border-white shadow-lg hover:shadow-2xl"
              >
                <span className="mr-2">🚀</span>
                {t('contact.title')}
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-1000 transform hover:scale-105 hover-lift inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">📁</span>
                {t('nav.projects')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
