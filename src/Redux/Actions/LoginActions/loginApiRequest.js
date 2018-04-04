import axios from "axios"
import qs from "qs"
module.exports = async function loginApiRequest(emailid, password) {
  try {
    let apiUrl = `${process.env.AUTHENTICATION_URL}/token`
    let payload = qs.stringify({
      username: emailid,
      grant_type: "password",
      password: password
    })
    let header = {
      headers: {
        Authorization: "Basic d2ViYXBwOllYSnFkVzQ2YUdWdGNtcGhZVzVw",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
    let getData = await axios.post(apiUrl, payload, header)
    return getData
  } catch (e) {
    throw e
  }
}
