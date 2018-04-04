import { combineReducers } from "redux"
import * as constants from "../../Constants/MsChatConstants"
const initialState = false

let handlechatstore = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHAT_STORE:
      return action.chatstore
    default:
      return state
  }
}

let handleWindowSwitch = (state = 'dashboard', action) => {
  console.log(action.windowStore);
  switch (action.type) {
    case constants.WINDOW_SWITCH:
      return action.windowStore
    default:
      return state
  }
}

export default combineReducers({
  handlechatstore: handlechatstore,
  handleWindowSwitch: handleWindowSwitch
})
