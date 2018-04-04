import React from "react"
import Chartist from "chartist"
import "./Style/index.css"


class VelocityChart extends React.Component{
    constructor(props){
    super(props)
    this.state={
      data:props.data
    }
  }

  componentDidMount() {
      console.log("Thie componentDidMount");
      console.log(this.state.data)
      var data = {
      labels:  this.state.data.map( obj => {return obj.name}),
      series: [
            this.state.data.map( obj => {return obj.Commitment}),
            this.state.data.map( obj =>{ return obj.Completed})
        ]
        }
        var options = {
        seriesBarDistance: 25
      }
      new Chartist.Bar('.ct-chart', data, options);
  }
  render(){
    return(
        <div className="chart">
          <div className="ct-chart"></div>
        </div>
    )
  }
}


export default VelocityChart
