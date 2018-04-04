import * as types from "../../../Constants/BackchannelConstants"

export const updateActivity = obj => ({
  type: types.UPDATE_ACTIVITY,
  activity: obj
})
