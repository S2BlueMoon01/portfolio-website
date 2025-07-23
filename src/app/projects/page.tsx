export default function ProjectsPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              My <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              A showcase of my work, from web applications to mobile apps and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="group bg-card backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center text-primary text-2xl font-bold drop-shadow-lg">
                    P{index}
                  </div>
                  {index <= 2 && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      Project {index}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      2024
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    A modern web application built with cutting-edge technologies to deliver an exceptional user experience.
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "TypeScript", "Next.js"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-border hover:border-primary/50 text-muted-foreground hover:text-primary hover:bg-muted/50 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new challenges and bring innovative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Start a Project
              </a>
              <a
                href="/experience"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
