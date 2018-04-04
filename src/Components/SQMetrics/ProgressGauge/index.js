import React from "react"
import "./loader"
import "./Styles/index.css"
export default class ProgressGauge extends React.Component {
  componentDidMount() {
    this.animate(this.props.id, this.props.gaugedata.percentage, this.props.gaugedata.gaugecolor)
  }
  componentWillReceiveProps(nextProps) {
    this.animate(
      nextProps.id,
      parseInt(nextProps.gaugedata.percentage),
      nextProps.gaugedata.gaugecolor
    )
  }
  animate(id, percentage, gaugecolor) {
    let meter = document.getElementById("meter" + id)
    let angle = percentage / 100 * 180
    meter.style.transform = "rotate(" + angle + "deg)"
    meter.style.backgroundColor = gaugecolor
  }
  render() {
    return (
      <div className="gauge-parent">
        <figure className="gauge-container">
          <div className="gauge percentage">
            <div className="meter" id={"meter" + this.props.id} />
            <div className="percentage-container">
              <div className="percentage-indicator">
                {parseInt(this.props.gaugedata.percentage)}%<br />
              </div>
            </div>
          </div>
          <figcaption>{this.props.gaugedata.gaugetext}</figcaption>
        </figure>
      </div>
    )
  }
}
