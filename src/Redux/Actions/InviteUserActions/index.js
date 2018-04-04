import * as types from "../../Constants/InviteUserConstants"
const axios = require('axios')
import qs from "qs"

export const inviteUserRequest = () => ({
  type: types.INVITEUSER_REQUEST
})
export const inviteUserSuccess = data => ({
  type: types.INVITEUSER_SUCCESS,
  data
})
export const inviteUserFail = error => ({
  type: types.INVITEUSER_FAIL,
  error
})

export const newmember = ({email,username}) => {
  let header = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}`,
      'Content-Type': "application/json",
      "orgId": localStorage.getItem("new_org_id")
    }
  }
   let payload=JSON.stringify({
     email: email,
     username:username
   })

   console.log("invite payload",payload,header);

  return async dispatch => {
    dispatch(inviteUserRequest())
    try {
      let data = await axios.post(`${process.env.SCOPE_URL}/v1/scopemanagement/org/addmemberviainvite`,payload,header)
      alert("you've invite member succesfully")
      dispatch(inviteUserSuccess(data))

    } catch (e) {
      console.log("error",e);
      dispatch(inviteUserFail(e))
    }
  }
}
