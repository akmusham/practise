import * as types from "../../Constants/LoginConstants"
import Axios from "axios"
import { push } from "react-router-redux"

const apiUrl = "http://techforce.47billion.com/speedops/api/v1/auth/signin"
export const updateEmail = email => ({ type: types.UPDATE_EMAIL, email })
export const updatePassword = password => ({ type: types.UPDATE_PASSWORD, password })
export const userSignInSuccess = response => ({ type: types.USER_SIGNIN_SUCCESS, response })
export const showErrorDialog = openErrorDialog => ({
  type: types.SHOW_ERROR_DIALOG,
  openErrorDialog
})
export const showLostPasswordDialog = openLostPasswordDialog => ({
  type: types.SHOW_LOST_PASSWORD_DIALOG,
  openLostPasswordDialog
})
//Async Action
export const userSignIn = (emailid, password) => {
  return dispatch => {
    const payload = {
      grant_type: "password",
      client_id: "585b82eddbcd5b7666e0e451",
      client_secret: "585b82eddbcd5b7666e0e123",
      scope: "Read Write",
      email: emailid,
      password: password
    }
    const headers = {
      token_type: "Bearer",
      expires_in: 3600,
      access_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzcGVlZF9pZCI6IjU5ZDVkZjJjNTA0YTM3NDQ3MzUyNWU1ZCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaXNzIjoidGVjaGZvcmNlIiwidXNlcl90eXBlIjoiYWRtaW4iLCJpYXQiOjE1MDg3NTU3MTAsImV4cCI6MTUwODc1OTMxMH0.vHG_tITqbxTWy2zW6zxaAmcDRKDve4bPPrI4m5UJwiM",
      refresh_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzcGVlZF9pZCI6IjU5ZDVkZjJjNTA0YTM3NDQ3MzUyNWU1ZCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiZXhwIjoxNTExMzQ3NzEwfQ.zMAQTFZr_zvI2GheRAG0b8MbpBKEar0nzMhPUAChj9k"
    }
    return Axios.post(apiUrl, payload, headers)
      .then(response => {
        if (response.status == 200) {
          dispatch(userSignInSuccess(response.data))
          console.log("ramfsin",response.data);
          
          localStorage.setItem("techforce-accessToken", response.data.access_token)
          localStorage.setItem("techforce-refreshToken", response.data.refresh_token)
          dispatch(push("/user"))
        } else {
          dispatch(showErrorDialog(true))
        }
      })
      .catch(error => {
        dispatch(showErrorDialog(true))
      })
  }
}
