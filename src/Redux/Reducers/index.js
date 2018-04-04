import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { loadingBarReducer } from 'react-redux-loading-bar'
import loginOperations from "./LoginReducers"
import registrationOperations from "./RegistrationReducers"
import chatWindowOperations from "./ChatWindowReducers"
import skillOperations from "./SkillReducers"
import botOperations from "./BotReducers"
import notificationOperations from "./NotificationReducers"
import logoutOperations from "./LogoutReducers"
import mschatOperations from "./MsChatReducers"
import newTeamOperations from "./NewTeamReducer"
import backchannelOperations from "./BackchannelReducers"
import resetPasswordOperations from "./ResetPasswordReducers"
import dashboardWidgetOperations from "./DashboardWidgetReducers"
import mystackOperations from "./MyStackReducer"
import agileDashboardOperations from "./AgileDashboardReducer/ProjectData.json"
import listTeamOperations from "./ListTeamReducers"
import listMemTeamOperations from "./ListMemTeamReducers"
import inviteUserOperations from "./InviteUserReducers"
import addMemTeamOperations from "./AddMemberTeamReducer"
import deleteTeamOperations from "./DeleteTeamReducer"
import editTeamOperations from "./EditTeamReducers"

export default combineReducers({
  loadingBar: loadingBarReducer,
  registrationOperations: registrationOperations,
  loginOperations: loginOperations,
  chatWindowOperations: chatWindowOperations,
  skillOperations: skillOperations,
  botOperations: botOperations,
  notificationOperations: notificationOperations,
  routing: routerReducer,
  logoutOperations: logoutOperations,
  newTeamOperations: newTeamOperations,
  mschatOperations: mschatOperations,
  backchannelOperations: backchannelOperations,
  resetPasswordOperations: resetPasswordOperations,
  dashboardWidgetOperations: dashboardWidgetOperations,
  mystackOperations: mystackOperations,
  agileDashboardData:agileDashboardOperations,
  listTeamOperations: listTeamOperations,
  listMemTeamOperations:listMemTeamOperations,
  inviteUserOperations:inviteUserOperations,
  addMemTeamOperations:addMemTeamOperations,
  deleteTeamOperations:deleteTeamOperations,
  editTeamOperations:editTeamOperations
})
