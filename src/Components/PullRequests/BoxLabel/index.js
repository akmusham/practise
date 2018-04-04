import React from "react"
import ReactTooltip from 'react-tooltip'

import "./Styles/index.scss"
export default class BarChart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        tooltip:"",
        count:""
    }
  }
  componentDidMount() {
    console.log("componet Didmount in pull request box");
    let tooltip = "Repositories<hr><br><ul>"
    console.log("props data",this.props);
    if(this.props.boxvalue.items){
      this.props.boxvalue.items.forEach( item =>{
          tooltip += `<li>${item.repository}</li>`
      })
    }
    let  count = this.props.boxvalue.total_count ? this.props.boxvalue.total_count:0
    this.setState( {
        tooltip:tooltip,
        count:count
    })
    // if (pullrequest > 0) {
    //   var i = 0
    //   var time = 1300
    //   var intervalTime = Math.abs(time / pullrequest)
    //   var timerID = setInterval(() => {
    //     i++
    //     this.setState({ currentpullrequest: i })
    //     if (i === pullrequest) clearInterval(timerID)
    //   }, intervalTime)
    // }
  }
  render() {
    return (
      <div className="box">
        <ReactTooltip data-place= "top" type="info" effect="float" html={true}/>
        <div className="box-header">Pull Requests</div>
        <div className="box-num"><p data-tip={this.state.tooltip}>{this.state.count}</p></div>
      </div>
    )
  }
}
