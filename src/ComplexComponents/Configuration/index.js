import React from "react"
import speed from "../../Assets/speed.gif"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { PipelineGraph } from '../PipelineGraph'
import ConfigurationList from "../ConfigurationList"
import TableComponent from "../TableComponent"

import PieGraph from "../PieGraph"
import BarGraph from "../BarGraph"
import LineGraph from "../LineGraph"
import fileBuilder from "../../Factory/Blob"
import HadoopTable from "../HadoopTable"

import FilterTableComponent from "../FilterTableComponent"
import WorklogReportComponent from "../WorklogReportComponent"

import StandupComponent from "../StandupComponent"
import Iframe from "../../Components/Iframe"

import * as BackchannelActions from "../../Redux/Actions/BackchannelActions"

class Configuration extends React.Component {
  constructor(props) {
    super(props)
    this.defaultComponent = (
      <div style={{"alignSelf":"center"}}><img src={speed} alt="No Data"/></div>
    )
    this.state = {
      configurations: this.props.configurations,
      component: this.defaultComponent,
      pipelineStages: []
    }
  }

  componentWillMount() {
    let eventFor
    this.props.botConnection.activity$
      .filter(activity => {
        eventFor = activity.name && activity.name.split(".") && activity.name.split(".")[0]
        return activity.type == "event" && (eventFor == "configuration" || eventFor === "pipeline")
      })
      .subscribe(activity => {
        let eventIntent = activity.name.split(".")[1]
        if (eventFor === "configuration") {
          console.log("for ennnnnn::",eventIntent);
          switch (eventIntent) {
            case "update":
              this.props.updateConfiguration(activity.value)
              this.setState({
                component: <ConfigurationList list={this.props.configurations.list} />
              })
              break
            case "table":
              this.props.clearConfiguration()
              this.setState({
                component: <TableComponent data={activity.value} />
              })
              break
            case "bar":
              this.setState({
                component: <BarGraph data={activity.value} />
              })
              break
            case "pie":
              this.setState({
                component: <PieGraph data={activity.value} />
              })
              break
            case "line":
              this.setState({
                component: <LineGraph data={activity.value} />
              })
              break
            case "iframe":
              this.setState({
                component: <Iframe url={activity.value} />
              })
              break
            case "files":
              let files = activity.value
              for (let file of files) fileBuilder(file.content, file.mimeType, file.name)
              break
            case "clear":
              this.props.clearConfiguration()
              this.setState({
                component: this.defaultComponent
              })
              break
           case "standup":
              this.setState({
              component: <StandupComponent data={activity.value}/>
            })
            break
          case "filtertable":
            this.setState({
              component: <FilterTableComponent data={activity.value}/>
            })
            break
          case "worklog":
            this.setState({
              component: <WorklogReportComponent data={activity.value}/>
            })
            break
            case "hadoop":
              this.setState({
                component: <HadoopTable data={activity.value}/>
              })
              break

            default:
              break
          }
        } else if (eventFor === "pipeline") {
          let pipelineData = activity.value
          let pipelineStages = this.state.pipelineStages
          switch (eventIntent) {
            case 'clear':
              this.setState({
                pipelineStages: []
              })
              break
            case 'create':
            case 'createNode':
              this.setState(prevState => ({
                pipelineStages: [...prevState.pipelineStages, ...[pipelineData]]
              }))
              break
            case 'updateNode':
              let updatedPipeline = pipelineStages.map((stage, index) => {
                if (stage.id === pipelineData.id) return Object.assign({}, stage, pipelineData)
                else return stage
              })
              this.setState({
                pipelineStages: [...updatedPipeline]
              })
              break
          }
        }
      })
  }

  render() {
    let stages = this.state.pipelineStages
    let lastStage = stages[stages.length - 1]
    let pipelineComponent = stages.length ? (<PipelineGraph width={900} height={60} onNodeClick={() => {}} selectedStage={lastStage} stages={this.state.pipelineStages}/>) : null
    return (
      <div className="configuration-window" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {pipelineComponent}
        {this.state.component}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  configurations: state.backchannelOperations.configurations
})

const mapDispatchToProps = dispatch => ({
  updateConfiguration: bindActionCreators(BackchannelActions.updateConfiguration, dispatch),
  clearConfiguration: bindActionCreators(BackchannelActions.clearConfiguration, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Configuration)
