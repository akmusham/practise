
import React from "react"
import "./Style/index.css"
import Table from "./Table"

const TodoBox = (data)=>{
  let tableData = {
        cols:[
          { key: 'estimate', label: 'Estimate' },
        ],
        rows:[data.data]
  }

  if(true){
    return(
      <div className="todo-container" key="todo-box-container">
          <div className="todo-header-container">ToDo</div>
          <div className="todo-count">{data.totalissues}</div>
          <div className="todo-estimate">
             <Table tableData={tableData}/>
          </div>
      </div>
    )
  }
  else {
    return null
  }
}
export default TodoBox
