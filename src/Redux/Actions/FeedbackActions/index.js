import * as types from "../../Constants/FeedbackConstants"
// import createIssue from "./createIssue"
const axios = require('axios')
import qs from "qs"

export const createIssueRequest = () => ({
  type: types.CREATE_ISSUE_REQUEST
})
export const createIssueSuccess = data => ({
  type: types.CREATE_ISSUE_SUCCESS,
  data
})
export const createIssueFail = error => ({
  type: types.CREATE_ISSUE_FAIL,
  error
})

export const createissue = (issueType,summary,emailId) => {
  let header = {
    headers: {
      Authorization: "Basic aGFyaUB0ZWNoZm9yY2UuYWk6RGlnaXQ5OTkk",
      'Content-Type': "application/json"
    }
  }
   let payload=JSON.stringify({
      description: summary,
      subject: issueType,
      email: "customersupport@techforce.ai",
      priority: 2,
      status: 2,
      cc_emails: []
   })


  return async dispatch => {
    dispatch(createIssueRequest())
    try {
      let { data } = await axios.post(`https://techforceai.freshdesk.com/api/v2/tickets`,payload,header)
      alert("your feedback submitted succesfully")
      dispatch(createIssueSuccess(data))

    } catch (e) {
      console.log("error",e);
      dispatch(createIssueFail(e))
    }
  }
}
