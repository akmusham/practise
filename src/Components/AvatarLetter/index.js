import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Avatar from "material-ui/Avatar"

export default class AvatarLetter extends React.Component {
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
            size={this.props.size}
            className={this.props.className}
          >
            {this.props.children}
          </Avatar>
        </MuiThemeProvider>
      </div>
    )
  }
}
