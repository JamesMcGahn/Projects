import dbConnect from "../../../utils/dbConnect";
import User from "../../../Models/User"
import CryptoJS from 'crypto-js'
import { getSession } from 'next-auth/client'

const user = async (req, res) => {
    const session = await getSession({ req })

    console.log('hit')
    if (req.method == "GET" && session) {
        const email = req.query.email;
        try {
            await dbConnect();
            const user = await User.findOne({ email });

            const token = CryptoJS.AES.decrypt(user.token, `${process.env.TOKEN_SECRET}`).toString(CryptoJS.enc.Utf8)

            if (user.history && user.history.length > 30) {
                const copyofHistory = user.history
                const slimmedHistory = copyofHistory.filter((item, index) => index <= 30)
                user.history = slimmedHistory
                await user.save()
            }

            const data = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                token: token,
                cartId: user.cartId ? user.cartId : null,
                history: user.history ? user.history : null,
            }


            return res.status(200).json({ success: true, errors: false, data: data })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    } else if (req.method === 'PUT' && session) {
        const email = req.body.email
        try {
            await dbConnect();
            const updateData = req.body
            delete updateData.email
            console.log(updateData)
            console.log(email)

            if (req.body?.history) {
                const data = await User.findOneAndUpdate({ email: email }, { $push: { history: { $each: [req.body.history], $position: 0 } } })
            } else {
                const data = await User.findOneAndUpdate({ email: email }, updateData)
            }
            return res.status(200).json({ success: true, errors: false, data: [] })

        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }


    }
    else {
        res.status(500).json({ success: false, errors: true, message: 'Not A Valid Request' });
    }
}
export default user
