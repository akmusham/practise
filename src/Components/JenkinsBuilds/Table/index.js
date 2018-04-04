import React from "react"
import FontIcon from "material-ui/FontIcon"
import "./Styles/index.css"
import { blue500, red500, green500 } from "material-ui/styles/colors"
import moment from "moment"

export default class DashTable extends React.Component {
  state = {
    tableRows: []
  }
  componentDidMount() {
    this.populateTableRows(this.props.tableData)
  }
  componentWillReceiveProps(nextProps) {
    this.populateTableRows(nextProps.tableData)
  }
  populateTableRows(tableData) {
    let tableRowColumns = [],
      tableRows = []
    if (tableData.tableRowData.length > 0) {
      tableData.tableRowData.map((item, index) => {
        Object.keys(item).forEach(function(key) {
          if (key == "status") {
            if (item[key] == "FAILURE") {
              tableRowColumns.push(
                <td key={item[key]} style={{ textAlign: "center" }} className="table-td">
                  <FontIcon
                    className="material-icons"
                    color={red500}
                    style={{ fontSize: "34px", verticalAlign: "middle" }}
                  >
                    block
                  </FontIcon>
                </td>
              )
            } else {
              tableRowColumns.push(
                <td
                  key={item[key]}
                  className="table-td"
                  style={{ textAlign: "center", objectFit: "contain" }}
                >
                  <FontIcon
                    className="material-icons"
                    color={green500}
                    style={{ fontSize: "34px", verticalAlign: "middle" }}
                  >
                    check
                  </FontIcon>
                </td>
              )
            }
          } else if (key == "timestamp" || key == "url") {
          } else if (key == "culprit") {
            let timestamp = moment(item["timestamp"])
            let timestring = ""
            if (moment(Date()).diff(timestamp, "hours") < 24) {
              timestring = moment(Date()).diff(timestamp, "hours") + " hours ago"
            } else {
              timestring = moment(Date()).diff(timestamp, "days") + " days ago"
            }
            tableRowColumns.push(
              <td key={timestamp} style={{ color: "#c7c7c7" }} className="table-td">
                <div className="name-hours">
                  <a
                    href={item["url"]}
                    style={{ color: "#c7c7c7", textDecoration: "none" }}
                    target="_blank"
                  >
                    <span className="author-span">{item[key]}</span>
                    <br />
                    <span className="timestring-span">{timestring}</span>
                  </a>
                </div>
              </td>
            )
          } else if (key == "idNumber") {
            tableRowColumns.push(
              <td
                key={item[key]}
                className="table-td"
              >
                <a
                  href={item["url"]}
                  style={{ color: "#c7c7c7", textDecoration: "none" }}
                  target="_blank"
                >
                  <span className="table-number">#{item[key]}</span>
                </a>
              </td>
            )
          } else {
            tableRowColumns.push(
              <td
                key={item[key]}
                className="table-td"
              >
                <a
                  href={item["url"]}
                  style={{ color: "#c7c7c7", textDecoration: "none" }}
                  target="_blank"
                >
                  <span className="table-number">#{item[key]}</span>
                </a>
              </td>
            )
          }
        })
        tableRows.push(
          <div className="table-row">
          <tr id="table-row-container" key={index} className="table-row-container">
            {tableRowColumns}
          </tr>
        </div>
        )
        tableRowColumns = []
      })
      this.setState({ tableRows })
    }
  }
  render() {
    return (
      <div className="table-container">
        <table className="table" id="dash-table">
          <caption className="table-head">{this.props.tableData.tableHeader}</caption>
          <tbody className="table-body">{this.state.tableRows}</tbody>
        </table>
      </div>
    )
  }
}
