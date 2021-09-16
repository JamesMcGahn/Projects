import React, { useContext } from 'react';
import Container from '../components/layout/Container'
import { ShopifyContext } from '../contexts/shopifyContext'
import { client, gql } from '../utils/appolloClient'
import { makeStyles } from '@material-ui/core/styles';
import MainButton from '../components/ui/MainButton'

const useStyles = makeStyles((theme) => ({
    lineImage: {
        width: '100%',
    }
}));


function Cart(props) {
    const { addedToCartItems, cart } = useContext(ShopifyContext)
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

    console.log(cart)

    return (
        <Container padding="1.5rem">


            <Container >
                <Container width="80%" flexDirection="column" padding="1rem">
                    <Container>
                        <h1>Shopping Cart</h1>
                    </Container>
                    <Container width='100%' flexDirection="column">
                        {!cart ? <h1>add some items</h1> :

                            cart.lines.edges.map(line => {
                                return (
                                    <Container alignItems="center" key={line.node.id} borderBottom="1px solid black" padding="0.5rem">
                                        <Container width='15%' >
                                            <img className={classes.lineImage} src={line.node.merchandise.product.images.edges[0].node.originalSrc} alt={line.node.merchandise.sku} />
                                        </Container>
                                        <Container width='75%' flexDirection='column' padding="0 1rem">
                                            <Container>
                                                <span>{line.node.merchandise.product.title}</span>
                                            </Container>
                                            <Container>
                                                Brand: {line.node.merchandise.product.vendor}
                                                Variant: {line.node.merchandise.title}
                                                SKU:  {line.node.merchandise.sku}
                                            </Container>
                                            <Container>
                                                Qty {line.node.quantity}
                                            </Container>
                                        </Container>
                                        <Container width='10%' padding="0 1rem" justifyContent="flex-end">
                                            <Container>
                                                {`$${line.node.merchandise.priceV2.amount}`}
                                            </Container>
                                        </Container >
                                    </Container>
                                )
                            })}
                    </Container>
                    {!cart ? null :
                        <Container justifyContent="flex-end" padding="0 1.9rem" width="100%">
                            <h4>{`Subtotal: $${cart.estimatedCost.subtotalAmount.amount}`}</h4>
                        </Container>
                    }
                </Container>
                {!cart ? null :
                    <Container width='20%' flexDirection='column'>
                        <Container border="1px solid black" padding="1rem" minHeight="150px" flexDirection="column">
                            <Container>
                                <span> {`Subtotal (${cart.lines.edges.length}  ${cart.lines.edges.length > 1 ? `Items` : `Item`}): $${cart.estimatedCost.subtotalAmount.amount}`}</span>
                            </Container>
                            <Container width="100%" padding="1rem" flexDirection="column">
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