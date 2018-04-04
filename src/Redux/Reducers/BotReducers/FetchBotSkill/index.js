import * as types from "../../../Constants/BotConstants"

const initialState = {
  isFetching: false,
  list: [],
  error: null
}

export function fetchBotSkillReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BOT_SKILL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      })
    case types.FETCH_BOT_SKILL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.botSkills,
        error: null
      })
    case types.FETCH_BOT_SKILL_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}
