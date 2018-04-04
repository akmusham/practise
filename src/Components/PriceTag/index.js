import React from "react"
import Chip from "material-ui/Chip"

import "./Style/index.scss"

class PriceTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Chip style={{ border: "0.1em solid #0f0" }} backgroundColor="#fff">
          <span>$ {this.props.children}</span>
        </Chip>
      </div>
    )
  }
}

export default PriceTag
