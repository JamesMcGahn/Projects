import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { client, gql } from '../../../utils/appolloClient'
import { getCustomerToken } from '../../../utils/graphQLQueries'
import dbConnect from "../../../utils/dbConnect";
import User from "../../../Models/User"
import CryptoJS from 'crypto-js'

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Login",
            credentials: {
                email: { label: "email", type: "text", placeholder: "" },
                password: { label: "password", type: "password", placeholder: "" }
            },

            async authorize(credentials, req) {
                const email = credentials.email
                try {
                    const input = {
                        "input": {
                            "email": `${email}`,
                            "password": `${credentials.password}`,
                        }
                    }
                    const getCustomerTokenSchema = getCustomerToken()
                    const { data } = await client.mutate({
                        mutation: gql`${getCustomerTokenSchema}`,
                        variables: input
                    })
                    if (data.customerAccessTokenCreate.customerUserErrors.length > 0) {
                        throw new Error('error')
                    } else {
                        const token = data.customerAccessTokenCreate.customerAccessToken.accessToken
                        console.log('this is the token', token)

                        const encryptedToken = CryptoJS.AES.encrypt(`${token}`, `${process.env.TOKEN_SECRET}`)
                        await dbConnect();
                        const user = await User.findOne({ email });
                        const { firstName, lastName } = user
                        user.token = encryptedToken
                        await user.save();
                        return { email: email, name: `${firstName} ${lastName}` }
                    }
                } catch (e) {
                    console.log(e)
                    throw new Error('error')
                }
            }
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '',
        error: '/login',
        newUser: null
    },
    callbacks: {

    },
    session: {
        jwt: true,
    },
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
    secret: process.env.CSRF_SECRET
})

