import React from "react"
import "./Style/index.scss"
import TeamModal from "../../../../ComplexComponents/TeamModal"
import Modal from 'react-awesome-modal';
import MenuItem from "material-ui/MenuItem"
import FontIcon from 'material-ui/FontIcon';
import IconMenu from "material-ui/IconMenu"
import IconButton from "material-ui/IconButton"
const axios = require ('axios')
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as ListTeamActions from "../../../../Redux/Actions/ListTeamActions"
import * as DeleteTeamAction from "../../../../Redux/Actions/DeleteTeamAction"


let orgId = localStorage.getItem("org_id")

class EditTeam extends React.Component {
  constructor(props) {
   super(props);
    this.state = {
           visible : false,
           listteams: [],
           teams: []
       }
    this.toggleModal = this.toggleModal.bind(this);
    this.openTeamModal = this.openTeamModal.bind(this);
    this.toggleEdits = this.toggleEdits.bind(this)

  }
  toggleEdits(teamdetails) {
    this.props.openEditTeam(teamdetails)
  }
  openTeamModal(value){
      this.props.togglemodal(value)
  }
  toggleModal(feedback) {
  }
  openNewModal() {
    this.props.openNewTeamCreate()
  }

  componentWillMount() {
    this.props.actions.listteam()
  }

  deleteTeam(teamid) {
    this.props.delteam.deleteTeam(teamid)

  }
  componentDidMount() {
    this.setState({
      teams: this.props.listTeamOperations.listteam.listteam
    })
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      teams: newProps.listTeamOperations.listteam.listteam ? newProps.listTeamOperations.listteam.listteam :  []
    })
  }

  render() {
  let ak=this.props.listTeamOperations.listteam.listteam.data
      let Teams = this.state.teams.data
      var b = []
      if (Teams !== undefined) {
         b = Teams.message
      }
      let $TEAMS = null;
      if (b.length > 0) {

        $TEAMS = (b.map((team,index)=> {
          return (
            <div className="mem-card col-lg-12" key={index}>
              <div className="row">
                <div className="col-lg-6 text-left team-name-s">{team.teamName}<br /><span className="team-description-color">{team.teamDescription}</span></div>
                <div className="col-lg-4 edit-mem" value={team.members} onClick={() =>this.openTeamModal(team)}><span key={team._id}>{team.members.length}</span> <i className="fa fa-user member-me" /></div>
                <div className="col-lg-2"><IconMenu className="col-xs-3 fa-custom"
                  iconButtonElement={
                    <IconButton style={{ padding: "8px" }}>
                      {" "}
                      <FontIcon className="material-icons" >more_verti</FontIcon>
                    </IconButton>
                  }
                  anchorOrigin={{ horizontal: "left", vertical: "top" }}
                  targetOrigin={{ horizontal: "left", vertical: "top" }}
                >
                      <MenuItem primaryText="Edit Team" onClick={()=>this.toggleEdits(team)} />
                      <MenuItem onClick={()=>this.deleteTeam(team._id)} primaryText="delete team" />
                </IconMenu></div>
              </div>
            </div>
        )
      }))
      } else {
         $TEAMS = (<div className="no-teams">YOU HAVE NO TEAMS</div>);

      }
    return (


      <div className="col-lg-8 col-md-7">
          <div className="card">
              <div className="header row">
                  <h4 className="title text-left col-lg-6">Edit Team Profile</h4>
                  <div className="col-lg-6">
                  <a onClick={()=>this.openNewModal()} id="xyz" className="btn btn-sm btn-collapsible fa fa-plus-circle"><span className="add-team-button">Add Team</span></a></div>
              </div>
              <div className="content">
                <div className="row">
                {$TEAMS}

                  </div>
              </div>


          </div>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  listTeamOperations: state.listTeamOperations
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ListTeamActions, dispatch),
  delteam: bindActionCreators(DeleteTeamAction,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTeam)
