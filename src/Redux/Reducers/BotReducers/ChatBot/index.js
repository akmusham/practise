import * as types from "../../../Constants/BotConstants"

const initialState = {}

export function chatBotReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHAT_BOT_REQUEST:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
