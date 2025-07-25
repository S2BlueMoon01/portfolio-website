"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { navigation, personalInfo } from "@/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      
      setIsScrolled(scrollTop > 20);
      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out",
      isScrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-lg shadow-primary/5" 
        : "bg-background/60 backdrop-blur-sm border-b border-border/10"
    )}>
      <div className="w-full max-w-none px-4 flex h-16 items-center relative">
        {/* Animated background line */}
        <div className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-700",
          isScrolled ? "w-full opacity-100" : "w-0 opacity-0"
        )}></div>
        
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-100 ease-out z-10" 
             style={{ width: `${scrollProgress}%` }}>
          <div className="absolute right-0 top-0 w-4 h-full bg-white/30 blur-sm animate-pulse"></div>
        </div>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-3 group">
            <div className="relative">
              <div className={cn(
                "w-10 h-10 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-500",
                "group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3"
              )}>
                H
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              {/* Floating particles effect */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-150"></div>
            </div>
            <span className="hidden font-bold sm:inline-block text-foreground text-lg tracking-tight group-hover:text-primary transition-all duration-300 group-hover:scale-105">
              {personalInfo.name}
            </span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 px-3 rounded-lg transition-all duration-300 hover:text-primary group",
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  )}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    boxShadow: isActive ? '0 2px 0 0 hsl(var(--primary))' : 'none'
                  }}
                >
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">{t(`nav.${item.name.toLowerCase()}`) || item.name}</span>
                  {/* Floating dots on hover */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile menu button */}
        <button
          className={cn(
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 hover:bg-muted h-10 w-10 mr-2 md:hidden group relative overflow-hidden",
            isMenuOpen && "bg-muted"
          )}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Animated background on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className={cn(
            "relative w-6 h-6 transition-all duration-300",
            isMenuOpen && "rotate-45"
          )}>
            {isMenuOpen ? (
              // Enhanced X Close Icon
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Pulsing circle background */}
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-0.5 bg-primary/10 rounded-full"></div>
                
                {/* X lines with enhanced styling */}
                <svg
                  className="w-4 h-4 text-primary relative z-10 drop-shadow-sm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                    className="animate-in fade-in duration-200"
                  />
                </svg>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-sm"></div>
              </div>
            ) : (
              // Enhanced Hamburger menu
              <svg
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-all duration-300"
              >
                <path
                  d="M3 5H11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
                <path
                  d="M3 12H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 transition-transform duration-300 delay-75"
                />
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1.5 transition-transform duration-300 delay-150"
                />
              </svg>
            )}
          </div>
          <span className="sr-only">Toggle Menu</span>
        </button>

        {/* Mobile brand */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="mr-6 flex items-center space-x-3 md:hidden group">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {personalInfo.name.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
              </div>
              <span className="font-bold text-foreground text-lg tracking-tight group-hover:text-primary transition-colors duration-300">
                {personalInfo.name}
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/100 backdrop-blur-none border-b border-border md:hidden shadow-2xl animate-in slide-in-from-top duration-300" style={{ backgroundColor: 'hsl(var(--background))' }}>
            <nav className="flex flex-col space-y-2 p-6" style={{ backgroundColor: 'hsl(var(--background))' }}>
              {navigation.map((item, index) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative py-4 px-5 rounded-xl transition-all duration-300 group text-sm font-medium",
                      isActive 
                        ? "text-primary bg-primary/10 border-primary/20 shadow-md" 
                        : "text-foreground hover:text-foreground hover:bg-muted border-transparent hover:border-border"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInUp 0.4s ease-out forwards",
                      boxShadow: isActive 
                        ? '0 2px 0 0 hsl(var(--primary)), 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' 
                        : '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
                    }}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 font-medium">{t(`nav.${item.name.toLowerCase()}`) || item.name}</span>
                    
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    )}
                    
                    {/* Hover arrow */}
                    <div className={cn(
                      "absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300",
                      isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2"
                    )}>
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
