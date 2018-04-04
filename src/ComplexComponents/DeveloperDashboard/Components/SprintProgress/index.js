
import React from "react"
import { Progress } from 'reactstrap';
import ReactTooltip from 'react-tooltip'
import "./Style/index.css"
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

class SprintProgress extends React.Component {
    constructor(props){
      super(props)
      console.log("sprintInfo::",props);
   }
render(){
        let done = "",inprogress = "",todo=""
        if(this.props.data){
          console.log("if working");
          done = `TotalIssues: ${this.props.data.done.totalissues} <br/> Estimate: ${this.props.data.done.data.estimate}<br/>
          timespent: ${this.props.data.done.data.timespent}`
          inprogress = `TotalIssues: ${this.props.data.inprogress.totalissues} <br/> Estimate: ${this.props.data.inprogress.data.estimate}<br/>
          timespent: ${this.props.data.inprogress.data.timespent}`
          todo = `TotalIssues: ${this.props.data.todo.totalissues} <br/> Estimate: ${this.props.data.todo.data.estimate}`
      }
    return(
      <div className="sprint-bar-content" key="sprint-bar-container">
              <ReactTooltip data-place= "top" type="info" effect="float" html={true}/>
              { this.props.data ?
              <Progress multi>
                <Progress bar barClassName="done" value= {this.props.data.progress.done}><p data-tip={done}>{this.props.data.progress.done}%</p></Progress>
                <Progress bar barClassName="in-progress" value={this.props.data.progress.inprogress}><p data-tip={inprogress}>{this.props.data.progress.inprogress}%</p></Progress>
                <Progress bar barClassName="todo" value={this.props.data.progress.todo}><p data-tip={todo}>{this.props.data.progress.todo}%</p></Progress>
                <Progress bar barClassName="extra" value={this.props.data.progress.extra}>{this.props.data.progress.extra}%</Progress>
              </Progress> :
              <Progress multi>
                <Progress bar barClassName="empty" value= {100}>None</Progress>
              </Progress> }
          <div  className="sprint-lables">
                <div id="done"/> <h5 id="h5-lable">Done</h5>
                <div id="inprogress"/><h5 id="h5-lable">In Progress</h5>
                <div id="todo"/> <h5 id="h5-lable">ToDo</h5>
                <div id="extra"/> <h5 id="h5-lable">Extra Effort</h5>
          </div>
      </div>
    )
  }
}
export default SprintProgress
