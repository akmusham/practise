import * as types from "../../Constants/ListMemTeamConstants"

const axios = require('axios')
import qs from "qs"

export const listMemTeamRequest = () => ({
  type: types.LIST_MEM_TEAM_REQUEST
})
export const listMemTeamSuccess = data => ({
  type: types.LIST_MEM_TEAM_SUCCESS,
  data
})
export const listMemTeamFail = error => ({
  type: types.LIST_MEM_TEAM_FAIL,
  error
})

export const listMemTeam = () => {
  let header = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}` ,
        'Content-Type': "application/json",
        "orgId": localStorage.getItem("new_org_id"),
        "team_id": '5aa7c5a92784d34aa01fb0f2'
      }
    }
    console.log("header in list of mem in team",header);



  return async dispatch => {
    dispatch(listMemTeamRequest())
    try {
      let  data  = await axios.get(`${process.env.SCOPE_URL}/v1/scopemanagement/teams/members`,header)
      console.log("me==============",data);
      dispatch(listMemTeamSuccess(data))

    } catch (e) {
      console.log("error",e);
      dispatch(listMemTeamFail(e))
    }
  }
}
