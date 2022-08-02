import React, { useContext, useState, useRef } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    social: {
        width: '33.3%',
        '& svg': {
            marginLeft: '.5rem'
        }
    },
    message: {
        width: '33.3%',
        textAlign: 'center',
        '& p': {
            margin: 0
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    nav: {
        width: '33.3%',
    },

    listCol: {
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        listStyle: 'none',
        '& li': {
            margin: '.2rem 0',
            width: '33.3%',
        }
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '0 2% 0 0',
        listStyle: 'none',
        '& li': {
            margin: ' 0 .5rem 0 .5rem'
        }
    },
    expandedMenu: {
        position: 'absolute',
        width: '30%',
        maxHeight: '200px',
        zIndex: 10,
        top: '9.1%',
        left: '70%',
        padding: '20px',
        border: '1px solid grey',
        backgroundColor: 'white',
        display: 'flex',
        boxShadow: '-3px 3px 5px rgba(0,0,0, 0.4)',
        animation: 'fadeIn 0.3s ease-in',
    },
    '@global': {
        "@keyframes fadeIn": {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1,
            }
        },
    },
    accountDivName: {
        fontSize: '.8rem',
        margin: '0 0 0 0'
    },
    accountDivItem: {
        display: 'block'
    },
    AccountInnerDiv: {
        margin: '0 0 0 0',
        display: 'flex',
        alignItems: 'center',
    }
}));


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
        <Container width='100%' background='black' minHeight='3vh' color='white' padding='.5rem' display='flex' alignItems='center' justifyContent='center'>
            {mobile ?
                <React.Fragment>
                    <Container width='33%'>

                    </Container>
                    <Container width='33%' textAlign='center'>
                        Beyond the Baselines
                    </Container>
                    <Container width='33%' textAlign='right'>
                        {session ?
                            <Container padding='0 1rem'><Link href='/'><a onClick={() => signOut()}>Log Out</a></Link></Container>
                            :
                            <Container padding='0 1rem'> <Link href={`/login`}><a>Log In</a></Link></Container>
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
                                    <Container padding='0 1rem'><Link href='/' passHref><a onClick={() => signOut()}>Log Out</a></Link></Container>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <Container padding='0 1rem'><li><Link href={`/login `}><a>Login</a></Link></li></Container>
                                    <Container padding='0'><li><Link href={`/register `}><a>Register</a></Link></li></Container>
                                </React.Fragment>
                            }
                        </Container>
                    </div>
                    {open && <div className={classes.expandedMenu} onMouseOver={handleMenuIn} onMouseOut={handleMouseOut}>
                        <Container display='flex' width='100%' flexWrap='wrap' flexDirection='column' color='black'>
                            <ul className={classes.listCol}>
                                <li><Link href={`/account`} ><a>Account</a></Link></li>
                                <li><Link href={`/account/wishlist`} ><a>Wishlist</a></Link></li>
                                <li><Link href={`/account/history`} ><a>History</a></Link></li>
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