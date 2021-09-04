import React, { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'
import ProjectsSection from '../../components/sections/ProjectsSection'

function Projects({ projects }) {
    const [show, setShow] = useState(false);
    // const [displayProjects, setdisplayProjects] = useState(projects);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter()

    return (
        <div>
            <ProjectsSection projects={projects} mainPage={false} />
        </div >
    );
}

export default Projects;



export const getStaticProps = async ({ params }) => {
    const res = await axios.get(`${process.env.SERVER}/api/projects/`)
    const { data } = await res.data
    return { props: { projects: data }, revalidate: 3600 }
}