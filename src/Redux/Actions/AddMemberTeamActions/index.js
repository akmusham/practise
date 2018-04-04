import * as types from "../../Constants/AddMemberTeamConstants"
const axios = require('axios')
import qs from "qs"
import listMemTeam from "../ListMemTeamActions"

export const addMemberRequest = () => ({
  type: types.ADDTOTEAM_REQUEST
})
export const addMemberSuccess = data => ({
  type: types.ADDTOTEAM_SUCCESS,
  data
})
export const addMemberFail = error => ({
  type: types.ADDTOTEAM_FAIL,
  error
})

export const addmember = (email,teamId) => {
  let header = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`,
      'Content-Type': "application/json"
    }
  }
   let payload=JSON.stringify({

     teamId: teamId,
     orgId: localStorage.getItem("new_org_id"),
     email: email
   })
   console.log("payload in add mem", payload,header);
   var addmemberPayload={
     headers:header.headers,
     data:payload,
     method:'put'
   }
   console.log("addmemberPayload",addmemberPayload);


  return async dispatch => {
    dispatch(addMemberRequest())
    try {
      let data = await axios(`${process.env.SCOPE_URL}/v1/scopemanagement/teams/addmember`,addmemberPayload)
      alert("you've added member succesfully")
      dispatch(addMemberSuccess(data))

    } catch (e) {
      console.log("error",e);
      dispatch(addMemberFail(e))
    }
  }
}
