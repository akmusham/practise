import * as types from "../../Constants/NewOrgConstants"
import { push } from "react-router-redux"
const axios = require('axios')
import qs from "qs"

export const createOrgRequest = () => ({
  type: types.CREATE_NEWORG_REQUEST
})
export const createOrgSuccess = data => ({
  type: types.CREATE_NEWORG_SUCCESS,
  data
})
export const createOrgFail = error => ({
  type: types.CREATE_NEWORG_FAIL,
  error
})

export const newOrg = ({OrgName,adminName,adminEmail,orgUrl,location,org_logo}) => {
  let header = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}` ,
      'Content-Type': "application/json"
    }
  }
   let payload=JSON.stringify({
     OrgName: OrgName,
     adminName: adminName,
     adminEmail: adminEmail,
     orgUrl: orgUrl,
     location: location,
     org_logo:org_logo
   })
   console.log("header  and payload in org actions", header,payload);

  return async dispatch => {
    dispatch(createOrgRequest())
    try {
      let data = await axios.put(`${process.env.SCOPE_URL}/v1/scopemanagement/org/create`,payload,header)
      if (data.status == 200 ) {
        console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data);
        alert('organization created successfully')
        localStorage.setItem("Org_Idak", data.data.data.scope[0].org_id)
        localStorage.setItem("Org_Name", data.data.data.scope[0].org_name)
        localStorage.setItem("Org_url", data.data.data.scope[0].org_url)
        localStorage.setItem("Org_location", data.data.data.scope[0].org_location)
          dispatch(push("/Profile"))
          dispatch(createOrgSuccess(data))
      }
    else if (data.status == 201) {
        alert('organization already exists')
    }
    else {
      alert('Something went wrong!!')
    }
    } catch (e) {
      console.log("error",e);
      dispatch(createOrgFail(e))
    }
  }
}
