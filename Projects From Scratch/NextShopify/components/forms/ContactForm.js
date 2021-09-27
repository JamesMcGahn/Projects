import React from 'react';
import Container from '../layout/Container'
import MainButton from '../ui/MainButton'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inputItem: {
        width: '100%',
        padding: '.5rem',
        '& label': {
            display: 'block',
            fontSize: '1.2rem'
        },
        '& input': {
            width: '100%',
            lineHeight: '1.4rem',
            border: '1px solid #CBB682',
            borderRadius: '2px'
        },
        '& textarea': {
            width: '100%',
            lineHeight: '1.4rem',
            border: '1px solid #CBB682',
            borderRadius: '2px',
            minHeight: '100px',
            fontFamily: 'arial'
        }

    },
    error: {
        backgroundColor: '#CBB682',
        border: '1px solid black',
        padding: '3px 4px',
        marginLeft: '8px',
    },
    captcha: {
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid #CBB682',
        padding: '5px 100px',
        margin: '15px 0 15px 0px',
    }
}));

function ContactForm({ action, method, csrfToken, form, handleChange, handleSubmit, errors, success, captcha, children }) {
    const classes = useStyles()
    return (
        <Container width='100%' padding='2rem' background='#494949' border='2px solid #CBB682'>
            {errors.error ? <span className={classes.error}>{errors.message}</span> : null}
            {success.success ? <span className={classes.error}>{success.message}</span> : null}

            <form method={method} action={action} onSubmit={handleSubmit} noValidate>
                <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                <div className={classes.inputItem}>
                    <label htmlFor="user_name">Name: </label>
                    <input type="text" id="user_name" name="user_name" value={form.user_name} required onChange={handleChange} />
                </div>
                <div className={classes.inputItem}>
                    <label htmlFor="user_email">Email:</label>
                    <input type="email" id="user_email" name="user_email" value={form.user_email} required onChange={handleChange} />
                </div>
                <div className={classes.inputItem}>
                    <label htmlFor="subject">Subject: </label>
                    <input type="text" id="subject" name="subject" value={form.subject} required onChange={handleChange} />
                </div>
                <div className={classes.inputItem}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={form.message} required onChange={handleChange} />
                </div>
                <Container margin='5px 0 0 0' display='flex' justifyContent='center'>
                    {children}
                </Container>
                <Container margin='0' display='flex' justifyContent='center'>
                    {!captcha.captcha && !captcha.loading ? <span className={classes.captcha}>Fill out captcha</span> : null}
                    {captcha.loading ? <span className={classes.captcha}>Validating Captcha</span> : null}
                </Container>
                <Container padding='.5rem'>
                    <MainButton backgroundColor='#CBB682' width="100%" hoverColor='white'>Log In</MainButton>
                </Container>

            </form>
        </Container>
    );
}

export default ContactForm;