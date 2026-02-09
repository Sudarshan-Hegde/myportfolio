import { useState } from 'react'
import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Publications from './components/Publications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navbar />
      <Bio  />
      <Projects />
      <Certificates />
      <Publications />
      <Contact />
      <footer className="bg-stone-900/50 text-center py-12">
        <div className="max-w-4xl mx-auto px-6">
          <blockquote className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
            "Surround yourself with relentless humans. People who plan in decades, but live in moments. Train like savages, but create like artists. Obsess in work, relax in life. People who know this is finite and choose to play infinite games. Find people going up mountains and climb together."
          </blockquote>
          <p className="text-gray-400 text-sm">
            &copy; 2025 Sudarshan Hegde. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App