import * as types from "../../Constants/ChatWindowConstants"
import Axios from "axios"
import getDefaultPostData from "./getDefaultPostData"
import getPostData from "./getPostData"
export const submitQuery = chat => ({ type: types.SUBMIT_QUERY, chat })
export const displayAnswer = chat => ({ type: types.DISPLAY_ANSWER, chat })
export const submitInput = thisStep => ({ type: types.SUBMIT_INPUT, thisStep })
export const updatePostData = response => ({ type: types.UPDATE_POSTDATA, response })

export const retrieveChatResponse = (chat, projectid, postData) => {
  return dispatch => {
    if (Object.getOwnPropertyNames(postData).length === 0) {
      const apiRequest = getDefaultPostData(chat, projectid)
      apiRequest
        .then(function(response) {
          if (response.data.wType == "workflow") {
            if (response.data.message) {
              dispatch(submitQuery(response.data.message))
            }
            dispatch(updatePostData(response.data))
          } else {
            if (response.data.wType == "completion") {
              if (response.data.message) {
                dispatch(submitQuery(response.data.message))
              }
              const responseJson = JSON.parse(
                response.data.serviceCallCompletionResponse.textResponse
              )
              if (response.data.hasNextFlow) {
                const apiRequest = getDefaultPostData(response.data.nextFlowName, projectid)
                apiRequest
                  .then(function(response) {
                    dispatch(submitQuery(responseJson.details.text))
                  })
                  .catch(function(error) {
                    console.log("error recieved", error)
                  })
              } else if (responseJson.responseType == "TEXT") {
                dispatch(submitQuery(responseJson.details.text))
              } else {
                dispatch(updatePostData(response.data))
              }
            } else if (response.data.wType == null) {
              dispatch(submitQuery(response.data.message))
            }
          }
        })
        .catch(function(error) {
          console.log("error recieved", error)
        })
    } else {
      const apiRequest = getPostData(chat, projectid, postData)
      apiRequest
        .then(function(response) {
          if (response.data.wType == "workflow") {
            dispatch(updatePostData(response.data))
          } else {
            if (response.data.wType == "completion") {
              const responseJson = JSON.parse(
                response.data.serviceCallCompletionResponse.textResponse
              )
              if (response.data.hasNextFlow) {
                const apiRequest = getDefaultPostData(response.data.nextFlowName, projectid)
                apiRequest
                  .then(function(response) {
                    dispatch(submitQuery(responseJson.details.text))
                  })
                  .catch(function(error) {
                    console.log("error recieved", error)
                  })
              } else if (responseJson.responseType == "TEXT") {
                dispatch(submitQuery(responseJson.details.text))
              }
            } else if (response.data.wType == null) {
              dispatch(submitQuery(response.data.message))
            }
          }
        })
        .catch(function(error) {
          console.log("error recieved", error)
        })
    }
  }
}
