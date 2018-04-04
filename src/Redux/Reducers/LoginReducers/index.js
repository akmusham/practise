import * as constants from "../../Constants/LoginConstants"
const initialState = {
  email: "",
  password: "",
  openErrorDialog: false,
  errorDialogueMessage: "",
  openLostPasswordDialog: false,
  projectList: [],
  resetEmail: ""
}

export default function handleLoginOperations(state = initialState, action) {
  switch (action.type) {
    case constants.UPDATE_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      })

    case constants.UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password: action.password
      })

    case constants.UPDATE_RESET_EMAIL:
      return Object.assign({}, state, {
        resetEmail: action.resetEmail
      })

    case constants.SHOW_ERROR_DIALOG:
      return Object.assign({}, state, {
        openErrorDialog: action.openErrorDialog,
        errorDialogueMessage: action.message
      })

    case constants.USER_SIGNIN_SUCCESS:
      return action.response

    case constants.SHOW_LOST_PASSWORD_DIALOG:
      return Object.assign({}, state, {
        openLostPasswordDialog: action.openLostPasswordDialog
      })

    case constants.UPDATE_PROJECT_LIST:
      return Object.assign({}, state, {
        projectList: action.response
      })

    default:
      return state
  }
}
