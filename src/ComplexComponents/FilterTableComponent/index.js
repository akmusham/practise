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
    let date = new Date()
    let fields = Object.keys(data[0])
    let csv = json2csv({ data, fields })
    let fileURL = fileBuilder(csv, 'text/csv', `issues_report_${date}.csv`)
  }
  render() {
    let data = this.props.data || []
    let columns = Object.keys(data[0]).map((dataKey, index) => ({
      Header: dataKey,
      accessor: dataKey,
      filterMethod: (filter, row) =>
                    row[filter.id].toUpperCase().startsWith(filter.value.toUpperCase())
    }))
    return (
      <div className="table-component">
        <ScrollBar>
          <button onClick={() => this.downloadCSV(data)}>Download</button>
          <ReactTable data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value.toUpperCase()}
          columns={columns} />
        </ScrollBar>
      </div>
    )
  }
}
