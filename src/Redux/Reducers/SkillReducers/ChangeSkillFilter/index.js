import * as types from "../../../Constants/SkillConstants"

const initialState = {
  type: "all",
  list: []
}

export function changeSkillFilterReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_SKILL_FILTER:
      return Object.assign({}, state, {
        type: action.filter
      })
    case types.UPDATE_FILTERED_SKILL_LIST:
      return Object.assign({}, state, {
        list: action.filteredList
      })
    default:
      return state
  }
}
