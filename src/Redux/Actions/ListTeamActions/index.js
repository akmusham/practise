import * as types from "../../Constants/ListTeamConstants"

const axios = require('axios')
import qs from "qs"

export const listTeamRequest = () => ({
  type: types.LIST_TEAM_REQUEST
})
export const listTeamSuccess = data => ({
  type: types.LIST_TEAM_SUCCESS,
  data
})
export const listTeamFail = error => ({
  type: types.LIST_TEAM_FAIL,
  error
})

export const listteam = () => {
  let header = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}` ,
        'Content-Type': "application/json",
        "orgId": localStorage.getItem("new_org_id")
      }
    }
    console.log("header in list of teams",header);



  return async dispatch => {
    dispatch(listTeamRequest())
    try {
      let  data  = await axios.get(`${process.env.SCOPE_URL}/v1/scopemanagement/teams/list`,header)
      console.log("message==============",data);
      dispatch(listTeamSuccess(data))

    } catch (e) {
      console.log("error",e);
      dispatch(listTeamFail(e))
    }
  }
}
