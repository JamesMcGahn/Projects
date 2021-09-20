import React, { useContext, useState, useRef } from 'react';
import { useStyles } from '../../../styles/TopNavStyles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from 'next/link'
import Container from '../../layout/Container'
import { useSession } from "next-auth/client"
import { UserContext } from '../../../contexts/userContext'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';
import { signOut } from "next-auth/client"


function TopNav(props) {
    const classes = useStyles();
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
        }, 1000)
    }

    const handleMouseOut = () => {
        closeMenu()
    };

    const handleOnClick = () => {
        setOpen(false)
    }

    function IsMobile() {
        const size = useMediaQuery(
            json2mq({
                maxWidth: 700,
            }),
        );
        return size
    }
    let mobile = IsMobile()

    return (
        <Container width='100%' background='black' color='white' minHeight='3vh' color='white' padding='.5rem' display='flex' alignItems='center' justifyContent='center'>
            {mobile ?
                <React.Fragment>
                    <Container width='33%'>

                    </Container>
                    <Container width='33%' textAlign='center'>
                        Store Name
                    </Container>
                    <Container width='33%' textAlign='right'>
                        {session ?
                            <Container padding='0 1rem'><a href='/' onClick={() => signOut()}>Log Out</a></Container>
                            :
                            <Container padding='0 1rem'> <Link href={`/login`} ><a>Log In</a></Link></Container>
                        }
                    </Container>
                </React.Fragment>
                :
                <React.Fragment>
                    <div className={classes.social}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </div>
                    <div className={classes.message}>
                        <p>Free Shipping On Orders $65+</p>
                    </div>
                    <div className={classes.nav}>
                        <Container className={classes.list}  >
                            {session ?
                                <React.Fragment>
                                    <Container margin='0 2% 0 0' >
                                        <span className={classes.accountDivName} >
                                            {`Hi ${user.firstName ? user.firstName : ''}`}
                                        </span>
                                        <div className={classes.AccountInnerDiv} >
                                            <span onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                                                <Link href={`/account`} ><a onClick={handleOnClick}>Account &amp; Lists</a></Link>{``}</span>
                                            <ArrowDropDownIcon />
                                        </div>
                                    </Container>
                                    <Container padding='0 1rem'><a href='/' onClick={() => signOut()}>Log Out</a></Container>
                                </React.Fragment>
                                : <Container padding='0 1rem'><li><Link href={`/login `}><a>Login</a></Link></li></Container>
                            }
                        </Container>
                    </div>
                    {open && <div className={classes.expandedMenu} onMouseOver={handleMenuIn} onMouseOut={handleMouseOut}>
                        <Container display='flex' width='100%' flexWrap='wrap' flexDirection='column' color='black'>
                            <ul className={classes.listCol}>
                                <li><Link href={`/account`} ><a>Account</a></Link></li>
                                <li>Wishlist</li>
                            </ul>
                        </Container>
                    </div>
                    }
                </React.Fragment>
            }
        </Container>
    );
}

export default TopNav;