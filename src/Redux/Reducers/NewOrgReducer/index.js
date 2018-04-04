import * as constants from "../../Constants/NewOrgConstants"

const initialState = {
  orgName:"",
  adminName:'',
  adminEmail:'',
  websiteUrl:'',
  location:"",
  openErrorDialog: false,
  errorDialogueMessage: ""
}

export default function newTeamOperations(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
