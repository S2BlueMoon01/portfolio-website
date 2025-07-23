"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    console.log('Theme changed from', theme, 'to', newTheme)
    console.log('Resolved theme:', resolvedTheme)
  }

  if (!mounted) {
    return (
      <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg">
        <svg className="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-muted via-muted/50 to-background border border-border/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 active:scale-95 group overflow-hidden backdrop-blur-sm"
      title={`Current theme: ${theme}, resolved: ${resolvedTheme}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
      
      {/* Sun Icon */}
      <svg 
        className={`absolute h-5 w-5 text-yellow-500 transition-all duration-700 transform ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-0 opacity-0"
        }`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>

      {/* Moon Icon */}
      <svg 
        className={`absolute h-5 w-5 text-indigo-400 transition-all duration-700 transform ${
          theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
        }`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>

      {/* Sparkle effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-1 right-1 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-1 left-1 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-300"></div>
      </div>

      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
