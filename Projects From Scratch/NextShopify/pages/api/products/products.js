import { client, gql } from '../../../utils/appolloClient'
import { getAddtlProducts, } from '../../../utils/graphQLQueries'

const getCollections = async (req, res) => {
    if (req.method == "GET") {
        try {
            const { id } = req.query
            const loadMore = getAddtlProducts(id)
            const { data } = await client.query({
                query: gql`${loadMore}`,
            });
            const newProducts = data.products.edges
            const moreToLoad = data.products.pageInfo.hasNextPage

            return res.status(200).json({ success: true, errors: false, data: { products: newProducts, hasNextPage: moreToLoad } })
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