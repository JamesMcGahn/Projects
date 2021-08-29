import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import classes from '../../styles/projectsSection.module.css'

function Projects({ projects }) {
    const [show, setShow] = useState(false);
    // const [displayProjects, setdisplayProjects] = useState(projects);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter()
    const handleDelete = (id) => {
        setShow(false)
        // 
        deleteProject(id)
        console.log(id)
    }

    const deleteProject = async (id) => {
        try {
            console.log('creatuing')
            const res = await axios.delete(`http://localhost:3000/api/projects/${id}`,
                { headers: { "Content-Type": 'application/json' } }).then(res => router.push('/projects'))
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div>
            <Container className={classes.projects} id="projects" fluid>
                <Row>
                    {projects.map((project, i) => {
                        const img = <a><Card.Img variant="top" src="/img/headshot.jpg" /></a>
                        return (

                            <Col xs={12} md={4} className={classes.projectTile} key={project._id}>

                                <Card className={classes.bioBlurb} >
                                    <Link href={`/projects/${project._id}`} passHref>{img}</Link>
                                    <Card.Body>
                                        <span className={classes.title}> <h5><Link href={`/projects/${project._id}`}>{project.title}</Link></h5></span>
                                        <div>Tech: {project.stack.map((tech, i) => <Badge bg="primary" className={classes.badge} key={i}>{tech}</Badge>)}</div>
                                        <div>{project.description}</div>
                                        <Button variant="danger" onClick={handleShow}>
                                            Delete
                                        </Button>
                                        <Button variant="primary">
                                            <Link href={`/projects/${project._id}/edit`}>Edit</Link>
                                        </Button>
                                    </Card.Body>


                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Delete {project.title}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Are you sure you want to delete this {project.title}</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button variant="primary" onClick={() => { handleDelete(project._id) }}>
                                                Delete
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Card>

                            </Col>
                        )
                    })}
                </Row>
            </Container >
        </div >
    );
}

export default Projects;

export const getServerSideProps = async () => {
    const res = await axios.get(`${process.env.SERVER}/api/projects/`)
    const { data } = await res.data
    return { props: { projects: data, } }
}