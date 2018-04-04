import * as types from "../../../Constants/DashboardWidgetConstants"

const initialState = {
  user:"",
  widgets:[],
  error: null
}

export function dashboardDataReducer(state = initialState, action) {
  switch (action.type) {
    case types.DASHBOARD_WIDGET_REQUEST:
      return Object.assign({}, state, {
        error: null
      })
    case types.DASHBOARD_WIDGET_SUCCESS:
      return Object.assign({}, state, {
        widgets: [...action.data],
        error: null
      })
    case types.DASHBOARD_WIDGET_FAIL:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
