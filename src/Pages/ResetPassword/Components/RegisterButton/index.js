import React from "react"
import Button from "../../../../Components/Button"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as resetPasswordActions from "../../../../Redux/Actions/ResetPasswordActions"

class SubmitButton extends React.Component {
  onClick(event) {
    const regProps = this.props.resetPasswordOperations
    if (regProps.password.length != 0 && regProps.confirmpassword.length != 0) {
      if (regProps.password == regProps.confirmpassword) {
        console.log("window", window.location.search.split("="))
        let email = window.location.search.split("=")[1]
        this.props.actions.updatePassword(email, regProps.password)
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
  resetPasswordOperations: state.resetPasswordOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(resetPasswordActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
