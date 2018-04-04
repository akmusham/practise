import * as types from "../../../Constants/BackchannelConstants"

export const updateConfiguration = obj => ({
  type: types.UPDATE_CONFIGURATION,
  configuration: obj
})

export const clearConfiguration = () => ({
  type: types.CLEAR_CONFIGURATION
})

export const undoConfiguration = (currentList, configuration) => {
  let newList = currentList.filter(obj => obj.id !== configuration.id)
  return {
    type: types.UNDO_CONFIGURATION,
    newList: newList
  }
}
