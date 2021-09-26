import dbConnect from "../../../utils/dbConnect";
import User from "../../../Models/User"
import { getSession } from 'next-auth/client'


const wishlist = async (req, res) => {
    const session = await getSession({ req })
    if (req.method === 'PUT' && session) {
        const email = req.body.email
        try {
            await dbConnect();
            const updateData = req.body
            delete updateData.email

            if (req.body?.wishList) {
                const update = req.body.wishList
                const data = await User.findOneAndUpdate({ email: email }, { $push: { wishList: { $each: [update], $position: 0 } } })
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
                const data = await User.findOneAndUpdate({ email: email }, { $pull: { wishList: { id: id } } })
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
export default wishlist