import * as constants from "../../Constants/ResetPasswordConstants"

const initialState = {
  password: "",
  confirmpassword: "",
  openErrorDialog: false,
  errorDialogueMessage: ""
}

export default function handleResetPasswordOperations(state = initialState, action) {
  switch (action.type) {
    case constants.UPDATE_FORM_VALUE:
      const key = action.id
      return Object.assign({}, state, {
        [key]: action.value
      })

    case constants.SHOW_ERROR_DIALOG:
      return Object.assign({}, state, {
        openErrorDialog: action.openErrorDialog,
        errorDialogueMessage: action.errorDialogueMessage
      })

    default:
      return state
  }
}
