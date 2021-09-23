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

    },
    error: {
        backgroundColor: '#CBB682',
        border: '1px solid black',
        padding: '3px 4px',
        marginLeft: '8px',
    }
}));

function LoginRegister({ action, method, csrfToken, form, handleChange, handleSubmit, errors, isRegister }) {
    const classes = useStyles()
    return (
        <Container width='100%' padding='2rem' background='#494949' border='2px solid #CBB682'>
            {errors.error ? <span className={classes.error}>{errors.message}</span> : null}

            <form method={method} action={action} onSubmit={handleSubmit} action={action} noValidate>
                <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                {isRegister ?
                    <React.Fragment>
                        <div className={classes.inputItem}>
                            <label htmlFor="firstName">First Name: </label>
                            <input type="text" id="firstName" name="firstName" value={form.firstName} required onChange={handleChange} />
                        </div>
                        <div className={classes.inputItem}>
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" id="lastName" name="lastName" value={form.lastName} required onChange={handleChange} />
                        </div>
                    </React.Fragment>
                    : null
                }
                <div className={classes.inputItem}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" value={form.email} required onChange={handleChange} />
                </div>
                <div className={classes.inputItem}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={form.password} required onChange={handleChange} />
                </div>
                <Container padding='.5rem'>
                    <MainButton backgroundColor='#CBB682' width="100%" hoverColor='white'>Log In</MainButton>
                </Container>

            </form>
        </Container>
    );
}

export default LoginRegister;