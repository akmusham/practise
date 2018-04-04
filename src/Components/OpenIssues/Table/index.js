import React from "react"

class Table extends React.Component {

  constructor(props) {
    super(props)
  }

  generateHeaders(tableData) {
    if (tableData.tableCol.length > 0) {
      return (
        <tr>
        {tableData.tableCol.map((obj, index) => (<th style={{ color: "#c7c7c7" }} key={obj.key}>{obj.label}</th>))}
      </tr>
    )
    }
  }
  generateRows(tableData) {
    let rows = tableData.tableRowData
    if (rows.length > 0) {
      return rows.map((item, index) => {
        let cols = tableData.tableCol.map((obj, index) =>(
          <td style={{ color: "#c7c7c7"}} key={obj.key}>
            <div className="issue-key">
              <a href={item.url} style={{ color: "#c7c7c7", textDecoration: "none" }} target="_blank">{item[obj.key]}</a>
            </div>
        </td>))
        return <tr style={{ color: "#c7c7c7"}} key={index}>{cols}</tr>
      })
    }
  }
  render() {
    return (
      <div className="table-content">
        <table className="table" id="table-dash">
          <thead>{this.generateHeaders(this.props.tableData)}</thead>
          <tbody>{this.generateRows(this.props.tableData)}</tbody>
        </table>
      </div>
    )
  }
}
export default Table
