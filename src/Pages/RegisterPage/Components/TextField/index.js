import React from "react"
import TextField from "../../../../Components/TextField"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as registrationActions from "../../../../Redux/Actions/RegisterActions"
import "./Style/index.scss"

class TextFieldClass extends React.Component {
  onChange(event) {
    this.props.actions.updateFormValues(event.target.id, event.target.value)
  }
  onKeyPress(event) {
    if (event.charCode == 13) {
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
  }
  render() {
    return (
      <div>
      <input
      id={this.props.id}
      className="input-field"
      onChange={e => this.onChange(e)}
      type={this.props.type}
      name={this.props.name}
      placeholder={this.props.placeholder}
      onKeyPress={e => this.onKeyPress(e)}
       />
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

export default connect(mapStateToProps, mapDispatchToProps)(TextFieldClass)
