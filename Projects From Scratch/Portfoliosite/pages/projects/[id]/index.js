import React from 'react';
import axios from 'axios'
import classes from '../../../styles/singleProject.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'


function singleProject({ project, notFound }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    if (notFound) {
        return (<>
            <head>
                <meta name="robots" content="noindex" />
            </head>
            <DefaultErrorPage statusCode={404} />
        </>)
    }



    console.log(project)
    const img = <a><Card.Img variant="top" src="/img/headshot.jpg" /></a>
    return (
        <div>
            <h1>single Project</h1>
            <Col xs={12} md={4} className={classes.projectTile} >

                <Card className={classes.bioBlurb} >
                    <Link href={`/projects/${project._id}`} passHref>{img}</Link>
                    <Card.Body>
                        <span className={classes.title}> <h5><Link href={`/projects/${project._id}`}>{project.title}</Link></h5></span>
                        <div>Tech: {project.stack?.map((tech, i) => <Badge bg="primary" className={classes.badge} key={i}>{tech}</Badge>)}</div>
                        <div>{project.description}</div>
                    </Card.Body>
                </Card>

            </Col>

        </div>
    );
}

export default singleProject;

export async function getStaticPaths() {
    const res = await axios.get(`${process.env.SERVER}/api/projects/`)
    const { data } = await res.data

    const paths = data.map((project) => ({
        params: { id: project._id },
    }))

    return { paths, fallback: true, }
}


export const getStaticProps = async ({ params }) => {
    try {
        const res = await axios.get(`${process.env.SERVER}/api/projects/${params.id}`)
        let { data } = await res.data
        return { props: { project: data, notFound: false }, revalidate: 3600 }
    }
    catch {
        return { props: { project: [], notFound: true }, revalidate: 3600 }
    }


}