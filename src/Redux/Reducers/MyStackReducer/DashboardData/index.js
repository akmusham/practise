import * as types from "../../../Constants/MyStackConstants"

const initialState = {
  user:"",
  data:"",
  error: null
}

export function dashboardDataReducer(state = initialState, action) {
  switch (action.type) {
    case types.MYSTACK_REQUEST:
      return Object.assign({}, state, {
        error: null
      })
    case types.MYSTACK_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        error: null
      })
    case types.MYSTACK__FAIL:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
