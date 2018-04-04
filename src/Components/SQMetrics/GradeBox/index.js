import React from "react"
import "./Styles/index.scss"
export default class GradeBox extends React.Component {
  render() {
    return (
      <div className="gradeblock">
        <div className="gradevalue">{this.props.gradevalue}</div>
        <div className="gradetitle">{this.props.gradetitle}</div>
      </div>
    )
  }
}
