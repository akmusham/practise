import Axios from "axios"
import { showLoading, hideLoading } from "react-redux-loading-bar"

import { filterBot } from "../ChangeBotFilter"
import { showNotification } from "../../NotificationActions"
import * as types from "../../../Constants/BotConstants"

export const fetchBotRequest = () => ({
  type: types.FETCH_BOT_REQUEST
})
export const fetchBotSuccess = bots => ({
  type: types.FETCH_BOT_SUCCESS,
  bots
})
export const fetchBotFail = error => ({
  type: types.FETCH_BOT_FAIL,
  error
})

export const fetchBot = (id = "") => {
  let axios = Axios.create({
    baseURL: `${process.env.BOTMANAGEMENT_URL}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`
    }
  })
  return async dispatch => {
    dispatch(fetchBotRequest())
    dispatch(showLoading())
    try {
      let { data } = await axios.get(`/bot/${id}`)
      dispatch(fetchBotSuccess(data))
      dispatch(filterBot("All Bots", data))
      dispatch(hideLoading())
    } catch (e) {
      dispatch(fetchBotFail(e.message))
      dispatch(hideLoading())
    }
  }
}
