import { combineReducers } from "redux"

import { listTeamOperations } from "./ListTeams"

export default combineReducers({
  listteam: listTeamOperations
})
