import * as types from "../../../Constants/DashboardWidgetConstants"

const initialState = {
  user:"",
  widgets:[],
  error: null
}

export function developerDataReducer(state = initialState, action) {
  switch (action.type) {
    case types.DEVELOPER_DASHBOARD_REQUEST:
      return Object.assign({}, state, {
        error: null
      })
    case types.DEVELOPER_DASHBOARD_SUCCESS:
      return Object.assign({}, state, {
        widgets: [...action.data],
        error: null
      })
    case types.DEVELOPER_DASHBOARD_FAIL:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
