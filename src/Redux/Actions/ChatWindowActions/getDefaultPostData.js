import Axios from "axios"

module.exports = async function getDefaultPostData(chat, projectid) {
  try {
    const apiUrl = `http://cloud.${HOST}:8082/dialog/chat/query`
    const payload = {
      wType: "query",
      queryString: chat,
      dataMap: {
        "project.id": {
          type: "string",
          stringValue: projectid
        }
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
