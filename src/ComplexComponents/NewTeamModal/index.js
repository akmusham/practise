import React from 'react'
import "./Style/index.scss"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as newTeamActions from "../../Redux/Actions/NewTeamActions"

class newTeamModal extends React.Component{
    constructor(props){
      super(props)
      this.state={
        teamName:'',
        teamDescription:'',
        listMem: ''
      }
  }
  handleFeedback(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  async getMemTeams () {
      let header = {
          headers: {
            Authorization: `Bearer 9515acd13a9cc85f6f27c6dfc1805522f61ce5c0` ,
            'Content-Type': "application/json",
  					"orgId": '5aa0d739df591b26b03a297b'
          }
        }

  			let bad = await axios.get(`https://api.development.techforce.ai/v1/scopemanagement/teams/list`,header)
  			let TEAMS = []
  			for (var i = 0; i < bad.data.message.length; i++) {
  				let teamObj = { teamName: bad.data.message[i].teamName, noOfMem: bad.data.message[i].members.length }


  				TEAMS.push(teamObj)

  			}

  	}
  handleClick(){
    this.props.submit(this.state)
    this.setState({
      teamName:'',
      teamDescription:''
    })

    this.props.actions.newteam(this.state)

  }

  closeModal(){
    this.props.close();
  }

  render(){
    return(
      <div className="newteam-form" style={{border:"0.5px solid black"}} >
          <div className="form-container">
          <h1>Create New Team</h1>
            <div className="email-container">
               <label><b>Add Team</b></label><br />
               <input className="new-team-input form-control border-input" type="text" value={this.state.teamName} placeholder="new team name" name="teamName" onChange={(event)=>this.handleFeedback(event)} />
            </div>
            <div className="email-container">
               <label><b>Team Description</b></label>
               <textarea className="form-control border-input" value={this.state.teamDescription} placeholder="team description" name="teamDescription" onChange={(event)=>this.handleFeedback(event)} />
            </div>
            <div className="submit" >
                <button className="btn btn-info btn-fill addteam-button" onClick={()=>this.handleClick()} value="Submit">Create Team</button>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  newTeamOperations: state.newTeamOperations
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(newTeamActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(newTeamModal)
