import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import classes from '../styles/addproject.module.css'
function AddProject(props) {
    const [form, setForm] = useState(
        {
            title: "",
            stack: [],
            description: "",
            imageUrl: "",
            gitUrl: "",
            liveUrl: ""
        }
    )
    const [submitting, setSubmitting] = useState(false)
    const [validated, setValidated] = useState(false);
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true)
        } else {
            setSubmitting(true)
            createProject()

        }
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.name === 'stack' ? e.target.value.split(',') : e.target.value })
    }

    const createProject = async () => {
        try {
            console.log('creatuing')
            const res = await axios.post('http://localhost:3000/api/projects',
                form,
                { headers: { "Content-Type": 'application/json' } }).then(res => router.push('/'))

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={classes.addform}>
            <Card className={classes.card}>
                <Row md='12'>
                    {
                        submitting ? 'loading'
                            : <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="title">

                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title" name="title" onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Enter a Title
                                    </Form.Control.Feedback>

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Stack</Form.Label>
                                    <Form.Control type="text" placeholder="Ex. React, Mongo" name='stack' onChange={handleChange} required />
                                    <Form.Text className="text-muted">
                                        Make sure list is comma separated
                                    </Form.Text>
                                    <Form.Control.Feedback type="invalid">
                                        Add the Project's Stack
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Description" name="description" onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Add the Project's Description
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="imageUrl">
                                    <Form.Label>Image Url</Form.Label>
                                    <Form.Control type="url" placeholder="Image Url" name="imageUrl" onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Add the Project's Image
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gitUrl">
                                    <Form.Label>Git Url</Form.Label>
                                    <Form.Control type="url" placeholder="Git Url" name="gitUrl" onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Add the Project's Git URL
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="liveUrl">
                                    <Form.Label>Live Url</Form.Label>
                                    <Form.Control type="text" placeholder="Live Url" name="liveUrl" onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Add the Project's Live URL
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                    }
                </Row>
            </Card>
        </div>
    );
}

export default AddProject;