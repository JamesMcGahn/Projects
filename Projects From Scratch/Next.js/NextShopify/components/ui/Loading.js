import React from 'react';
import ReactLoading from 'react-loading';
import Container from '../layout/Container'
function Loading(props) {
    return (
        <Container padding='1rem' display="flex" justifyContent="center" width="100%">
            <ReactLoading type='bars' color='#CBB682' height={150} width={150} />
        </Container>
    );
}

export default Loading;