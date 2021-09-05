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

import dbConnect from '../../utils/dbConnect'
import Project from "../../models/Project"

export async function getStaticProps(context) {
    await dbConnect()
    const projects = await Project.find({})
    return { props: { projects: projects }, revalidate: 3600 }
}