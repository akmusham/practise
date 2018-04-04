import * as types from "../../../Constants/BackchannelConstants"

const initialState = {
  list: []
}

export function configurationReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_CONFIGURATION:
      return Object.assign({}, state, {
        list: [...state.list, action.configuration]
      })
    case types.CLEAR_CONFIGURATION:
      return Object.assign({}, state, {
        list: []
      })
    case types.UNDO_CONFIGURATION:
      return Object.assign({}, state, {
        list: action.newList
      })
    default:
      return state
  }
}
