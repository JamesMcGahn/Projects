import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import classes from '../styles/addproject.module.css'
import ProjectForm from '../components/ProjectForm'
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
            const res = await axios.post(`${process.env.SERVER}/api/projects`,
                form,
                { headers: { "Content-Type": 'application/json' } }).then(res => router.push('/projects'))
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
                            : <ProjectForm validated={validated}
                                handleSubmit={handleSubmit}
                                handleChange={handleChange}
                                form={form} />
                    }
                </Row>
            </Card>
        </div>
    );
}

export default AddProject;