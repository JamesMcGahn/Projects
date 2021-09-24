import { client, gql } from '../../../utils/appolloClient'
import { productReccommendations, } from '../../../utils/graphQLQueries'

const getCollections = async (req, res) => {
    if (req.method == "GET") {
        try {
            const { id } = req.query
            const productReccommendationsSchema = productReccommendations(id)
            const products = await client.query({
                query: gql`${productReccommendationsSchema}`
            })
            const data = products.data.productRecommendations

            return res.status(200).json({ success: true, errors: false, data: data })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }
    else {
        res.status(500).json({ success: false, errors: true, message: 'Not A Valid Request' });
    }

}
export default getCollections
