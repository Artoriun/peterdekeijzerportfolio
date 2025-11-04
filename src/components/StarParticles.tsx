import React, { useEffect, useRef } from 'react'
import './StarParticles.css'

interface Particle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
  animationDuration: number
  delay: number
}

const StarParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const nextIdRef = useRef(0)

  const createParticle = (): Particle => {
    return {
      id: nextIdRef.current++,
      x: Math.random() * 80 + 10, // 10% to 90% - keeps particles away from edges
      y: Math.random() * 80 + 10, // 10% to 90% - keeps particles away from edges
      opacity: Math.random() * 0.8 + 0.2,
      scale: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 2 + 1, // 1-3 seconds
      delay: Math.random() * 0.5, // 0-0.5 seconds delay
    }
  }

  const spawnParticle = () => {
    const particle = createParticle()
    particlesRef.current.push(particle)

    if (containerRef.current) {
      const starElement = document.createElement('div')
      starElement.className = 'star-particle'
      starElement.style.left = `${particle.x}%`
      starElement.style.top = `${particle.y}%`
      starElement.style.opacity = '0'
      starElement.style.transform = `scale(${particle.scale})`
      starElement.style.animationDuration = `${particle.animationDuration}s`
      starElement.style.animationDelay = `${particle.delay}s`
      
      // Star SVG
      starElement.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.77L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      `

      containerRef.current.appendChild(starElement)

      // Start animation
      requestAnimationFrame(() => {
        starElement.style.opacity = particle.opacity.toString()
        starElement.classList.add('twinkle')
      })

      // Remove particle after animation
      setTimeout(() => {
        if (starElement.parentNode) {
          starElement.parentNode.removeChild(starElement)
        }
        particlesRef.current = particlesRef.current.filter(p => p.id !== particle.id)
      }, (particle.animationDuration + particle.delay + 0.5) * 1000)
    }
  }

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      spawnParticle()
    }, Math.random() * 2000 + 1000) // Random spawn rate between 1000ms and 3000ms (1-3 seconds)

    // Initial particles - more stars for the larger area
    for (let i = 0; i < 5; i++) {
      setTimeout(() => spawnParticle(), Math.random() * 2000)
    }

    return () => {
      clearInterval(spawnInterval)
    }
  }, [])

  return <div ref={containerRef} className="star-particles-container" />
}

export default StarParticles