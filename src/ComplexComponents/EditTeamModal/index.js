import React from "react"
import "./Style/index.scss"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as EditTeamActions from "../../Redux/Actions/EditTeamActions"

class EditTeamModal extends React.Component {
  constructor(props){
    super(props)
    console.log("all nigga props",this.props);
    let ak = this.props.editteam ? this.props.editteam : []

    if (ak) {
      console.log("ramu buffalo",ak);
      this.state={
        teamName:ak.teamName,
        teamDescription:ak.teamDescription

      }
    }
    console.log("state mf",this.state);
}
handleFeedback(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}
handleClick(){
  console.log("edit",this.state);
  this.props.actions.newmember(this.state)
  this.setState({
    teamName:'',
    teamDescription:''
  })
}

closeModal(){
  this.props.close();
}


  render() {
    let ak = this.props.editteam ? this.props.editteam : []
    console.log("dkabdkbjnw",this.state);
    return (
      <div className="feedback-form">
          <div className="user-container">
              <div className="username">
                  <h4><b>Edit Team</b></h4>
              </div>
          </div>
          <div className="form-container">
            <div className="email-container">
               <label><b>team Name</b></label>
               <input type="text" className="editteam-name" value={ak.teamName} placeholder="teamName" name="teamName" onChange={(event)=>this.handleFeedback(event)} />
               <label><b>Team description</b></label>
               <input type="text" className="editteam-name" value={ak.teamDescription} placeholder="teamDescription" name="teamDescription" onChange={(event)=>this.handleFeedback(event)} />

            </div>
            <div className="submit" >
                <button className="btn btn-info btn-fill invite-button" onClick={()=>this.handleClick()} value="Invite">Submit</button>
            </div>
          </div>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  inviteUserOperations: state.inviteUserOperations
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(EditTeamActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTeamModal)
