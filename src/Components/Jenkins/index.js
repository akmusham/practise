import React from "react"
import "./Style/index.scss"

class Jenkins extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="widget-with-title">
          <div className="jenkins-logo">
            <img src="https://jenkins.io/images/logos/jenkins/jenkins.png" />
          </div>
          <div className="build">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Build_Passing_Shield_Badge.svg/2000px-Build_Passing_Shield_Badge.svg.png" />
          </div>
        </div>
    )
  }
}

export default Jenkins
