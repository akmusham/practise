import Axios from "axios"
import { showLoading, hideLoading } from "react-redux-loading-bar"

import { fetchBot } from "../FetchBot"
import { showNotification } from "../../NotificationActions"
import * as types from "../../../Constants/BotConstants"

export const unhireBotRequest = id => ({
  type: types.UNHIRE_BOT_REQUEST,
  id
})
export const unhireBotSuccess = success => ({
  type: types.UNHIRE_BOT_SUCCESS,
  success
})
export const unhireBotFail = error => ({
  type: types.UNHIRE_BOT_FAIL,
  error
})

export const unhireBot = id => {
  return async dispatch => {
    let axios = Axios.create({
      baseURL: `${process.env.BOTMANAGEMENT_URL}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`
      }
    })
    dispatch(unhireBotRequest(id))
    dispatch(showLoading())
    try {
      let { data } = await axios.post(`/bot/unhire`, { id })
      dispatch(unhireBotSuccess(data.message))
      dispatch(showNotification("success", data.message))
      dispatch(fetchBot())
      dispatch(hideLoading())
    } catch (e) {
      dispatch(unhireBotFail(e.message))
      dispatch(showNotification("error", e.message))
      dispatch(hideLoading())
    }
  }
}
