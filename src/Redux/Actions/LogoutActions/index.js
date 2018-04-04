import * as types from "../../Constants/LogoutConstants"
import { push } from "react-router-redux"
import logoutApiRequest from "./logoutApiRequest"

export const userSignOut = () => {
  return async dispatch => {
    try {
      let response = await logoutApiRequest()
       localStorage.removeItem("techforce-accessToken")
       localStorage.removeItem("techforce-refreshToken")
       localStorage.removeItem("login_time_stamp")
       localStorage.removeItem("user_id")
       localStorage.removeItem("org_id")
       localStorage.removeItem("secret")
       localStorage.removeItem("track_id")
       localStorage.removeItem("Org_Name")
       localStorage.removeItem("Org_Idak")
      dispatch(push("/"))
    } catch (e) {
      console.log(e)
    }
  }
}
