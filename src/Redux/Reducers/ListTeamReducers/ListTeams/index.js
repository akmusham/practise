import * as types from "../../../Constants/ListTeamConstants"

const initialState = {
  listteam: "",
  openErrorDialog: false,
  errorDialogueMessage: ""
}

export function listTeamOperations(state = initialState, action) {
  switch (action.type) {
    case types.LIST_TEAM_REQUEST:
      return Object.assign({}, state, {
        error: null
      })
    case types.LIST_TEAM_SUCCESS:
      return Object.assign({}, state, {
        listteam: action.data,
        error: null
      })
    case types.LIST_TEAM_FAIL:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
