import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User.js"


export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Login",
            credentials: {
                username: { label: "email", type: "text", placeholder: "" },
                password: { label: "password", type: "password", placeholder: "" }
            },

            async authorize(credentials, req) {
                try {


                } catch (e) {
                    console.log(e)
                    return null
                }
            }
        }),
    ],
    callbacks: {
        // async signIn(user, account, profile,) {
        //     const isAllowedToSignIn = user.email === process.env.LOGIN
        //     if (isAllowedToSignIn) {
        //         return true
        //     } else {
        //         return false
        //     }
        // },
    },
    pages: {
        signIn: '',
        signOut: '',
        error: '',
    },
    session: {
        jwt: true,
    },
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
})

