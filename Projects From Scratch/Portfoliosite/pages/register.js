import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function login(props) {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (e.currentTarget.checkValidity() === false) {
        //     e.stopPropagation();
        //     setValidated(true)
        // } else {
        //     setSubmitting(true)
        // }
        register()

    }

    const register = async () => {
        try {
            const res = await axios.post(`${process.env.SERVER}/api/auth/signup`,
                form,
                { headers: { "Content-Type": 'application/json' } }).then(res => router.push('/projects'))
        } catch (e) {
            console.log(e)
        }
    }



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.name === 'stack' ? e.target.value.split(',') : e.target.value })
    }
    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">

                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Title" name="username" onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Enter a Title
                    </Form.Control.Feedback>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Ex. React, Mongo" name='password' onChange={handleChange} required />
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