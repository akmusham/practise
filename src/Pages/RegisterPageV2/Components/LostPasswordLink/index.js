import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as loginActions from "../../../../Redux/Actions/LoginActions"
import { browserHistory } from "react-router"

class LostPassWordLink extends React.Component {
  onClick(event) {
    this.props.actions.showLostPasswordDialog(true)
  }
  render() {
    return (
      <div>
        <div onClick={event => this.onClick(event)}>
          <p className="linktext">
            <a href="javascript:void(0)">Lost password?</a>
          </p>
        </div>
      </div>
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
