import * as constants from "../../Constants/InviteUserConstants"

const initialState = {
  email: "",
  username:"",
  openErrorDialog: false,
  errorDialogueMessage: ""
}

export default function inviteUserOperations(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
