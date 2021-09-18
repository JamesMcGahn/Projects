import dbConnect from "../../../utils/dbConnect";
import User from "../../../Models/User"
import CryptoJS from 'crypto-js'
import { getSession } from 'next-auth/client'

const register = async (req, res) => {
    const session = await getSession({ req })
    if (req.method == "GET" && session) {
        const email = req.query.email;

        try {
            await dbConnect();
            const user = await User.findOne({ email });

            const token = CryptoJS.AES.decrypt(user.token, `${process.env.TOKEN_SECRET}`).toString(CryptoJS.enc.Utf8)

            const data = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                token: token,
            }

            return res.status(200).json({ success: true, errors: false, data: data })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false })
        }
    }
    else {
        res.status(500).json({ message: 'Not A Valid Request' });
    }

}
export default register
