import * as types from "../../Constants/DeleteTeamConstants"
// import createIssue from "./createIssue"
const axios = require('axios')
import qs from "qs"

export const createIssueRequest = () => ({
  type: types.DELETE_TEAM_REQUEST
})
export const createIssueSuccess = data => ({
  type: types.DELETE_TEAM_SUCCESS,
  data
})
export const createIssueFail = error => ({
  type: types.DELETE_TEAM_FAIL,
  error
})

export const deleteTeam = (teamid) => {
  let header = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`,
      'Content-Type': "application/json",
      orgId: localStorage.getItem("Org_Idak"),
    }
  }
   let payload=JSON.stringify({
      teamid:teamid

   })
   var deleteteamPayload={
     headers:header.headers,
     data:payload,
     method:'put'
   }

   console.log("payload :::::::::::delete team",payload, header);
  return async dispatch => {
    dispatch(createIssueRequest())
    try {
      let data = await axios(`${process.env.SCOPE_URL}/v1/scopemanagement/teams/remove`,deleteteamPayload)
      //let { data } = await axios.post(`https://techforceai.freshdesk.com/api/v2/tickets`,payload,header)
      alert("your team deleted succesfully")
      dispatch(createIssueSuccess(data))

    } catch (e) {
      console.log("error",e);
      dispatch(createIssueFail(e))
    }
  }
}
