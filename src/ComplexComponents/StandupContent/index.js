import React from "react"
import "./Style/index.scss"

class StandupContent extends React.Component{
  render(){
    return (
      <div className="standup-content">
        <span>Analysis</span>
        <ul>
          <h5>{this.props.values.map((item,index) => (
            <li key={index}>{item}</li>
          ))}</h5>
        </ul>
    </div>
    )
  }
}
export default StandupContent
