import * as types from "../../Constants/NewTeamConstants"
const axios = require('axios')
import qs from "qs"
import { push } from "react-router-redux"
import { listteam } from "../ListTeamActions"

export const createNewTeamRequest = () => ({
  type: types.CREATE_NEWTEAM_REQUEST
})
export const createNewTeamSuccess = data => ({
  type: types.CREATE_NEWTEAM_SUCCESS,
  data
})
export const createNewTeamFail = error => ({
  type: types.CREATE_NEWTEAM_FAIL,
  error
})

export const newteam = ({teamName,teamDescription}) => {
  let header = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`,
      'Content-Type': "application/json"
    }
  }
   let payload=JSON.stringify({
     teamName: teamName,
     teamDescription: teamDescription,
     org_id: localStorage.getItem("new_org_id")
   })
   console.log("header  and payload", header,payload);

  return async dispatch => {
    dispatch(createNewTeamRequest())
    try {
      let data = await axios.put(`${process.env.SCOPE_URL}/v1/scopemanagement/teams/create`,payload,header)
      alert("your Team has created succesfully")
      dispatch(push("/Profile"))
      dispatch(createNewTeamSuccess(data))
      dispatch(listteam())

    } catch (e) {
      console.log("error",e);
      dispatch(createNewTeamFail(e))
    }
  }
}
