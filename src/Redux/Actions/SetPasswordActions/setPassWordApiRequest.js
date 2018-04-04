import axios from "axios"
import qs from "qs"
module.exports = async function updatePasswordApiRequest(
  token,
  email,
  orgname,
  userName,
  password
) {
  try {
    let apiUrl = "http://localhost:5000/v1/scopemanagement/org/addmemberviainvite"
    // const apiUrl = `${process.env.AUTHENTICATION_URL}/updatepassword`
    let payload = qs.stringify({
      token: token,
      email: email,
      org_name: orgname,
      user_name: userName,
      password: password
    })
    let header = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        orgid: "5a17f863a5642b0c245aecca"
      }
    }
    let getData = await axios.post(apiUrl, payload, header)
    return getData
  } catch (e) {
    console.log("e", e.response)
    throw e
  }
}
