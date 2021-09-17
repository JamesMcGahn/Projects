import { client, gql } from '../../utils/appolloClient'
import csrf from '../../utils/csrf';
import dbConnect from "../../utils/dbConnect";
import User from "../../Models/User"

const register = async (req, res) => {
    const validateCSRF = await csrf(req, res)
    if (req.method == "POST" && validateCSRF) {
        const { firstName, lastName, email, password } = req.body;
        try {
            const input = {
                "input": {
                    "email": `${email}`,
                    "password": `${password}`,
                    "firstName": `${firstName}`,
                    "lastName": `${lastName}`,
                }
            }
            const { data } = await client.mutate({
                mutation: gql`mutation customerCreate($input: CustomerCreateInput!) {
                customerCreate(input: $input) {
                  customerUserErrors {
                    code
                    field
                    message
                  }
                  customer {
                    firstName  
                    id
                    email
                  }
                }
              }`,
                variables: input
            })
            console.log(data.customerCreate.customerUserErrors)
            console.log(data.customerCreate)
            if (data.customerCreate.customerUserErrors.length === 0) {
                await dbConnect();
                const isUser = await User.findOne({ email });
                if (isUser) {
                    return res.status(500).json({ success: 'User Already Exists' })
                }

                const user = new User({ email, firstName, lastName, })
                await user.save();
                return res.status(200).json({ success: true, errors: false, data: data })
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
