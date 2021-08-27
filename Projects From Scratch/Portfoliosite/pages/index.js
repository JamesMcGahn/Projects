import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import BreakSection from '../components/BreakSection'
export default function Home() {
  return (
    <div>
      <Hero h1='James McGahn' h2='Frontend Developer' />

      <AboutSection />
      <BreakSection url='/img/textureBackground1.jpeg' />
      <ProjectsSection />
    </div >
  )
}
