import Axios from "axios"
import { showLoading, hideLoading } from "react-redux-loading-bar"

import { filterSkill } from "../../SkillActions/ChangeSkillFilter"
import { showNotification } from "../../NotificationActions"
import * as types from "../../../Constants/BotConstants"

export const fetchBotSkillRequest = () => ({
  type: types.FETCH_BOT_SKILL_REQUEST
})
export const fetchBotSkillSuccess = botSkills => ({
  type: types.FETCH_BOT_SKILL_SUCCESS,
  botSkills
})
export const fetchBotSkillFail = error => ({
  type: types.FETCH_BOT_SKILL_FAIL,
  error
})

export const fetchBotSkill = id => {
  let axios = Axios.create({
    baseURL: `${process.env.BOTMANAGEMENT_URL}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`
    }
  })
  return async dispatch => {
    dispatch(fetchBotSkillRequest())
    dispatch(showLoading())
    try {
      let { data } = await axios.get(`/skill/bot/${id}`)
      dispatch(fetchBotSkillSuccess(data))
      dispatch(filterSkill("All Skills", data))
      dispatch(hideLoading())
    } catch (e) {
      dispatch(fetchBotSkillFail(e.message))
      dispatch(showNotification("error", e.message))
      dispatch(hideLoading())
    }
  }
}
