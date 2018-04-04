import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaisedButton from "material-ui/RaisedButton"

const SkillButton = props => (
  <div className="skill-button">
    <RaisedButton
      label={props.label}
      backgroundColor={props.backgroundColor}
      labelStyle={{ color: "#fff", textTransform: "capitalize" }}
      onClick={props.onClick}
    />
  </div>
)

export default SkillButton
