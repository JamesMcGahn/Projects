import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/layout/Container'
import { useRouter } from 'next/router'
import { getCsrfToken } from "next-auth/client"


function Register(props) {

    const [form, setForm] = useState(
        { firstName: '', lastName: '', email: '' }
    );
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formResponse, setFormResponse] = useState({ error: false, message: '', code: '' })
    const [token, setToken] = useState()
    useEffect(() => {
        const ham = async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/csrf`)
            const { csrfToken } = data
            setToken(csrfToken)
        }
        ham()
    }, [])



    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/register`,
                {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    password: form.password
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'XSRF-TOKEN': token
                    },

                }
            )
            setLoading(false)
            // console.log(res.data)
            // console.log(res.data.data.customerCreate.customerUserErrors[0].message)
            // console.log(res.data.data.customerCreate.customerUserErrors[0].code)
            if (res.data.errors === false) {
                const email = res.data.data.customer.email
                const firstName = res.data.data.customer.firstName
                router.push(`/login?email=${email}&firstName=${firstName}`)
            } else if (res.data.errors === true) {
                setSubmitted(true)
                const message = await res.data.data.customerCreate.customerUserErrors[0].message
                const code = await res.data.data.customerCreate.customerUserErrors[0].code
                setFormResponse({ error: true, message: message, code: code })
            }
        } catch (e) {
            setLoading(false)
            console.error(e)
            setFormResponse({ error: true, message: 'Oppsss... Something went wrong.. Try again', code: 'O No' })
        }




    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    //TODO: Style Form
    //TODO: Form validation

    return (
        <Container>
            {!loading && formResponse.error === true ? <h1>{`${formResponse.code} - ${formResponse.message}`}</h1> : null}

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

// export async function getServerSideProps(context) {
//     return {
//         props: {
//             csrfToken: await getCsrfToken(context)
//         }
//     }
// }