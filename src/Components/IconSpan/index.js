import React from "react"
import FontIcon from "material-ui/FontIcon"

import "./Style/index.scss"

class IconSpan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <FontIcon
          className={this.props.className}
          style={{ fontSize: "0.9em" }}
          color="#000"
        />{" "}
        <span className="iconspan-title">{this.props.title}</span>
      </div>
    )
  }
}

export default IconSpan
