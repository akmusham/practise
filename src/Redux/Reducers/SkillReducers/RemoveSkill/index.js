import * as types from "../../../Constants/SkillConstants"

const initialState = {
  isRemoving: false,
  success: "",
  error: null
}

export function removeSkillReducer(state = initialState, action) {
  switch (action.type) {
    case types.REMOVE_SKILL_REQUEST:
      return Object.assign({}, state, {
        isRemoving: action.id,
        error: null
      })
    case types.REMOVE_SKILL_SUCCESS:
      return Object.assign({}, state, {
        isRemoving: false,
        success: action.success,
        error: null
      })
    case types.REMOVE_SKILL_FAIL:
      return Object.assign({}, state, {
        isRemoving: false,
        error: action.error
      })
    default:
      return state
  }
}
