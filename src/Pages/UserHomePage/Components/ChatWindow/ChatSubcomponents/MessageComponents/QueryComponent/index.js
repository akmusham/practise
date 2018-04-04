import React from "react"
import Moment from "moment"
import "./Style/index.scss"
import ReactHtmlParser from "react-html-parser"
const FaCaret = require("react-icons/lib/fa/caret-left")
export default class QueryComponent extends React.Component {
  render() {
    return (
      <div className="bot-reply">
        <div className="message-container">
          <div className="message-box-container">
            <div className="message-box">{<p>{ReactHtmlParser(this.props.step.title)}</p>}</div>
            <div className="time-stamp">{Moment.unix(this.props.updatedDate).format("HH:mm")}</div>
          </div>
        </div>
      </div>
    )
  }
}
