import * as types from "../../../Constants/DashboardWidgetConstants"

const initialState = {
  type: 'projectDashboard',
  list: []
}

export function addWidgetReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_DASHBOARD_WIDGET:
      return Object.assign({}, state, {
        type: action.dashboardType,
        // list: [...state.list, ...action.widget]    // for mixed widgets
        list: [...action.widget]
      })
    default:
      return state
  }
}
