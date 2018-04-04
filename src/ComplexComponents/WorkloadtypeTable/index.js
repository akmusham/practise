import React from "react"
import "./Style/index.css"

import loadData from "./workload.json"

class WorkloadtypeTable extends React.Component {

  constructor(props) {
    super(props)
  }

  generateHeaders(columns) {
      return (
        <tr key={"id"}>
        {columns.map((obj) => (<th id="th-header" key={obj}>{obj}</th>))}
      </tr>
    )
  }
  generateRows(loadData){
    if (loadData.tableData.length > 0) {
      return loadData.tableData.map((item, index) => {
        return( <tr id="td-set" key={index}>
                   { loadData.columns.map( (str) => <td id="td-set" key={item[str]}>{item[str]}</td>)}
                </tr>)
      })
    }
  }
  render() {
    return (
      <table border="1" className="workload-container">
        <thead>{this.generateHeaders(loadData.columns)}</thead>
        <tbody>{this.generateRows(loadData)}</tbody>
      </table>
    )
  }
}
export default WorkloadtypeTable
