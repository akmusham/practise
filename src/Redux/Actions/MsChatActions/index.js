import * as types from "../../Constants/MsChatConstants"

export const mystatehandler = chatstore => {
  return { type: types.CHAT_STORE, chatstore }
}
export const windowSwitch = windowStore => {
  console.log(windowStore);
  return { type: types.WINDOW_SWITCH, windowStore }
}
