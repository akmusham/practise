import * as constants from "../../Constants/FeedbackConstants"

const initialState = {
  message: "",
  subject: "",
  openErrorDialog: false,
  errorDialogueMessage: ""
}

export default function feedbackOperations(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
