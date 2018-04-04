
import React from "react"
import "./Style/index.css"
import Table from "./Table"

const ScopeChange = (props)=>{
  let tableData = {
        cols:[
          { key: 'estimate', label: 'Estimate' },
        ],
        rows:props.data.data?[props.data.data]:[]
  }
  if(props.data){
         let count = props.data.totalissues ? props.data.totalissues: 0
    return(
      <div className="todo-container" key="todo-box-container">
          <div className="sprint-scope-header-container">Scope Change</div>
          <div className="sprint-scope-count">5</div>
          <div className="sprint-scope-estimate">
             <Table tableData={tableData}/>
          </div>
      </div>
    )
  }
  else {
    return null
  }
}
export default ScopeChange
