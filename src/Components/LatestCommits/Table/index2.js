import React from "react"
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table"
import FontIcon from "material-ui/FontIcon"
import "./Styles/index.css"
import { blue500, red500, green500 } from "material-ui/styles/colors"
import moment from "moment"

export default class DashTable extends React.Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: "300px",
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
                <TableRowColumn key={item[key]} style={{ width: 80 }}>
                  <FontIcon className="material-icons" color={red500}>
                    block
                  </FontIcon>
                </TableRowColumn>
              )
            } else {
              tableRowColumns.push(
                <TableRowColumn key={item[key]}>
                  <FontIcon className="material-icons" color={green500}>
                    check
                  </FontIcon>
                </TableRowColumn>
              )
            }
          } else if (key == "timestamp" || key == "url") {
            // let timestamp = moment(item[key])
            // tableRowColumns.push(
            //   <TableRowColumn key={item[key]} style={{color:'#ffffff'}}>
            //     {moment(Date()).diff(timestamp,'hours') + " hours ago"}
            //   </TableRowColumn>
            // )
          } else if (key == "culprit") {
            let timestamp = moment(item["timestamp"])
            let timestring = ""
            if (moment(Date()).diff(timestamp, "hours") < 24) {
              timestring = moment(Date()).diff(timestamp, "hours") + " hours ago"
            } else {
              timestring = moment(Date()).diff(timestamp, "days") + " days ago"
            }
            tableRowColumns.push(
              <TableRowColumn key={timestamp} style={{ color: "#c7c7c7" }}>
                <a
                  href={item["url"]}
                  style={{ color: "#c7c7c7", textDecoration: "none" }}
                  target="_blank"
                >
                  <span className="author-span">{item[key]}</span>
                  <br />
                  <span className="timestring-span">{timestring}</span>
                </a>
              </TableRowColumn>
            )
          } else {
            tableRowColumns.push(
              <TableRowColumn
                key={item[key]}
                style={{ color: "#c7c7c7", fontWeight: "bold", fontSize: 16 }}
              >
                <a
                  href={item["url"]}
                  style={{ color: "#c7c7c7", textDecoration: "none" }}
                  target="_blank"
                >
                  {item[key]}
                </a>
              </TableRowColumn>
            )
          }
        })
        tableRows.push(
          <TableRow key={index} displayBorder={true}>
            {tableRowColumns}
          </TableRow>
        )
        tableRowColumns = []
      })
      this.setState({ tableRows })
    }
  }
  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
            style={{ backgroundColor: "#3a3e57" }}
          >
            <TableRow displayBorder={false}>
              <TableHeaderColumn
                colSpan="3"
                tooltip="Latest Builds"
                style={{
                  textAlign: "left",
                  color: "#c7c7c7",
                  fontSize: 21,
                  fontFamily: "Quicksand",
                  fontWeight: 500
                }}
              >
                {this.props.tableData.tableHeader}
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
            style={{ backgroundColor: "#2c3145", color: "white", fontFamily: "Quicksand" }}
          >
            {this.state.tableRows}
          </TableBody>
        </Table>
      </div>
    )
  }
}
