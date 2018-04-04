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

export const addSkillRequest = id => ({
  type: types.ADD_SKILL_REQUEST,
  id
})
export const addSkillSuccess = success => ({
  type: types.ADD_SKILL_SUCCESS,
  success
})
export const addSkillFail = error => ({
  type: types.ADD_SKILL_FAIL,
  error
})

export const addSkill = (id, bot_id) => {
  return async dispatch => {
    dispatch(addSkillRequest(id))
    try {
      let { data } = await axios.post(`/skillsubscription/add`, { id })
      dispatch(addSkillSuccess(data.message))
      dispatch(showNotification("success", data.message))
      if (bot_id) dispatch(fetchBotSkill(bot_id))
      dispatch(fetchBot(bot_id))
    } catch (e) {
      dispatch(addSkillFail(e.message))
      dispatch(showNotification("error", e.message))
    }
  }
}
