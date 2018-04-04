import * as types from "../../../Constants/BotConstants"

const initialState = {
  isUnhiring: false,
  success: "",
  error: null
}

export function unhireBotReducer(state = initialState, action) {
  switch (action.type) {
    case types.UNHIRE_BOT_REQUEST:
      return Object.assign({}, state, {
        isUnhiring: action.id,
        error: null
      })
    case types.UNHIRE_BOT_SUCCESS:
      return Object.assign({}, state, {
        isUnhiring: false,
        success: action.success,
        error: null
      })
    case types.UNHIRE_BOT_FAIL:
      return Object.assign({}, state, {
        isUnhiring: false,
        error: action.error
      })
    default:
      return state
  }
}
