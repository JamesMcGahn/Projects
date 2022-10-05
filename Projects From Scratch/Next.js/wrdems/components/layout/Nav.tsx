import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from '../../styles/Nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

function MainNav() {
  const router = useRouter();
  return (
    <Container className={classes.container} fluid>
      <Navbar id={classes.nav} bg="dark" expand="lg" variant="dark">
        <Container id={classes.innerCont}>
          <Link href="/" passHref>
            <Navbar.Brand href="#home">Wood-Ridge Democrats</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/#about-michele" passHref>
                <Nav.Link>About Michele</Nav.Link>
              </Link>
              <Link href="/#about-mike" passHref>
                <Nav.Link>About Mike</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <a href="https://www.facebook.com/WRDems" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
        </Container>
      </Navbar>
    </Container>
  );
}

export default MainNav;
