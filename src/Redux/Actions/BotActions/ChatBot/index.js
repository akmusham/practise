import Axios from "axios"

import { fetchBot } from "../FetchBot"
import { showNotification } from "../../NotificationActions"
import * as types from "../../../Constants/BotConstants"

export const chatBotRequest = id => ({
  type: types.CHAT_BOT_REQUEST,
  id
})

export const chatBot = id => {
  return async dispatch => {
    // dispatch(unhireBotRequest(id))
    // try {
    //   let { data } = await axios.post(`/bot/unhire`, { id })
    //   dispatch(unhireBotSuccess(data.message))
    //   dispatch(showNotification("success", data.message))
    //   dispatch(fetchBot())
    // } catch (e) {
    //   dispatch(unhireBotFail(e.message))
      dispatch(showNotification("error", "babu"))
    }
  }
