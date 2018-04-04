import * as types from "../../Constants/SetPasswordConstants"
import setPassWordApiRequest from "./setPassWordApiRequest"
import { push } from "react-router-redux"
import * as loginActions from "../LoginActions"
export const updateFormValues = (id, value) => ({ type: types.UPDATE_FORM_VALUE, id, value })
export const showErrorDialog = (openErrorDialog, errorDialogueMessage) => ({
  type: types.SHOW_ERROR_DIALOG,
  openErrorDialog,
  errorDialogueMessage
})
export const updatePassword = (token, email, orgname, userName, password) => {
  return async dispatch => {
    try {
      let response = await setPassWordApiRequest(token, email, orgname, userName, password)
      if (response.status == 200) {
        dispatch(loginActions.showErrorDialog(true, "Password reset successfully"))
        dispatch(push("/"))
      }
    } catch (e) {
      console.log("error in reset", e)
      dispatch(showErrorDialog(true, "Internal Server Error"))
    }
  }
}
