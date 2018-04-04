import * as types from "../../../Constants/BotConstants"

const initialState = {
  type: "all",
  list: []
}

export function changeBotFilterReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_BOT_FILTER:
      return Object.assign({}, state, {
        type: action.filter
      })
    case types.UPDATE_FILTERED_BOT_LIST:
      return Object.assign({}, state, {
        list: action.filteredList
      })
    default:
      return state
  }
}
