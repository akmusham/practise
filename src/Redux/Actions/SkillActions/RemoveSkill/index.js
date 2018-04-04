import Axios from "axios"

import { fetchBotSkill, fetchBot } from "../../BotActions"
import { showNotification } from "../../NotificationActions"
import * as types from "../../../Constants/SkillConstants"

const axios = Axios.create({
  baseURL: `${process.env.BOTMANAGEMENT_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`
  }
})

export const removeSkillRequest = id => ({
  type: types.REMOVE_SKILL_REQUEST,
  id
})
export const removeSkillSuccess = success => ({
  type: types.REMOVE_SKILL_SUCCESS,
  success
})
export const removeSkillFail = error => ({
  type: types.REMOVE_SKILL_FAIL,
  error
})

export const removeSkill = (id, bot_id) => {
  return async dispatch => {
    dispatch(removeSkillRequest(id))
    try {
      let { data } = await axios.post(`/skillsubscription/remove`, { id })
      dispatch(removeSkillSuccess(data.message))
      dispatch(showNotification("success", data.message))
      if (bot_id) dispatch(fetchBotSkill(bot_id))
      dispatch(fetchBot(bot_id))
    } catch (e) {
      dispatch(removeSkillFail(e.message))
      dispatch(showNotification("error", e.message))
    }
  }
}
