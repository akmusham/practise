import { UPDATE_FORM_VALUE, SHOW_ERROR_DIALOG } from "../../Constants/OrganizationConstants"

const initialState = {
  username:'',
  email:'',
  companyurl:'',
  city:'',
  country: '',
  landmark: '',
  description: '',
  openErrorDialog: false,
  errorDialogueMessage: ""
}

export default function handleRegistrationOperations(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      const key = action.id
      return Object.assign({}, state, {
        [key]: action.value
      })

    case SHOW_ERROR_DIALOG:
      return Object.assign({}, state, {
        openErrorDialog: action.openErrorDialog,
        errorDialogueMessage: action.errorDialogueMessage
      })
    default:
      return state
  }
}
