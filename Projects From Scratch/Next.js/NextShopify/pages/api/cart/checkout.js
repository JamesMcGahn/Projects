import { client, gql } from '../../../utils/appolloClient'

const checkout = async (req, res) => {
    if (req.method == "GET") {
        const cartId = req.query.cartId
        try {
            const { data } = await client.query({
                query: gql`query checkoutURL {
                        cart(id: "${cartId}") {
                         checkoutUrl
                                }
                             }`,
            });
            const checkout = data.cart.checkoutUrl
            return res.status(200).json({ success: true, errors: false, data: checkout })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }
    else {
        res.status(500).json({ message: 'Not A Valid Request' });
    }

}


export default checkout







