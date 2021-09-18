import React, { useContext } from 'react';
import { useStyles } from '../../../styles/TopNavStyles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from 'next/link'
import Container from '../../layout/Container'
import { useSession } from "next-auth/client"
import { UserContext } from '../../../contexts/userContext'

function TopNav(props) {
    const classes = useStyles();
    const [session, loading] = useSession()
    const { user } = useContext(UserContext)
    console.log(user)
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
                    {session ?
                        <React.Fragment>
                            <li>{`Welcome Back ${user.firstName}`}</li>
                            <li> <Link href={`/`} ><a>Account</a></Link></li>
                            <li>Wishlist</li>
                            <li>Log Out</li>
                        </React.Fragment>
                        : null
                    }
                </ul>
            </div>
        </Container>
    );
}

export default TopNav;