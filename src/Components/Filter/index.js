import React from "react"

import "./Style/index.scss"

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  toggleFilter() {
    this.props.toggle(this.props.filter)
  }

  render() {
    var filter = null
    if (this.props.currentFilter == this.props.filter) {
      filter = (
        <span className="filter activated-filter" onClick={() => this.toggleFilter()}>
          {this.props.children}
        </span>
      )
    } else {
      filter = (
        <span className="filter" onClick={() => this.toggleFilter()}>
          {this.props.children}
        </span>
      )
    }
    return <div className="filter-container">{filter}</div>
  }
}

export default Filter
