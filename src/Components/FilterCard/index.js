import React from "react"
import Card from "../Card"

import "./Style/index.scss"

class FilterCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Card
        rounded={false}
        className="filter-card"
        zDepth={this.state.zIndex}
        onMouseEnter={() => null}
        onMouseLeave={() => null}
      >
        {this.props.children}
      </Card>
    )
  }
}

export default FilterCard
