import * as types from "../../Constants/SkillConstants"
import Axios from "axios"
import { showLoading, hideLoading } from "react-redux-loading-bar"
import { push } from "react-router-redux"

// SKILL ACTIONS

//fetch skills
export const fetchSkillsRequest = () => ({
  type: types.FETCH_SKILLS_REQUEST
})
export const fetchSkillsSuccess = skills => ({
  type: types.FETCH_SKILLS_SUCCESS,
  skills
})
export const fetchSkillsFail = error => ({
  type: types.FETCH_SKILLS_FAIL,
  error
})

// add skill
export const addSkillRequest = () =>({
  type: types.ADD_SKILL_REQUEST
})
export const addSkillSuccess = message => ({
  type: types.ADD_SKILL_SUCCESS,
  message
})
export const addSkillFail = error => ({
  type: types.ADD_SKILL_FAIL,
  error
})

// remove skill
export const removeSkillRequest = () => ({
  type: types.REMOVE_SKILL_REQUEST
})
export const removeSkillSuccess = mesage => ({
  type: types.REMOVE_SKILL_SUCCESS,
  message
})
export const removeSkillFail = error => ({
  type: types.REMOVE_SKILL_FAIL,
  error
})

// SKILL ASYNC ACTIONS

export const fetchSkills = () => {
  let axios = Axios.create({
    baseURL: `${process.env.BOTMANAGEMENT_URL}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`
    }
  })
  return async dispatch => {
    dispatch(fetchSkillsRequest())
    dispatch(showLoading())
    try {
      let { data } = await axios.get(`/skill?skip=0&limit=50`)
      dispatch(fetchSkillsSuccess(data))
      dispatch(hideLoading())
    } catch (e) {
      dispatch(fetchSkillsFail(e.message))
      dispatch(hideLoading())
    }
  }
}

export const addSkill = id => {
  let axios = Axios.create({
    baseURL: `${process.env.BOTMANAGEMENT_URL}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`
    }
  })
  return async dispatch => {
    dispatch(addSkillRequest())
    dispatch(showLoading())
    try {
      let { data } = await axios.post(`/skillsubscription/add`, { id })
      dispatch(addSkillSuccess(data.message))
      dispatch(hideLoading())
    } catch(e) {
      dispatch(addSkillFail(e.message))
      dispatch(hideLoading())
    }
  }
}

export const removeSkill = id => {
  let axios = Axios.create({
    baseURL: `${process.env.BOTMANAGEMENT_URL}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`
    }
  })
  return async dispatch => {
    dispatch(removeSkillRequest())
    dispatch(showLoading())
    try {
      let { data } = await axios.post(`/skillsubscription/remove`, { id })
      dispatch(removeSkillSuccess(data.message))
      dispatch(hideLoading())
    } catch (e) {
      dispatch(removeSkillFail(e.message))
      dispatch(hideLoading())
    }
  }
}
