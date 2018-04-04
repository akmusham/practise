import React from "react"
import "./Style/index.scss"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as InviteUserActions from "../../Redux/Actions/InviteUserActions"

class InviteUser extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      username:''

    }
}
handleFeedback(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}
handleClick(){
  this.props.actions.newmember(this.state)
  this.setState({
    email:'',
    username:''
  })
  console.log("email",this.state.email);
}

closeModal(){
  this.props.close();
}


  render() {

    return (
      <div className="feedback-form">
          <div className="user-container">
              <div className="username">
                  <h4><b>Invite User</b></h4>
              </div>
          </div>
          <div className="form-container">
            <div className="email-container">
               <label><b>Email</b></label>
               <input type="email" value={this.state.email} placeholder="your email" name="email" onChange={(event)=>this.handleFeedback(event)} />
               <label><b>username</b></label>
               <input type="text" className="invite-username" value={this.state.username} placeholder="your email" name="username" onChange={(event)=>this.handleFeedback(event)} />

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
  actions: bindActionCreators(InviteUserActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(InviteUser)
