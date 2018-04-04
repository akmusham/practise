import React from "react"
import DropDownMenu from "material-ui/DropDownMenu"
import MenuItem from "material-ui/MenuItem"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import randomID from "random-id"
import { BootstrapTable, TableHeaderColumn, SearchField } from "react-bootstrap-table"
import "./Style/react-bootstrap-table.scss"

export default class MainWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderedTable: []
    }
  }
  componentWillReceiveProps(nextProps) {
    if (Object.getOwnPropertyNames(nextProps.sourceData).length != 0) {
      const parseData = JSON.parse(nextProps.sourceData.serviceCallCompletionResponse.textResponse)
      let renderedTable = []
      renderedTable.push(
        <BootstrapTable data={parseData.details.tableData} key={randomID(20, "aA")}>
          {parseData.details.columns.map(function(tableData, index) {
            const RANDOM_IDENTIFIER = randomID(20, "aA")
            return (
              <TableHeaderColumn
                dataField={tableData.name}
                isKey={index === 0 ? true : false}
                key={RANDOM_IDENTIFIER}
                width="100"
              >
                {tableData.title}
              </TableHeaderColumn>
            )
          })}
        </BootstrapTable>
      )
      this.setState({ renderedTable })
    }
  }
  render() {
    return <div className="table-responsive">{this.state.renderedTable}</div>
  }
}
