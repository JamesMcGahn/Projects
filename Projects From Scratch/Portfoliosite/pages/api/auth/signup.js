import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User.js"

export default async (req, res) => {
    console.log('hitting route')

    if (req.method == "POST") {
        const { username, password } = req.body;
        await dbConnect();

        console.log('this is getting hit')

        const userFound = await User.findOne({ username });
        if (userFound) {
            return res.status(500).json({ success: 'User Already Exists' })
        }

        const user = new User({ username, password })
        await user.save();
        return res.status(400).json({ success: 'true' })
    }
    else {
        res.status(500).json({ message: 'Not valid' });
    }

}