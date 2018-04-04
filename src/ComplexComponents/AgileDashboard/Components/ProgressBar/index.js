
import React from "react"
import { Progress } from 'reactstrap';
import "./Style/index.css"

const ProgressBar = (data)=>{
  console.log("progress",data);
  if(true){
    return(
      <div className="progress-bar-content" key="progress-bar-container">
          <div className="header-container">
              {data.name}
          </div>
          <div className="bar">
              <Progress multi>
                <Progress bar barClassName="done" value={data.done}>{data.done}%</Progress>
                <Progress bar barClassName="in-progress" value={data.inprogress}>{data.inprogress}%</Progress>
                <Progress bar barClassName="todo" value={data.todo}>{data.todo}%</Progress>
                <Progress bar barClassName="extra" value={data.extra}>{data.extra}%</Progress>
              </Progress>
          </div>
      </div>
    )
  }
  else {
    return null
  }
}
export default ProgressBar
