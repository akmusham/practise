import * as types from "../../Constants/SkillConstants"

const initialState = {
  isFetching: false,
  skills: [],
  error: {
    showError: false,
    message: ''
  }
}

export default function skillReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SKILLS_REQUEST:
    case types.ADD_SKILL_REQUEST:
    case types.REMOVE_SKILL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: {
          showError: false,
          message: ''
        }
      })

    case types.FETCH_SKILLS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: {
          showError: false,
          message: ''
        },
        skills: action.skills
      })

    case types.ADD_SKILL_SUCCESS:
    case types.REMOVE_SKILL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: {
          showError: false,
          message: ''
        },
        message: action.message
      })

    case types.FETCH_SKILLS_FAIL:
    case types.ADD_SKILL_FAIL:
    case types.REMOVE_SKILL_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        error: {
          showError: true,
          message: action.error
        }
      })

    default:
      return state
  }
}
