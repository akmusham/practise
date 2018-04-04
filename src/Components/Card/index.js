import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Paper from "material-ui/Paper"

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper
          circle={this.props.circle}
          rounded={this.props.rounded}
          zDepth={this.props.zDepth}
          onMouseEnter={() => this.props.onMouseEnter()}
          onMouseLeave={() => this.props.onMouseLeave()}
          onClick={e => this.props.onClick(e)}
          className={this.props.className}
          style={{ backgroundColor: this.props.backgroundColor || "#fff" }}
        >
          {this.props.children}
        </Paper>
      </MuiThemeProvider>
    )
  }
}
