import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Dialog from "material-ui/Dialog"
import FlatButton from "material-ui/FlatButton"

class ErrorDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const actions = [<FlatButton label="Close" primary={true} onClick={this.handleClose} />]
    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          title={<h3>Error</h3>}
        />
        {this.props.error}
      </div>
    )
  }
}

export default ErrorDialog
