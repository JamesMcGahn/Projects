import { client, gql } from '../../../utils/appolloClient'
import csrf from '../../../utils/csrf';
import { addLineToCart, updateCart } from '../../../utils/graphQLQueries'

const cartLines = async (req, res) => {
    const validateCSRF = await csrf(req, res)
    if (req.method == "POST" && validateCSRF) {
        const { cartId, qty, merchId } = req.body
        try {
            const addedItems = {
                "cartId": `${cartId}`,
                "lines": [
                    {
                        "quantity": qty,
                        "merchandiseId": `${merchId}`
                    }
                ],
            }
            const addLineCartSchema = addLineToCart()
            const carts = await client.mutate({
                mutation: gql`${addLineCartSchema}`,
                variables: addedItems
            })
            const cartData = carts.data.cartLinesAdd.cart

            return res.status(200).json({ success: true, errors: false, data: cartData })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: 'false' })
        }
    }
    else if (req.method == "PUT" && validateCSRF) {
        const { cartId, lineId, qty, merchId } = req.body
        try {
            const updateCartScema = updateCart()
            const updatedItems = {
                "cartId": `${cartId}`,
                "lines": [
                    {
                        "id": `${lineId}`,
                        "quantity": qty,
                        "merchandiseId": `${merchId}`
                    }
                ]
            }
            const carts = await client.mutate({
                mutation: gql`${updateCartScema}`,
                variables: updatedItems
            })
            const cartData = carts.data.cartLinesUpdate.cart
            return res.status(200).json({ success: true, errors: false, data: cartData })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: 'false' })
        }
    }
    else {
        res.status(500).json({ message: 'Not A Valid Request' });
    }
}
export default cartLines
