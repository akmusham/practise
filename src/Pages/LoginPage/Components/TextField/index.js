import React from "react"
import TextField from "../../../../Components/TextField"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as loginActions from "../../../../Redux/Actions/LoginActions/"
import "./Style/index.scss"


export class TextFieldClass extends React.Component {
  onChange(event) {
    if (event.target.type == "email") {
      this.props.actions.updateEmail(event.target.value)
      this.props.actions.updateResetEmail(event.target.value)
    } else {
      this.props.actions.updatePassword(event.target.value)
    }
  }
  onKeyPress(event) {
    if (event.charCode == 13) {
      if (
        this.props.loginOperations.email.length != 0 &&
        this.props.loginOperations.password.length != 0
      ) {
        if (
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.loginOperations.email)
        ) {
          //emailid validation regex
          this.props.actions.userSignIn(
            this.props.loginOperations.email,
            this.props.loginOperations.password
          )
        } else {
          this.props.actions.showErrorDialog(true, "Please enter valid emailid")
        }
      } else {
        this.props.actions.showErrorDialog(
          true,
          "The input fields cannot be empty.Please fill both the values"
        )
      }
    }
  }
  render() {
    return (
      <input
      className="input-field"
      onChange={e => this.onChange(e)}
      type={this.props.type}
      name={this.props.name}
      placeholder={this.props.placeholder}
      onKeyPress={e => this.onKeyPress(e)}
       />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  loginOperations: state.loginOperations
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TextFieldClass)
