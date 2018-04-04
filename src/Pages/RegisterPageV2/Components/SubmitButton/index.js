import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as loginActions from "../../../../Redux/Actions/LoginActions"
import Button from "../../../../Components/Button"
import "./Style/index.scss"
export class SubmitButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false
    }
  }
  onClick(event) {
    if (
      this.props.loginOperations.email.length != 0 &&
      this.props.loginOperations.password.length != 0
    ) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.loginOperations.email)) {
        //emailid validation regex
        this.props.actions.userSignIn(
          this.props.loginOperations.email,
          this.props.loginOperations.password
        )
        this.setState({ disabled: true })
      } else {
        this.props.actions.showErrorDialog(true, "Please enter valid emailid")
      }
    } else {
      this.props.actions.showErrorDialog(
        true,
        "The input fields cannot be empty.Please fill up both the fields"
      )
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loginOperations.openErrorDialog) {
      this.setState({ disabled: false })
    }
  }
  render() {
    return (
      <div className="submit-button-container">
        <Button
          label={this.props.label}
          onClick={event => this.onClick(event)}
          disabled={this.state.disabled}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
