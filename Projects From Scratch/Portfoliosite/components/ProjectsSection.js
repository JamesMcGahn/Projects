import React from 'react';
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import classes from '../styles/projectsSection.module.css'
function ProjectsSection({ projects }) {
    const firstThreeProjects = projects.filter((project, i) => i <= 2 ? project : null)
    return (
        <Container className={classes.projects} id="projects" fluid>
            <div className={classes.header}><h2>Projects.</h2></div>
            <Row >
                {firstThreeProjects.map((project, i) => {
                    const img = <a><Card.Img variant="top" src="/img/headshot.jpg" /></a>
                    const button = <a>View Project</a>
                    return (

                        <Col xs={12} md={6} lg={4} className={classes.projectTile} key={project._id} >

                            <Card className={classes.projectCard} >
                                <Link href={`/projects/${project._id}`} passHref>{img}</Link>
                                <Card.Body>
                                    <span className={classes.title}> <h5><Link href={`/projects/${project._id}`}>{project.title}</Link></h5></span>
                                    <div>
                                        <strong>Tech:</strong> {project.stack.map((tech, i) => <Badge bg="primary" className={classes.badge} key={i}>{tech}</Badge>)}
                                    </div>
                                    <div className={classes.description}>
                                        <strong>Description:</strong>{` ${project.description}`}
                                    </div>

                                </Card.Body>
                                <div className={classes.btnDiv}>
                                    <Button variant="primary" size="lg" className={classes.view}><Link href={`/projects/${project._id}`} passHref>View Project</Link></Button>
                                </div>
                            </Card>

                        </Col>
                    )
                })}
            </Row>
            <div className={classes.viewAllDiv}>
                <Button variant="primary" size="lg" id={classes.viewAllbtn}><Link href={`/projects/`} passHref>View All Projects.</Link></Button>
            </div>
        </Container >
    );
}

export default ProjectsSection;