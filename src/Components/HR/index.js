import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Divider from "material-ui/Divider"

class HR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <MuiThemeProvider>
        <Divider />
      </MuiThemeProvider>
    )
  }
}

export default HR
