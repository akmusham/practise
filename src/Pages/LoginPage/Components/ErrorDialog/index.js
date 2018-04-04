import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as loginActions from "../../../../Redux/Actions/LoginActions"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Dialog from "material-ui/Dialog"
import FlatButton from "material-ui/FlatButton"
import RaisedButton from "material-ui/RaisedButton"

class ErrorDialog extends React.Component {
  handleClose(event) {
    this.props.actions.showErrorDialog(false, "")
  }
  render() {
    const actions = [
      <FlatButton label="Close" primary={true} onClick={event => this.handleClose(event)} />
    ]

    return (
      <div>
        <MuiThemeProvider>
          <Dialog
            title="Alert"
            actions={actions}
            modal={false}
            open={this.props.loginOperations.openErrorDialog || false}
            onRequestClose={event => this.handleClose(event)}
          >
            {this.props.loginOperations.errorDialogueMessage}
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

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDialog)
