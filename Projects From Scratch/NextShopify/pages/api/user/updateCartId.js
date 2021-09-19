import dbConnect from "../../../utils/dbConnect";
import User from "../../../Models/User"
import { getSession } from 'next-auth/client'

const register = async (req, res) => {
    const session = await getSession({ req })
    if (req.method == "POST" && session) {
        const { email, cartId } = req.body;
        try {
            console.log(req.body)
            await dbConnect();
            const user = await User.findOne({ email });
            user.cartId = cartId;
            await user.save();
            console.log('update', user)
            return res.status(200).json({ success: true, errors: false })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, errors: true, })
        }
    }
    else {
        res.status(500).json({ success: false, errors: true, message: 'Not A Valid Request' });
    }

}
export default register
