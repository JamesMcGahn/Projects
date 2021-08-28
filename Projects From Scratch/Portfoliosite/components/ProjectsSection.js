import React from 'react';
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import classes from '../styles/projectsSection.module.css'
function ProjectsSection({ projects }) {
    const firstThreeProjects = projects.filter((project, i) => i <= 2 ? project : null)
    return (
        <Container className={classes.projects} id="projects" fluid>
            <Row>
                {firstThreeProjects.map((project, i) => {
                    const img = <a><Card.Img variant="top" src="/img/headshot.jpg" /></a>
                    return (

                        <Col xs={12} md={4} className={classes.projectTile} key={project._id}>

                            <Card className={classes.bioBlurb} >
                                <Link href={`/projects/${project._id}`} passHref>{img}</Link>
                                <Card.Body>
                                    <span className={classes.title}> <h5><Link href={`/projects/${project._id}`}>{project.title}</Link></h5></span>
                                    <div>Tech: {project.stack.map((tech, i) => <Badge bg="primary" className={classes.badge} key={i}>{tech}</Badge>)}</div>
                                    <div>{project.description}</div>
                                </Card.Body>
                            </Card>

                        </Col>
                    )
                })}
            </Row>
        </Container >
    );
}

export default ProjectsSection;