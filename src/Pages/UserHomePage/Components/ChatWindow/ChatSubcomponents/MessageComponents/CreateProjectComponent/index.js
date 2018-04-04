import React from "react"
import Moment from "moment"
import "../CounterComponent/Style/index.scss"
import ReactHtmlParser from "react-html-parser"
const FaCaret = require("react-icons/lib/fa/caret-left")
export default class CounterComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  saveAnswer(event) {}
  render() {
    return (
      <div className="system-chat-row">
        <span className="pull-left bot-icon" />
        <div className="chat-leaf-quad">
          <div className="chat-leaf">
            <FaCaret className="fa-caret-left" />
            <p>Do you want to create cloudbreak controller?</p>
            <button onClick={() => this.saveAnswer("Yes")} className="yes-btn">
              Yes
            </button>
            <button onClick={() => this.saveAnswer("No")} className="yes-btn">
              No
            </button>
          </div>
        </div>
      </div>
    )
  }
}
