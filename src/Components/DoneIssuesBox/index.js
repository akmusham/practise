
import React from "react"
import "./Style/index.css"
import Table from "./Table"

const DoneIssues = (props)=>{
  console.log("done tata::",props.data);

  let tableData = {
        cols:[
          { key: 'estimate', label: 'Estimate' },
          { key: 'timespent', label: 'TimeSpent' }
        ],
        rows:props.data.data?[props.data.data]:[]
  }

  if(props.data){
    let count = props.data.totalissues ? props.data.totalissues: 0
    return(
      <div className="done-container" key="done-box-container">
          <div className="done-header-container">Done</div>
          <div className="done-count">{count}</div>
          <div className="done-estimate">
            <Table tableData={tableData}/>
          </div>
      </div>
    )
  }
  else {
    return null
  }
}
export default DoneIssues
