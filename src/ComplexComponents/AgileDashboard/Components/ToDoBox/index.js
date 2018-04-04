import React from "react"
import "./Styles/index.scss"


class ToDoBox extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="heading" >
            <div className="upper">
              Done
            </div>
            <div className="upper"> 52 </div>
        </div>
          <div className="num">this.props.name</div>
      </div>
    )
  }
}

export default ToDoBox
