
import React from "react"
import "./Style/index.css"
import Table from "./Table"

const TodoBox = (props)=>{
  console.log("TodoBox data",props.data);
  let tableData = {
        cols:[
          { key: 'estimate', label: 'Estimate' },
        ],
        rows:props.data.data ? [props.data.data]:[]
        }
  if(props.data){
         let count = props.data.totalissues ? props.data.totalissues: 0
    return(
      <div className="todo-container" key="todo-box-container">
          <div className="todo-header-container">To Do</div>
          <div className="todo-count">{count}</div>
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
