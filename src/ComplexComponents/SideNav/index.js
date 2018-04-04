import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Divider from "material-ui/Divider"
import IconMenu from "material-ui/IconMenu"
import MenuItem from "material-ui/MenuItem"
import IconButton from "material-ui/IconButton"
import Download from "material-ui/svg-icons/file/file-download"
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert"
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right"
import Icon from "../../Components/Icon"
import Nav from "../../Components/Nav"
import Card from "../../Components/Card"
import navProps from "./NavigationData"
import SettingsMenu from "./Components/SettingsMenu"
import ChatButton from "./Components/ChatButton"
import FeedbackButton from "./Components/FeedbackButton"
import NodeRedButton from "./Components/NodeRedButton"

import "./Style/index.scss"

export default class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="navContainer">
        <div className="nav-child-container">
          {navProps.map((obj, index) => <Nav {...obj} key={index} />)}
          <div className="nav">
            <div className="navIcon">
              <ChatButton />
              <span>Chat</span>
            </div>
          </div>
          <div className="nav">
            <div className="navIcon">
              <FeedbackButton />
              <span>Feedback</span>
            </div>
          </div>
          <div className="nav">
            <div className="navIcon">
              <SettingsMenu />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
