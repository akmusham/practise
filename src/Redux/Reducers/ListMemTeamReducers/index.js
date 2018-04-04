import { combineReducers } from "redux"

import { listMemTeamOperations } from "./ListMemTeam"

export default combineReducers({
  listMemTeam: listMemTeamOperations
})
