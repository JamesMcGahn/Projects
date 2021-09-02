import React from 'react';
import axios from 'axios'
import styles from '../../../styles/aboutSection.module.css'
import classes from '../../../styles/singleProject.module.css'
import Carousel from 'react-bootstrap/Carousel'
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
    const moreThanOneImg = project.adtlImg.length > 1 ? true : false
    return (
        <Container className={styles.outerContainer} fluid>
            <Container className={styles.container} fluid>
                <Card className={styles.card}>
                    <Card.Body>
                        <Row>
                            <Col xs={12} md={5} >
                                <Card className={styles.innerCard}>
                                    <Carousel controls={moreThanOneImg} indicators={moreThanOneImg}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="/img/headshot.jpg"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        {moreThanOneImg ? project.adtlImg.map((img) => (
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="holder.js/800x400?text=Second slide&bg=282c34"
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item>

                                        ))
                                            : null
                                        }
                                    </Carousel>
                                    <Card.Body>
                                        <div>
                                            <strong>Tech Used:</strong> {project.stack.map((tech, i) => <Badge bg="primary" className={classes.badge} key={i}>{tech}</Badge>)}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={7} className={styles.rightCol}>
                                <Card className={styles.innerCard}>
                                    <div className={classes.title}>
                                        <h4>{project.title}</h4>
                                    </div>
                                    <div>

                                        <Button>Live Site</Button>
                                        <Button>Code</Button>
                                    </div>
                                    <div className={classes.description}>
                                        <strong>Description:</strong> {project.description}
                                    </div>
                                    <div className={classes.challenges}>
                                        <strong>Challenges:</strong> {project.challenges}
                                    </div>



                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
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