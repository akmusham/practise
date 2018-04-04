import * as types from "../../../Constants/DashboardWidgetConstants"
import { showLoading, hideLoading } from "react-redux-loading-bar"
// import addWidget from "../AddWidget"

const axios = require('axios')
import qs from "qs"

export const dashboardWidgetType=(type,widgets)=>({
  type:types.ADD_DASHBOARD_WIDGET,
  dashboardType:type,
  widget: widgets
})

export const dashboardWidgetsRequest = () => ({
  type: types.DASHBOARD_WIDGET_REQUEST
})
export const dashboardWidgetsSuccess = (data) => ({
  type: types.DASHBOARD_WIDGET_SUCCESS,
  data
})
export const dashboardWidgetsFail = error => ({
  type: types.DASHBOARD_WIDGET_FAIL,
  error
})

export const dashboardData = (userData,widgets,value) => {
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
    dispatch(dashboardWidgetsRequest())
    dispatch(showLoading())
    try {
      let widgetData
      if(value=="projectDashboard"){
          let { data } = await axios.post(`${process.env.DIALOG_URL}/dashboard`,payload,header)
          widgetData = data
      }
      else if (value == "projects") {
          let { data } = await axios.post(`https://dashboard.development.techforce.ai/projects`,payload,header)
          //let { data } = await axios.post(`https://86381147.ngrok.io/dashboard`,payload,header)
          widgetData = data
      }else{
          console.log("payload::",payload);
          let { data } = await axios.post(`https://dashboard.development.techforce.ai/dashboard`,payload,header)
          //let { data } = await axios.post(`https://df2e1ed7.ngrok.io/dashboard`,payload,header)
          widgetData = data
      }
      dispatch(dashboardWidgetsSuccess(widgetData))
      dispatch(dashboardWidgetType(value,widgets))
      dispatch(hideLoading())
    } catch (e) {
      console.log("error",e);
      dispatch(dashboardWidgetsFail(e))
      dispatch(hideLoading())
    }
  }
}
