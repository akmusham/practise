import React from "react"
import IconSpan from "../../../IconSpan"
import PriceTag from "../../../PriceTag"

import "./Style/index.scss"

class SkillDescription extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="skill-description-container">
        <div className="skill-header">
          <span className="skill-name">{this.props.details.name}</span>
          <PriceTag>{this.props.price}</PriceTag>
        </div>
        <span className="skill-description">{this.props.details.short_description}</span>
        <IconSpan className="fa fa-rocket" title={this.props.bot_id.name} />
      </div>
    )
  }
}

export default SkillDescription
