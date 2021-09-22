import React from 'react';
import Container from '../layout/Container'
import PageTitle from '../ui/PageTitle'
import MainButton from '../ui/MainButton'
import Link from 'next/link'
function LoginToSee({ title, message }) {
    return (
        <Container width="100%" background='#fff' display="flex" alignItems="center" flexDirection="column" padding="1.5rem" minHeight='10vh' margin="1rem" >
            <PageTitle title={title} />

            <div>
                <p>{message}</p>
                <Link href='/login'>
                    <a>
                        <MainButton backgroundColor='#CBB682' width="100%" hoverColor='white'>Login</MainButton>
                    </a>
                </Link>
            </div>
        </Container>
    );
}

export default LoginToSee;