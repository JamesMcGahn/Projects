import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import classes from '../../../styles/addproject.module.css'
import ProjectForm from '../../../components/ProjectForm'

function EditSingleProject({ project, id }) {
    const [form, setForm] = useState(project)
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
            const res = await axios.put(`http://localhost:3000/api/projects/${id}`,
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


export default EditSingleProject;

export const getServerSideProps = async ({ query: { id } }) => {
    const res = await axios.get(`${process.env.SERVER}/api/projects/${id}`)
    const { data } = await res.data
    return { props: { project: data, id: id } }
}