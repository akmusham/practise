import * as types from "../../../Constants/MyStackConstants"
// import createIssue from "./createIssue"
const axios = require('axios')
import qs from "qs"

export const mystackRequest = () => ({
  type: types.MYSTACK_REQUEST
})
export const mystackSuccess = data => ({
  type: types.MYSTACK_SUCCESS,
  data
})
export const mystackFail = error => ({
  type: types.MYSTACK__FAIL,
  error
})

export const mystack = (user) => {
  let header = {
    headers: {
      'Content-Type': "application/json"
    }
  }
   let payload=JSON.stringify({
      user: user
   })
  return async dispatch => {
    dispatch(mystackRequest())
    try {
      let { data } = await axios.post(`${process.env.DIALOG_URL}/mystack`,payload,header)
      dispatch(mystackSuccess(data))

    } catch (e) {
      console.log("error",e);
      dispatch(mystackFail(e))
    }
  }
}
