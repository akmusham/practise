import axios from "axios"
import { push } from "react-router-redux"
module.exports = async function authenticateApiRequest(state = true) {
  try {
    let apiUrl = `${process.env.AUTHENTICATION_URL}/authenticate`
    let header = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("techforce-accessToken"),
        "Content-Type": "application/json"
      }
    }
    let getData = await axios.get(apiUrl, header)
    return getData
  } catch (e) {
    throw e
  }
}
