import dbConnect from "../../../../utils/dbConnect"
import Project from "../../../../models/Project"
import { getSession } from "next-auth/client"

export default async (req, res) => {
    const { method } = req
    const session = await getSession({ req })
    if (session) {
        await dbConnect()
        switch (method) {
            case 'POST':
                try {
                    const project = await Project.create(req.body)
                    res.status(201).json({ success: true, data: project })
                } catch (err) {
                    res.status(400).json({ success: false })
                }
                break;
            default:
                res.status(400).json({ success: false })
                break;
        }
    } else {
        res.status(401).json({ message: "Access Denied" })
    }
}