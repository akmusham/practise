import React from "react"
import Moment from "moment"
import "./Style/index.scss"
const FaCaret = require("react-icons/lib/fa/caret-left")
export default class QueryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      range: 1
    }
  }
  setRange(event) {
    this.setState({ range: event.target.value })
  }
  render() {
    return (
      <div className="system-chat-row">
        <span className="pull-left bot-icon" />
        <div className="chat-leaf-quad">
          <div className="chat-leaf">
            <FaCaret className="fa-caret-left" />
            <p>{this.props.step.title}</p>
            <div className="custom-range-quad1">
              <span> {this.state.range} </span>
              <div>
                <input
                  type="range"
                  name="points"
                  min={1}
                  max={20}
                  value={this.state.range}
                  onChange={event => this.setRange(event)}
                />
              </div>
              <div className="clearfix" />
            </div>
            <span className="time-stamp">
              {Moment.unix(this.props.updatedDate).format("HH:mm")}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
