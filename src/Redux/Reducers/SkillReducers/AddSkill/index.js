import * as types from "../../../Constants/SkillConstants"

const initialState = {
  isAdding: false,
  success: "",
  error: null
}

export function addSkillReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_SKILL_REQUEST:
      return Object.assign({}, state, {
        isAdding: action.id,
        error: null
      })
    case types.ADD_SKILL_SUCCESS:
      return Object.assign({}, state, {
        isAdding: false,
        success: action.success,
        error: null
      })
    case types.ADD_SKILL_FAIL:
      return Object.assign({}, state, {
        isAdding: false,
        error: action.error
      })
    default:
      return state
  }
}
