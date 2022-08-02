import { client, gql } from '../../../utils/appolloClient'
import { getArticleExcerptsAdditional } from '../../../utils/graphQLQueries'

const blogs = async (req, res) => {
    if (req.method == "GET") {
        const cursor = req.query.cursor

        try {
            const blogAddtlSchema = getArticleExcerptsAdditional(cursor)
            const data = await client.query({
                query: gql`${blogAddtlSchema}`
            })
            const { articles } = data.data

            return res.status(200).json({ success: true, errors: false, data: articles })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }
    else {
        res.status(500).json({ success: false, errors: true, message: 'Not A Valid Request' });
    }
}
export default blogs