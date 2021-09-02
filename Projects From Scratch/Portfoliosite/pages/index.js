import React from 'react'
import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import BreakSection from '../components/sections/BreakSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { signIn, signOut, useSession } from 'next-auth/client'
import classes from '../styles/index.module.css'


import axios from 'axios'
export default function Home({ projects }) {
  const [session, loading] = useSession()
  return (
    <div>
      <Hero h1='' h2='' />

      <AboutSection />
      <BreakSection url='/img/breaker6.jpg'>
        <div className={classes.iconSection}>
          <div className={classes.icon}><a href='' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a></div>
          <div className={classes.icon}><a href='' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></div>
          <div className={classes.icon}><a href='' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a></div>
        </div>
      </BreakSection >
      <ProjectsSection projects={projects} mainPage={true} />
      {!session ? <button onClick={signIn}>sign in</button> : <button onClick={signOut}>sign out</button>}
    </div >
  )
}


export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.SERVER}/api/projects/`)
  const { data } = await res.data

  return { props: { projects: data, } }
}
