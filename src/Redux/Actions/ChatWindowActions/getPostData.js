import Axios from "axios"

module.exports = async function getDefaultPostData(chat, projectid, postData) {
  try {
    const apiUrl = `http://cloud.${HOST}:8082/dialog/chat/query`
    const payload = postData
    const dataMapKey = postData.thisStep.inputspec.form[0].valueName
    if (typeof chat === "string") {
      payload.dataMap[dataMapKey] = {
        type: "string",
        stringValue: chat
      }
    } else {
      payload.dataMap[dataMapKey] = {
        type: "stringarray",
        arrayValue: chat
      }
    }

    const getData = await Axios({
      method: "post",
      url: apiUrl,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("techforce-accessToken")
      },
      data: payload
    })
    return getData
  } catch (e) {
    console.error("error ocurred", e)
  }
}
