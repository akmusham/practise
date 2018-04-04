import React from "react"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link } from "react-router-dom"
import AvatarIcon from "../AvatarIcon"

import "./Style/index.scss"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="nav">
        <Link to={`/user/${this.props.url}`}>
          <div className="navIcon">
            <img src={this.props.icon} style={{width:"100%"}} />
          </div>
        </Link>
        <span>{this.props.navTitle}</span>
      </div>
    )
  }
}
