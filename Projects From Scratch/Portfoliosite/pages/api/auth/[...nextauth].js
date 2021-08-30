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
            async authorize(credentials, req) {

                try {
                    // Add logic here to look up the user from the credentials supplied
                    await dbConnect();
                    console.log(credentials.username, 'username', credentials.password), 'pwass';
                    const username = credentials.username;
                    const userFound = await User.findOne({ username });
                    console.log(userFound.password)
                    if (!userFound) {
                        throw new Error('Username doesnt exist')
                    }
                    const valid = await bcrypt.compare(credentials.password, userFound.password)
                    if (valid) {
                        // Any object returned will be saved in `user` property of the JWT
                        console.log('success')
                        return { email: username }
                    } else {
                        // If you return null or false then the credentials will be rejected
                        console.log('fail')
                        return '/'
                        // You can also Reject this callback with an Error or with a URL:
                        // throw new Error('error message') // Redirect to error page
                        // throw '/path/to/redirect'        // Redirect to a URL
                    }
                } catch (e) {
                    console.log(e)
                }

            }

        }),
    ],
    session: {
        jwt: true
    }
})