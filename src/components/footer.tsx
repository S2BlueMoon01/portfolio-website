"use client";

import Link from "next/link"
import { personalInfo, socialLinks, navigation } from "@/data"
import { HeartIcon } from "@heroicons/react/24/solid"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-background via-background to-muted/20 border-t border-border/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  H
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {personalInfo.name.split(" ").map((name, index) => (
                  <span key={index}>
                    {index === 0 ? name : name.charAt(0)}
                    {index > 0 && "."}
                  </span>
                ))}
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group p-3 rounded-xl bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-primary/20"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-5 h-5 flex items-center justify-center relative z-10">
                    {social.icon === "github" && (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === "twitter" && (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    )}
                    {social.icon === "mail" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={item.href} 
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                >
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{t(`nav.${item.name.toLowerCase()}`) || item.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">{t('footer.connect')}</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3 group">
                <div className="w-5 h-5 text-primary">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="group-hover:text-primary transition-colors duration-300">{personalInfo.location}</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-5 h-5 text-primary">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div className="flex items-center space-x-3 group">
                  <div className="w-5 h-5 text-primary">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. {t('footer.allRightsReserved')}
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2 mt-2 md:mt-0 group">
            {t('footer.builtWith')} 
            <HeartIcon className="w-4 h-4 text-red-500 animate-pulse group-hover:scale-125 transition-transform duration-300" /> 
            {t('footer.using')} 
            <span className="font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Next.js
            </span> {t('footer.and')} 
            <span className="font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
