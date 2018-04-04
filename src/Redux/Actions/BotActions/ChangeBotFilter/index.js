import fuzzy from "fuzzy"
import * as types from "../../../Constants/BotConstants"

export const changeBotFilter = filter => ({
  type: types.CHANGE_BOT_FILTER,
  filter
})

export const updateFilteredBotList = filteredList => ({
  type: types.UPDATE_FILTERED_BOT_LIST,
  filteredList
})

export const filterBot = (type = "", list = []) => {
  return dispatch => {
    dispatch(changeBotFilter(type))

    let filteredList = list.filter(obj => {
      let filter = type.split(" ")[0].toLowerCase()
      switch (filter) {
        case "all":
          return true
        case "hired":
          return obj.hired
        case "available":
          return !obj.hired
        default:
          return fuzzy.test(type, obj.details.name)
      }
    })

    dispatch(updateFilteredBotList(filteredList))
  }
}
