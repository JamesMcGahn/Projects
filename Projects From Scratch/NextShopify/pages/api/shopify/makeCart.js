import { client, gql } from '../../../utils/appolloClient'
import csrf from '../../../utils/csrf';
import { createCart } from '../../../utils/graphQLQueries'

const makeCart = async (req, res) => {
    const validateCSRF = await csrf(req, res)
    if (req.method == "POST" && validateCSRF) {
        const { merchId, qty, accessToken, email } = req.body
        try {
            const addedItems = accessToken ?
                {
                    "cartInput": {
                        "lines": [
                            {
                                "quantity": qty,
                                "merchandiseId": `${merchId}`
                            }
                        ],
                        "buyerIdentity": {
                            "customerAccessToken": `${accessToken}`,
                            "email": `${email}`
                        }
                    }
                }
                :
                {
                    "cartInput": {
                        "lines": [
                            {
                                "quantity": qty,
                                "merchandiseId": `${merchId}`
                            }
                        ],
                    }
                }






            const cartschema = createCart()
            const carts = await client.mutate({
                mutation: gql`${cartschema}`,
                variables: addedItems
            })
            const cartData = carts.data.cartCreate.cart
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
export default makeCart
