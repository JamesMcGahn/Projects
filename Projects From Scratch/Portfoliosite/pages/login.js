import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function login(props) {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState();
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true)
        } else {
            setSubmitting(true)
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.name === 'stack' ? e.target.value.split(',') : e.target.value })
    }
    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default login;