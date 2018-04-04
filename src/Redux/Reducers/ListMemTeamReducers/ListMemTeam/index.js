import * as types from "../../../Constants/ListMemTeamConstants"

const initialState = {
  listMemTeam: "",
  openErrorDialog: false,
  errorDialogueMessage: ""
}

export function listMemTeamOperations(state = initialState, action) {
  switch (action.type) {
    case types.LIST_MEM_TEAM_REQUEST:
      return Object.assign({}, state, {
        error: null
      })
    case types.LIST_MEM_TEAM_SUCCESS:
      return Object.assign({}, state, {
        listteam: action.data,
        error: null
      })
    case types.LIST_MEM_TEAM_FAIL:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
