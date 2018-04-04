import Axios from "axios"
import { showLoading, hideLoading } from "react-redux-loading-bar"

import { fetchBot } from "../FetchBot"
import { showNotification } from "../../NotificationActions"
import * as types from "../../../Constants/BotConstants"

export const hireBotRequest = id => ({
  type: types.HIRE_BOT_REQUEST,
  id
})
export const hireBotSuccess = success => ({
  type: types.HIRE_BOT_SUCCESS,
  success
})
export const hireBotFail = error => ({
  type: types.HIRE_BOT_FAIL,
  error
})

export const hireBot = id => {
  return async dispatch => {
    let axios = Axios.create({
      baseURL: `${process.env.BOTMANAGEMENT_URL}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`
      }
    })
    dispatch(hireBotRequest(id))
    dispatch(showLoading())
    try {
      let { data } = await axios.post(`/bot/hire`, { id })
      dispatch(hireBotSuccess(data.message))
      dispatch(showNotification("success", data.message))
      dispatch(fetchBot())
      dispatch(hideLoading())
    } catch (e) {
      dispatch(hireBotFail(e.message))
      dispatch(showNotification("error", e.message))
      dispatch(hideLoading())
    }
  }
}
