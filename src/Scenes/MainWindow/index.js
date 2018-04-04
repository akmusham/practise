import React from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {Chat, DirectLine} from "botframework-webchat"
import {Tabs, Tab} from "material-ui/Tabs"
import * as MsChatActions from "../../Redux/Actions/MsChatActions"
import * as BackchannelActions from "../../Redux/Actions/BackchannelActions"
import * as DashboardWidgetActions from "../../Redux/Actions/DashboardWidgetActions"
import * as MyStackDashboardActions from "../../Redux/Actions/MyStackDashboardActions"
import TableComponent from "../../ComplexComponents/TableComponent"
import PieGraph from "../../ComplexComponents/PieGraph"
import LineGraph from "../../ComplexComponents/LineGraph"
import BarGraph from "../../ComplexComponents/BarGraph"
import Configuration from "../../ComplexComponents/Configuration"
import Activity from "../../ComplexComponents/Activity"
import DeveloperDashboard from "../../ComplexComponents/DeveloperDashboard"
// import DeveloperDashboard from "../../ComplexComponents/Dashboard"
import MyStackDashboard from "../../ComplexComponents/MyStackDashboard"

// import AgileDashboard from "../../ComplexComponents/AgileDashboard"
import "./Styles/index.scss"
import "./Styles/botcss.css"
import "./Styles/dropdown.scss"

class MainWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      window: 'dashboard'
    }
  }
  componentWillMount() {
    let user=this.props.user;
    let widgets=["VelocityChart","ProjectProgress","TodoIssues","InProgressIssues","DoneIssues","SprintScope" ]
    this.props.dashboardWidget(user,widgets,"projectDashboard")
    this.props.mystack(user)
    this.state.botConnection = this.props.botConnection
    this.state.botConnection.activity$.filter(activity => {
      return activity.type == "event"
    }).subscribe(activity => {
      // this.props.backchannelActions.backchannelhandler(activity.value)
      // console.log('"table" received with value: ' + activity.value)
      let multiActivity = activity.name.split(".")
      if ( multiActivity[0] && multiActivity[1] ) {
        if(multiActivity[0] === 'switchTab') {
          this.setState({window: multiActivity[1]})
          // switch (multiActivity[1]) {
          //   case "activities":
          //     this.setState({window:"activities"})
          //   case "dashboard":
          //     this.setState({window:"dashboard"})
          //   case "configuration":
          //   this.setState({window:"configuration"})
          // }
        } else {
          switch (multiActivity[1]) {
            case "github":
              window.open(activity.value)
          }
        }
      }
    })
    this.state.botConnection.postActivity({type: "event",  from: this.user, name: "Activity Init"}).subscribe(id => console.log(""))
  }
  handleChange = (value) => {
    this.setState({window:value})
  }

  render() {
    return (<div className="chat-container">
      <div className="chat-backchannel">
        <Tabs className="tab" contentContainerClassName="tab-container" onChange={this.handleChange} value={this.state.window} style={{
            height: '100%'
          }} contentContainerStyle={{
            height: '100%'
          }}>
          <Tab className="tab-button" label="Dashboard" value='dashboard'>
            <div className="configuration-container">
              <DeveloperDashboard />
            </div>
          </Tab>
          <Tab className="tab-button" label="Activities" value='activities'>
            <div className="configuration-container">
              <Activity botConnection={this.state.botConnection}/>
            </div>
          </Tab>
          <Tab className="tab-button" label="Configuration" value='configuration'>
            <div className="configuration-container">
              <Configuration botConnection={this.state.botConnection}/>
            </div>
          </Tab>
          <Tab className="tab-button" label="MyStack" value='mystack'>
            <div className="configuration-container">
              <MyStackDashboard />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>)
  }
}

const mapStateToProps = (state, ownProps) => ({chatWindowOperations: state.chatWindowOperations, mschatOperations: state.mschatOperations, loginOperations: state.loginOperations})
const mapDispatchToProps = dispatch => ({
  dashboardWidget: bindActionCreators(DashboardWidgetActions.dashboardData, dispatch),
  mystack:bindActionCreators(MyStackDashboardActions.mystack,dispatch),
  actions: bindActionCreators(MsChatActions, dispatch),
  backchannelActions: bindActionCreators(BackchannelActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow)
