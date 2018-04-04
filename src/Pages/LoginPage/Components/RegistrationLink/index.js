import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as loginActions from "../../../../Redux/Actions/LoginActions"
import { browserHistory } from "react-router"

import "./Styles/index.scss"

class RegistrationLink extends React.Component {
  render() {
    return (
          <a href="/register" className="register-button">
            Register Here
          </a>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  loginOperations: state.loginOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationLink)
