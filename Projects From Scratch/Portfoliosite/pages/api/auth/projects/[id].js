import dbConnect from "../../../../utils/dbConnect"
import Project from "../../../../models/Project"



export default async (req, res) => {
    const {
        query: { id },
        method
    } = req

    const session = await getSession({ req })
    if (session) {
        await dbConnect();

        switch (method) {
            case 'PUT':
                try {
                    const project = await Project.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
                    if (!project) return res.status(400).json({ success: false })
                    res.status(200).json({ success: true, data: project })
                } catch (err) {
                    res.status(400).json({ success: false })
                }
                break;
            case 'DELETE':
                try {
                    const project = await Project.deleteOne({ _id: id })
                    if (!project) return res.status(400).json({ success: false })
                    res.status(200).json({ success: true, data: project })
                } catch (err) {
                    res.status(400).json({ success: false })
                }
                break;
            default:
                res.status(400).json({ success: false })
                break;
        }
    } else {

        return res.status(401).json({ success: false })
    }
}