// import * as constants from "../../Constants/BackchannelConstants"
// // const initialState = false
//
// const initialState = {
//     dashboard: {},
//     activities: {},
//     configuration: {}
// }
//
// export default function handlebackchannelstore(state = initialState, action) {
//   switch (action.type) {
//     case constants.BACKCHANNEL_STORE:
//       return action.backchannel_store
//     default:
//       return state
//   }
// }
import { combineReducers } from "redux"

import { configurationReducer } from "./Configuration"
import { activityReducer } from "./Activity"
export default combineReducers({
  configurations: configurationReducer,
  activity: activityReducer
})
