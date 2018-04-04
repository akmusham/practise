import * as types from "../../Constants/ResetPasswordConstants"
import updatePasswordApiRequest from "./updatePasswordApiRequest"
import { push } from "react-router-redux"

export const updateFormValues = (id, value) => ({ type: types.UPDATE_FORM_VALUE, id, value })
export const showErrorDialog = (openErrorDialog, errorDialogueMessage) => ({
  type: types.SHOW_ERROR_DIALOG,
  openErrorDialog,
  errorDialogueMessage
})
export const updatePassword = (emailid, password) => {
  return async dispatch => {
    try {
      let response = await updatePasswordApiRequest(emailid, password)
      if (response.status == 200) {
        dispatch(push("/"))
      }
    } catch (e) {
      console.log("error in reset", e)
      dispatch(showErrorDialog(true, "Internal Server Error"))
    }
  }
}
