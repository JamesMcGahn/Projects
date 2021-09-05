import React, { useState } from 'react';
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import classes from '../styles/art.module.css'
import Image from 'react-bootstrap/Image';

function art({ art }) {
    const [show, setShow] = useState(false);
    const [modalItem, setModalItem] = useState({ title: '', img: '' });

    const handleClick = (title, img) => {
        console.log(title, img)
        setModalItem({ title: title, img: img })
        setShow(true)

    }

    return (
        <Container className={classes.art} id="projects" fluid>
            <div className={classes.header}><h2>Art.</h2></div>
            <div className={classes.artDiv}>

                <Row id={classes.cardRow}>
                    {art.reverse().map((art, i) => {

                        return (
                            <Col xs={12} md={6} lg={4} className={classes.projectTile} key={art._id} >
                                <Card className={classes.projectCard} onClick={() => handleClick(art.title, art.imageUrl[0].url)}>
                                    <div className={classes.projectImg}>
                                        <Image variant="top" src={art.imageUrl[0].url} fluid />
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div >
            <DisplayModal title={modalItem.title} img={modalItem.img} show={show} setShow={setShow} />
        </Container >
    );
}

export default art;

export const getStaticProps = async ({ params }) => {
    const res = await axios.get(`${process.env.SERVER}/api/art/`)
    const { data } = await res.data
    return { props: { art: data }, revalidate: 3600 }
}

const DisplayModal = ({ img, title, show, setShow, }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image variant="top" src={`${img}`} fluid />
            </Modal.Body>
        </Modal >
    )
}