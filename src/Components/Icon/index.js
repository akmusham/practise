import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import FontIcon from "material-ui/FontIcon"

export default class Icon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <FontIcon
            className={this.props.className}
            color={this.props.color}
            hoverColor={this.props.hoverColor}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
