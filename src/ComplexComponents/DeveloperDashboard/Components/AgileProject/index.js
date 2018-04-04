
import React from "react"
import { Progress } from 'reactstrap';

import ReactTooltip from 'react-tooltip'

import "./Style/index.css"
import SprintProgress from "../SprintProgress"
import DoneIssues from '../../../../Components/DoneIssuesBox'
import InProgressIssues from '../../../../Components/InProgressIssuesBox'
import TodoBox from '../TodoBox'
import ScopeChange from '../ScopeChange'
import BarGraph from "../BarGraph"

const axios = require('axios')

class AgileProject extends React.Component{
    constructor(props){
      super(props)
      console.log("AgileProject data::",props);
      if(props.data.length > 0){
          this.state ={
            projects: props.data[1].data.projects,
            pdone:props.data[1].data.done,
            pinprogress:props.data[1].data.inprogress,
            ptodo:props.data[1].data.todo,
            name: props.data[1].data.progress.name,
            todo: props.data[1].data.progress.todo,
            done: props.data[1].data.progress.done,
            inprogress: props.data[1].data.progress.inprogress,
            extra: props.data[1].data.progress.extra,
            sprints:props.data[1].data.progress.sprint.sprints,
            sprintInfoList:props.data[1].data.progress.sprint.sprintInfo,
            sprintInfo: props.data[1].data.progress.sprint.sprintInfo[0],
            velocity:this.props.data[0].data,
            tooltipOpen: false,
            show: true,
          }
      }else{
            this.state = {
                  name:"",
                  todo:0,
                  done:0,
                  inprogress:0,
                  extra:0,
                  sprints:"",
                  sprintInfoList:[],
                  sprintInfo:'',
                  velocity:this.props.data[0].data,
                  tooltipOpen: false
                }
      }
      console.log("project type:",this.state.projects);
    }
    generateOptions=(list)=>{
         if(list.length > 0){
           return list.map((item,index)=>{
             return ( <option key={item.id} > {item.name}</option>)
           })
         }
      }

    handleChange = () =>{
      let selectedData = document.getElementById("selectsprint")
      let text = selectedData.options[selectedData.selectedIndex].value
      let obj = this.state.sprintInfoList.find( (obj) => obj.name === text );
      this.setState({
          sprintInfo: obj
      })
    }

   handleProject = async () =>{
    document.body.classList.add('busy-cursor');
     this.user = {
       id: localStorage.getItem("full_name"),
       user_id: localStorage.getItem("user_id"),
       full_name: localStorage.getItem("full_name"),
       org_id: localStorage.getItem("org_id"),
       track_id: localStorage.getItem("track_id"),
       secret: localStorage.getItem("secret")
     }
      let selectedData = document.getElementById("projectSelect")
      let text = selectedData.options[selectedData.selectedIndex].value
      this.setState({ name:text})
      let obj = this.state.projects.find( (obj) => obj.name.trim() === text.trim() );
      let header = {
        headers: {
          'Content-Type': "application/json"
        }
      }
       let payload=JSON.stringify({
          user: this.user,
          project: obj
       })

      try {
        let { data } = await axios.post(`${process.env.DIALOG_URL}/projects`,payload,header)

        if(data.type === 'ProjectProgress'){
           let info = data.info
           if( this.state.name  ===  info.progress.name.trim() ){
              if( obj.type === "software" ){
                    this.setState({
                        pdone:info.done,
                        pinprogress:info.inprogress,
                        ptodo:info.todo,
                        todo:info.progress.todo,
                        done: info.progress.done,
                        inprogress: info.progress.inprogress,
                        extra: info.progress.extra,
                        name:this.state.name,
                        sprints:info.progress.sprint.sprints,
                        sprintInfoList:info.progress.sprint.sprintInfo,
                        sprintInfo: info.progress.sprint.sprintInfo[0],
                        velocity: info.velocitychart,
                        tooltipOpen: false,
                        show: true
                      })
                    document.body.classList.remove('busy-cursor');
                    }
              if(obj.type === "business"){
                    this.setState(
                      {
                        pdone:info.done,
                        pinprogress:info.inprogress,
                        ptodo:info.todo,
                        sprintInfo:false,
                        velocity: false,
                        show:false
                      })
                   document.body.classList.remove('busy-cursor');
              }
          }
        }
        // dispatch(dashboardWidgetsSuccess(data))
        // dispatch(dashboardWidgetType(value,widgets))
      } catch (e) {
        console.log("error",e);
      //  dispatch(dashboardWidgetsFail(e))
      }
    }

   render(){
     let done = `TotalIssues: ${this.state.pdone.totalissues} <br/> Estimate: ${this.state.pdone.data.estimate}<br/>
      timespent: ${this.state.pdone.data.timespent}`
     let inprogress = `TotalIssues: ${this.state.pinprogress.totalissues} <br/> Estimate: ${this.state.pinprogress.data.estimate}<br/>
     timespent: ${this.state.pinprogress.data.timespent}`
     let todo = `TotalIssues: ${this.state.ptodo.totalissues} <br/> Estimate: ${this.state.ptodo.data.estimate}`

    return(
      <div className="agile-container">
           <div className="project-container">

              <div className="project-title">
              <select className="project-select" id="projectSelect" onClick={this.handleProject}>
                 {this.generateOptions(this.state.projects)}
              </select>
              </div>
             <ReactTooltip data-place= "top" type="info" effect="float" html={true}/>
              <div className="project-bar">
                <Progress multi>
                  <Progress bar barClassName="done" value={this.state.done}><p data-tip={done}>{this.state.done}% </p></Progress>
                  <Progress bar barClassName="in-progress" value={this.state.inprogress}><p data-tip={inprogress}>{this.state.inprogress}% </p></Progress>
                  <Progress bar barClassName="todo" value={this.state.todo}><p data-tip={todo}>{this.state.todo}% </p></Progress>
                  <Progress bar barClassName="extra" value={this.state.extra}>{this.state.extra}% </Progress>
                </Progress>
                <div  className="sprint-lables">
                      <div id="done"/> <h5 id="h5-lable">Done</h5>
                      <div id="inprogress"/><h5 id="h5-lable">In Progress</h5>
                      <div id="todo"/> <h5 id="h5-lable">ToDo</h5>
                      <div id="extra"/> <h5 id="h5-lable">Extra Effort</h5>
                </div>
              </div>
              { this.state.show?
              <div>
              <div className="sprints-dropdown">
                <div className="lable">Sprint:</div>
                <select className="sprint-select" id="selectsprint" onClick={this.handleChange}>
                   {this.generateOptions(this.state.sprints)}
                </select>
              </div>
                <SprintProgress data={ this.state.sprintInfo} />
              </div>:null
            }
          </div>
          <div className="bar-container">
            <BarGraph data={this.state.velocity} />
          </div>

          <div className="sprint-cards">
              <DoneIssues data= {this.state.sprintInfo? this.state.sprintInfo.done : this.state.pdone  } />
              <InProgressIssues data= {this.state.sprintInfo ? this.state.sprintInfo.inprogress: this.state.pinprogress} />
              <TodoBox data= {this.state.sprintInfo?this.state.sprintInfo.todo: this.state.ptodo} />
              <ScopeChange data=  {this.state.sprintInfo?this.state.sprintInfo.todo: this.state.ptodo} />
          </div>
      </div>
    )
  }
}
export default AgileProject
