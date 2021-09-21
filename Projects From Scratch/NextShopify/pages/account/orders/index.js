import React, { useState, useContext, useEffect } from 'react';
import Container from '../../../components/layout/Container'
import { useSession } from "next-auth/client"
import { UserContext } from '../../../contexts/userContext'
import { makeStyles } from '@material-ui/core/styles';

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

    //TODO: Please Login in to see Component
    //TODO: Loading Comp

    return (
        <Container width='100%' display='flex' flexDirection='column' padding="0 1rem">
            {session && user.token ?

                !dataLoading && orders ?
                    <Container width="100%">
                        {
                            orders.edges.map(ord => {
                                console.log(ord)
                                const order = ord.node
                                const orderDate = new Date(order.processedAt).toLocaleDateString('en-US', {})
                                return (
                                    <Container display='flex' alignItems="center" key={order.orderNumber} borderBottom="1px solid black" padding="0.5rem" width="100%">
                                        <Container width='10%' >
                                            {order.orderNumber}
                                        </Container>
                                        <Container display='flex' width='10%' flexDirection='column' padding="0 1rem">
                                            <span className={classes.lineItem}>{`${order.financialStatus.replace('_', ' ')}`}</span>
                                        </Container>
                                        <Container display='flex' width='15%' flexDirection='column' padding="0 1rem">
                                            <span className={classes.lineItem}>{`${order.fulfillmentStatus.replace('_', ' ')}`} </span>
                                        </Container>
                                        <Container display='flex' width='20%' flexDirection='column' padding="0 1rem">
                                            <span className={classes.lineItem}>{`${orderDate}`}</span>
                                        </Container>
                                    </Container>
                                )
                            })
                        }
                    </Container>
                    :
                    <Container>
                        <h1>loading</h1>
                    </Container>
                :
                <Container>
                    <h1>Please Log In to See your orders</h1>
                </Container>
            }
        </Container>
    );
}

export default Orders;