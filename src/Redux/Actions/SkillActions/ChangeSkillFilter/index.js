import fuzzy from "fuzzy"
import * as types from "../../../Constants/SkillConstants"

export const changeSkillFilter = filter => ({
  type: types.CHANGE_SKILL_FILTER,
  filter
})

export const updateFilteredSkillList = filteredList => ({
  type: types.UPDATE_FILTERED_SKILL_LIST,
  filteredList
})

export const filterSkill = (type = "", list = []) => {
  return dispatch => {
    dispatch(changeSkillFilter(type))

    let filteredList = list.filter(obj => {
      let filter = type.split(" ")[0].toLowerCase()
      switch (filter) {
        case "all":
          return true
        case "subscribed":
          return obj.subscribed
        case "available":
          return !obj.subscribed
        default:
          return fuzzy.test(type, obj.details.name)
      }
    })

    dispatch(updateFilteredSkillList(filteredList))
  }
}
