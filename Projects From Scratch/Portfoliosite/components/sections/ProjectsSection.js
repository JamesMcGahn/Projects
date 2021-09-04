import React, { useState } from 'react';
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
import Image from 'react-bootstrap/Image';

function ProjectsSection({ projects, mainPage }) {
    const initialProjects = mainPage ? projects.filter((project, i) => i <= 2 ? project : null) : projects
    const [projectData, setProjectData] = useState(initialProjects)

    function handleChange(val) {
        if (val === 'all') return setProjectData(projects)

        const data = projects.filter(project => project.stack.includes(val))
        return setProjectData(data)
    }


    function truncateString(str) {
        if (str.length < 200) return str
        return `${str.substring(0, 200)}...`
    }

    const options = ['All', 'Bootstrap', 'Material UI', 'MongoDb', 'Next.Js', 'React', 'PHP']


    return (
        <Container className={classes.projects} id="projects" fluid>
            <div className={classes.header}><h2>Projects.</h2></div>
            <div className={classes.projectDiv}>
                {!mainPage && <Row className="justify-content-start">
                    <Col xs='auto' >
                        <div className={classes.select}>
                            <label htmlFor="tech">Choose Tech:</label>
                            <select name="tech" id="tech" onChange={(e) => handleChange(e.target.value)}>
                                {options.map((option) => (<option value={option.toLowerCase()} key={option}>{option} </option>))}
                            </select>
                        </div>
                    </Col>
                </Row>}
                <Row id={classes.cardRow}>
                    {projectData.map((project, i) => {
                        const img = <a><Image variant="top" src={project.imageUrl[0].url} fluid /></a>
                        return (

                            <Col xs={12} md={6} lg={4} className={classes.projectTile} key={project._id} >

                                <Card className={classes.projectCard} >
                                    <div className={classes.projectImg}>
                                        <Link href={`/projects/${project._id}`} passHref>{img}</Link>
                                    </div>
                                    <div className={classes.body}>
                                        <span className={classes.title}> <h5><Link href={`/projects/${project._id}`}>{project.title}</Link></h5></span>
                                        <div>
                                            <strong>Tech:</strong> {project.stack.map((tech, i) => <ProjectBadge key={i}>{tech}</ProjectBadge>)}
                                        </div>
                                        <div className={classes.description}>
                                            <strong>Summary:</strong>{` ${truncateString(project.subtitle)}`}
                                        </div>

                                    </div>
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
            </div >
        </Container >
    );
}

export default ProjectsSection;