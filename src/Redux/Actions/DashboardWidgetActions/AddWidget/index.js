import * as types from "../../../Constants/DashboardWidgetConstants"

export const addDashboardWidget = (type, widget) => ({
  type: types.ADD_DASHBOARD_WIDGET,
  dashboardType: type,
  widget: widget
})
