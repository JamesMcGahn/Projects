import React, { useContext } from 'react';
import Container from '../components/layout/Container'
import { ShopifyContext } from '../contexts/shopifyContext'
import { client, gql } from '../utils/appolloClient'
import { makeStyles } from '@material-ui/core/styles';
import MainButton from '../components/ui/MainButton'

const useStyles = makeStyles((theme) => ({
    lineImage: {
        width: '100%',
    },
    lineItem: {
        display: 'block',
        '& h6': {
            fontSize: '1.2rem',
            margin: '0'
        },
    }
}));


function Cart(props) {
    const { cart, isCartLoading } = useContext(ShopifyContext)
    const classes = useStyles();

    const handleCheckout = async () => {
        //TODO Make API
        // TODO pull query out 

        const { data } = await client.query({
            query: gql`query checkoutURL {
            cart(id: "Z2lkOi8vc2hvcGlmeS9DYXJ0L2YxMzRlYzUyNGYwNDExYzU2ZDU3YTBlZDI3Zjg5M2Ri") {
                checkoutUrl
            }
        }`,
        });
        console.log(data)

        window.open(data.cart.checkoutUrl, '_blank', 'noopener,noreferrer')
    }

    // TODO remove item
    // TODO adjust quanity
    // FEATURE add save for later?
    // TODO add loading comp

    return (
        <Container padding="1rem">
            <Container display='flex' flexDirection='row' smFlexD='column'>
                <Container width="75%" flexDirection="column" padding="1rem" display='flex' margin='0 1.5rem 0 0' smWidth='100%'>
                    <Container>
                        <h1>Shopping Cart</h1>
                    </Container>
                    <Container width='100%' flexDirection="column" display='flex'>
                        {!cart ? isCartLoading ?
                            'loading'
                            : <h1>add some items</h1>
                            :
                            cart.lines.edges.map(line => {
                                const lineAmount = line.node.merchandise.priceV2.amount
                                return (
                                    <Container display='flex' alignItems="center" key={line.node.id} borderBottom="1px solid black" padding="0.5rem">
                                        <Container width='15%' >
                                            <img className={classes.lineImage} src={line.node.merchandise.product.images.edges[0].node.originalSrc} alt={line.node.merchandise.sku} />
                                        </Container>
                                        <Container display='flex' width='60%' flexDirection='column' padding="0 1rem">
                                            <Container>
                                                <span className={classes.lineItem}><h6>{line.node.merchandise.product.title}</h6></span>
                                            </Container>
                                            <Container>
                                                <span className={classes.lineItem}>{`Brand: ${line.node.merchandise.product.vendor}`} </span>
                                                <span className={classes.lineItem}>{`Variant: ${line.node.merchandise.title}`}</span>
                                                <span className={classes.lineItem}>{`SKU:  ${line.node.merchandise.sku}`}</span>
                                            </Container>
                                        </Container>
                                        <Container display='flex' width='25%' padding="0 1rem" justifyContent="space-between" xsFlexD='column'>
                                            <Container xsMargin='0 0 5px 0'>
                                                <span className={classes.lineItem}>{`Qty: ${line.node.quantity}`}</span>
                                            </Container>
                                            <Container>
                                                <span className={classes.lineItem}> {`$${Number(lineAmount).toFixed(2)}`}</span>
                                            </Container>
                                        </Container >
                                    </Container>
                                )
                            })

                        }
                    </Container>
                    {!cart ? null :
                        <Container display='flex' justifyContent="flex-end" padding="0 1.9rem" width="100%">
                            <h4>{`Subtotal: $${Number(cart.estimatedCost.subtotalAmount.amount).toFixed(2)}`}</h4>
                        </Container>
                    }
                </Container>
                {!cart ? null :
                    <Container display='flex' width='20%' flexDirection='column' smWidth='100%'>
                        <Container display='flex' border="1px solid black" padding="1rem" minHeight="150px" flexDirection="column" justifyContent='center' alignItems='center'>
                            <Container>
                                <span> {`Subtotal (${cart.lines.edges.length}  ${cart.lines.edges.length > 1 ? `Items` : `Item`}): $${Number(cart.estimatedCost.subtotalAmount.amount).toFixed(2)}`}</span>
                            </Container>
                            <Container display='flex' width="100%" padding="1rem" flexDirection="column">
                                <MainButton backgroundColor="black" color="white" width="100%" onClick={handleCheckout}>Checkout</MainButton>
                            </Container>
                        </Container>
                    </Container>
                }
            </Container>


        </Container>
    );
}

export default Cart;