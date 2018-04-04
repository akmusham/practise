import React from "react"
import Moment from "moment"
import "../CounterComponent/Style/index.scss"
const FaCaret = require("react-icons/lib/fa/caret-left")

export default class PasswordComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: ""
    }
  }
  passwordHandleChange(event) {
    this.setState({ password: event.target.value })
  }
  saveAnswer() {}
  render() {
    return (
      <div className="system-chat-row">
        <span className="pull-left bot-icon" />
        <div className="chat-leaf-quad">
          <div className="chat-leaf">
            <FaCaret className="fa-caret-left" />
            <p>{this.props.step.title}</p>
            <span className="time-stamp">
              {Moment.unix(this.props.updatedDate).format("HH:mm")}
            </span>
            <input
              type="password"
              onChange={event => this.passwordHandleChange(event)}
              value={this.state.password}
              text="Text Enter"
            />
            <div style={{ width: "100%" }}>
              <button className="yes-btn" onClick={event => this.saveAnswer(event)}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
