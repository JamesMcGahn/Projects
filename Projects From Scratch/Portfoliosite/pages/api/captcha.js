import axios from 'axios'

export default async function captcha(req, res) {
    const { method } = req



    switch (method) {
        case 'POST':
            try {
                const value = req.body.data.response
                // TODO PUT REAL KEY IN
                const captcha = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe&response=${value}`, {
                    headers: { "Content-Type": 'application/x-www-form-urlencoded' },
                })
                console.log(captcha.data.success)
                res.status(200).json({ success: true, captcha: captcha.data.success })

            } catch (err) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;

    }
}