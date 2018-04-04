import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Avatar from "material-ui/Avatar"

export default class AvatarImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Avatar src={this.props.src} size={this.props.size} className={this.props.className} />
        </MuiThemeProvider>
      </div>
    )
  }
}
