import React, { useEffect, useRef } from 'react'
import './StarParticles.css'

interface Particle {
  id: number
  x: number
  y: number
}

const StarParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const nextIdRef = useRef(0)

  const createParticle = (): Particle => {
    return {
      id: nextIdRef.current++,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    }
  }

  const spawnParticle = () => {
    if (!containerRef.current) return

    const particle = createParticle()
    particlesRef.current.push(particle)

    // Create star element
    const starElement = document.createElement('div')
    starElement.className = 'star-particle twinkling'
    starElement.style.left = `${particle.x}%`
    starElement.style.top = `${particle.y}%`
    starElement.style.transform = `rotate(${Math.random() * 360}deg)`
    
    starElement.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.77L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
      </svg>
    `

    containerRef.current.appendChild(starElement)

    // Remove particle after lifetime (3-4 seconds of twinkling + fade)
    const lifetimeMs = Math.random() * 1000 + 3000
    setTimeout(() => {
      // Switch from twinkling to fading
      starElement.classList.remove('twinkling')
      starElement.classList.add('fading')

      // Remove from DOM after fade completes
      setTimeout(() => {
        if (starElement.parentNode) {
          starElement.parentNode.removeChild(starElement)
        }
        particlesRef.current = particlesRef.current.filter(p => p.id !== particle.id)
      }, 600)
    }, lifetimeMs)
  }

  useEffect(() => {
    // Spawn initial stars gradually (1 every 0.5-1 second)
    for (let i = 0; i < 3; i++) {
      setTimeout(() => spawnParticle(), (i + 1) * (Math.random() * 500 + 500))
    }

    // Continuously spawn new stars after initial delay
    const spawnInterval = setInterval(() => {
      spawnParticle()
    }, Math.random() * 1500 + 1500) // Every 1.5-3 seconds

    return () => {
      clearInterval(spawnInterval)
    }
  }, [])

  return <div ref={containerRef} className="star-particles-container" />
}

export default StarParticles