import React from "react"
import { Progress } from 'reactstrap';
import "./Styles/index.scss"

const ProjectCard = ( props ) => {
    if(props.data.progress.done){
    return (
      <div className="project-card">
         <div className="card-title">{props.data.title}</div>
         <div className="card-type">{props.data.type}</div>
         <div className="card-process">
           <Progress multi>
             <Progress bar barClassName="done" value={props.data.progress.done}>{props.data.progress.done}%</Progress>
             <Progress bar barClassName="in-progress" value={props.data.progress.inprogress}>{props.data.progress.inprogress}% </Progress>
             <Progress bar barClassName="todo" value={props.data.progress.todo}>{props.data.progress.todo}% </Progress>
             <Progress bar barClassName="extra" value={props.data.progress.extra}>{props.data.progress.extra}% </Progress>
           </Progress>
         </div>
         <div  className="card-lables">
               <div id="done"/> <h5 id="h5-lable">Done</h5>
               <div id="inprogress"/><h5 id="h5-lable">In Progress</h5>
               <div id="todo"/> <h5 id="h5-lable">ToDo</h5>
               <div id="extra"/> <h5 id="h5-lable">Extra Effort</h5>
         </div>
      </div>
    )}
    else{
      return null
    }
}

export default ProjectCard
