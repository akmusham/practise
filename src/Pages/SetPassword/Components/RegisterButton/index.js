import React from "react"
import Button from "../../../../Components/Button"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as setPasswordActions from "../../../../Redux/Actions/SetPasswordActions"

class SubmitButton extends React.Component {
  onClick(event) {
    const regProps = this.props.setPasswordOperations
    if (
      regProps.password.length != 0 &&
      regProps.confirmpassword.length != 0 &&
      regProps.userName.length != 0
    ) {
      if (regProps.password == regProps.confirmpassword) {
        let email = window.location.search.split("=")[1]
        var params = window.location.search
          .substring(1)
          .split("&")
          .map(v => v.split("="))
          .reduce((map, [key, value]) => map.set(key, decodeURIComponent(value)), new Map())
        this.props.actions.updatePassword(
          params.get("token"),
          params.get("email"),
          params.get("org_name"),
          regProps.userName,
          regProps.password
        )
      } else {
        this.props.actions.showErrorDialog(true, "Input fields do not match")
      }
    } else {
      this.props.actions.showErrorDialog(true, "Please fill all form values")
    }
  }
  render() {
    return (
      <div>
        <Button label={this.props.label} onClick={event => this.onClick(event)} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  setPasswordOperations: state.setPasswordOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(setPasswordActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
