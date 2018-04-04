import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaisedButton from "material-ui/RaisedButton"

const BotButton = props => (
  <div className="bot-button">
    <RaisedButton
      label={props.label}
      backgroundColor= {props.backgroundColor || "#1671e9"}
      labelStyle={{ color: "#fff", fontWeight: "bold", textTransform: "capitalize" }}
      onClick={props.onClick}
    />
  </div>
)

export default BotButton
