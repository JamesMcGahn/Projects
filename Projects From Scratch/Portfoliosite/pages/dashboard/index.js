import React, { useState } from 'react';
import { getSession } from 'next-auth/client'
import axios from 'axios'
import { useRouter } from 'next/router'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/dashboard.module.css'
import DashboardProjectTable from '../../components/dashboard/DashboardProjectTable'

function dashboard({ session, projects }) {
    const [show, setShow] = useState(false);
    // const [displayProjects, setdisplayProjects] = useState(projects);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalItem, setModalItem] = useState({ id: '', title: '' });
    const router = useRouter()


    const handleDelete = (id, title) => {
        setShow(true)
        setModalItem({ id: id, title: title })
    }

    const deleteProject = async (id) => {
        try {
            setShow(false)
            const res = await axios.delete(`http://localhost:3000/api/auth/projects/${id}`,
                { headers: { "Content-Type": 'application/json' } }).then(res => router.push('/dashboard'))
        } catch (e) {
            console.log(e)
        }
    }


    return (

        <Container className={classes.container} fluid>
            <div className={classes.table}>
                <Card>
                    <DashboardProjectTable projects={projects} handleDelete={handleDelete} />
                </Card>
            </div>
            <DeleteModal id={modalItem.id} title={modalItem.title} show={show} setShow={setShow} deleteProject={deleteProject} />
        </Container >

    );
}
export default dashboard;

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }

        }
    }
    const res = await axios.get(`${process.env.SERVER}/api/projects/`)
    const { data } = await res.data
    return { props: { session: session, projects: data } }
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