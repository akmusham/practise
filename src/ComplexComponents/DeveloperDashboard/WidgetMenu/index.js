import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import * as DashboardWidgetActions from "../../../Redux/Actions/DashboardWidgetActions"

class WidgetMenu extends React.Component {
  constructor(props) {
    super(props)
    this.user = {
      id: localStorage.getItem("full_name"),
      user_id: localStorage.getItem("user_id"),
      full_name: localStorage.getItem("full_name"),
      org_id: localStorage.getItem("org_id"),
      track_id: localStorage.getItem("track_id"),
      secret: localStorage.getItem("secret")
    }
    this.widgets = {
      developerDashboard: ['JenkinsBuilds', 'LatestCommits', 'CommitsPerUser', 'PullRequests', 'SQMetrics', 'DeveloperIssues', 'EffortVariance'],
      projectDashboard: ['VelocityChart','ProjectProgress', 'InProgressIssues'],
      projects:['Projects']
    }
    this.state = {
      value: 'projectDashboard'
    }
    console.log("WidgetMenu state :::::srinugadu::",this.state.value);
  }

  handleChange = (event, index, value) => {
    this.setState({
      value
    })
    let user=this.user;
    let widgets = this.widgets[value]
    this.props.dashboardWidget(user,widgets,value)
    // this.props.addWidget(value, widgets)
  }

  render() {
    console.log("WidgetMenu:::value",this.state.value);
    return (
      <div style={{backgroundColor: '#232c3a'}}>
        <DropDownMenu value={this.state.value} onChange={this.handleChange} labelStyle={{color: '#ffffff'}}>
          <MenuItem value='projectDashboard' primaryText="Project Dashboard" />
          <MenuItem value='developerDashboard' primaryText="Developer Dashboard" />
          <MenuItem value='projects' primaryText="Projects" />
        </DropDownMenu>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  widgets: state.dashboardWidgetOperations.widgets
})

const mapDispatchToProps = dispatch => ({
  dashboardWidget: bindActionCreators(DashboardWidgetActions.dashboardData, dispatch),
  // developerDashboard : bindActionCreators(DashboardWidgetActions.developerDashboard, dispatch)
  // addWidget: bindActionCreators(DashboardWidgetActions.addDashboardWidget, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(WidgetMenu)
