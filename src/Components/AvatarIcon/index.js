import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Avatar from "material-ui/Avatar"
import Icon from "../Icon"

export default class AvatarIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Avatar
            backgroundColor={this.props.backgroundColor}
            color={this.props.color}
            icon={<Icon className={this.props.icon} />}
            size={this.props.size}
            className={this.props.className}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
