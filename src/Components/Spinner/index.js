import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import CircularProgress from "material-ui/CircularProgress"

import "./Style/index.scss"

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="spinner-container">
        <MuiThemeProvider>
          <CircularProgress size={this.props.size} thickness={this.props.thickness} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Spinner
