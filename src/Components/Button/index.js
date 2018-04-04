import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaisedButton from "material-ui/RaisedButton"
import "./Style/index.scss"
export default class App extends React.Component {
  render() {
      console.log("onClick Event:::",this.props);

    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton
            label={this.props.label}
            onClick={event => this.props.onClick(event)}
            backgroundColor="#1874F0"
            labelColor="#ffffff"
            labelStyle={{ fontSize: 12, fontWeight: "bold", textTransform: "none" }}
            disabled={this.props.disabled}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
