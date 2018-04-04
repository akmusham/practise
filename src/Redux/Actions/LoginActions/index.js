import * as types from "../../Constants/LoginConstants"
import { push } from "react-router-redux"
import loginApiRequest from "./loginApiRequest"
import refreshTokenApi from "./refreshTokenApi"
import resetPasswordApiRequest from "./resetPasswordApiRequest"
export const updateEmail = email => ({ type: types.UPDATE_EMAIL, email })
export const updatePassword = password => ({ type: types.UPDATE_PASSWORD, password })
export const updateResetEmail = resetEmail => ({ type: types.UPDATE_RESET_EMAIL, resetEmail })
export const userSignInSuccess = response => ({ type: types.USER_SIGNIN_SUCCESS, response })
export const showErrorDialog = (openErrorDialog, message) => ({
  type: types.SHOW_ERROR_DIALOG,
  openErrorDialog,
  message
})
export const showLostPasswordDialog = openLostPasswordDialog => ({
  type: types.SHOW_LOST_PASSWORD_DIALOG,
  openLostPasswordDialog
})
//Async Action
export const userSignIn = (emailid, password) => {
  return async dispatch => {
    try {
      let response = await loginApiRequest(emailid, password)

      if (!response.data.user.activated) {
        dispatch(showErrorDialog(true, "Please complete email verification to access the account"))
      } else {
        localStorage.setItem("techforce-refreshToken", response.data.refreshToken)
        localStorage.setItem("techforce-accessToken", response.data.accessToken)
        localStorage.setItem("user_id", response.data.user._id)
        localStorage.setItem("full_name", response.data.user.full_name)
        localStorage.setItem("company_name", response.data.user.company_name)
        localStorage.setItem("org_id", response.data.user._id)
        localStorage.setItem("track_id", response.data.user._id)
        localStorage.setItem("secret", response.data.user.secret)

        localStorage.setItem("email", emailid)
        if (!response.data.user.scope) {

        }else {
          localStorage.setItem("new_org_id", response.data.user.scope[0].org_id)
          localStorage.setItem("new_org_name", response.data.user.scope[0].org_name)
        }
        console.log("ressponse login ------------",response.data);
        const ts = new Date()
        localStorage.setItem("login_time_stamp", ts)
        if (!response.data.user.scope) {
          dispatch(push("/AddOrg"))
        }else {
          dispatch(push("/User/Speed"))
        }

      }
    } catch (e) {
      if (e.response && (e.response.status == 400 || e.response.status == 401)) {
        console.log(e)
        dispatch(showErrorDialog(true, "Invalid username and password"))
      } else {
        console.log(e)
        dispatch(showErrorDialog(true, "Internal server error ocurred"))
      }
    }
  }
}

export const sendResetEmail = emailid => {
  return async dispatch => {
    try {
      let resetresponse = await resetPasswordApiRequest(emailid)
      dispatch(showErrorDialog(true, "Please check your inbox for reset password link"))
    } catch (e) {
      console.log("error", e, "errorResponse", e.response)
      if (e.response && e.response.status == 402)
        dispatch(showErrorDialog(true, e.response.data.message))
      else dispatch(showErrorDialog(true, "Internal server error"))
    }
  }
}
