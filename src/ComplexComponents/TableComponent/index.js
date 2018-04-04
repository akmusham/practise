import React from "react"
import ReactTable from "react-table"
import json2csv from "json2csv"
import fileBuilder from "../../Factory/Blob"
import ScrollBar from "../../Components/ScrollBar"
import "./Style/index.scss"
import "react-table/react-table.css"

export default class TableComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  downloadCSV(data) {
    let fields = Object.keys(data[0])
    let csv = json2csv({ data, fields })
    let fileURL = fileBuilder(csv, 'text/csv', 'table.csv')
  }
  render() {
    let data = this.props.data || []
    let columns = Object.keys(data[0]).map((dataKey, index) => ({
      Header: dataKey,
      accessor: dataKey
    }))
    return (
      <div className="table-component">
        <ScrollBar>
          <ReactTable data={data} columns={columns} />
          <button onClick={() => this.downloadCSV(data)}>Download</button>
        </ScrollBar>
      </div>
    )
  }
}
