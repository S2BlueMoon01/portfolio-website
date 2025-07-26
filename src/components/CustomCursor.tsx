'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  useEffect(() => {
    // Don't set up mouse events on mobile
    if (isMobile) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      setIsHovering(true)
      
      // Set cursor variant based on element type
      if (target.tagName === 'A' || target.getAttribute('role') === 'button') {
        setCursorVariant('link')
      } else if (target.tagName === 'BUTTON') {
        setCursorVariant('button')
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant('text')
      } else {
        setCursorVariant('hover')
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorVariant('default')
    }

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition)
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isMobile])

  if (!mounted) return null

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  const getCursorStyles = () => {
    const baseSize = cursorVariant === 'default' ? 'w-2 h-2' : 
                    cursorVariant === 'hover' ? 'w-8 h-8' :
                    cursorVariant === 'link' ? 'w-10 h-10' :  
                    cursorVariant === 'button' ? 'w-12 h-12' :
                    cursorVariant === 'text' ? 'w-1 h-6' : 'w-2 h-2'

    const baseColor = isDark 
      ? 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400' 
      : 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600'

    const borderColor = isDark 
      ? 'border-white/20' 
      : 'border-black/20'

    return {
      size: baseSize,
      color: baseColor,
      border: borderColor
    }
  }

  const styles = getCursorStyles()

  // Don't render cursor on mobile devices
  if (!mounted || isMobile) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] ${styles.size} ${styles.color} rounded-full mix-blend-difference transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-100'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-[9998] w-8 h-8 border-2 ${styles.border} rounded-full transition-all duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? 'scale-200 opacity-30' : 'scale-100 opacity-60'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Trailing effect */}
      <div
        className={`fixed pointer-events-none z-[9997] w-12 h-12 ${isDark ? 'bg-blue-400/10' : 'bg-blue-600/10'} rounded-full transition-all duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? 'scale-300 opacity-20' : 'scale-150 opacity-40'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </>
  )
}
