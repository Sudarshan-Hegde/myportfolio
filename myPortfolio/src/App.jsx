import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BigCard from './components/BigCard'
import About from './components/About'
import Project from './components/Project'
import Cert from './components/Cert'
import ContactMe from './components/contactMe'

function App() {
  const bubbles = Array.from({ length: 60 }).map((_, index) => {
    const size = Math.floor(Math.random() * 150) + 100
    const top = Math.random() * 100
    const left = Math.random() * 100
    const delay = Math.random() * 10
    const duration = 8 + Math.random() * 12
    const colors = [
      'rgba(72, 61, 139, 0.6)',     // Dark Slate Blue
      'rgba(138, 43, 226, 0.5)',    // Blue Violet
      'rgba(25, 25, 112, 0.6)',     // Midnight Blue
      'rgba(75, 0, 130, 0.4)',      // Indigo
      'rgba(0, 0, 139, 0.5)',       // Dark Blue
      'rgba(0, 0, 205, 0.4)',       // Medium Blue
      'rgba(0, 100, 0, 0.3)',       // Dark Green (deep blue-green)
      'rgba(0, 76, 153, 0.5)',      // Deep Blue
    ]
    const background = colors[Math.floor(Math.random() * colors.length)]

    return (
      <div
        key={index}
        className="circle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          background,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    )
  })

  return (
    <>
      {/* Intense Animated Background */}
      <div className="bg-animation">
        {bubbles}
      </div>

      <Navbar />
      <div className="pt-20">
        <BigCard />
        <About />
        <Project />
        <Cert />
        <ContactMe />
      </div>
      <footer className="text-center py-12">
        <div className="max-w-4xl mx-auto px-6">
          <blockquote className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
            "Surround yourself with relentless humans. People who plan in decades, but live in moments. Train like savages, but create like artists. Obsess in work, relax in life. People who know this is finite and choose to play infinite games. Find people going up mountains and climb together."
          </blockquote>
          <p className="text-gray-400 text-sm">
            &copy; 2025 Sudarshan Hegde. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
