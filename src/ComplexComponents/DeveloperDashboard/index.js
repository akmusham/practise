import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from "lodash"

import "./Style/developerDashboard.scss"
import "./Style/projectDashboard.scss"
import speed from "../../Assets/speed.gif"

import OpenIssues from "../../Components/OpenIssues"
import CommitsGraph from "../../Components/CommitsGraph"
import LatestCommits from "../../Components/LatestCommits"
import SQMetrics from "../../Components/SQMetrics"
import JenkinsBuilds from "../../Components/JenkinsBuilds"
import PullRequests from "../../Components/PullRequests"
import BarGraph from "./Components/BarGraph"
import TodoIssues from "./Components/TodoBox"
import DoneIssues from "../../Components/DoneIssuesBox"
import InProgressIssues from "../../Components/InProgressIssuesBox"

import AgileProject from "./Components/AgileProject"

import {PipelineGraph} from '../PipelineGraph'
import WidgetMenu from "./WidgetMenu"
import BoxLabel from "./BoxLabel"
import DevDashboard from "../DevDashboard"
import Projects from "../Projects"


const EffortVariance = (data) => {
  let effort = null
  if(data){
  let variance = {
    estimate: data.estimate
      }
  effort = (
    <div className="variance" key="effortVariance">
      <BoxLabel boxvalue={variance} />
    </div>
  )
  return effort
  }
}
let dashboardWidgets = {
  'JenkinsBuilds': JenkinsBuilds,
  'LatestCommits': LatestCommits,
  'PullRequests': PullRequests,
  'CommitsPerUser': CommitsGraph,
  'SQMetrics': SQMetrics,
  'EffortVariance': EffortVariance,
  'DeveloperIssues': OpenIssues,
  'VelocityChart': BarGraph,
  'InProgressIssues':InProgressIssues,
}

class DeveloperDashboard extends React.Component {
  constructor(props) {
    super(props)
      // this.state = {
      //   activity: this.props.activity,
      //   widgets: [],
      //   dasboardType: this.props.widgets.type
      // }
      this.updatePipeline = {
      }
    }
    render() {
      let widgets = []
      let dashboardClassName = ''
      let DeveloperData=this.props.dashboard.dashboardData.widgets
      for (let [index, widget] of DeveloperData.entries()) {
        let dashboardWidget = dashboardWidgets[widget.type]
              if(widget.type != 'TodoIssues' & widget.type != 'VelocityChart'   & widget.type != 'DoneIssues' & widget.type != 'ProjectProgress' & widget.type != 'SprintScope' & widget.type != 'Projects'){
                      widgets.push(dashboardWidget(widget.data))
            }
      }
      // let widgetComponents = widgets.length ? widgets : null
      let widgetComponents
      console.log("action ::::4$$$$$$",this.props.dashboard.widgets.type);
      console.log("wideget:::: oooo::",this.props.dashboard.dashboardData.widgets);
      if(this.props.dashboard.widgets.type === 'projects' & this.props.dashboard.dashboardData.widgets.length == 1 ){
        console.log("dashboard data projects satifythr::",this.props.dashboard.widgets.type);
         widgetComponents= true
      }
      else{
          widgetComponents = widgets.length ? widgets : null
      }
      if(widgetComponents) {
        if (this.props.dashboard.widgets.type === 'projectDashboard'){
            return (
              <div className="dash-parent">
                <WidgetMenu />
                <AgileProject data={this.props.dashboard.dashboardData.widgets} />
              </div>
            )
        }
        if (this.props.dashboard.widgets.type === 'projects'  & this.props.dashboard.dashboardData.widgets.length == 1) {
          return (
            //this.props.dashboard.dashboardData.widgets[0].data
            <div className="dash-parent">
              <WidgetMenu  />
              <Projects data = {this.props.dashboard.dashboardData.widgets[0].data}/>
            </div>
          )
        }
        else {
          return (
            <div className="dash-parent">
              <WidgetMenu />
              <div className="dev-container" key="dashboard-container">
                 {widgetComponents}
              </div>
            </div>
          )
      }
      }
      else {
        console.log("else dashboard");
        return (<div style={{"alignSelf":"center"}}><div style={{"alignSelf":"center"}}><img src={speed} alt="No Data"/></div></div>)
      }
    }
}

const mapStateToProps = state => ({
  dashboard: state.dashboardWidgetOperations
})


export default connect(mapStateToProps, null)(DeveloperDashboard)
