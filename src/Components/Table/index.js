import React from "react"

class Table extends React.Component {

  constructor(props) {
    super(props)
  }

  generateHeaders(tableData) {
    if (tableData.tableCol.length > 0) {
      return (
        <tr>
        {tableData.tableCol.map((obj, index) => (<th key={obj.key}>{obj.label}</th>))}
      </tr>
    )
    }
  }
  generateRows(tableData) {
    let rows = tableData.tableRowData
    if (rows.length > 0) {
      return rows.map((item, index) => {
        let cols = tableData.tableCol.map((obj, index) => (<td key={obj.key}>{item[obj.key]}</td>))
        return <tr key={index}>{cols}</tr>
      })
    }
  }
  render() {
    return (
      <table className="table">
        <caption className="table-head">{this.props.tableData.tableHeader}</caption>
        <thead>{this.generateHeaders(this.props.tableData)}</thead>
        <tbody>{this.generateRows(this.props.tableData)}</tbody>
      </table>
    )
  }
}
export default Table
