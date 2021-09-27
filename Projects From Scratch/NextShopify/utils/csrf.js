import CryptoJS from 'crypto-js'
const crsf = async (req, res) => {
    if (!req.headers.cookie) return false
    if (!req?.headers['xsrf-token']) return false
    try {
        const secret = process.env.CSRF_SECRET
        const headerCookie = req.headers.cookie
        const cookieValue = (/^__Host-next-auth.csrf-token=([A-Za-z0-9]+(%7C|\|)[A-Za-z0-9]+)|next-auth.csrf-token=([A-Za-z0-9]+(%7C|\|)[A-Za-z0-9]+)/).exec(headerCookie)
        const cookieSplitKey = cookieValue[1].includes("|") ? "|" : "%7C";
        const [csrfTokenValue, csrfTokenHash] = cookieValue[1].split(cookieSplitKey)

        const reqToken = req.headers['xsrf-token']

        const createdHash = CryptoJS.SHA256(`${reqToken}${secret}`).toString(CryptoJS.enc.Hex)

        if (csrfTokenHash === createdHash && csrfTokenValue === reqToken) {
            return true
        }
    } catch (err) {
        return false
    }
}

export default crsf