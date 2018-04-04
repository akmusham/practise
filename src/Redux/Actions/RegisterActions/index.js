import * as types from "../../Constants/RegistrationConstants"
import { push } from "react-router-redux"
import axios from "axios"
import qs from "qs"
import * as loginActions from "../LoginActions"
export const updateFormValues = (id, value) => ({ type: types.UPDATE_FORM_VALUE, id, value })
export const showErrorDialog = (openErrorDialog, errorDialogueMessage) => ({
  type: types.SHOW_ERROR_DIALOG,
  openErrorDialog,
  errorDialogueMessage
})
export const userRegistration = ({ fullName, regEmail, companyName, regPassword, orgUrl }) => {
  return async dispatch => {
    try {
      let apiUrl = `${process.env.AUTHENTICATION_URL}/signupbyemail`
      let header = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
      let payload = qs.stringify({
        website_url: orgUrl,
        username: fullName,
        email: regEmail,
        password: regPassword,
        company_name: companyName
      })
      console.log("payload",payload);
      let getData = await axios.post(apiUrl, payload)
      if (getData.status == 201) {
        dispatch(showErrorDialog(true, "Email id already exists"))
      } else {
        dispatch(push("/"))
        dispatch(
          loginActions.showErrorDialog(
            true,
            "User registration successful. Kindly verify your email id to login."
          )
        )
      }
    } catch (err) {
      console.log("error occured", err)
      dispatch(showErrorDialog(true, "Internal server error"))
    }
  }
}
