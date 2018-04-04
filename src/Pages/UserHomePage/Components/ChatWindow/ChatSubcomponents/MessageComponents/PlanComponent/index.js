import React from "react"
import Moment from "moment"
import "./Style/index.scss"
import randomID from "random-id"

const FaCaret = require("react-icons/lib/fa/caret-left")

export default class QueryComponent extends React.Component {
  selectPlan(event) {
    console.log("event", event)
  }
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
          </div>
          <div className="chat-table-leaf">
            <table>
              <tbody>
                <tr key={randomID(20, "aA")} onClick={event => this.selectPlan(event)}>
                  <td>
                    <i className="material-icons">show_chart</i>
                    <span className="rate-span">
                      <span>{"some dummy text"}</span>
                      {"price value"}
                    </span>
                  </td>
                  <td>
                    <span className="price-span">{20}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
