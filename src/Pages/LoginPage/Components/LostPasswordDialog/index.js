import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as loginActions from "../../../../Redux/Actions/LoginActions"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Dialog from "material-ui/Dialog"
import FlatButton from "material-ui/FlatButton"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "../TextField"
class LostPasswordDialog extends React.Component {
  handleClose(event) {
    this.props.actions.showLostPasswordDialog(false)
  }
  handleReset(event) {
    if (this.props.loginOperations.resetEmail.length != 0) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.loginOperations.resetEmail)
      ) {
        //emailid validation regex
        this.props.actions.sendResetEmail(this.props.loginOperations.resetEmail)
        this.props.actions.showLostPasswordDialog(false)
      } else {
        alert("emailid is Invalid")
      }
    } else {
      alert("emailid id field cannot be blank")
    }
  }
  render() {
    const actions = [
      <FlatButton label="Close" primary={true} onClick={event => this.handleClose(event)} />,
      <FlatButton label="Reset" primary={true} onClick={event => this.handleReset(event)} />
    ]

    return (
      <div>
        <MuiThemeProvider>
          <Dialog
            title="Reset Password"
            actions={actions}
            modal={false}
            open={this.props.loginOperations.openLostPasswordDialog || false}
            onRequestClose={event => this.handleClose(event)}
          >
            Enter email id below to reset password
            <TextField id="resetEmail" placeholder="Email" type="email" />
          </Dialog>
        </MuiThemeProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(LostPasswordDialog)
