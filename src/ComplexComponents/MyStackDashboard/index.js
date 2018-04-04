import React from "react"

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _ from "lodash"
import "./Style/index.scss"

import TableMyStack from "./Components/TableMyStack"
import MenuItem from "material-ui/MenuItem"
import FontIcon from 'material-ui/FontIcon';
import IconMenu from "material-ui/IconMenu"
import IconButton from "material-ui/IconButton"
import Modal from 'react-awesome-modal';


// import speed from "../../Assets/speed.gif"

class MyStackDashboard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        user:'',
        data: [],
        table: this.props.mystack,
      }
    }

    render() {
      if (this.props.mystack.myStackData) {
        return (
          <div className="dash-parent">
          <div className="card-container">
            <div className="addcard-container">
              <div className="mystack-header"><h1>My Stack</h1></div>
            </div>
              <hr className="divider" />
            <div className="tableskill-container">
              <TableMyStack data={this.props.mystack.myStackData}/>
            </div>
          </div>
          </div>
        )
      }
      else {
        return (<div style={{"alignSelf":"center"}}><div style={{"alignSelf":"center"}}><img src={speed} alt="No Data"/></div></div>)
      }
    }
}
const mapStateToProps = state => ({
  mystack: state.mystackOperations
})


export default connect(mapStateToProps, null)(MyStackDashboard)
