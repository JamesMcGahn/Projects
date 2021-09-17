import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { client, gql } from '../../../utils/appolloClient'

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Login",
            credentials: {
                email: { label: "email", type: "text", placeholder: "" },
                password: { label: "password", type: "password", placeholder: "" }
            },

            async authorize(credentials, req) {
                console.log('hi')
                try {
                    const input = {
                        "input": {
                            "email": `${credentials.email}`,
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
                    console.log(data.customerAccessTokenCreate.customerAccessToken)
                    console.log(data.customerAccessTokenCreate.customerUserErrors)
                    if (data.customerAccessTokenCreate.customerUserErrors.length > 0) {
                        return '/'
                    }
                } catch (e) {
                    console.log(e)
                    return null
                }
            }
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '',
    },
    session: {
        jwt: true,
    },
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
})

