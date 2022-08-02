import React, { useState, useEffect } from 'react';
import { getCsrfToken } from "next-auth/client"
import Container from '../components/layout/Container'
import { useRouter } from 'next/router'
import LoginRegisterForm from '../components/forms/LoginRegisterForm'
import PageTitle from '../components/ui/PageTitle';

function Login(props) {
    const { csrfToken } = props
    const router = useRouter()
    const [form, setForm] = useState(
        { email: '', password: '', }
    );

    useEffect(() => {
        if (router.query?.email) {
            setForm({ ...form, email: router.query.email })
        }
        if (router.query.error) {
            setErrors({ error: true, message: 'Login Failed. Try Again?' })
        }
    }, [])

    const [errors, setErrors] = useState({ error: false, message: '' })

    const handleSubmit = (e) => {
        const regex = new RegExp(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
        // checks for common mistakes (spaces, missing period. etc)
        if (!regex.test(form.email) || !e.currentTarget.checkValidity()) {
            e.preventDefault();
            if (!regex.test(form.email)) {
                setErrors({ error: true, message: 'Double Check Your Email' })
                return
            }
            if (!e.currentTarget.checkValidity()) {
                setErrors({ error: true, message: 'Make sure to input your login and password.' })
                return
            }
        }
    }
    // 
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (errors.error) {
            setErrors({ error: false, message: '' })
        }
    }

    return (
        <Container margin='0' minHeight='80vh' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >
            <PageTitle title='Login' color='white' />
            <Container background='#fff' width='30%' smWidth='100%'>
                <LoginRegisterForm method="POST" buttonText='Login'
                    handleSubmit={handleSubmit} csrfToken={csrfToken} form={form} handleChange={handleChange} errors={errors}
                    action={`${process.env.NEXT_PUBLIC_SERVER}/api/auth/callback/credentials`} isLogin />
            </Container >
        </Container >
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