import axios from "axios"

module.exports = async function logoutApiRequest() {
  try {
    let apiUrl = `${process.env.AUTHENTICATION_URL}/signout`
    let header = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("techforce-accessToken")
      }
    }
    let getData = await axios.get(apiUrl, header)
    return getData
  } catch (e) {
    throw e
  }
}
