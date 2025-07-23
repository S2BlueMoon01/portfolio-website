import { personalInfo, skills } from "@/data"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background/90 to-primary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full animate-float animation-delay-1000 blur-xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float animation-delay-2000 blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate developer with a love for creating beautiful, functional, and user-friendly digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up scroll-trigger">
              {/* Avatar */}
              <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 p-1 hover-lift">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center text-6xl font-bold text-foreground">
                  {personalInfo.name.charAt(0)}
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up scroll-trigger animation-delay-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                My Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {personalInfo.bio}
                </p>
                <p>
                  I believe in the power of clean code, intuitive design, and continuous learning. 
                  Every project is an opportunity to push boundaries and create something meaningful 
                  that makes a difference in people's lives.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">📧 {personalInfo.email}</span>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">📍 {personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in-up scroll-trigger">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-card backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up scroll-trigger border border-border hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 border border-border/30">
                    <div 
                      className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 shadow-sm" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up scroll-trigger">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Quick Facts
            </h2>
            <p className="text-lg text-muted-foreground">
              Some interesting things about me
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card backdrop-blur-sm rounded-xl hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up scroll-trigger border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Projects Built</h3>
              <p className="text-3xl font-bold text-primary">50+</p>
            </div>
            <div className="text-center p-6 bg-card backdrop-blur-sm rounded-xl hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in-up scroll-trigger animation-delay-200 border border-border hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Years Experience</h3>
              <p className="text-3xl font-bold text-purple-500">5+</p>
            </div>
            <div className="text-center p-6 bg-card backdrop-blur-sm rounded-xl hover:shadow-xl hover:shadow-pink-500/20 animate-fade-in-up scroll-trigger animation-delay-300 border border-border hover:border-pink-500/50 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Cups of Coffee</h3>
              <p className="text-3xl font-bold text-pink-500">∞</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float animation-delay-500"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-300 rounded-full animate-float animation-delay-1500"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up scroll-trigger">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover-lift hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover-lift"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
