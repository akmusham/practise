import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as loginActions from "../../../../Redux/Actions/LoginActions"
import AvatarIcon from "../../../../Components/AvatarIcon"
import SelectMenu from "./Components/SelectMenu"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import MenuItem from "material-ui/MenuItem"
import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import DropDownMenu from "material-ui/DropDownMenu"
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar"
import "./Style/index.scss"

class Appbar extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Toolbar className="appbar" style={{ backgroundColor: "transparent" }}>
          <ToolbarGroup firstChild={true} style={{ left: 15 }}>
            <SelectMenu sourceArray={this.props.loginOperations.projectList} />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton>
              <FontIcon className="fa fa-user" />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  loginOperations: state.loginOperations,
  chatWindowOperations: state.chatWindowOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)
