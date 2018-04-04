import React from "react"
import Moment from "moment"
import "../QueryComponent/Style/index.scss"
import ReactHtmlParser from "react-html-parser"
const FaCaret = require("react-icons/lib/fa/caret-left")
export default class AutoLoad extends React.Component {
  render() {
    return (
      <div className="system-chat-row">
        <span className="pull-left bot-icon" />
        <div className="chat-leaf-quad">
          <div className="chat-leaf">
            <FaCaret className="fa-caret-left" />
            {JSON.parse(this.props.step.serviceCallCompletionResponse.textResponse)}
            <span className="time-stamp">
              {Moment.unix(this.props.updatedDate).format("HH:mm")}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
