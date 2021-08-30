import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import classes from '../styles/projectsSection.module.css'
function ProjectCard({ stack, description, title, id, handleClose, handleDelete, show, handleShow }) {
    const img = <a><Card.Img variant="top" src="/img/headshot.jpg" /></a>
    const handleModalDelete = () => {
        handleDelete(id, title)
    }

    return (
        <Col xs={12} md={4} className={classes.projectTile} key={id}>

            <Card className={classes.bioBlurb} >
                <Link href={`/projects/${id}`} passHref>{img}</Link>
                <Card.Body>
                    <span className={classes.title}> <h5><Link href={`/projects/${id}`}>{title}</Link></h5></span>
                    <div>Tech: {stack?.map((tech, i) => <Badge bg="primary" className={classes.badge} key={i}>{tech}</Badge>)}</div>
                    <div>{description}</div>
                    <Button variant="danger" onClick={handleModalDelete}>
                        Delete
                    </Button>
                    <Button variant="primary">
                        <Link href={`/projects/${id}/edit`}>Edit</Link>
                    </Button>
                </Card.Body>
            </Card>

        </Col>
    );
}

export default ProjectCard;