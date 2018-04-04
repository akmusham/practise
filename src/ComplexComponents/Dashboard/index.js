import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import speed from "../../Assets/speed.gif"

import "./Style/developerDashboard.scss"
import "./Style/projectDashboard.scss"

import AgileProject from "../DeveloperDashboard/Components/AgileProject"
// import sampleData from "./SampleData.json"
// import sampleData from "./ProjectData.json"
import DevDashboard from "../DevDashboard"
import WidgetMenu from "./WidgetMenu"


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
      }
    
    render(){
      if(sampleData){
        if(sampleData.type=='developerDashboard'){
          return (  <div className="dash-parent">
                        <WidgetMenu />
                        <DevDashboard data={sampleData.data}/>
                    </div>)
        }else{
          return (
            <div className="dash-parent">
              <WidgetMenu />
              <AgileProject data={sampleData.data} />
            </div>
          )
        }
    }else{
        return (<div style={{"alignSelf":"center"}}><div style={{"alignSelf":"center"}}><img src={speed} alt="No Data"/></div></div>)
      }
    }
}
export default Dashboard
