import axios from 'axios'
import { csrf } from '../../lib/csrf';

const mail = async (req, res) => {
    const { method } = req

    switch (method) {
        case 'POST':
            try {
                const value = req.body.form
                const token = process.env.MAILER_TOKEN
                const user = process.env.MAILER_USER
                const service = process.env.MAILER_SERVICE
                const mailer = await axios.post('https://api.emailjs.com/api/v1.0/email/send',
                    {
                        service_id: `${service}`,
                        template_id: 'template_6qk0m3v',
                        user_id: `${user}`,
                        accessToken: `${token}`,
                        template_params: value
                    }
                )
                res.status(200).json({ success: true, mailer: mailer.status })

            } catch (err) {
                console.log(err)
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;

    }
}

export default csrf(mail)