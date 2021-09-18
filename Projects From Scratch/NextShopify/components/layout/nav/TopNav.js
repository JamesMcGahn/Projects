import React, { useContext, useState, useRef } from 'react';
import { useStyles } from '../../../styles/TopNavStyles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from 'next/link'
import Container from '../../layout/Container'
import { useSession } from "next-auth/client"
import { UserContext } from '../../../contexts/userContext'
import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles((theme) => ({
    expandedMenu: {
        position: 'absolute',
        width: '20%',
        maxHeight: '100px',
        zIndex: 10,
        top: '7%',
        left: '70%',
        padding: '2rem',
        borderBottom: '1px solid grey',
        backgroundColor: 'white',
        display: 'flex',
    },
}));



function TopNav(props) {
    const classes = useStyles();
    const styles = Styles();
    const [session, loading] = useSession()
    const { user } = useContext(UserContext)

    const [open, setOpen] = useState(false)
    const timer = useRef(null)


    const handleMouseIn = (e) => {
        setOpen(true);
    };

    const handleMenuIn = (e) => {
        clearTimeout(timer.current)
        setOpen(true)
    }

    const closeMenu = () => {
        timer.current = setTimeout(() => {
            setOpen(false)
        }, 750)
    }

    const handleMouseOut = () => {
        closeMenu()
    };

    const handleOnClick = () => {
        setOpen(false)
    }

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
                            <li onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>{`Welcome Back ${user.firstName}`}</li>
                            <li>Log Out</li>
                        </React.Fragment>
                        : null
                    }
                </ul>
            </div>
            {open && <div className={classes.expandedMenu} onMouseOver={handleMenuIn} onMouseOut={handleMouseOut}>
                <Container display='flex' width='50%' flexWrap='wrap' flexDirection='column' color='black'>
                    <ul className={classes.listCol}>
                        <li><Link href={`/`} ><a >Account</a></Link></li>
                        <li>Wishlist</li>
                    </ul>
                </Container>
            </div>
            }
        </Container>
    );
}

export default TopNav;