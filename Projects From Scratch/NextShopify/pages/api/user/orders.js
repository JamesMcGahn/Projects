import { client, gql } from '../../../utils/appolloClient'
import { getCustomerOrders } from '../../../utils/graphQLQueries'


const orders = async (req, res) => {
    if (req.method == "GET") {
        const token = req.query.token
        try {
            const customerOrdersSchema = getCustomerOrders(token)
            const data = await client.query({
                query: gql`${customerOrdersSchema}`,
            })
            console.log(data)
            const { orders } = data.data.customer
            console.log(orders)
            return res.status(200).json({ success: true, errors: false, data: orders })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }

    else {
        res.status(500).json({ message: 'Not A Valid Request' });
    }

}


export default orders