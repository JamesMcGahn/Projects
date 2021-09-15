import React, { useContext } from 'react';
import Container from '../components/layout/Container'
import { ShopifyContext } from '../contexts/shopifyContext'
import { client, gql } from '../utils/appolloClient'
function Cart(props) {
    const { addedToCartItems, cart } = useContext(ShopifyContext)


    const handleCheckout = async () => {
        //TODO Make API


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

    return (
        <Container>
            <button onClick={handleCheckout}> Checkout</button>
        </Container>
    );
}

export default Cart;