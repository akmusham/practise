import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import TextField from "material-ui/TextField"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <TextField
            id={this.props.id || "basic-textfield"}
            hintText={this.props.placeholder}
            floatingLabelText={this.props.placeholder}
            type={this.props.type}
            onChange={event => this.props.onChange(event)}
            onKeyPress={event => this.props.onKeyPress(event)}
            fullWidth
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
