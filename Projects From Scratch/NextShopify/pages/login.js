import React, { useState } from 'react';
import { getCsrfToken } from "next-auth/client"
import axios from 'axios';
import Container from '../components/layout/Container'
import { useRouter } from 'next/router'

function Login(props) {
    const { csrfToken } = props
    const [form, setForm] = useState(
        { email: '', password: '', }
    );
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formResponse, setFormResponse] = useState()

    const handleSubmit = async (e) => {
        setLoading(true)
        // e.preventDefault();
        // console.log('send')
        // const data = { ...form, csrfToken: csrfToken }
        // const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/callback/credentials`, data, { headers: { "Content-Type": "multipart/form-data" } })
        // setLoading(false)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <form method="POST" action={`${process.env.NEXT_PUBLIC_SERVER}/api/auth/callback/credentials`} onSubmit={handleChange} noValidate>
                <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={handleChange} />
                <button>Create Account </button>
            </form>
        </Container>
    );
}

export default Login;

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}