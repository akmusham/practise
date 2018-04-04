import React from "react"
import Button from "../../../../Components/Button"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as registrationActions from "../../../../Redux/Actions/RegisterActions"
import "./Style/index.scss"

class SubmitButton extends React.Component {
  onClick(event) {

    const regProps = this.props.registrationOperations

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
  render() {
    return (
      <div>
      <button className="registera-button"
      onClick={event => this.onClick(event)}
      >{this.props.label}</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  registrationOperations: state.registrationOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(registrationActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
