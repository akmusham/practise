import { combineReducers } from "redux"

import { addWidgetReducer } from "./AddWidget"
import { dashboardDataReducer } from "./DashboardData"
// import { developerDataReducer } from "./DeveloperDashboard"

export default combineReducers({
  widgets: addWidgetReducer,
  dashboardData: dashboardDataReducer,
  // developerData: developerDataReducer
})
