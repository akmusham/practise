import React from "react"
import TextField from "../../../../Components/TextField"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as resetPasswordActions from "../../../../Redux/Actions/ResetPasswordActions"

class TextFieldClass extends React.Component {
  onChange(event) {
    this.props.actions.updateFormValues(event.target.id, event.target.value)
  }
  onKeyPress(event) {
    if (event.charCode == 13) {
      const regProps = this.props.resetPasswordOperations
      if (
        regProps.fullName.length != 0 &&
        regProps.regEmail.length != 0 &&
        regProps.companyName.length != 0 &&
        regProps.regPassword.length != 0
      ) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(regProps.regEmail)) {
          //emailid validation regex
          this.props.actions.userRegistration(
            regProps.fullName,
            regProps.regEmail,
            regProps.companyName,
            regProps.regPassword
          )
        } else {
          this.props.actions.showErrorDialog(true, "Please enter valid emailid")
        }
      } else {
        this.props.actions.showErrorDialog(
          true,
          "The input fields cannot be empty.Please fill up all the fields"
        )
      }
    }
  }
  render() {
    return (
      <div>
        <TextField
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={event => this.onChange(event)}
          onKeyPress={event => this.onKeyPress(event)}
          type={this.props.type}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(TextFieldClass)
