import { client, gql } from '../../../utils/appolloClient'
import { updateCartBuyer, createCustomer } from '../../../utils/graphQLQueries'
import csrf from '../../../utils/csrf';
import dbConnect from "../../../utils/dbConnect";
import User from "../../../Models/User"

const register = async (req, res) => {
    const validateCSRF = await csrf(req, res)
    if (req.method == "POST" && validateCSRF) {
        const { firstName, lastName, email, password, cartId, history } = req.body;
        try {
            const input = {
                "input": {
                    "email": `${email}`,
                    "password": `${password}`,
                    "firstName": `${firstName}`,
                    "lastName": `${lastName}`,
                }
            }
            const createCustomerSchema = createCustomer()
            const { data } = await client.mutate({
                mutation: gql`${createCustomerSchema}`,
                variables: input
            })
            if (data.customerCreate.customerUserErrors.length === 0) {

                await dbConnect();
                const isUser = await User.findOne({ email });
                if (isUser) {
                    return res.status(500).json({ success: 'User Already Exists' })
                }

                const user = new User({ email, firstName, lastName, cartId, history })
                await user.save();

                const customer = { email: email }

                if (cartId) {
                    try {
                        const updateCartBuyerSchema = updateCartBuyer()
                        const updateFields = {
                            "cartId": `${cartId}`,
                            "buyerIdentity": {
                                "email": `${email}`,
                            }
                        }
                        const cartUpdate = await client.mutate({
                            mutation: gql`${updateCartBuyerSchema}`,
                            variables: updateFields
                        })
                        return res.status(200).json({ success: true, errors: false, data: customer })
                    }
                    catch (e) {
                        console.log(e)
                        return res.status(200).json({ success: true, errors: false, data: customer })
                    }
                }
                return res.status(200).json({ success: true, errors: false, data: customer })

            } else {
                return res.status(200).json({ success: true, errors: true, data: data })
            }



        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: 'false' })
        }
    }
    else {
        res.status(500).json({ message: 'Not A Valid Request' });
    }

}
export default register
