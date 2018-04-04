import axios from "axios"
import qs from "qs"
module.exports = async function updatePasswordApiRequest(emailid, password) {
  try {
    let apiUrl = `${process.env.AUTHENTICATION_URL}/updatepassword`
    let payload = qs.stringify({
      email: emailid,
      password: password
    })
    let header = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
    let getData = await axios.post(apiUrl, payload, header)
    return getData
  } catch (e) {
    throw e
  }
}
