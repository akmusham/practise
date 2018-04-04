import React from "react"
import Moment from "moment"
import "./Style/index.scss"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import LinearProgress from "material-ui/LinearProgress"

const FaCaret = require("react-icons/lib/fa/caret-left")
export default class QueryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div className="system-chat-row">
        <span className="pull-left bot-icon" />
        <div className="chat-leaf-quad">
          <div className="chat-leaf">
            <FaCaret className="fa-caret-left" />
            <p>{this.props.step.title}</p>
            <div className="progress-quad">
              <div>
                <MuiThemeProvider>
                  <LinearProgress mode="determinate" value={20} />
                </MuiThemeProvider>
                <span className="progress-counter">{this.state.counter}%</span>
              </div>
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
