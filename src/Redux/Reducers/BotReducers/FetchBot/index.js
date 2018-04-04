import * as types from "../../../Constants/BotConstants"

const initialState = {
  isFetching: false,
  list: [],
  error: null
}

export function fetchBotReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BOT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      })
    case types.FETCH_BOT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.bots,
        error: null
      })
    case types.FETCH_BOT_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}
