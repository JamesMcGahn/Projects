import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from '../styles/Nav.module.css'
import Link from 'next/link'

function MainNav(props) {
    return (
        <Container className={classes.container} fluid>
            <Navbar id={classes.nav} bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Link href='/' passHref><Nav.Link>Home</Nav.Link></Link>
                            <Link href='/#about' passHref><Nav.Link>About</Nav.Link></Link>
                            <Link href='/projects' passHref><Nav.Link>Projects</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container >
    );
}

export default MainNav;