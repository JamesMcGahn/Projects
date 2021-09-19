import { client, gql } from '../../../utils/appolloClient'
import { allCategories, } from '../../../utils/graphQLQueries'

const getCollections = async (req, res) => {
    if (req.method == "GET") {
        try {
            const categorySchema = allCategories()
            const categories = await client.query({
                query: gql`${categorySchema}`
            })
            const collectionsList = categories.data.collections.edges

            return res.status(200).json({ success: true, errors: false, data: collectionsList })
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
