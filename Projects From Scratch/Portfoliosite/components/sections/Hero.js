import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from '../../styles/hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
function Hero({ h1, h2 }) {
    return (
        <React.Fragment>
            <Container className={classes.hero} fluid>
                <h1 id={classes.h1}>{h1}</h1>
                <h2 id={classes.h2}>{h2}</h2>
                <Image
                    src="/img/jmlogo3.jpg"
                    alt="hero"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                <div className={classes.chevron}><a href="#about"><FontAwesomeIcon icon={faChevronDown} /></a></div>
            </Container>
        </React.Fragment >
    );
}

export default Hero;