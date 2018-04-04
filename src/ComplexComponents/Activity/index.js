import React from "react"
import speed from "../../Assets/speed.gif"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import ActivityList from "../ActivityList"
import TableComponent from "../TableComponent"
import * as BackchannelActions from "../../Redux/Actions/BackchannelActions"
import { NotificationContainer, NotificationManager } from "react-notifications"
class Activity extends React.Component {
  constructor(props) {
    super(props)
    this.defaultComponent = (
      <div style={{"alignSelf":"center"}}><img src={speed} alt="No Data"/></div>
    )
    this.state = {
      activity: this.props.activity,
      component: this.defaultComponent
    }
  }

  componentWillMount() {
    this.props.botConnection.activity$
      .filter(activity => {
        let eventFor = activity.name && activity.name.split(".") && activity.name.split(".")[0]
        return activity.type == "event" && eventFor === "activity"
      })
      .subscribe(activity => {
        let eventIntent = activity.name.split(".")[1]
        switch (eventIntent) {
          case "started":
            this.props.updateActivity(activity.value)
            this.setState({
              component: (
                <ActivityList
                  list={this.props.activity.list}
                  botConnection={this.props.botConnection}
                />
              )
            })
            break
          case "completed":
            this.props.updateActivity(activity.value)
            this.setState({
              component: (
                <ActivityList
                  list={this.props.activity.list}
                  botConnection={this.props.botConnection}
                />
              )
            })
            break
          case "notify":
            NotificationManager.success(activity.value.message, activity.value.skillName)
            break
          default:
            return null
        }
      })
  }

  render() {
    return <div className="configuration-window">{this.state.component}</div>
  }
}

const mapStateToProps = state => ({
  activity: state.backchannelOperations.activity
})

const mapDispatchToProps = dispatch => ({
  updateActivity: bindActionCreators(BackchannelActions.updateActivity, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Activity)
