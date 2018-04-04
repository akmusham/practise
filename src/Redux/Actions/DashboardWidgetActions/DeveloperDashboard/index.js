import * as types from "../../../Constants/DashboardWidgetConstants"
import addWidget from "../AddWidget"

const axios = require('axios')
import qs from "qs"

// export const dashboardWidgetType=(type,widgets)=>({
//   type:types.ADD_DASHBOARD_WIDGET,
//   dashboardType:type,
//   widget: widgets
// })

export const developerDashboardRequest = () => ({
  type: types.DEVELOPER_DASHBOARD_REQUEST
})
export const developerDashboardSuccess = (data) => ({
  type: types.DEVELOPER_DASHBOARD_SUCCESS,
  data
})
export const developerDashboardFail = error => ({
  type: types.DEVELOPER_DASHBOARD_FAIL,
  error
})

export const developerDashboard = (userData,widgets,value) => {
  let header = {
    headers: {
      'Content-Type': "application/json"
    }
  }
   let payload=JSON.stringify({
      user:userData,
      widgets:widgets
   })


  return async dispatch => {
    dispatch(developerDashboardRequest())
    try {
      console.log("process.env",process.env);
      let { data } = await axios.post(`https://4c81e603.ngrok.io/dashboard`,payload,header)
      console.log("data of developer ", data);
      dispatch(developerDashboardSuccess(data))
      dispatch(addWidget(value,widgets))
    } catch (e) {
      console.log("error",e);
      dispatch(developerDashboardFail(e))
    }
  }
}
