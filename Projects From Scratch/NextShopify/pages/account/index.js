import React from 'react';
import { useSession } from "next-auth/client"
import Container from '../../components/layout/Container'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

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
            backgroundColor: '#A08C5B',
            cursor: 'pointer'
        },
    },
    accountItem: {
        width: '20%',
        padding: '.5rem 0',
        border: '1px solid black',
        backgroundColor: 'white',
        display: 'flex',
        marginRight: '10px',
        marginBottom: '10px',
        justifyContent: 'center',
        boxShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)',
        '& h6': {
            fontSize: '1.1rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '33%',
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
                    <Link href='/account/'><a className={classes.accountItem}><h6>History</h6></a></Link>
                    <Link href='/account/'><a className={classes.accountItem}><h6>Addresses</h6></a></Link>
                    <Link href='/account/'><a className={classes.accountItem}><h6>Update Password</h6></a></Link>
                    <Link href='/account/'><a className={classes.accountItem}><h6>Reset Password</h6></a></Link>

                </Container>
                :
                <Container>
                </Container>
            }
        </Container >
    );
}

export default Account;