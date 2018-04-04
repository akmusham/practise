import * as types from "../../Constants/EditTeamConstants"
// import createIssue from "./createIssue"
const axios = require('axios')
import qs from "qs"

export const createIssueRequest = () => ({
  type: types.EDIT_TEAM_REQUEST
})
export const createIssueSuccess = data => ({
  type: types.EDIT_TEAM_SUCCESS,
  data
})
export const createIssueFail = error => ({
  type: types.EDIT_TEAM_FAIL,
  error
})

export const editTeam = (teamid) => {
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
   var EDITteamPayload={
     headers:header.headers,
     data:payload,
     method:'put'
   }

   console.log("payload :::::::::::EDIT team",payload, header);
  return async dispatch => {
    dispatch(createIssueRequest())
    try {
      let data = await axios(`${process.env.SCOPE_URL}/v1/scopemanagement/teams/edit`,EDITteamPayload)
      //let { data } = await axios.post(`https://techforceai.freshdesk.com/api/v2/tickets`,payload,header)
      alert("your team EDIT succesfully")
      dispatch(createIssueSuccess(data))

    } catch (e) {
      console.log("error",e);
      dispatch(createIssueFail(e))
    }
  }
}
