import dbConnect from "../../../utils/dbConnect";
import User from "../../../Models/User"
import CryptoJS from 'crypto-js'
import { getSession } from 'next-auth/client'

const saveForLater = async (req, res) => {
    const session = await getSession({ req })
    if (req.method === 'PUT' && session) {
        const email = req.body.email
        try {
            await dbConnect();
            const updateData = req.body
            delete updateData.email

            if (req.body?.saveForLater) {
                const update = req.body.saveForLater
                const data = await User.findOneAndUpdate({ email: email }, { $push: { saveForLater: { $each: [update], $position: 0 } } })
                return res.status(200).json({ success: true, errors: false, data: [] })
            }
            else {
                const data = await User.findOneAndUpdate({ email: email }, updateData)
                return res.status(200).json({ success: true, errors: false, data: [] })
            }


        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }
    else if (req.method === 'DELETE' && session) {
        const email = req.body.email
        try {
            await dbConnect();
            const updateData = req.body
            delete updateData.email

            if (req.body?.id) {
                const id = req.body.id
                const data = await User.findOneAndUpdate({ email: email }, { $pull: { saveForLater: { id: id } } })
                return res.status(200).json({ success: true, errors: false, data: [] })
            }
            else {
                const data = await User.findOneAndUpdate({ email: email }, updateData)
                return res.status(200).json({ success: true, errors: false, data: [] })
            }


        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }
    else {
        res.status(500).json({ success: false, errors: true, message: 'Not A Valid Request' });
    }
}
export default saveForLater