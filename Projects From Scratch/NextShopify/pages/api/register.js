import { client, gql } from '../../utils/appolloClient'

export default async function register(req, res) {
    if (req.method == "POST") {

        const { firstName, lastName, email, password } = req.body;

        console.log(firstName, lastName, email, password)
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
        res.status(500).json({ message: 'Not valid' });
    }

}