import { client, gql } from '../../../utils/appolloClient'
import { getCustomerCart, } from '../../../utils/graphQLQueries'
// 
const getCart = async (req, res) => {
    if (req.method == "GET") {
        const cartId = req.query.cartId
        try {
            const getCartSchema = getCustomerCart(cartId)
            const cart = await client.query({
                query: gql`${getCartSchema}`,
            })
            const carts = cart.data.cart
            return res.status(200).json({ success: true, errors: false, data: carts })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }

    }
    else {
        res.status(500).json({ success: false, errors: true, message: 'Not A Valid Request' });
    }

}
export default getCart