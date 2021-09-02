import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from '../../styles/hero.module.css'
function Hero({ h1, h2 }) {
    return (
        <React.Fragment>
            <Container className={classes.hero} fluid>
                <h1 id={classes.h1}>{h1}</h1>
                <h2 id={classes.h2}>{h2}</h2>
            </Container>
        </React.Fragment >
    );
}

export default Hero;