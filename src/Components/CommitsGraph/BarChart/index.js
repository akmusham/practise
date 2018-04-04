import React from "react"
import Path from "svg-path-generator"
import Chart from "chart.js"
import "./loader"
import animate from "./animate"
import "./Styles/index.css"
export default class BarChart extends React.Component {
  componentDidMount() {
    animate(this.props.chartdata)
  }
  componentWillReceiveProps(nextProps) {
    animate(nextProps.chartdata)
  }
  render() {
    return (
      <div className="bar-chart">
        <canvas id="barchart" className="barchart-canvas" />
      </div>
    )
  }
}
