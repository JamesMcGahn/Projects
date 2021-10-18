import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import ContactForm from '../forms/ContactForm'
import Loading from '../ui/Loading'
import Alert from '../ui/Alert'


function ContactSection({ csrfToken }) {
    const [captcha, setCaptcha] = useState({ loading: false, captcha: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState({ success: false, message: '' });
    const [errors, setErrors] = useState({ error: false, message: '' });
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        user_email: '',
        subject: '',
        message: ''
    });


    async function onChange(value) {
        setCaptcha({ loading: true, captcha: '' })
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/captcha`, {
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
        setValidated(true)
        const regex = new RegExp(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
        // checks for common mistakes (spaces, missing period. etc)

        if (!form.first_name || !form.last_name || !form.user_email || !form.subject || !form.message) {
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
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/mail`, {
                form: form
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'XSRF-TOKEN': csrfToken
                    }
                }
            ).then(res => {
                setLoading(false)
                if (res.data.mailer === 200) {
                    setSuccess({ success: true, message: 'Your Email was successfully sent!' })
                    setForm({
                        first_name: '',
                        last_name: '',
                        user_email: '',
                        subject: '',
                        message: ''
                    })
                    setCaptcha('')
                } else if (res.data.mailer === 400) {
                    setLoading(false)
                    setErrors({ error: true, message: 'Message Failed to Send...Try Again' })
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
        <React.Fragment>
            {loading ?
                <div className="flex flex-col items-center justify-center">
                    <Loading />
                </div>
                : success.success ?
                    <div className="p-10 bg-white rounded">
                        <p>Your message has been successfully sent!</p>
                    </div>
                    :
                    <ContactForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} captcha={captcha} validated={validated}>
                        <div className="flex flex-col items-center justify-center mt-0">

                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                                size='normal'
                                theme='dark'
                            />
                            {!captcha ? <div className=''>Fill out captcha</div> : null}
                        </div>
                    </ContactForm>
            }
        </React.Fragment>
    );
}

export default ContactSection;