import React from "react"

class Table extends React.Component {

  constructor(props) {
    super(props)
  }

  generateHeaders(tableData) {
    if (tableData.cols.length > 0) {
      return (
        <tr>
        {tableData.cols.map((obj, index) => (<th key={obj.key}>{obj.label}</th>))}
      </tr>
    )
    }
  }
  generateRows(tableData) {
    console.log("Rows values:",tableData);
    let rows = tableData.rows
    console.log('rows',rows);
    if (rows.length != 0) {
      return rows.map((item, index) => {
        let cols = tableData.cols.map((obj, index) => (<td key={obj.key}>{item[obj.key]}</td>))
        return <tr key={index}>{cols}</tr>
      })
    }
  }
  render() {
    return (
      <table className="table">
        <thead>{this.generateHeaders(this.props.tableData)}</thead>
        <tbody>{this.generateRows(this.props.tableData)}</tbody>
      </table>
    )
  }
}
export default Table
