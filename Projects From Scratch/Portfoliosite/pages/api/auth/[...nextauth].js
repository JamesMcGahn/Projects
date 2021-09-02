import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User.js"
import bcrypt from 'bcrypt';

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Login",
            credentials: {
                username: { label: "email", type: "text", placeholder: "bob@bob.com" },
                password: { label: "password", type: "password", placeholder: "" }
            },
            pages: {
                signIn: '/dashboard/login',
                signOut: '/auth/signout',
                error: '/auth/error', // Error code passed in query string as ?error=
            },
            async authorize(credentials, req) {
                try {
                    await dbConnect();
                    console.log(credentials.username, 'username', credentials.password), 'pwass';
                    const username = credentials.username;
                    const userFound = await User.findOne({ username });

                    if (!userFound) {
                        throw new Error('Username doesnt exist')
                    }
                    const valid = await bcrypt.compare(credentials.password, userFound.password)
                    if (valid) {
                        return { email: username }
                    } else {
                        return '/'
                    }
                } catch (e) {
                    console.log(e)
                    return '/'
                }
            }
        }),
    ],
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async signIn(user, account, profile,) {
            const isAllowedToSignIn = user.email === process.env.LOGIN
            if (isAllowedToSignIn) {
                return true
            } else {
                return '/'
            }
        },
        async redirect(url, baseUrl) {
            return url.startsWith(baseUrl)
                ? '/dashboard'
                : baseUrl
        }
    }
})