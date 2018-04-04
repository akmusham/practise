import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as registerActions from "../../../../Redux/Actions/RegisterActions"
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
            title="Error"
            actions={actions}
            modal={false}
            open={this.props.registrationOperations.openErrorDialog || false}
            onRequestClose={event => this.handleClose(event)}
          >
            {this.props.registrationOperations.errorDialogueMessage}
          </Dialog>
        </MuiThemeProvider>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  registrationOperations: state.registrationOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(registerActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDialog)
