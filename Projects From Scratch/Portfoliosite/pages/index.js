import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import BreakSection from '../components/BreakSection'

import axios from 'axios'
export default function Home({ projects }) {
  return (
    <div>
      <Hero h1='James McGahn' h2='Frontend Developer' />

      <AboutSection />
      <BreakSection url='/img/textureBackground1.jpeg'>
      </BreakSection>
      <ProjectsSection projects={projects} />
    </div >
  )
}


Home.getInitialProps = async () => {
  const res = await axios.get('http://localhost:3000/api/projects')
  const { data } = await res.data
  console.log(data)
  return { projects: data }
}