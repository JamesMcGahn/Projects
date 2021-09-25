import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { getCRSFToken } from '../helpers/getCRSFToken';
import axios from 'axios'
import ContactForm from '../components/forms/ContactForm'
import Loading from '../components/ui/Loading'
import Container from '../components/layout/Container'
import PageTitle from '../components/ui/PageTitle';

function ContactPage() {
    const [captcha, setCaptcha] = useState({ loading: false, captcha: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState({ success: false, message: '' });
    const [errors, setErrors] = useState({ error: false, message: '' });
    const [form, setForm] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const regex = new RegExp(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
        // checks for common mistakes (spaces, missing period. etc)

        if (!form.user_name || !form.user_email || !form.subject || !form.message) {
            setErrors({ error: true, message: 'Make sure to fill out all fields...' })
            return
        }
        if (!regex.test(form.user_email)) {
            setErrors({ error: true, message: 'Double Check Your Email' })
            return
        }

        if (!captcha.captcha) {
            setErrors({ error: true, message: 'Fill Out Captcha' })
            return
        }

        try {
            setLoading(true)
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/contact`, {
                form: form
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'XSRF-TOKEN': await getCRSFToken()
                    }
                }
            ).then(res => {
                setLoading(false)
                if (res.data.mailer === 200) {
                    setSuccess({ success: true, message: 'Successfully Submitted' })
                    setForm({
                        user_name: '',
                        user_email: '',
                        subject: '',
                        message: ''
                    })
                    setCaptcha('')
                } else if (res.data.mailer === 400) {
                    setLoading(false)
                    setErrors({ error: true, message: 'Message Failed to Send' })
                }
            })

        } catch (error) {
            setErrors(true)
            setLoading(false)
            console.log(error)
        }


    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (errors.error) {
            setErrors({ error: false, message: '' })
        }
        if (success.success) {
            setSuccess({ error: false, message: '' })
        }
    }


    return (
        <Container margin='0' minHeight='80vh' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >
            <PageTitle title='Contact' color='white' />
            <Container background='#fff' width='40%' smWidth='100%' margin='1rem 0'>
                {loading ? <Loading />
                    :
                    <ContactForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} success={success} captcha={captcha}>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                            size='normal'
                            theme='dark'
                        />
                    </ContactForm>
                }
            </Container>
        </Container>
    );
}

export default ContactPage;