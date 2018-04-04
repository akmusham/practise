import * as constants from "../../Constants/ChatWindowConstants"
import Moment from "moment"
import randomID from "random-id"
const newDate = Moment().unix()
const initialState = {
  chatHistory: [
    {
      id: randomID(20, "aA"),
      type: "QUERY",
      text: "Hi, This is speed! <br> How can I help you?",
      step: {
        title: "Hi, This is speed! <br> How can I help you?"
      },
      updatedDate: newDate
    }
  ],
  postData: {},
  renderData: {}
}

export default function handleChatWindowOperations(state = initialState, action) {
  switch (action.type) {
    case constants.SUBMIT_QUERY:
      const botQuery = {
        id: randomID(20, "aA"),
        type: "QUERY",
        text: action.chat,
        step: {
          title: action.chat
        },
        updatedDate: newDate
      }
      return Object.assign({}, state, {
        chatHistory: [...state.chatHistory, botQuery]
      })

    case constants.DISPLAY_ANSWER:
      const botAnswer = {
        id: randomID(20, "aA"),
        type: "ANSWER",
        text: action.chat,
        step: {
          title: action.chat
        },
        updatedDate: newDate
      }
      return Object.assign({}, state, {
        chatHistory: [...state.chatHistory, botAnswer]
      })

    case constants.UPDATE_POSTDATA:
      const postData = action.response
      if (postData.thisStep != null) {
        const dataQuery = {
          id: randomID(20, "aA"),
          type: postData.thisStep.inputspec.form[0].type,
          text: postData.thisStep.title,
          step: postData.thisStep,
          updatedDate: newDate
        }
        return Object.assign({}, state, {
          chatHistory: [...state.chatHistory, dataQuery],
          postData: postData
        })
      } else {
        return Object.assign({}, state, {
          renderData: postData
        })
      }

    default:
      return state
  }
}
