import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Container from '../components/layout/Container'
import { getCRSFToken } from '../helpers/getCRSFToken';
import LoginRegisterForm from '../components/forms/LoginRegisterForm';
import Loading from '../components/ui/Loading'
import PageTitle from '../components/ui/PageTitle';
import { useRouter } from 'next/router'
import ReCAPTCHA from "react-google-recaptcha";
function Reset(props) {
    const router = useRouter()
    const [captcha, setCaptcha] = useState({ loading: false, captcha: '' })
    const [form, setForm] = useState(
        { email: '', password: '' }
    );
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({ error: false, message: '' })
    const [token, setToken] = useState()

    useEffect(() => {
        getCRSFToken().then(token => {
            setToken(token)
        })
    }, [])

    async function onChange(value) {
        setCaptcha({ loading: true, captcha: '' })
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/captcha`, {
                headers: { "Content-Type": 'application/json' },
                data: {
                    response: value
                }
            }).then(res => {
                setCaptcha({ loading: false, captcha: res.data.captcha })
            })
        } catch (error) {
            console.log(error)
        }
    }




    const validate = (e, type) => {
        let validated = true
        const regex = new RegExp(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
        // checks for common mistakes (spaces, missing period. etc)
        if (!type === 'reset-email' && !form.password) {
            setErrors({ error: true, message: 'Make sure to fill out all fields...' })
            validated = false
            return validated
        }
        if (type === 'reset-email' && !regex.test(form.email)) {
            setErrors({ error: true, message: 'Double Check Your Email' })
            validated = false
            return validated
        }

        if (!captcha.captcha) {
            setErrors({ error: true, message: 'Fill Out Captcha' })
            validated = false
            return validated
        }
        return validated
    }



    const resetEmail = async (e) => {
        e.preventDefault();
        if (!validate(e, 'reset-email')) return
        setLoading(true)
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/reset`,
                {
                    email: form.email,
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
                setErrors({ error: true, message: "Check Your Email for Password Reset" })
            } else if (res.data.errors === true) {
                const message = await res.data.data.customerRecover.customerUserErrors[0].message
                setErrors({ error: true, message: message })
            }
        } catch (e) {
            setLoading(false)
            console.error(e)
            setErrors({ error: true, message: 'Something went wrong. Try again' })
        }
    }

    const recoverPassword = async (e) => {
        e.preventDefault();
        if (!validate(e)) return
        setLoading(true)
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/reset`,
                {
                    url: router.query.reset_url,
                    password: form.password,
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
                router.push('/login')
            } else if (res.data.errors === true) {
                const message = await res.data.data.customerResetByUrl.customerUserErrors[0].message
                setErrors({ error: true, message: message })
                setCaptcha({ loading: false, captcha: '' })
            }
        } catch (e) {
            setLoading(false)
            console.error(e)
            setErrors({ error: true, message: 'Something went wrong. Try again' })
            setCaptcha('')
        }
    }





    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (errors.error) {
            setErrors({ error: false, message: '' })
        }
    }


    return (
        <Container margin='0' minHeight='80vh' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >
            <PageTitle title={!router.query?.reset_url ? 'Reset Your Password' : 'Enter A New Password'} color='white' />
            <Container background='#fff' width='30%' smWidth='100%'>
                {loading ? <Loading />
                    : !router.query?.reset_url ?
                        <LoginRegisterForm form={form} handleChange={handleChange} handleSubmit={resetEmail} errors={errors} isReset buttonText='Reset' captcha={captcha}>
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                                size='normal'
                                theme='dark'
                            />
                        </LoginRegisterForm>
                        :
                        <LoginRegisterForm form={form} handleChange={handleChange} handleSubmit={recoverPassword} errors={errors} isRecover buttonText='Submit' captcha={captcha} >
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                                size='normal'
                                theme='dark'
                            />
                        </LoginRegisterForm>
                }
            </Container>
        </Container>
    );
}

export default Reset;

