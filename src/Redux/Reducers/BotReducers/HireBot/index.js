import * as types from "../../../Constants/BotConstants"

const initialState = {
  isHiring: false,
  success: "",
  error: null
}

export function hireBotReducer(state = initialState, action) {
  switch (action.type) {
    case types.HIRE_BOT_REQUEST:
      return Object.assign({}, state, {
        isHiring: action.id,
        error: null
      })
    case types.HIRE_BOT_SUCCESS:
      return Object.assign({}, state, {
        isHiring: false,
        success: action.success,
        error: null
      })
    case types.HIRE_BOT_FAIL:
      return Object.assign({}, state, {
        isHiring: false,
        error: action.error
      })
    default:
      return state
  }
}
