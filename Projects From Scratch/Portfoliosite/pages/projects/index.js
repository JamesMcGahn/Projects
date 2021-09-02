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
    console.log(projects)

    return (
        <div>
            <ProjectsSection projects={projects} mainPage={false} />
        </div >
    );
}

export default Projects;

// export async function getStaticPaths() {
//     const res = await axios.get(`${process.env.SERVER}/api/projects/`)
//     const { data } = await res.data

//     const paths = data.map((project) => ({
//         params: { id: project._id },
//     }))

//     return { paths, fallback: false }
// }


export const getStaticProps = async ({ params }) => {
    const res = await axios.get(`${process.env.SERVER}/api/projects/`)
    const { data } = await res.data
    return { props: { projects: data }, revalidate: 3600 }
}