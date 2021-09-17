import React from 'react';
import { useStyles } from '../../../styles/TopNavStyles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from 'next/link'
import Container from '../../layout/Container'


function TopNav(props) {
    const classes = useStyles();
    return (
        <Container width='100%' background='black' color='white' minHeight='3vh' color='white' padding='.5rem' display='flex' >
            <div className={classes.social}>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
            <div className={classes.message}>
                <p>Free Shipping On All Orders $65+</p>
            </div>
            <div className={classes.nav}>
                <ul className={classes.list}>
                    <li> <Link href={`/`} ><a>Home</a></Link></li>
                    <li>Wishlist</li>
                </ul>
            </div>
        </Container>
    );
}

export default TopNav;