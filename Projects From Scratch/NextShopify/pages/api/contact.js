import axios from 'axios'
import csrf from '../../utils/csrf';
export default async function mailer(req, res) {
    const validateCSRF = await csrf(req, res)
    if (req.method == "POST" && validateCSRF) {
        try {
            const value = req.body.form
            const token = process.env.MAILER_TOKEN
            const user = process.env.MAILER_USER
            const service = process.env.MAILER_SERVICE

            const mailer = await axios.post('https://api.emailjs.com/api/v1.0/email/send',
                {
                    service_id: `${service}`,
                    template_id: 'template_34drald',
                    user_id: `${user}`,
                    accessToken: `${token}`,
                    template_params: value
                }
            )
            res.status(200).json({ success: true, mailer: mailer.status })

        } catch (err) {
            res.status(400).json({ success: false })
            console.log(err)
        }
    } else {
        res.status(400).json({ success: false })

    }
}