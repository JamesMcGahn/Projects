import React from 'react';
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProjectBadge from '../../components/ui/ProjectBadge'
import Button from 'react-bootstrap/Button';
import ViewButton from '../ui/ViewButton';
import classes from '../../styles/projectsSection.module.css'
import LinkWrapper from '../utils/LinkWrapper';
function ProjectsSection({ projects, mainPage }) {
    const projectData = mainPage ? projects : projects.filter((project, i) => i <= 2 ? project : null)

    function truncateString(str) {
        if (str.length < 200) return str

        return `${str.substring(0, 200)}...`
    }


    return (
        <Container className={classes.projects} id="projects" fluid>
            <div className={classes.header}><h2>Projects.</h2></div>
            <div className={classes.projectDiv}>
                <Row id={classes.cardRow}>
                    {projectData.map((project, i) => {
                        const img = <a><Card.Img variant="top" src="/img/headshot.jpg" /></a>
                        const button = <a>View Project</a>
                        return (

                            <Col xs={12} md={6} lg={4} className={classes.projectTile} key={project._id} >

                                <Card className={classes.projectCard} >
                                    <Link href={`/projects/${project._id}`} passHref>{img}</Link>
                                    <Card.Body>
                                        <span className={classes.title}> <h5><Link href={`/projects/${project._id}`}>{project.title}</Link></h5></span>
                                        <div>
                                            <strong>Tech:</strong> {project.stack.map((tech, i) => <ProjectBadge key={i}>{tech}</ProjectBadge>)}
                                        </div>
                                        <div className={classes.description}>
                                            <strong>Description:</strong>{` ${truncateString(project.description)}`}
                                        </div>

                                    </Card.Body>
                                    <ViewButton link={true} href={`/projects/${project._id}`}>View Project</ViewButton>
                                </Card>

                            </Col>
                        )
                    })}
                </Row>
                {
                    mainPage && <div className={classes.viewAllDiv}>
                        <LinkWrapper to={'/projects/'}>  <Button variant="primary" size="lg" id={classes.viewAllbtn}>View All</Button></LinkWrapper>
                    </div>
                }
            </div>
        </Container >
    );
}

export default ProjectsSection;