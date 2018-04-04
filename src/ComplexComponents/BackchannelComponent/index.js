import React from "react"
import ReactTable from "react-table"
import ScrollBar from "../../../../../../Components/ScrollBar"
import Dashboard from "./Components/Dashboard"
import "./Style/index.scss"

export default class BackchannelComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="backchannel-component">
        <Dashboard />
      </div>
    )
  }
}
