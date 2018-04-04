import * as constants from "../../Constants/NewTeamConstants"

const initialState = {
  teamName:"",
  teamDescription:"",
  openErrorDialog: false,
  errorDialogueMessage: ""
}

export default function newTeamOperations(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
