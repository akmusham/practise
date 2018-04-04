import React from "react"
import Moment from "moment"
import "./Style/index.scss"
import ReactHtmlParser from "react-html-parser"
const FaCaret = require("react-icons/lib/fa/caret-left")
export default class CounterComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }
  decreaseCounter(event) {
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 })
    }
  }
  increaseCounter(event) {
    this.setState({ counter: this.state.counter + 1 })
  }
  saveAnswer(event) {}
  render() {
    return (
      <div className="system-chat-row">
        <span className="pull-left bot-icon" />
        <div className="chat-leaf-quad">
          <div className="chat-leaf">
            <FaCaret className="fa-caret-left" />
            {<p>{ReactHtmlParser(this.props.step.title)}</p>}
            <span className="time-stamp">
              {Moment.unix(this.props.updatedDate).format("HH:mm")}
            </span>
            <div className="number-counter">
              <a
                className="decrease-btn"
                href="javascript:void(0);"
                onClick={event => this.decreaseCounter(event)}
              >
                -
              </a>
              <span className="counter">{this.state.counter}</span>
              <a
                className="increase-btn"
                href="javascript:void(0);"
                onClick={event => this.increaseCounter(event)}
              >
                +
              </a>
            </div>
            <button
              className="yes-btn"
              onClick={event => this.saveAnswer(event)}
              style={{ float: "right" }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  }
}
