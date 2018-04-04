import React from "react"
import { Switch, Route } from "react-router-dom"
import { Chat, DirectLine } from "techforce-botframework-webchat-autosuggestions"
import Draggable from "react-draggable"
import SideNav from "../../ComplexComponents/SideNav"
import ChatWindow from "./Components/ChatWindow"
import SkillPage from "../../SubPages/SkillPage"
import BotPage from "../../SubPages/BotPage"
import MainWindow from "../../Scenes/MainWindow"
import Appbar from "./Components/Appbar"
import "./Style/index.scss"
import authenticateApiRequest from "../../Redux/Actions/LogoutActions/authenticateApiRequest"
import { mystatehandler } from "../../Redux/Actions/MsChatActions"

export default class UserHomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state.user = {
      id: localStorage.getItem("full_name"),
      user_id: localStorage.getItem("user_id"),
      full_name: localStorage.getItem("full_name"),
      org_id: localStorage.getItem("org_id"),
      track_id: localStorage.getItem("track_id"),
      secret: localStorage.getItem("secret")
    }
    this.state.botConnection = new DirectLine({
      secret: this.state.user.secret,
      webSocket: "true" // defaults to true
    })
  }
  render() {
    return (
      <div className="main-container">
        {/* <Appbar /> */}
        <div className="page-container">
          <SideNav />
          <div className="mid-page-container">
            <Switch>
              <Route path="/user/speed" component={() => <MainWindow {...this.state} />} />
              <Route path="/user/skill" component={() => <SkillPage {...this.state} />} />
              <Route path="/user/bot" component={() => <BotPage {...this.state} />} />
            </Switch>
          </div>
          <Draggable
            cancel=".wc-console,.wc-message,button"
            handle=".chat-window-container"
            >
          <div className="chat-window-container">
          <div className="chat-window">
          {<Chat
              botConnection={this.state.botConnection}
              user={this.state.user}
              websocket={true}
              mystatehandler={mystatehandler}
            /> }
          </div>
        </div>
      </Draggable>
      </div>
    </div>
    )
  }
}
