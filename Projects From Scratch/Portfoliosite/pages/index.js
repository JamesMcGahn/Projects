import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import BreakSection from '../components/BreakSection'
import { signIn, signOut, useSession } from 'next-auth/client'

import axios from 'axios'
export default function Home({ projects }) {
  const [session, loading] = useSession()
  return (
    <div>
      <Hero h1='James McGahn' h2='Frontend Developer' />
      {!session ? <button onClick={signIn}>sign in</button> : <button onClick={signOut}>sign out</button>}
      <AboutSection />
      <BreakSection url='/img/textureBackground1.jpeg'>
      </BreakSection>
      <ProjectsSection projects={projects} />
    </div >
  )
}


export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.SERVER}/api/projects/`)
  const { data } = await res.data
  return { props: { projects: data } }
}
