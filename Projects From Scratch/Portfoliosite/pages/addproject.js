import React from 'react';
import { useState, useEffect } from 'react'
import { getSession } from 'next-auth/client'
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
            challenges: "",
            imageUrl: "",
            gitUrl: "",
            liveUrl: "",
            adtlImg: [],
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
        setForm({ ...form, [e.target.name]: e.target.name === 'stack' || e.target.name === 'adtlImg' ? e.target.value.split(',') : e.target.value })
    }

    const createProject = async () => {
        try {
            const res = await axios.post(`${process.env.SERVER}/api/auth/projects`,
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

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }

        }
    }
    return { props: { session: session } }
}