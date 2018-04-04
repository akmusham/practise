import React from "react"
import "./Style/index.scss"

import ProgressBar from "./Components/ProgressBar"
import BarGraph from "./Components/BarGraph"
import TodoIssues from "./Components/TodoBox"
import DoneIssues from "../../Components/DoneIssuesBox"
import InProgressIssues from "../../Components/InProgressIssuesBox"

class AgileDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widgets: []
    }
  }
  componentDidMount() {
    this.props.botConnection.activity$
      .filter(activity => {
        let eventFor = activity.name && activity.name.split(".") && activity.name.split(".")[0]
        return activity.type == "event" && eventFor === "activity"
      })
      .subscribe(activity => {
        let eventIntent = activity.name.split(".")[1]
         if (eventIntent === "populateAgile") {
             let agileData = activity.value.message
             agileData.push({
               type:"SprintScope",
               data:{
                 estimate:"10h"
               }})
             // agileData.push({
             //   type:"TodoIssues",
             //   data:{
             //     totalIssues:10,
             //     data:{estimate:"10h"}
             //   }
             // },
             // {
             //   type:"DoneIssues",
             //   data:{
             //     totalIssues:15,
             //     data:{estimate:"10h",timespent:"3h"}
             //   }
             // },
             // {
             //   type:"InProgressIssues",
             //   data:{
             //     totalIssues:2,
             //     data:{estimate:"3h",timespent:"5h"}
             //   }
             // },
             console.log(agileData);
             let widgets = []
             for (let [index, widget] of agileData.entries()) {
              switch (widget.type) {

                 case 'VelocityChart':
                    widgets.push(BarGraph(widget.data))
                    break

                 case 'ProjectProgress':
                    widgets.push(ProgressBar(widget.data))
                    break

                 case 'TodoIssues':
                    widgets.push(TodoIssues(widget.data))
                    break

                 case 'InProgressIssues':
                   widgets.push(InProgressIssues(widget.data))
                   break

                 case 'DoneIssues':
                    widgets.push(DoneIssues(widget.data))
                    break

                case 'SprintScope':
                   widgets.push(SprintScope())
                   break
                }
              }
                this.setState(prevState => ({
                widgets: [...prevState.widgets, ...widgets]
           }))
        }
      })
    }
  render() {
        let widgets = this.state.widgets.length ? this.state.widgets : null
        return (
      <div className="dash-parent">
        <div className="agile-container">
          {widgets}
        </div>
      </div>
    )
  }
}

export default AgileDashboard
