import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as loginActions from "../../../../Redux/Actions/LoginActions"
import { browserHistory } from "react-router"
import "./Style/index.scss"

class LostPassWordLink extends React.Component {
  onClick(event) {
    this.props.actions.showLostPasswordDialog(true)
  }
  render() {
    return (
            <a onClick={event => this.onClick(event)} className="forgot-password" href="javascript:void(0)">Forgot password?</a>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  loginOperations: state.loginOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LostPassWordLink)
