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
import ProjectCard from '../../components/ProjectCard'

function Projects({ projects }) {
    const [show, setShow] = useState(false);
    // const [displayProjects, setdisplayProjects] = useState(projects);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalItem, setModalItem] = useState({ id: '', title: '' });
    const router = useRouter()

    const handleDelete = (id, title) => {
        setShow(true)
        setModalItem({ id: id, title: title })
        console.log('hi')

        // deleteProject(id)
        // console.log(id)
    }

    const deleteProject = async (id) => {
        try {
            setShow(false)
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

                        return <ProjectCard stack={project.stack} description={project.delete}
                            title={project.title} id={project._id} handleClose={handleClose} handleDelete={handleDelete} show={show} handleShow={handleShow} />
                    })}
                </Row>
                <DeleteModal id={modalItem.id} title={modalItem.title} show={show} setShow={setShow} deleteProject={deleteProject} />
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

const DeleteModal = ({ id, title, show, setShow, deleteProject }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete {title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this {title}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => deleteProject(id)}>
                    Delete {id}
                </Button>
            </Modal.Footer>
        </Modal >
    )
}