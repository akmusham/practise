import * as types from "../../Constants/LoginConstants"
import axios from "axios"
import { push } from "react-router-redux"
import config from "./config"
import { CognitoUserPool, AUTHENTICATIONDetails, CognitoUser } from "amazon-cognito-identity-js"

export const updateEmail = email => ({ type: types.UPDATE_EMAIL, email })
export const updatePassword = password => ({ type: types.UPDATE_PASSWORD, password })
export const userSignInSuccess = response => ({ type: types.USER_SIGNIN_SUCCESS, response })
export const updateProjectList = response => ({ type: types.UPDATE_PROJECT_LIST, response })
export const showErrorDialog = openErrorDialog => ({
  type: types.SHOW_ERROR_DIALOG,
  openErrorDialog
})
export const showLostPasswordDialog = openLostPasswordDialog => ({
  type: types.SHOW_LOST_PASSWORD_DIALOG,
  openLostPasswordDialog
})

export const getProjectList = () => {
  return dispatch => {
    axios({
      method: "POST",
      url: `http://cloud.${HOST}:8081/speedops/project/list`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("techforce-accessToken")
      }
    }).then(function(result) {
      dispatch(updateProjectList(result.data))
      localStorage.setItem("projectid", result.data[0].id)
    })
  }
}
//Async Action
export const userSignIn = (email, password) => {
  return dispatch => {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    })
    const user = new CognitoUser({ Username: email, Pool: userPool })
    const AUTHENTICATIONData = { Username: email, Password: password }
    const AUTHENTICATIONDetails = new AUTHENTICATIONDetails(AUTHENTICATIONData)
    user.authenticateUser(AUTHENTICATIONDetails, {
      onSuccess: function(result) {
        console.log("Result", result)
        let payloadForSignUpUser = {
          source: "cognito",
          email: email,
          token: result.accessToken.jwtToken,
          idToken: result.idToken.jwtToken
        }
        console.log("payloadForSignUpUser",payloadForSignUpUser);
        
        axios
          .post(
            config.cognito.speedopsCoreHost +
              config.cognito.speedopsCoreApiPath +
              "login/signupUser",
            payloadForSignUpUser
          )
          .then(function(response) {
            console.log(" loginOnSpeedops ", response.data.accessToken)
            localStorage.setItem("techforce-accessToken", response.data.accessToken)
            localStorage.setItem("techforce-refreshToken", response.data.refreshToken)
            dispatch(getProjectList())
            dispatch(push("/user/speed"))
          })
          .catch(function(error) {
            console.log(error)
            dispatch(showErrorDialog(true))
          })
      },
      onFailure: err => {
        console.log(err)
        dispatch(showErrorDialog(true))
      }
    })
  }
}
