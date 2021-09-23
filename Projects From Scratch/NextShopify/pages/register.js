import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Container from '../components/layout/Container'
import { getCRSFToken } from '../helpers/getCRSFToken';
import { UserContext } from '../contexts/userContext'
import LoginRegisterForm from '../components/forms/LoginRegisterForm';
import Loading from '../components/ui/Loading'
import PageTitle from '../components/ui/PageTitle';
import { useRouter } from 'next/router'

function Register(props) {
    const router = useRouter()
    const [form, setForm] = useState(
        { firstName: '', lastName: '', email: '', password: '' }
    );
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({ error: false, message: '' })
    const [token, setToken] = useState()
    const { localCartID, setLocalCartId } = useContext(UserContext)

    useEffect(() => {
        getCRSFToken().then(token => {
            setToken(token)
        })

    }, [])


    const handleSubmit = async (e) => {

        e.preventDefault();

        const regex = new RegExp(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
        // checks for common mistakes (spaces, missing period. etc)

        if (!form.email || !form.lastName || !form.firstName || !form.password) {
            setErrors({ error: true, message: 'Make sure to fill out all fields...' })
            return
        }
        if (!regex.test(form.email)) {
            setErrors({ error: true, message: 'Double Check Your Email' })
            return
        }

        setLoading(true)

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/register`,
                {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    password: form.password,
                    cartId: localCartID?.cartId ? localCartID.cartId : ''
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'XSRF-TOKEN': token
                    },

                }
            )
            setLoading(false)
            if (res.data.errors === false) {
                setLocalCartId({})
                const email = res.data.data.email
                router.push(`/login?email=${email}`)
            } else if (res.data.errors === true) {
                const message = await res.data.data.customerCreate.customerUserErrors[0].message
                const code = await res.data.data.customerCreate.customerUserErrors[0].code
                setErrors({ error: true, message: message })
            }
        } catch (e) {
            setLoading(false)
            console.error(e)
            setErrors({ error: true, message: 'Something went wrong. Try again' })
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Container margin='0' minHeight='80vh' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >
            <PageTitle title='Register' color='white' />
            <Container background='#fff' width='30%' smWidth='100%'>
                {loading ? <Loading />
                    :
                    <LoginRegisterForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} isRegister />
                }
            </Container>
        </Container>
    );
}

export default Register;

