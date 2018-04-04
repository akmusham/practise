import React from "react"
import ReactTable from "react-table"
import _ from "lodash"
import json2csv from "json2csv"
import fileBuilder from "../../Factory/Blob"
import ScrollBar from "../../Components/ScrollBar"
import "./Style/index.scss"
import "react-table/react-table.css"

import StandupContent from "../StandupContent"
// import SimpleLineChart from "../../Components/SimpleLineChart"
import Chartist from "chartist"

class WorklogReportComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  downloadCSV(data) {
    let date=new Date().toISOString().slice(0, 10)
    let fields = Object.keys(data[0])
    let csv = json2csv({data, fields})
    let fileURL = fileBuilder(csv, 'text/csv', `worklog_report(${date}).csv`)
  }
  componentDidMount() {
    let graph=this.props.data.graph
      var data = {
    labels: graph.labels,
    series: [
        graph.series.EstimatedTime,
        graph.series.TimeSpent,
        graph.series.Deviation
        ]
      }
    let highest = Math.max( Math.max(...graph.series.EstimatedTime),Math.max(...graph.series.TimeSpent))
    console.log(highest);
      let options = {
        high: highest,
        low: -highest,
        axisX: {
         labelInterpolationFnc: function(value, index) {
           return index % 1 === 0 ? value : null;
         }
        }
      };
      new Chartist.Bar('.ct-chart', data, options);
  }
  render() {
    let filter = [
      "Date",
      // "Project Name",
      "Issue key",
      "Summary"
      // "Progress Description",
      // "Problem Description"
    ]
    let data = this.props.data
    let tableData = data.tableData.map(row => _.omit(row, filter)) || []
    let analysisData = data.analysis
    let columns = Object.keys(tableData[0]).map((dataKey, index) => (
      {
          Header: dataKey,
          accessor: dataKey
        }
    ))
    return (<div className="worklog-container">
      <div className="summary">
           <StandupContent values={analysisData}/>
      </div>
      <div className="graph">
        <div className="ct-chart"></div>
      </div>
      <div className="table-content">
        <ReactTable data={tableData} columns={columns} defaultPageSize={10} style={{
            height: "100%"
          }} sortable={false} />
        <button style={{height:"10%"}}onClick={() => this.downloadCSV(data.tableData)}>Download Full Report</button>
      </div>
    </div>)
  }
}
export default WorklogReportComponent
