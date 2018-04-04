import * as types from "../../../Constants/BackchannelConstants"
import _ from "lodash"
const initialState = {
  list: []
}

export function activityReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_ACTIVITY:
      let newList = state.list
      let index = _.findIndex(newList, { JobID: action.activity.JobID })
      if (index >= 0) {
        newList.splice(index, 1)
      }
      return Object.assign({}, state, {
        list: [...newList, action.activity]
      })
    default:
      return state
  }
}
