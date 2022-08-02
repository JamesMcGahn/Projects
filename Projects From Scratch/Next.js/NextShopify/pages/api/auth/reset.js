import { client, gql } from '../../../utils/appolloClient'
import csrf from '../../../utils/csrf';


const register = async (req, res) => {
    const validateCSRF = await csrf(req, res)
    if (req.method == "POST" && validateCSRF) {
        const { email } = req.body;
        try {
            // const createCustomerSchema = createCustomer()
            const { data } = await client.mutate({
                mutation: gql`mutation sendPasswordRecoverEmail {
                    customerRecover(email: "${email}") {
                    customerUserErrors { 
                            code field message }
                        }
                    }`,

            })
            if (data.customerRecover.customerUserErrors.length > 0) {
                return res.status(200).json({ success: true, errors: true, data: data })
            }
            return res.status(200).json({ success: true, errors: false, data: data })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }
    else if (req.method == "PUT" && validateCSRF) {
        const { password, url } = req.body;
        try {
            // const createCustomerSchema = createCustomer()
            console.log(req.body.url)
            const input = {
                "resetUrl": url,
                "password": password,
            }

            const { data } = await client.mutate({
                mutation: gql`mutation resetPasswordByUrl($resetUrl: URL!, $password: String!) {
                    customerResetByUrl(resetUrl: $resetUrl, password: $password) {          
                    customerUserErrors { code field message}
                    }
                    }`,
                variables: input

            })
            console.log(data)
            if (data.customerResetByUrl.customerUserErrors.length > 0) {
                return res.status(200).json({ success: true, errors: true, data: data })
            }
            return res.status(200).json({ success: true, errors: false, data: data })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }
    else {
        res.status(500).json({ message: 'Not A Valid Request' });
    }

}
export default register