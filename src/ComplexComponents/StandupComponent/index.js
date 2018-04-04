import React from "react"
import ReactTable from "react-table"
import _ from "lodash"
import json2csv from "json2csv"
import sampleData from "./sample.json"
import fileBuilder from "../../Factory/Blob"
import ScrollBar from "../../Components/ScrollBar"
import "./Style/index.scss"
import "react-table/react-table.css"
import StandupContent from "../StandupContent"
import Chartist from "chartist"

class StandupComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  downloadCSV(data) {
    //let date=new Date().toISOString().slice(0, 10)
    let fields = Object.keys(data[0])
    let date = new Date()
    let csv = json2csv({data, fields})
    let fileURL = fileBuilder(csv, 'text/csv', `standup_report(${date}).csv`)
  }
  componentDidMount() {
    let graphData= this.props.data.worklogChart.slice(0)
      graphData.sort(function(a,b) {
          return b.hours - a.hours;
      });
    let lableNames=graphData.map((obj,index)=>(obj.user.slice(0,6)))
    let lableValues=graphData.map((obj,index)=>(obj.hours))
      let data = {
          labels: lableNames.slice(0,9),
          series: [
            lableValues.slice(0,9)
          ]
        }
      let options = {
        fullWidth: true,
        width: $('.standup-container .graph').width(),
        height: $('.standup-container .graph').height()
      };
      console.log(options);
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
    let data = this.props.data || sampleData
    let tableData = data.tableData.map(row => _.omit(row, filter)) || []
    let analysisData = data.analysis || []
    let columns = Object.keys(tableData[0]).map((dataKey, index) => (
      {
          Header: dataKey,
          accessor: dataKey
        }
    ))
    return (<div className="standup-container">
      <div className="summary">
        <StandupContent values={analysisData}/>
      </div>
      <div className="graph">
        <div className="ct-chart"></div>
      </div>
      <div className="table-content">
        <ReactTable data={tableData} columns={columns} defaultPageSize={10} style={{
            height: "100%"
          }}/>
        <button style={{height:"10%"}}onClick={() => this.downloadCSV(data.tableData)}>Download Full Report</button>
      </div>
    </div>)
  }
}
export default StandupComponent
