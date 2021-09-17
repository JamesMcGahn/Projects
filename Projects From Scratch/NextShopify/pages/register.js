import React, { useState } from 'react';
import axios from 'axios';
import Container from '../components/layout/Container'
import { useRouter } from 'next/router'

function Register(props) {
    const [form, setForm] = useState(
        { firstName: '', lastName: '', email: '' }
    );
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formResponse, setFormResponse] = useState()

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        console.log(e.target.elements.firstName.value)
        console.log(e.target.elements.lastName.value)
        console.log(e.target.elements.email.value)
        console.log(e.currentTarget.checkValidity())

        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/register`, {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password
        })
        setLoading(false)
        console.log(res.data)
        if (res.data.errors === false) {
            const email = res.data.data.customer.email
            const firstName = res.data.data.customer.firstName
            router.push(`/login?email=${email}&firstName=${firstName}`)
        } else if (res.data.errors === true) {
            setSubmitted(true)
            const message = res.data.data.customerCreate.customerUserErrors[0].message
            const code = res.data.data.customerCreate.customerUserErrors[0].code
            setFormResponse({ message: message, code: code })
        }




    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            {!loading && submitted ? <h1>{`${formResponse.code} - ${formResponse.message}`}</h1> : null}

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First name:</label>
                <input type="text" id="firstName" name="firstName" required onChange={handleChange} />
                <label htmlFor="lastName">Last name:</label>
                <input type="text" id="lastName" name="lastName" required onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={handleChange} />
                <button>Create Account </button>
            </form>
        </Container>
    );
}

export default Register;