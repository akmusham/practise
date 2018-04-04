
import React from "react"
import "./Style/index.css"
import Table from "./Table"

const InProgressIssues = (props)=>{
    console.log("in progresss::",props);

  let tableData = {
        cols:[
          { key: 'estimate', label: 'Estimate' },
          { key: 'timespent', label: 'TimeSpent' }
        ],
        rows:[props.data.data ?props.data.data:[]]
  }

  if(props.data){
    let count = props.data.totalissues ? props.data.totalissues: 0
    return(
      <div className="inprogress-container" key="inprogress-box-container">
          <div className="inprogress-header-container">In Progress</div>
          <div className="inprogress-count">{count}</div>
          <div className="inprogress-estimate">
                <Table tableData={tableData} />
          </div>
      </div>
    )
  }
  else {
    return null
  }
}
export default InProgressIssues
