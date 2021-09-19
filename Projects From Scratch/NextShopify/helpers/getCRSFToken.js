import axios from 'axios'
export const getCRSFToken = async () => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/csrf`)
    const { csrfToken } = data
    return csrfToken
  } catch (e) {
    console.log(e)
  }
}
