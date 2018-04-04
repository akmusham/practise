import { combineReducers } from "redux"

import { dashboardDataReducer } from "./DashboardData"

export default combineReducers({
  myStackData: dashboardDataReducer
})
