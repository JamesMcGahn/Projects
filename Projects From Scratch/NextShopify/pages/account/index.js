import React from 'react';
import { useSession } from "next-auth/client"
import Container from '../../components/layout/Container'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import LoginToSee from '../../components/sections/LoginToSee'

const useStyles = makeStyles((theme) => ({
    tileDiv: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        margin: '3rem 0',
        '& :hover': {
            backgroundColor: '#1d1d1d',
            cursor: 'pointer',
            '& h6': {
                color: 'white'
            }

        },
    },
    accountItem: {
        width: '20%',
        padding: '.5rem 0',
        border: '1px solid black',
        backgroundColor: '#CBB682',
        display: 'flex',
        marginRight: '10px',
        marginBottom: '10px',
        justifyContent: 'center',
        boxShadow: '2px 2px 5px rgba(0,0,0, 0.8)',
        '& h6': {
            fontSize: '1.1rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '33%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '45%',
        }

    },
}));

function Account(props) {
    const [session, loading] = useSession()
    const classes = useStyles();


    return (
        <Container display="flex" width="100%" alignItems="flex-start" justifyContent="center" minHeight="80vh" background='#494949'>
            {session ?
                <Container className={classes.tileDiv}>
                    <Link href='/account/orders'><a className={classes.accountItem}><h6>Orders</h6></a></Link>
                    <Link href='/account/'><a className={classes.accountItem}><h6>Profile</h6></a></Link>
                    <Link href='/account/history'><a className={classes.accountItem}><h6>History</h6></a></Link>
                    <Link href='/account/'><a className={classes.accountItem}><h6>Addresses</h6></a></Link>
                    <Link href='/account/wishlist'><a className={classes.accountItem}><h6>Wishlist</h6></a></Link>
                    <Link href='/account/'><a className={classes.accountItem}><h6>Update Password</h6></a></Link>
                    <Link href='/reset'><a className={classes.accountItem}><h6>Reset Password</h6></a></Link>
                </Container>
                :
                <div>
                    <LoginToSee title='Log In To View Your Account' message="It doesn't appear that you are logged in. Please Log in to view your Account." />
                </div>
            }
        </Container >
    );
}

export default Account;