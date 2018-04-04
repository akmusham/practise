import React from "react"
import { withRouter, Route, Switch } from "react-router-dom"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import LoadingBar from "react-redux-loading-bar"
import { NotificationContainer, NotificationManager } from "react-notifications"

import LoginPage from "../../Pages/LoginPage"
import LoginPageV2 from "../../Pages/RegisterPageV2"
import RegisterPage from "../../Pages/RegisterPage"
import UserHomePage from "../../Pages/UserHomePage"
import ResetPassword from "../../Pages/ResetPassword"
import Organization from "../../Pages/Organization"
import AddOrg from "../../Pages/AddOrganization"
import AddTeam from "../../Pages/AddTeam"
import { hideNotification } from "../../Redux/Actions/NotificationActions"
import store, { history } from "../../Redux/Store"

import "react-notifications/lib/notifications.css"
import "./Style/index.scss"

class Routes extends React.Component {
  componentDidUpdate() {
    let notification = { ...this.props.notification }
    if (notification.notify) {
      NotificationManager[notification.level](
        notification.message,
        notification.level.toUpperCase(),
        3000
      )
      this.props.hideNotification()
    }
  }

  render() {
    return (
      <div className="app-container">
        <LoadingBar showFastActions style={{ backgroundColor: 'blue', height: '2.5px' }} />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/v2" component={LoginPageV2} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/user" component={UserHomePage} />
          <Route path="/reset" component={ResetPassword} />
          <Route path="/Profile" component={Organization} />
          <Route path="/Addteam" component={AddTeam} />
          <Route path="/AddOrg" component={AddOrg} />
        </Switch>
        <NotificationContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notification: state.notificationOperations
})

const mapDispatchToProps = dispatch => ({
  hideNotification: bindActionCreators(hideNotification, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
