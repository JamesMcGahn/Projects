import React, { useState, useContext, useEffect } from 'react';
import Container from '../../../components/layout/Container'
import { useSession } from "next-auth/client"
import { UserContext } from '../../../contexts/userContext'
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../../components/ui/Loading'
import PageTitle from '../../../components/ui/PageTitle'
import LoginToSee from '../../../components/sections/LoginToSee'
import Link from 'next/link'
import MainButton from '../../../components/ui/MainButton'

const useStyles = makeStyles((theme) => ({
    lineItem: {
        display: 'block',
        '& h6': {
            fontSize: '1.2rem',
            margin: '0'
        },
    }
}));

function Orders(props) {
    const [session, loading] = useSession()
    const { getOrdersData, orders, user } = useContext(UserContext)
    const [dataLoading, setDataLoading] = useState(false)
    const classes = useStyles();

    useEffect(() => {
        if (!orders && user.token) {
            setDataLoading(true)
            getOrdersData()
            console.log(orders)
            setDataLoading(false)
        }
    }, [session, user])


    return (
        <Container width='100%' display='flex' flexDirection='column' background='#1d1d1d' borderBottom='none' minHeight='80vh'
            alignItems='center' xsPadding='2rem 0'>

            {session && user.token ?

                !dataLoading && orders ?
                    <Container margin='1rem' width="65%" padding="1.5rem" background="#fff" boxShadow='2px 2px 5px rgba(0,0,0, 0.8)' smWidth='100%' xsPadding='1rem'>
                        <PageTitle title='Orders' />
                        <Container display='flex' alignItems="center" borderBottom="1px solid black" padding="0.5rem" width="100%">
                            <Container width='20%' xsWidth='33.3%'>
                                Order Number
                            </Container>
                            <Container display='flex' width='20%' flexDirection='column' padding="0 1rem" xsWidth='33.3%'>
                                <span className={classes.lineItem}>Order Date</span>
                            </Container>
                            <Container display='flex' width='20%' flexDirection='column' padding="0 1rem" xsDisplay='none'>
                                <span className={classes.lineItem}>Payment</span>
                            </Container>
                            <Container display='flex' width='20%' flexDirection='column' padding="0 1rem" xsWidth='33.3%'>
                                <span className={classes.lineItem}>Order Status </span>
                            </Container>
                            <Container display='flex' width='20%' flexDirection='column' padding="0 1rem" xsDisplay='none'>
                                <span className={classes.lineItem}>Total </span>
                            </Container>
                        </Container>

                        {
                            orders.edges.map(ord => {
                                console.log(ord)
                                const order = ord.node
                                const orderDate = new Date(order.processedAt).toLocaleDateString('en-US', {})
                                return (
                                    <Link href={`/account/order/${order.orderNumber}`} key={order.orderNumber} >
                                        <a>
                                            <Container display='flex' alignItems="center" borderBottom="1px solid black" padding="0.5rem" width="100%">
                                                <Container width='20%' xsWidth='33.3%'>
                                                    {order.orderNumber}
                                                </Container>
                                                <Container display='flex' width='20%' flexDirection='column' padding="0 1rem" xsWidth='33.3%'>
                                                    <span className={classes.lineItem}>{`${orderDate}`}</span>
                                                </Container>
                                                <Container display='flex' width='20%' flexDirection='column' padding="0 1rem" xsDisplay='none' >
                                                    <span className={classes.lineItem}>{`${order.financialStatus.replace('_', ' ')}`}</span>
                                                </Container>

                                                <Container display='flex' width='20%' flexDirection='column' padding="0 1rem" xsWidth='33.3%'>
                                                    <span className={classes.lineItem}>{`${order.fulfillmentStatus.replace('_', ' ')}`} </span>
                                                </Container>
                                                <Container display='flex' width='20%' flexDirection='column' padding="0 1rem" xsDisplay='none'>
                                                    <span className={classes.lineItem}>{`$ ${Number(order.totalPriceV2.amount).toFixed(2)}`} </span>
                                                </Container>
                                            </Container>
                                        </a>
                                    </Link>
                                )
                            })
                        }

                    </Container>
                    :
                    <Loading />
                :
                <div>
                    <LoginToSee title='Log In To View Your Orders' message="It doesn't appear that you are logged in. Please Log in to view your orders." />
                </div>
            }

            {session && user.token ? <Container>
                <Link href='/account'>
                    <a>
                        <MainButton backgroundColor='#CBB682' width="100%" hoverColor='white'>Back To Account</MainButton>
                    </a>
                </Link>
            </Container>
                : null
            }
        </Container>
    );
}

export default Orders;