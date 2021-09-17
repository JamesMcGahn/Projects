import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { client, gql } from '../../../utils/appolloClient'
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

                    const { data } = await client.mutate({
                        mutation: gql`mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
                            customerAccessTokenCreate(input: $input) {
                              customerAccessToken {
                                accessToken
                                expiresAt
                              }
                              customerUserErrors {
                                code
                                field
                                message
                              }
                            }
                          }
                          `,
                        variables: input
                    })



                    if (data.customerAccessTokenCreate.customerUserErrors.length > 0) {
                        throw new Error('error message')
                    } else {
                        const token = data.customerAccessTokenCreate.customerAccessToken.accessToken
                        const encryptedToken = CryptoJS.AES.encrypt(`${token}`, `${process.env.TOKEN_SECRET}`).toString()
                        console.log('token as string', encryptedToken)
                        await dbConnect();
                        const user = await User.findOne({ email });
                        const { firstName, lastName } = user
                        user.token = encryptedToken
                        await user.save();
                        return { email: credentials.email, firstName: firstName, lastName: lastName }
                    }
                } catch (e) {
                    console.log(e)
                    throw new Error('error message')
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
    session: {
        jwt: true,
    },
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
    secret: process.env.CSRF_SECRET
})

