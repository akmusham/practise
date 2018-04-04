import React from "react"
import "./Styles/index.scss"

export default class BoxLabel extends React.Component {

  render() {
    return (
      <div className="block">
        <div className="heading">Effort Variance</div>
        <div className="num">{this.props.boxvalue.estimate}</div>
      </div>
    )
  }
}
