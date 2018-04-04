import * as types from "../../Constants/OrganizationConstants"
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
export const userRegistration = (username,email,companyurl,city,country,landmark,description) => {
  return async dispatch => {
    try {
      let apiUrl = `{{"api.development.techforce.ai"}}/v1/scopemanagement/org/create`
      let header = {
        headers: {
          "Authorization": "Bearer 8c5ac319cb86b2be33346089d83b735a4a62249a",
          "Content-Type": "application/json"
        }
      }
      let payload = qs.stringify({
        username:'',
        email:'',
        companyurl:'',
        city:'',
        country: '',
        landmark: '',
        description: ''
      })
      let getData = await axios.post(apiUrl, payload)
      if (getData.status == 201) {
        dispatch(showErrorDialog(true, "Email id already exists"))
      } else {
        dispatch(push("/Organization"))
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
