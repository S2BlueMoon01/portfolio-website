"use client"

import { useEffect } from 'react'

export function ScrollAnimations() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          
          // Add staggered animations for children
          const children = entry.target.querySelectorAll('[data-stagger]')
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate')
            }, index * 100)
          })
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // Observe all elements with scroll-trigger classes
    const scrollTriggers = [
      '.scroll-trigger',
      '.scroll-trigger-left', 
      '.scroll-trigger-right',
      '.scroll-trigger-scale'
    ]
    
    scrollTriggers.forEach(selector => {
      const elements = document.querySelectorAll(selector)
      elements.forEach(el => observer.observe(el))
    })

    // Add mouse movement parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement
        const speed = element.getAttribute('data-parallax') || '1'
        const speedNum = parseFloat(speed)
        const xOffset = (x - 0.5) * speedNum * 20
        const yOffset = (y - 0.5) * speedNum * 20
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`
      })
    }

    // Add cursor glow effect
    const handleCursorMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor-glow') as HTMLElement
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
    }

    // Create cursor glow element
    const cursorGlow = document.createElement('div')
    cursorGlow.className = 'cursor-glow fixed w-6 h-6 bg-blue-400/20 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100'
    cursorGlow.style.transform = 'translate(-50%, -50%)'
    document.body.appendChild(cursorGlow)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousemove', handleCursorMove)

    return () => {
      observer.disconnect()
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', handleCursorMove)
      cursorGlow.remove()
    }
  }, [])

  return null
}
