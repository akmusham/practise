import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import OpenIssues from "../../Components/OpenIssues"
import CommitsGraph from "../../Components/CommitsGraph"
import LatestCommits from "../../Components/LatestCommits"
import SQMetrics from "../../Components/SQMetrics"
import JenkinsBuilds from "../../Components/JenkinsBuilds"
import PullRequests from "../../Components/PullRequests"
import BoxLabel from "./BoxLabel"

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
  'DeveloperIssues': OpenIssues,
  'EffortVariance': EffortVariance,
}

class DevDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widgets: []
    }
  }

  componentDidMount() {
      let devOpsData = this.props.data
      console.log("inside devopsData",devOpsData);
      let widgets = []
      for (let [index, widget] of devOpsData.entries()) {
        let dashboardWidget = dashboardWidgets[widget.type]
        widgets.push(dashboardWidget(widget.data))
      }
      this.setState(prevState => ({
        widgets: [...prevState.widgets, ...widgets]
      }))
    }


  render() {
    let widgets = this.state.widgets.length ? this.state.widgets : null
    return (
        <div className="dev-container" key="dashboard-container">
          {widgets}
        </div>
    )
  }
}
export default DevDashboard
