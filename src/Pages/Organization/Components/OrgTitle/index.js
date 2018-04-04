import React from "react"
import "./Style/index.scss"
import BackgroundImage from "../../../../Assets/techforce/file.jpeg"
import ProfileImage from "../../../../Assets/techforce/vector-logo.png"
import MenuItem from "material-ui/MenuItem"
import FontIcon from 'material-ui/FontIcon';
import IconMenu from "material-ui/IconMenu"
import IconButton from "material-ui/IconButton"
import InviteUser from "../../../../ComplexComponents/InviteUser"
import Modal from 'react-awesome-modal';
import EditTeam from "../EditTeam"
import TeamModal from "../../../../ComplexComponents/TeamModal"
import EditTeamModal from "../../../../ComplexComponents/EditTeamModal"
import NewTeamModal from "../../../../ComplexComponents/NewTeamModal"
import SettingsMenu from "../../../../ComplexComponents/SideNav/Components/SettingsMenu"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as ListTeamActions from "../../../../Redux/Actions/ListTeamActions"
import ListTeamsComponent from "../../Components/ListTeamsComponent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Edit from "../Edit"


export default class OrgTitle extends React.Component {

  constructor(props) {
   super(props);
    this.state = {
          teamModalVisible: false,
           visible : false,
           editTeam: false,
           editOrg: true,
           openNewTeamCreate: false,
           newTeamModal: false,
           teamMembers:[],
           editTeammodal: false,
           editT: [],
           teamId:''
       }
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.teamModalVisible = this.teamModalVisible.bind(this);
    this.toggleEdits = this.toggleEdits.bind(this);

    this.openNewTeamCreate = this.openNewTeamCreate.bind(this);
    this.editTeamModal = this.editTeamModal.bind(this);
  }
  teamModalVisible(s) {
    console.log("clicked team members:::",s);
    //console.log(".id",s._id);
    this.setState({
      teamModalVisible: !this.state.teamModalVisible,
      teamMembers:s
    })

  }

  teamModalclose() {
    this.setState({
      teamModalVisible: !this.state.teamModalVisible
    })
  }
  toggleEdits(name){
   this.setState({
       editTeam: name === 'team',
       editOrg: name === 'org'
   });
}

  editTeamModal(ak){
    console.log("clicked edit",ak);
    this.setState({
        editTeammodal: !this.state.editTeammodal,
        editT:ak
      });
  }



  openModal(){
    this.setState({
        visible: !this.state.visible
      });
  }
  toggleTeamModal(feedback) {

    console.log("yo",feedback)

  }
  toggleModal(feedback) {

    console.log("&&&&&&&&&&&&&&&&,BAd:::",feedback)

  }
  closeTeamModal() {
    this.setState({
        editTeammodal: !this.state.editTeammodal
      });
  }
  openNewTeamModal(){
    this.setState({
        openNewTeamCreate: !this.state.openNewTeamCreate
      });
  }
  openNewTeamCreate() {
    this.setState({
      openNewTeamCreate: !this.state.openNewTeamCreate
    })
  }
  render() {

    return (
      <div className="mid-page-container">
      <div className="main-panel">
      <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-4 col-md-5">
                      <div className="card card-user">
                          <div className="image">
                              <img src={BackgroundImage} alt="..."/>
                          </div>
                          <div className="content">
                              <div className="author">
                                <img className="avatar border-white" src={ProfileImage} alt="..."/>
                                <h4 className="title">{localStorage.getItem("new_org_name")}<br />

                                </h4>
                              </div>
                              <IconMenu className="fa-top"
                                iconButtonElement={
                                  <IconButton style={{ padding: "8px" }}>
                                    {" "}
                                    <FontIcon className="material-icons" >more_verti</FontIcon>
                                  </IconButton>
                                }
                                anchorOrigin={{ horizontal: "left", vertical: "top" }}
                                targetOrigin={{ horizontal: "left", vertical: "top" }}
                              >
                                    <MenuItem primaryText="Edit" onClick={()=> this.toggleEdits("org")}/>
                              </IconMenu>

                          </div>
                          <hr />
                          <div className="text-center">
                              <div className="row">
                                  <div className="col-md-4">
                                      <h5 className="org-header-details">Name</h5>
                                  </div>
                                  <div className="col-md-8">
                                      <h5 className="org-details">{localStorage.getItem("full_name")}</h5>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-4">
                                      <h5 className="org-header-details"> Email</h5>
                                  </div>
                                  <div className="col-md-8">
                                      <h5 className="org-details">{localStorage.getItem("email")}</h5>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="card">
                          <div className="header row">
                              <h4 className="title col-xs-9 text-left">TEAMS</h4>
                              <IconMenu className="col-xs-3 fa-custom"
                                iconButtonElement={
                                  <IconButton style={{ padding: "8px" }}>
                                    {" "}
                                    <FontIcon className="material-icons" >more_verti</FontIcon>
                                  </IconButton>
                                }
                                anchorOrigin={{ horizontal: "left", vertical: "top" }}
                                targetOrigin={{ horizontal: "left", vertical: "top" }}
                              >
                                    <MenuItem primaryText="Edit Team" onClick={()=>this.toggleEdits("team")} />
                                    <MenuItem onClick={()=>this.openModal()} primaryText="Invite User" />
                              </IconMenu>

                          </div>

                          <ListTeamsComponent />
                      </div>
                  </div>
                  
                  {
 this.state.editTeam ? <EditTeam openNewTeamCreate={this.openNewTeamCreate} openEditTeam={this.editTeamModal} togglemodal={this.teamModalVisible}/> : null
}

{
 this.state.editOrg ? <Edit /> : null
}
              </div>
          </div>
      </div>

      </div>
      <Modal  visible={this.state.editTeammodal} width="370" height="480" effect="fadeInDown" onClickAway={() => this.closeTeamModal()} >
          <EditTeamModal  submit={(feedback)=>this.toggleTeamModal(feedback)} editteam={this.state.editT} />
      </Modal>
      <Modal  visible={this.state.teamModalVisible} width="370" height="480" effect="fadeInDown" onClickAway={() => this.teamModalclose()} >
          <TeamModal  submit={(feedback)=>this.toggleTeamModal(feedback)} teammembers={this.state.teamMembers} a={this.state.teamId} />
      </Modal>
      <Modal  visible={this.state.openNewTeamCreate} width="370" height="350" effect="fadeInDown" onClickAway={() => this.openNewTeamModal()} >
          <NewTeamModal  submit={(feedback)=>this.toggleTeamModal(feedback)} />
      </Modal>
      <Modal  visible={this.state.visible} width="370" height="300" effect="fadeInDown" onClickAway={() => this.openModal()} >
          <InviteUser  submit={(feedback)=>this.toggleModal(feedback)} />
      </Modal>
        </div>
    )
  }
}
